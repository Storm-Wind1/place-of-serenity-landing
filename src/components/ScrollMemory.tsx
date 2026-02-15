// src/components/ScrollMemory.tsx
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * ScrollMemory
 * - Saves scroll position for the page being left.
 * - Restores saved position only on POP (back/forward).
 * - Uses sessionStorage when useSessionPersist = true.
 * - Restores using ultra-smooth scrolling (slowed by 50%).
 */

const STORAGE_KEY = "app-scroll-positions";
const useSessionPersist = true;

const readStorage = (): Record<string, number> => {
  if (!useSessionPersist) return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const writeStorage = (data: Record<string, number>) => {
  if (!useSessionPersist) return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
};

/* Ultra-smooth scroll used for restores (slowed by 50%) */
const scrollToYUltraSmooth = (y: number, duration = 2400) => {
  const start = window.pageYOffset;
  const distance = y - start;
  const startTime = performance.now();

  // easeOutQuart
  const ease = (t: number) => 1 - Math.pow(1 - t, 4);

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = ease(progress);
    window.scrollTo(0, Math.round(start + distance * eased));
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const ScrollMemory: React.FC = () => {
  const location = useLocation();
  const navType = useNavigationType();
  const prevPathRef = useRef(location.pathname);
  const positionsRef = useRef<Record<string, number>>(readStorage());

  // Save previous path scroll when pathname changes
  useEffect(() => {
    const prev = prevPathRef.current;
    if (prev !== location.pathname) {
      positionsRef.current[prev] = window.scrollY || 0;
      writeStorage(positionsRef.current);
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  // Save on beforeunload (refresh/close)
  useEffect(() => {
    const handler = () => {
      positionsRef.current[location.pathname] = window.scrollY || 0;
      writeStorage(positionsRef.current);
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [location.pathname]);

  // Restore only on POP (back/forward) using ultra-smooth scroll
  useLayoutEffect(() => {
    const saved = positionsRef.current[location.pathname];

    if (navType === "POP" && typeof saved === "number") {
      let attempts = 0;
      const maxAttempts = 18;
      let lastHeight = document.body.scrollHeight;

      const tryRestore = () => {
        const currentHeight = document.body.scrollHeight;
        const heightChanged = Math.abs(currentHeight - lastHeight) > 8;
        lastHeight = currentHeight;

        if (!heightChanged || attempts >= maxAttempts) {
          // Use ultra-smooth behavior for a pleasant restore
          scrollToYUltraSmooth(saved, 2400);
        } else {
          attempts += 1;
          setTimeout(tryRestore, 160);
        }
      };

      tryRestore();
    }
    // For PUSH/REPLACE we intentionally do nothing here; AnimatedRoutes handles top scroll
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, navType]);

  return null;
};

export default ScrollMemory;
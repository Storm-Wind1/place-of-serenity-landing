// src/routes/AnimatedRoutes.tsx
import React, { useCallback } from "react";
import { Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PageTransition from "@/components/PageTransition";
import ScrollMemory from "@/components/ScrollMemory";

import Index from "@/pages/Index";
import Admissions from "@/pages/Admissions";
import NotFound from "@/pages/NotFound";

import Depression from "@/pages/conditions/Depression";
import Anxiety from "@/pages/conditions/Anxiety";
import PanicDisorder from "@/pages/conditions/PanicDisorder";
import Schizophrenia from "@/pages/conditions/Schizophrenia";
import PersonalityDisorders from "@/pages/conditions/PersonalityDisorders";
import PTSD from "@/pages/conditions/PTSD";
import SocialAnxiety from "@/pages/conditions/SocialAnxiety";
import EatingDisorders from "@/pages/conditions/EatingDisorders";
import Bipolar from "@/pages/conditions/Bipolar";
import MoreConditions from "@/pages/conditions/MoreConditions";

/**
 * AnimatedRoutes
 *
 * Key change: ensure new pages always mount at the top.
 * - We use AnimatePresence mode="wait" so exit animations finish before enter.
 * - When navigation type is PUSH or REPLACE (link clicks), we reset scroll to top
 *   immediately (behavior: "auto") in onExitComplete so the incoming page mounts
 *   at the top instead of appearing mid-page then scrolling up.
 *
 * ScrollMemory still handles POP (back/forward) restores.
 */

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  const navType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"

  // Called after exit animation completes. For PUSH/REPLACE we reset to top immediately.
  const handleExitComplete = useCallback(() => {
    if (navType === "PUSH" || navType === "REPLACE") {
      // IMPORTANT: use behavior "auto" so the new route mounts at top instantly.
      // Using "smooth" here can cause the new page to appear mid-page then animate up.
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    // For POP, ScrollMemory will restore the saved position.
  }, [navType]);

  return (
    <>
      <ScrollMemory />
      <AnimatePresence mode="wait" initial={false} onExitComplete={handleExitComplete}>
        {/* Use location.key so route remounts when state/hash/key changes */}
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <PageTransition routeKey={location.key}>
                <Index />
              </PageTransition>
            }
          />

          <Route
            path="/admissions"
            element={
              <PageTransition routeKey={location.key}>
                <Admissions />
              </PageTransition>
            }
          />

          <Route
            path="/conditions/depression"
            element={
              <PageTransition routeKey={location.key}>
                <Depression />
              </PageTransition>
            }
          />
          <Route
            path="/conditions/anxiety"
            element={
              <PageTransition routeKey={location.key}>
                <Anxiety />
              </PageTransition>
            }
          />
          <Route
            path="/conditions/panic"
            element={
              <PageTransition routeKey={location.key}>
                <PanicDisorder />
              </PageTransition>
            }
          />
          <Route
            path="/conditions/schizophrenia"
            element={
              <PageTransition routeKey={location.key}>
                <Schizophrenia />
              </PageTransition>
            }
          />
          <Route
            path="/conditions/personality"
            element={
              <PageTransition routeKey={location.key}>
                <PersonalityDisorders />
              </PageTransition>
            }
          />
          <Route
            path="/conditions/ptsd"
            element={
              <PageTransition routeKey={location.key}>
                <PTSD />
              </PageTransition>
            }
          />
          <Route
            path="/conditions/social-anxiety"
            element={
              <PageTransition routeKey={location.key}>
                <SocialAnxiety />
              </PageTransition>
            }
          />
          <Route
            path="/conditions/eating"
            element={
              <PageTransition routeKey={location.key}>
                <EatingDisorders />
              </PageTransition>
            }
          />
          <Route
            path="/conditions/bipolar"
            element={
              <PageTransition routeKey={location.key}>
                <Bipolar />
              </PageTransition>
            }
          />
          <Route
            path="/conditions/more"
            element={
              <PageTransition routeKey={location.key}>
                <MoreConditions />
              </PageTransition>
            }
          />

          <Route
            path="*"
            element={
              <PageTransition routeKey={location.key}>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
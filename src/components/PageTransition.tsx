import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  routeKey?: string;
  disabled?: boolean;
};

const PageTransition = ({ children, routeKey, disabled = false }: Props) => {
  const location = useLocation();

  if (disabled) return <>{children}</>;

  return (
    <motion.div
      key={routeKey ?? location.pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
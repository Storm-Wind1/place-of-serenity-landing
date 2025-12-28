import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import Depression from "./pages/conditions/Depression";
import Anxiety from "./pages/conditions/Anxiety";
import PanicDisorder from "./pages/conditions/PanicDisorder";
import Schizophrenia from "./pages/conditions/Schizophrenia";
import PersonalityDisorders from "./pages/conditions/PersonalityDisorders";
import PTSD from "./pages/conditions/PTSD";
import SocialAnxiety from "./pages/conditions/SocialAnxiety";
import EatingDisorders from "./pages/conditions/EatingDisorders";
import Bipolar from "./pages/conditions/Bipolar";
import MoreConditions from "./pages/conditions/MoreConditions";

const queryClient = new QueryClient();

/* ---------------------------------------
   Scroll to top + hash support
---------------------------------------- */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/conditions/depression" element={<Depression />} />
          <Route path="/conditions/anxiety" element={<Anxiety />} />
          <Route path="/conditions/panic" element={<PanicDisorder />} />
          <Route path="/conditions/schizophrenia" element={<Schizophrenia />} />
          <Route path="/conditions/personality" element={<PersonalityDisorders />} />
          <Route path="/conditions/ptsd" element={<PTSD />} />
          <Route path="/conditions/social-anxiety" element={<SocialAnxiety />} />
          <Route path="/conditions/eating" element={<EatingDisorders />} />
          <Route path="/conditions/bipolar" element={<Bipolar />} />
          <Route path="/conditions/more" element={<MoreConditions />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Help from "./pages/Help";
import PrivacyPolicyEN from "./pages/PrivacyPolicyEN";
import PrivacyPolicyIT from "./pages/PrivacyPolicyIT";
import TermsOfServiceEN from "./pages/TermsOfServiceEN";
import TermsOfServiceIT from "./pages/TermsOfServiceIT";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/help" element={<Help />} />
            <Route path="/privacy_en" element={<PrivacyPolicyEN />} />
            <Route path="/privacy_it" element={<PrivacyPolicyIT />} />
            <Route path="/tos_en" element={<TermsOfServiceEN />} />
            <Route path="/tos_it" element={<TermsOfServiceIT />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

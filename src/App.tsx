import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import DoctorsPage from "./pages/DoctorsPage.tsx";
import ResultsPage from "./pages/ResultsPage.tsx";
import ReviewsPage from "./pages/ReviewsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactsPage from "./pages/ContactsPage.tsx";
import PricePage from "./pages/PricePage.tsx";
import PromotionsPage from "./pages/PromotionsPage.tsx";
import TechnologiesPage from "./pages/TechnologiesPage.tsx";
import FAQPage from "./pages/FAQPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import CertificatesPage from "./pages/CertificatesPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import BlogArticlePage from "./pages/BlogArticlePage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

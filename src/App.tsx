import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Core Pages
import OurProcess from "./pages/OurProcess";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import FAQs from "./pages/FAQs";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

// Service Pages
import KitchenRemodeling from "./pages/services/KitchenRemodeling";
import CabinetSolutions from "./pages/services/CabinetSolutions";
import CountertopInstallation from "./pages/services/CountertopInstallation";
import BacksplashInstallation from "./pages/services/BacksplashInstallation";
import KitchenIslands from "./pages/services/KitchenIslands";
import KitchenFlooring from "./pages/services/KitchenFlooring";
import KitchenLighting from "./pages/services/KitchenLighting";
import ApplianceInstallation from "./pages/services/ApplianceInstallation";
import SinkFaucetInstallation from "./pages/services/SinkFaucetInstallation";
import PlumbingElectrical from "./pages/services/PlumbingElectrical";
import DoorWindowInstallation from "./pages/services/DoorWindowInstallation";
import WallsCeilings from "./pages/services/WallsCeilings";
import ProjectManagement from "./pages/services/ProjectManagement";

// Service Area Pages
import Ruston from "./pages/areas/Ruston";
import SouthHill from "./pages/areas/SouthHill";
import Roy from "./pages/areas/Roy";
import Steilacoom from "./pages/areas/Steilacoom";

// Policy Pages
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsConditions from "./pages/policies/TermsConditions";
import CookiePolicy from "./pages/policies/CookiePolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Core Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/our-process/" element={<OurProcess />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/" element={<AboutUs />} />
          <Route path="/faqs-page" element={<FAQs />} />
          <Route path="/faqs-page/" element={<FAQs />} />
          <Route path="/testimonials-reviews-page" element={<Testimonials />} />
          <Route path="/testimonials-reviews-page/" element={<Testimonials />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/contact-us/" element={<Contact />} />

          {/* Service Pages */}
          <Route path="/comprehensive-kitchen-remodeling-design" element={<KitchenRemodeling />} />
          <Route path="/comprehensive-kitchen-remodeling-design/" element={<KitchenRemodeling />} />
          <Route path="/cabinet-solutions" element={<CabinetSolutions />} />
          <Route path="/cabinet-solutions/" element={<CabinetSolutions />} />
          <Route path="/countertop-installation" element={<CountertopInstallation />} />
          <Route path="/countertop-installation/" element={<CountertopInstallation />} />
          <Route path="/backsplash-installation" element={<BacksplashInstallation />} />
          <Route path="/backsplash-installation/" element={<BacksplashInstallation />} />
          <Route path="/custom-kitchen-islands-peninsulas" element={<KitchenIslands />} />
          <Route path="/custom-kitchen-islands-peninsulas/" element={<KitchenIslands />} />
          <Route path="/expert-kitchen-flooring" element={<KitchenFlooring />} />
          <Route path="/expert-kitchen-flooring/" element={<KitchenFlooring />} />
          <Route path="/expert-kitchen-lighting-installation" element={<KitchenLighting />} />
          <Route path="/expert-kitchen-lighting-installation/" element={<KitchenLighting />} />
          <Route path="/professional-appliance-ventilation-installation" element={<ApplianceInstallation />} />
          <Route path="/professional-appliance-ventilation-installation/" element={<ApplianceInstallation />} />
          <Route path="/professional-sink-faucet-installation" element={<SinkFaucetInstallation />} />
          <Route path="/professional-sink-faucet-installation/" element={<SinkFaucetInstallation />} />
          <Route path="/expert-kitchen-plumbing-electrical" element={<PlumbingElectrical />} />
          <Route path="/expert-kitchen-plumbing-electrical/" element={<PlumbingElectrical />} />
          <Route path="/professional-door-window-installation" element={<DoorWindowInstallation />} />
          <Route path="/professional-door-window-installation/" element={<DoorWindowInstallation />} />
          <Route path="/walls-ceilings" element={<WallsCeilings />} />
          <Route path="/walls-ceilings/" element={<WallsCeilings />} />
          <Route path="/management-services" element={<ProjectManagement />} />
          <Route path="/management-services/" element={<ProjectManagement />} />

          {/* Service Area Pages */}
          <Route path="/ruston" element={<Ruston />} />
          <Route path="/ruston/" element={<Ruston />} />
          <Route path="/south-hill" element={<SouthHill />} />
          <Route path="/south-hill/" element={<SouthHill />} />
          <Route path="/roy" element={<Roy />} />
          <Route path="/roy/" element={<Roy />} />
          <Route path="/steilacoom" element={<Steilacoom />} />
          <Route path="/steilacoom/" element={<Steilacoom />} />

          {/* Policy Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/terms-conditions/" element={<TermsConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/cookie-policy/" element={<CookiePolicy />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-primary border-t border-white/10 safe-area-bottom">
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <a
          href="tel:+12535550123"
          className="flex items-center justify-center gap-2 py-4 text-white font-medium hover:bg-white/10 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
        <Link
          to="/contact-us/"
          className="flex items-center justify-center gap-2 py-4 bg-accent text-primary font-semibold hover:bg-accent/90 transition-colors"
        >
          <FileText className="w-5 h-5" />
          <span>Free Estimate</span>
        </Link>
      </div>
    </div>
  );
}

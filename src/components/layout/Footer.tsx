import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const services = [
  { title: "Kitchen Remodeling", href: "/comprehensive-kitchen-remodeling-design/" },
  { title: "Cabinet Solutions", href: "/cabinet-solutions/" },
  { title: "Countertop Installation", href: "/countertop-installation/" },
  { title: "Backsplash Installation", href: "/backsplash-installation/" },
  { title: "Kitchen Islands", href: "/custom-kitchen-islands-peninsulas/" },
  { title: "Kitchen Flooring", href: "/expert-kitchen-flooring/" },
];

const company = [
  { title: "About Us", href: "/about-us/" },
  { title: "Our Process", href: "/our-process/" },
  { title: "Gallery", href: "/gallery/" },
  { title: "Testimonials", href: "/testimonials-reviews-page/" },
  { title: "Blog", href: "/blog/" },
  { title: "FAQs", href: "/faqs-page/" },
  { title: "Contact Us", href: "/contact-us/" },
];

const areas = [
  { title: "Tacoma", href: "/" },
  { title: "Ruston", href: "/ruston/" },
  { title: "South Hill", href: "/south-hill/" },
  { title: "Roy", href: "/roy/" },
  { title: "Steilacoom", href: "/steilacoom/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-xl">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight text-white">
                  TKR Tacoma
                </span>
                <span className="text-xs leading-tight text-white/70">
                  Top Kitchen Remodeling
                </span>
              </div>
            </Link>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Transforming Tacoma kitchens for over 15 years. Licensed, bonded, and insured. Your dream kitchen is just a call away.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+12535550123" className="text-white hover:text-accent transition-colors">
                    (253) 555-0123
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@topkitchenremodelingtacoma.com" className="text-white/80 hover:text-accent transition-colors text-sm break-all">
                    info@topkitchenremodelingtacoma.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-sm">
                  123 Pacific Avenue<br />
                  Tacoma, WA 98402
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-sm">
                  Mon-Fri: 8am - 6pm<br />
                  Sat: 9am - 2pm
                </div>
              </li>
            </ul>

            {/* Service Areas */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="font-semibold text-sm mb-3">Service Areas</h4>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <Link
                    key={area.href}
                    to={area.href}
                    className="text-xs bg-white/10 px-3 py-1 rounded-full hover:bg-accent hover:text-primary transition-colors"
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} TKR Tacoma - Top Kitchen Remodeling. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy/" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions/" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/cookie-policy/" className="text-white/60 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

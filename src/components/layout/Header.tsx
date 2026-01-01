import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  { title: "Kitchen Remodeling Design", href: "/comprehensive-kitchen-remodeling-design/" },
  { title: "Cabinet Solutions", href: "/cabinet-solutions/" },
  { title: "Countertop Installation", href: "/countertop-installation/" },
  { title: "Backsplash Installation", href: "/backsplash-installation/" },
  { title: "Kitchen Islands & Peninsulas", href: "/custom-kitchen-islands-peninsulas/" },
  { title: "Kitchen Flooring", href: "/expert-kitchen-flooring/" },
  { title: "Kitchen Lighting", href: "/expert-kitchen-lighting-installation/" },
  { title: "Appliance Installation", href: "/professional-appliance-ventilation-installation/" },
  { title: "Sink & Faucet Installation", href: "/professional-sink-faucet-installation/" },
  { title: "Plumbing & Electrical", href: "/expert-kitchen-plumbing-electrical/" },
  { title: "Door & Window Installation", href: "/professional-door-window-installation/" },
  { title: "Walls & Ceilings", href: "/walls-ceilings/" },
  { title: "Project Management", href: "/management-services/" },
];

const serviceAreas = [
  { title: "Tacoma", href: "/" },
  { title: "Ruston", href: "/ruston/" },
  { title: "South Hill", href: "/south-hill/" },
  { title: "Roy", href: "/roy/" },
  { title: "Steilacoom", href: "/steilacoom/" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-heading font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-heading font-bold text-lg leading-tight transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}>
                TKR Tacoma
              </span>
              <span className={cn(
                "text-xs leading-tight transition-colors",
                isScrolled ? "text-muted-foreground" : "text-white/80"
              )}>
                Top Kitchen Remodeling
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent hover:bg-accent/10",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-1 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent hover:bg-accent/10",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                  >
                    Service Areas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-4">
                      {serviceAreas.map((area) => (
                        <li key={area.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={area.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {area.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/our-process/"
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                  >
                    Our Process
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/gallery/"
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                  >
                    Gallery
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/about-us/"
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/blog/"
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                  >
                    Blog
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12535550123"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              (253) 555-0123
            </a>
            <Button
              asChild
              className={cn(
                "font-semibold shadow-gold transition-all duration-300",
                isScrolled
                  ? "bg-accent text-primary hover:bg-accent/90"
                  : "bg-accent text-primary hover:bg-accent/90"
              )}
            >
              <Link to="/contact-us/">Get Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl animate-slide-down">
            <nav className="flex flex-col p-4">
              <Link to="/" className="py-3 px-4 font-medium hover:bg-muted rounded-md">
                Home
              </Link>
              
              <div className="py-2">
                <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">Services</div>
                <div className="grid grid-cols-1 gap-1 pl-4">
                  {services.slice(0, 6).map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="py-2 px-4 text-sm hover:bg-muted rounded-md"
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link to="/comprehensive-kitchen-remodeling-design/" className="py-2 px-4 text-sm text-accent font-medium">
                    View All Services →
                  </Link>
                </div>
              </div>

              <Link to="/our-process/" className="py-3 px-4 font-medium hover:bg-muted rounded-md">
                Our Process
              </Link>
              <Link to="/gallery/" className="py-3 px-4 font-medium hover:bg-muted rounded-md">
                Gallery
              </Link>
              <Link to="/about-us/" className="py-3 px-4 font-medium hover:bg-muted rounded-md">
                About Us
              </Link>
              <Link to="/blog/" className="py-3 px-4 font-medium hover:bg-muted rounded-md">
                Blog
              </Link>
              <Link to="/contact-us/" className="py-3 px-4 font-medium hover:bg-muted rounded-md">
                Contact
              </Link>

              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href="tel:+12535550123"
                  className="flex items-center gap-2 py-3 px-4 font-medium"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  (253) 555-0123
                </a>
                <Button asChild className="w-full mt-2 bg-accent text-primary hover:bg-accent/90">
                  <Link to="/contact-us/">Get Free Estimate</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

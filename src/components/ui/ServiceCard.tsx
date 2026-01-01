import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <Link
      to={href}
      className={`service-card group flex flex-col h-full ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
          featured ? "bg-accent text-primary" : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary"
        }`}>
          <Icon className="w-6 h-6" />
        </div>
        {featured && (
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
            Most Popular
          </span>
        )}
      </div>
      <h3 className={`font-heading font-bold mb-2 group-hover:text-accent transition-colors ${
        featured ? "text-2xl" : "text-lg"
      }`}>
        {title}
      </h3>
      <p className={`text-muted-foreground flex-1 ${featured ? "text-base" : "text-sm"}`}>
        {description}
      </p>
      <div className="flex items-center gap-2 mt-4 text-accent font-medium text-sm group-hover:gap-3 transition-all">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}

import { Shield, Award, CheckCircle, Star } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    label: "Licensed & Insured",
  },
  {
    icon: Award,
    label: "15+ Years Experience",
  },
  {
    icon: Star,
    label: "4.9★ Google Rating",
  },
  {
    icon: CheckCircle,
    label: "100% Satisfaction",
  },
];

interface TrustBarProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function TrustBar({ variant = "light", className = "" }: TrustBarProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-4 md:gap-8 ${className}`}>
      {trustItems.map((item) => (
        <div
          key={item.label}
          className={`trust-badge ${
            variant === "dark"
              ? "bg-white/10 text-white border-white/20"
              : "bg-white/80 text-foreground border-border/50"
          }`}
        >
          <item.icon className={`w-5 h-5 ${variant === "dark" ? "text-accent" : "text-accent"}`} />
          <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

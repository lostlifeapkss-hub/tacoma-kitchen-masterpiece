import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  text,
  image,
}: TestimonialCardProps) {
  return (
    <div className="glass-card p-6 rounded-2xl h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-accent fill-accent" : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-6">
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-accent font-bold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
    </div>
  );
}

import { ReactNode } from "react";
import { Info } from "lucide-react";

interface AnswerBlockProps {
  children: ReactNode;
  className?: string;
}

export default function AnswerBlock({ children, className = "" }: AnswerBlockProps) {
  return (
    <div className={`answer-block ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
          <Info className="w-5 h-5 text-accent" />
        </div>
        <div className="text-foreground/90 text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

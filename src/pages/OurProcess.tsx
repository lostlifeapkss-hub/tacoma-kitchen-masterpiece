import { Link } from "react-router-dom";
import { ClipboardList, Palette, Hammer, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnswerBlock from "@/components/ui/AnswerBlock";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Free Consultation",
    description: "We start with a complimentary in-home consultation to understand your vision, assess your space, and discuss your budget. Our experts will answer all your questions and provide initial recommendations.",
    details: ["In-home assessment", "Budget discussion", "Style preferences", "Timeline planning"],
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Planning",
    description: "Our design team creates detailed 3D renderings of your new kitchen. We help you select materials, colors, and finishes while ensuring everything fits your budget and lifestyle.",
    details: ["3D design renderings", "Material selection", "Color coordination", "Detailed quote"],
  },
  {
    number: "03",
    icon: Hammer,
    title: "Expert Construction",
    description: "Our skilled craftsmen bring your design to life with precision and care. We maintain a clean worksite and keep you informed throughout the entire construction process.",
    details: ["Professional installation", "Daily progress updates", "Clean worksite", "Quality materials"],
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Final Walkthrough",
    description: "We conduct a thorough walkthrough to ensure every detail meets your expectations. Your satisfaction is guaranteed, and we provide a comprehensive warranty on all our work.",
    details: ["Quality inspection", "Client approval", "Warranty coverage", "Aftercare support"],
  },
];

export default function OurProcess() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent text-sm font-semibold mb-6">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            How We Transform Your Kitchen
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A seamless, stress-free experience from initial consultation to final walkthrough. 
            Here's how we bring your dream kitchen to life.
          </p>
        </div>
      </section>

      {/* Answer Block */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock>
            <strong>Quick Answer:</strong> Our 4-step process includes a free consultation, custom design with 3D renderings, 
            expert construction by licensed craftsmen, and a final walkthrough with warranty. Most projects complete in 6-10 weeks.
          </AnswerBlock>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            badge="Step by Step"
            title="Our Proven 4-Step Process"
            subtitle="Every kitchen transformation follows our refined process, ensuring quality results and a stress-free experience."
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5 hidden md:block" />
            
            <div className="space-y-12 md:space-y-24">
              {steps.map((step, index) => (
                <div key={step.number} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 hidden md:block" />
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className={`glass-card p-8 rounded-2xl ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-xl`}>
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-accent" />
                        </div>
                        <div>
                          <span className="text-accent font-bold text-sm">Step {step.number}</span>
                          <h3 className="text-2xl font-heading font-bold">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">{step.description}</p>
                      <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {step.details.map((detail) => (
                          <li key={detail} className={`flex items-center gap-2 text-sm ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empty space for timeline */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Ready to Start Your Kitchen Journey?
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-8">
            Book your free consultation today and let's discuss how we can transform your kitchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
              <Link to="/contact-us/">Schedule Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="tel:+12535550123" className="gap-2">
                <Phone className="w-4 h-4" />
                (253) 555-0123
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

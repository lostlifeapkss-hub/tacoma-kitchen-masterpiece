import { Link } from "react-router-dom";
import { ArrowRight, Play, ChefHat, Hammer, Lightbulb, LayoutGrid, PaintBucket, Plug, Bath, DoorOpen, Layers, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import TrustBar from "@/components/ui/TrustBar";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import TestimonialCard from "@/components/home/TestimonialCard";
import MultiStepForm from "@/components/forms/MultiStepForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { icon: ChefHat, title: "Kitchen Remodeling Design", description: "Complete kitchen transformations tailored to 2026 trends with 3D previews.", href: "/comprehensive-kitchen-remodeling-design/", featured: true },
  { icon: LayoutGrid, title: "Cabinet Solutions", description: "Custom and semi-custom cabinets in various styles and finishes.", href: "/cabinet-solutions/" },
  { icon: Layers, title: "Countertop Installation", description: "Quartz, granite, marble, and butcher block countertops expertly installed.", href: "/countertop-installation/" },
  { icon: PaintBucket, title: "Backsplash Installation", description: "Tile, stone, and modern backsplash designs to elevate your space.", href: "/backsplash-installation/" },
  { icon: Hammer, title: "Kitchen Islands", description: "Custom islands and peninsulas for added workspace and storage.", href: "/custom-kitchen-islands-peninsulas/" },
  { icon: Lightbulb, title: "Kitchen Lighting", description: "Recessed, pendant, and under-cabinet lighting solutions.", href: "/expert-kitchen-lighting-installation/" },
  { icon: Plug, title: "Appliance Installation", description: "Professional installation of all major kitchen appliances.", href: "/professional-appliance-ventilation-installation/" },
  { icon: Bath, title: "Sink & Faucet", description: "Undermount, farmhouse, and modern sink installations.", href: "/professional-sink-faucet-installation/" },
];

const testimonials = [
  { name: "Paula B.", location: "Tacoma, WA", rating: 5, text: "TKR Tacoma transformed our outdated kitchen into a modern masterpiece. The team was professional, on-time, and the quality exceeded our expectations. Highly recommend!" },
  { name: "Michael R.", location: "South Hill, WA", rating: 5, text: "From design to completion, the experience was seamless. They listened to our vision and delivered exactly what we wanted. Our new kitchen is the heart of our home." },
  { name: "Jennifer L.", location: "Ruston, WA", rating: 5, text: "Best investment we've made in our home. The craftsmanship is exceptional and the team kept us informed every step of the way. Five stars!" },
];

const faqs = [
  { question: "How long does a typical kitchen remodel take?", answer: "Most kitchen remodels take 6-10 weeks depending on the scope. Minor updates can be completed in 2-3 weeks, while full gut renovations may take 10-12 weeks. We provide a detailed timeline during your free consultation." },
  { question: "Do you offer free consultations?", answer: "Yes! We offer completely free in-home consultations where we assess your space, discuss your vision, and provide a detailed estimate with no obligation." },
  { question: "What is the cost of a kitchen remodel?", answer: "Kitchen remodel costs vary widely based on size, materials, and scope. Minor updates start around $10,000, while full remodels typically range from $25,000 to $75,000+. We provide transparent, itemized quotes." },
  { question: "Are you licensed and insured?", answer: "Absolutely. TKR Tacoma is fully licensed, bonded, and insured in Washington State. We carry comprehensive liability insurance and workers' compensation for your peace of mind." },
  { question: "Do you help with design and material selection?", answer: "Yes! Our design team works closely with you to select materials, colors, layouts, and finishes. We have partnerships with top suppliers and can show you samples in our showroom or your home." },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
            alt="Modern luxury kitchen with natural stone countertops and warm lighting"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay" />
        </div>
        
        <div className="relative z-10 section-container text-center text-white py-32">
          <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent text-sm font-semibold mb-6 animate-fade-in-up">
            Tacoma's Premier Kitchen Remodeling Experts
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Your Dream Kitchen<br />
            <span className="text-gold-gradient">Starts Here</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Beautiful designs. Professional craftsmanship. Local experts you can trust. 
            Transform your kitchen with over 15 years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 text-lg px-8 shadow-gold">
              <Link to="/contact-us/">Request Free Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              <Link to="/gallery/">View Our Work</Link>
            </Button>
          </div>
          <TrustBar variant="dark" className="animate-fade-in-up" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-accent py-4">
        <div className="section-container text-center">
          <p className="text-primary font-semibold">
            🔥 Limited Availability: Booking for February 2026 is filling up fast. 
            <Link to="/contact-us/" className="underline ml-2 hover:no-underline">Secure your spot now →</Link>
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            badge="Our Services"
            title="Complete Kitchen Remodeling Solutions"
            subtitle="From design to installation, we handle every aspect of your kitchen transformation with expert craftsmanship."
          />
          <div className="bento-grid md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.href} {...service} featured={index === 0} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/comprehensive-kitchen-remodeling-design/" className="gap-2">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <SectionHeading
            badge="Transformations"
            title="See the Difference We Make"
            subtitle="Drag the slider to see stunning before and after transformations from real Tacoma projects."
          />
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80"
              afterImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
              beforeAlt="Outdated kitchen before remodel"
              afterAlt="Modern kitchen after TKR Tacoma remodel"
            />
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90">
              <Link to="/gallery/">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it—hear from homeowners who trusted us with their kitchen dreams."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials-reviews-page/">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Start Your Kitchen Transformation?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Book your free design consultation today and take the first step toward your dream kitchen.
            </p>
            <div className="glass-card bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <MultiStepForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            badge="FAQs"
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our kitchen remodeling services."
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/faqs-page/">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-accent">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
            Book Your Free Kitchen Design Consultation Today!
          </h2>
          <p className="text-primary/80 mb-6">
            No obligation. No pressure. Just expert advice for your dream kitchen.
          </p>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link to="/contact-us/">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

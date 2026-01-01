import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnswerBlock from "@/components/ui/AnswerBlock";

export default function KitchenRemodeling() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Comprehensive Kitchen Remodeling Design</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Complete kitchen transformations tailored to your vision and lifestyle.</p>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock><strong>Kitchen Remodeling in Tacoma:</strong> Our full-service kitchen remodeling includes design, demolition, installation, and finishing—typically completed in 6-10 weeks with prices starting at $25,000.</AnswerBlock>
          <div className="prose max-w-none mt-8">
            <p>Transform your outdated kitchen into a stunning, functional space with TKR Tacoma's comprehensive remodeling services. We handle every aspect from initial design to final walkthrough.</p>
            <h2>Our Kitchen Remodeling Services Include:</h2>
            <ul><li>Custom design and 3D rendering</li><li>Cabinet installation</li><li>Countertop fabrication and installation</li><li>Flooring, lighting, and electrical</li><li>Plumbing and appliance hookup</li></ul>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90">
              <Link to="/contact-us/">Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

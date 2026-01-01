import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnswerBlock from "@/components/ui/AnswerBlock";

export default function ApplianceInstallation() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Professional Appliance & Ventilation Installation</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Professional installation of all major kitchen appliances.</p>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock><strong>Appliance Installation in Tacoma:</strong> We professionally install refrigerators, ranges, dishwashers, range hoods, and built-in appliances with proper electrical and gas connections.</AnswerBlock>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90"><Link to="/contact-us/">Get Free Estimate</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

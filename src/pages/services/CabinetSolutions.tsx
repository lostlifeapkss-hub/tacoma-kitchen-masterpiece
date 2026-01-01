import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnswerBlock from "@/components/ui/AnswerBlock";

export default function CabinetSolutions() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Cabinet Solutions</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Custom and semi-custom cabinets in various styles and finishes.</p>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock><strong>Custom Cabinets in Tacoma:</strong> We offer custom, semi-custom, and stock cabinet options with professional installation. Prices range from $5,000-$30,000+ depending on materials and scope.</AnswerBlock>
          <div className="prose max-w-none mt-8">
            <p>Cabinets are the foundation of your kitchen's style and functionality. We offer solutions for every budget and aesthetic preference.</p>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90"><Link to="/contact-us/">Get Free Estimate</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

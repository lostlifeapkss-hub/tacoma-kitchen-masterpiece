import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnswerBlock from "@/components/ui/AnswerBlock";

export default function PlumbingElectrical() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Expert Kitchen Plumbing & Electrical</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Licensed plumbing and electrical services for your kitchen remodel.</p>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock><strong>Plumbing & Electrical in Tacoma:</strong> Our licensed professionals handle all plumbing and electrical work including new circuits, outlets, gas lines, and water supply modifications.</AnswerBlock>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90"><Link to="/contact-us/">Get Free Estimate</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

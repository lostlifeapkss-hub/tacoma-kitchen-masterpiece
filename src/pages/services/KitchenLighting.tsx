import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnswerBlock from "@/components/ui/AnswerBlock";

export default function KitchenLighting() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Expert Kitchen Lighting Installation</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Recessed, pendant, and under-cabinet lighting solutions.</p>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock><strong>Kitchen Lighting in Tacoma:</strong> We design and install layered lighting systems including task, ambient, and accent lighting to transform your kitchen's functionality and atmosphere.</AnswerBlock>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90"><Link to="/contact-us/">Get Free Estimate</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

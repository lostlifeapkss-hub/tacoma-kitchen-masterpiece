import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnswerBlock from "@/components/ui/AnswerBlock";

export default function SouthHill() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Kitchen Remodeling in South Hill, WA</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Premium kitchen remodeling for South Hill's beautiful family homes.</p>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock><strong>South Hill Kitchen Remodeling:</strong> We specialize in transforming South Hill kitchens with designs that match the community's upscale, family-oriented lifestyle near shopping and schools.</AnswerBlock>
          <div className="prose max-w-none mt-8">
            <p>South Hill's newer construction and spacious layouts offer exciting opportunities for kitchen remodeling. We help homeowners maximize their space with modern designs and premium materials.</p>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90"><Link to="/contact-us/">Get Free Estimate</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnswerBlock from "@/components/ui/AnswerBlock";

export default function Ruston() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Kitchen Remodeling in Ruston, WA</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Expert kitchen remodeling services for Ruston homeowners near Point Defiance.</p>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock><strong>Ruston Kitchen Remodeling:</strong> We serve Ruston's charming waterfront community with kitchen designs that complement the area's unique character, from Point Defiance to downtown.</AnswerBlock>
          <div className="prose max-w-none mt-8">
            <p>Ruston's historic homes and waterfront properties deserve kitchens that honor their character while providing modern functionality. Our team understands the unique challenges of remodeling in this beautiful community.</p>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90"><Link to="/contact-us/">Get Free Estimate</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

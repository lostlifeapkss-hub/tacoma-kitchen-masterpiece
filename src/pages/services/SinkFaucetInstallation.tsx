import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnswerBlock from "@/components/ui/AnswerBlock";

export default function SinkFaucetInstallation() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Professional Sink & Faucet Installation</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Undermount, farmhouse, and modern sink installations.</p>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock><strong>Sink Installation in Tacoma:</strong> We install undermount, farmhouse, and drop-in sinks with professional plumbing connections and premium faucets from top brands.</AnswerBlock>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90"><Link to="/contact-us/">Get Free Estimate</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

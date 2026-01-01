import Layout from "@/components/layout/Layout";

export default function TermsConditions() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Terms & Conditions</h1>
          <p className="text-white/80">Last updated: January 2026</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="section-container prose max-w-3xl mx-auto">
          <h2>Agreement to Terms</h2>
          <p>By accessing our website, you agree to be bound by these Terms and Conditions and our Privacy Policy.</p>
          <h2>Services</h2>
          <p>TKR Tacoma provides kitchen remodeling services in Pierce County, Washington. All work is subject to a written contract.</p>
          <h2>Estimates</h2>
          <p>Estimates provided are based on information available at the time and may change based on actual conditions discovered during work.</p>
          <h2>Warranty</h2>
          <p>We provide a workmanship warranty on all completed projects. Manufacturer warranties apply to materials and appliances.</p>
        </div>
      </section>
    </Layout>
  );
}

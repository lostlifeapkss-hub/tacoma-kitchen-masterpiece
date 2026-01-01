import Layout from "@/components/layout/Layout";

export default function CookiePolicy() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Cookie Policy</h1>
          <p className="text-white/80">Last updated: January 2026</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="section-container prose max-w-3xl mx-auto">
          <h2>What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit our website.</p>
          <h2>How We Use Cookies</h2>
          <p>We use cookies to analyze website traffic, remember preferences, and improve your browsing experience.</p>
          <h2>Managing Cookies</h2>
          <p>You can control cookies through your browser settings. Disabling cookies may affect website functionality.</p>
          <h2>Contact</h2>
          <p>For questions about our cookie policy, contact us at info@topkitchenremodelingtacoma.com.</p>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "@/components/layout/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Privacy Policy</h1>
          <p className="text-white/80">Last updated: January 2026</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="section-container prose max-w-3xl mx-auto">
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly, including name, email, phone number, and project details when you contact us or request an estimate.</p>
          <h2>How We Use Your Information</h2>
          <p>We use your information to respond to inquiries, provide estimates, schedule consultations, and improve our services.</p>
          <h2>Information Sharing</h2>
          <p>We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.</p>
          <h2>Contact Us</h2>
          <p>For questions about this policy, contact us at info@topkitchenremodelingtacoma.com.</p>
        </div>
      </section>
    </Layout>
  );
}

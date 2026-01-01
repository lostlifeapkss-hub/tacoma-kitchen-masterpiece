import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnswerBlock from "@/components/ui/AnswerBlock";
import MultiStepForm from "@/components/forms/MultiStepForm";

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent text-sm font-semibold mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Let's Start Your Project
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Ready to transform your kitchen? Fill out our project planner and we'll contact you within 24 hours.
          </p>
        </div>
      </section>

      {/* Answer Block */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock>
            <strong>Get in Touch:</strong> Call us at (253) 555-0123 or fill out our project planner for a free consultation. 
            We respond to all inquiries within 24 hours, Monday through Saturday.
          </AnswerBlock>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+12535550123" className="text-muted-foreground hover:text-accent transition-colors">
                      (253) 555-0123
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@topkitchenremodelingtacoma.com" className="text-muted-foreground hover:text-accent transition-colors break-all">
                      info@topkitchenremodelingtacoma.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Pacific Avenue<br />
                      Tacoma, WA 98402
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86058.67893646088!2d-122.51876862929687!3d47.25287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490556e81c43f23%3A0x8a2cf3a930f88e9f!2sTacoma%2C%20WA!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TKR Tacoma Location"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-heading font-bold mb-2">5-Step Project Planner</h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your project and we'll provide a personalized estimate within 24 hours.
                </p>
                <MultiStepForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

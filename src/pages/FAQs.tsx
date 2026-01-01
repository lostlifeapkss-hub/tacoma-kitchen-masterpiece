import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnswerBlock from "@/components/ui/AnswerBlock";

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      { question: "How long does a typical kitchen remodel take?", answer: "Most kitchen remodels take 6-10 weeks depending on the scope. Minor updates can be completed in 2-3 weeks, while full gut renovations may take 10-12 weeks. We provide a detailed timeline during your free consultation." },
      { question: "Do you offer free consultations?", answer: "Yes! We offer completely free in-home consultations where we assess your space, discuss your vision, and provide a detailed estimate with no obligation." },
      { question: "Are you licensed and insured?", answer: "Absolutely. TKR Tacoma is fully licensed, bonded, and insured in Washington State. We carry comprehensive liability insurance and workers' compensation for your peace of mind." },
      { question: "What areas do you serve?", answer: "We serve all of Pierce County including Tacoma, Ruston, South Hill, Roy, Steilacoom, University Place, Lakewood, Puyallup, and surrounding areas." },
    ],
  },
  {
    title: "Cost & Financing",
    faqs: [
      { question: "What is the cost of a kitchen remodel?", answer: "Kitchen remodel costs vary widely based on size, materials, and scope. Minor updates start around $10,000, while full remodels typically range from $25,000 to $75,000+. We provide transparent, itemized quotes." },
      { question: "Do you offer financing options?", answer: "Yes, we partner with several financing companies to offer flexible payment plans. Options include 0% interest for qualified buyers and extended payment terms up to 84 months." },
      { question: "Is there a deposit required?", answer: "We require a 30% deposit to begin work, with the remainder due in scheduled payments as milestones are completed. This protects both parties and ensures project continuity." },
      { question: "What's included in your quote?", answer: "Our quotes are fully itemized and include materials, labor, permits, debris removal, and a detailed scope of work. There are no hidden fees—what you see is what you pay." },
    ],
  },
  {
    title: "Design & Materials",
    faqs: [
      { question: "Do you help with design and material selection?", answer: "Yes! Our design team works closely with you to select materials, colors, layouts, and finishes. We have partnerships with top suppliers and can show you samples in our showroom or your home." },
      { question: "Can I supply my own materials?", answer: "In some cases, yes. However, we recommend using our supplier network as we can often get better pricing, and materials are covered under our warranty when we source them." },
      { question: "What countertop materials do you recommend?", answer: "For durability and beauty, we typically recommend quartz or granite. Quartz is low-maintenance and consistent, while granite offers unique natural patterns. We'll discuss pros and cons based on your lifestyle." },
      { question: "Can you match my existing home style?", answer: "Absolutely. Whether your home is modern, traditional, farmhouse, or transitional, our designers ensure your new kitchen complements your home's overall aesthetic." },
    ],
  },
  {
    title: "During Construction",
    faqs: [
      { question: "Can I still use my kitchen during the remodel?", answer: "For minor updates, yes. For full remodels, we recommend setting up a temporary kitchen in another room. We'll help you plan this during the consultation." },
      { question: "How do you handle dust and debris?", answer: "We use plastic sheeting, dust barriers, and air scrubbers to minimize dust. Our team cleans up daily and removes all debris. Your home will be respected throughout the process." },
      { question: "Who will be working in my home?", answer: "You'll have a dedicated project manager and a consistent crew. All our workers are background-checked, drug-tested employees—not subcontractors." },
      { question: "How do you handle unexpected issues?", answer: "In older homes, surprises can happen. We document everything, discuss options with you immediately, and provide transparent pricing for any additional work before proceeding." },
    ],
  },
];

export default function FAQs() {
  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(cat => cat.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })))
  };

  return (
    <Layout>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent text-sm font-semibold mb-6">
            FAQs
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get answers to common questions about our kitchen remodeling services, process, and pricing.
          </p>
        </div>
      </section>

      {/* Answer Block */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock>
            <strong>Quick Answers:</strong> Most kitchen remodels take 6-10 weeks and cost $25,000-$75,000. We offer free consultations, 
            financing options, and are fully licensed and insured in Washington State.
          </AnswerBlock>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-2xl font-heading font-bold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.title}-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Still Have Questions?
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-8">
            We're here to help! Contact us for a free consultation and get all your questions answered.
          </p>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link to="/contact-us/">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnswerBlock from "@/components/ui/AnswerBlock";

const testimonials = [
  { name: "Paula B.", location: "Tacoma, WA", rating: 5, text: "TKR Tacoma transformed our outdated 1970s kitchen into a modern masterpiece. The team was professional, on-time, and the quality exceeded our expectations. Michael and his crew were a pleasure to work with. Highly recommend!", date: "December 2025" },
  { name: "Michael R.", location: "South Hill, WA", rating: 5, text: "From design to completion, the experience was seamless. They listened to our vision and delivered exactly what we wanted. Our new kitchen is the heart of our home now. The quartz countertops are stunning!", date: "November 2025" },
  { name: "Jennifer L.", location: "Ruston, WA", rating: 5, text: "Best investment we've made in our home. The craftsmanship is exceptional and the team kept us informed every step of the way. They even helped us set up a temporary kitchen. Five stars!", date: "November 2025" },
  { name: "David & Lisa K.", location: "Steilacoom, WA", rating: 5, text: "We interviewed five contractors and TKR stood out for their professionalism and detailed proposal. The finished kitchen is beyond what we imagined. Worth every penny!", date: "October 2025" },
  { name: "Sarah M.", location: "Tacoma, WA", rating: 5, text: "Our 100-year-old Craftsman home needed a kitchen that honored its history while being functional for modern life. TKR nailed it! They even uncovered beautiful original details we didn't know existed.", date: "October 2025" },
  { name: "Robert T.", location: "Roy, WA", rating: 5, text: "As a retired contractor myself, I'm picky about quality. TKR exceeded my standards. Their attention to detail, clean worksite, and communication were top-notch. Highly recommend them.", date: "September 2025" },
  { name: "Amanda H.", location: "South Hill, WA", rating: 5, text: "We had a tight timeline before the holidays and TKR delivered on time without cutting corners. The custom cabinets are gorgeous and the island is now where the family gathers every evening.", date: "September 2025" },
  { name: "Chris & Maria G.", location: "Tacoma, WA", rating: 5, text: "Third remodel with TKR and they never disappoint. They know our style and always bring fresh ideas. The new kitchen is the best one yet. Professional, reliable, and talented.", date: "August 2025" },
];

export default function Testimonials() {
  // Generate Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TKR Tacoma - Top Kitchen Remodeling",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": testimonials.length.toString(),
      "bestRating": "5"
    },
    "review": testimonials.map(t => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewRating": { "@type": "Rating", "ratingValue": t.rating.toString(), "bestRating": "5" },
      "reviewBody": t.text
    }))
  };

  return (
    <Layout>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent text-sm font-semibold mb-6">
            Testimonials
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            What Our Clients Say
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Don't just take our word for it—hear from homeowners who trusted us with their kitchen dreams.
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-muted">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-6xl font-heading font-bold text-accent">4.9</div>
              <div className="flex justify-center gap-1 my-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground">Based on 127+ Google Reviews</p>
            </div>
            <div className="hidden md:block w-px h-20 bg-border" />
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold mb-2">Trusted by Tacoma Homeowners</p>
              <p className="text-muted-foreground max-w-md">
                Our commitment to quality and customer satisfaction has earned us one of the highest ratings among kitchen remodelers in Pierce County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i <= testimonial.rating ? "text-accent fill-accent" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-8">
            Start your kitchen transformation today and become our next success story.
          </p>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link to="/contact-us/">Get Your Free Estimate</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

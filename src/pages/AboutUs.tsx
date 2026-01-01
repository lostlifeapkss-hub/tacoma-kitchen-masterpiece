import { Link } from "react-router-dom";
import { Award, Users, Home, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnswerBlock from "@/components/ui/AnswerBlock";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Kitchens Completed" },
  { number: "4.9", label: "Google Rating" },
  { number: "100%", label: "Satisfaction Rate" },
];

const team = [
  { name: "Michael Thompson", role: "Founder & Lead Designer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", bio: "With 20+ years in kitchen design, Michael founded TKR Tacoma to bring world-class craftsmanship to Pierce County." },
  { name: "Sarah Chen", role: "Project Manager", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", bio: "Sarah ensures every project runs smoothly, keeping clients informed and timelines on track." },
  { name: "David Martinez", role: "Lead Carpenter", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", bio: "David's attention to detail and expert craftsmanship bring our designs to life with precision." },
  { name: "Emily Roberts", role: "Design Consultant", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", bio: "Emily helps clients discover their perfect kitchen style with her keen eye for trends and functionality." },
];

const values = [
  { icon: Award, title: "Quality Craftsmanship", description: "We use premium materials and time-tested techniques to ensure lasting results." },
  { icon: Users, title: "Customer First", description: "Your vision guides every decision. We listen, advise, and deliver beyond expectations." },
  { icon: Home, title: "Local Expertise", description: "As Tacoma natives, we understand local building codes, styles, and weather considerations." },
  { icon: Heart, title: "Integrity Always", description: "Transparent pricing, honest timelines, and clear communication throughout your project." },
];

export default function AboutUs() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent text-sm font-semibold mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Tacoma's Trusted Kitchen Experts
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            For over 15 years, we've been transforming kitchens across Pierce County with expert craftsmanship and personalized service.
          </p>
        </div>
      </section>

      {/* Answer Block */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock>
            <strong>About TKR Tacoma:</strong> We're a family-owned kitchen remodeling company with 15+ years of experience serving Tacoma and Pierce County. 
            Licensed, bonded, and insured with a 4.9-star Google rating from 127+ satisfied customers.
          </AnswerBlock>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Built on Tacoma Values
              </h2>
              <p className="text-muted-foreground mb-4">
                TKR Tacoma was founded in 2010 by Michael Thompson, a third-generation craftsman with a passion for creating beautiful, functional kitchens. What started as a small family operation has grown into Pierce County's most trusted kitchen remodeling company.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe every homeowner deserves a kitchen that reflects their lifestyle and brings joy to daily life. That's why we take the time to understand your needs, offer honest advice on materials and design, and deliver craftsmanship that stands the test of time.
              </p>
              <ul className="space-y-3">
                {["Licensed & Bonded in Washington State", "Fully Insured for Your Protection", "A+ Rating with Better Business Bureau", "Member of NKBA"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="TKR Tacoma team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="These core values guide every project we undertake and every interaction with our clients."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            badge="Our Team"
            title="Meet the Experts"
            subtitle="Our talented team brings decades of combined experience to every kitchen project."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="glass-card rounded-2xl overflow-hidden">
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg">{member.name}</h3>
                  <p className="text-accent text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied Tacoma homeowners who trust TKR for their kitchen transformations.
          </p>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link to="/contact-us/">Get Your Free Estimate</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

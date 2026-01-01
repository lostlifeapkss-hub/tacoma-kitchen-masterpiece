import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const posts = [
  {
    id: 1,
    title: "Top 5 Kitchen Trends for 2026: Natural Stone & Warm Tones",
    excerpt: "Discover the hottest kitchen design trends for 2026, from natural stone accents to warm, earthy color palettes that bring comfort and style.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    date: "January 2, 2026",
    readTime: "5 min read",
    category: "Trends",
  },
  {
    id: 2,
    title: "Quartz vs. Granite: Which Countertop is Right for You?",
    excerpt: "A comprehensive comparison of quartz and granite countertops, including durability, maintenance, cost, and aesthetic considerations.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    date: "December 28, 2025",
    readTime: "7 min read",
    category: "Materials",
  },
  {
    id: 3,
    title: "How to Plan Your Kitchen Remodel Budget",
    excerpt: "Expert tips on budgeting for your kitchen renovation, from setting realistic expectations to understanding where to splurge and save.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    date: "December 20, 2025",
    readTime: "6 min read",
    category: "Planning",
  },
  {
    id: 4,
    title: "The Benefits of Custom Kitchen Cabinets",
    excerpt: "Why investing in custom cabinets can transform your kitchen's functionality and aesthetics while adding long-term value to your home.",
    image: "https://images.unsplash.com/photo-1600566752734-2a0cd66c42f5?w=800&q=80",
    date: "December 15, 2025",
    readTime: "4 min read",
    category: "Cabinets",
  },
  {
    id: 5,
    title: "Kitchen Lighting Ideas That Transform Your Space",
    excerpt: "From pendant lights to under-cabinet LEDs, explore lighting options that enhance both the functionality and ambiance of your kitchen.",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    date: "December 10, 2025",
    readTime: "5 min read",
    category: "Lighting",
  },
  {
    id: 6,
    title: "Kitchen Island Ideas for Every Space",
    excerpt: "Whether you have a compact galley or an open floor plan, discover island designs that maximize storage, seating, and style.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    date: "December 5, 2025",
    readTime: "6 min read",
    category: "Islands",
  },
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent text-sm font-semibold mb-6">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Kitchen Remodeling Insights
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Expert tips, trends, and inspiration for your kitchen renovation project.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                Featured
              </span>
              <h2 className="text-3xl font-heading font-bold mb-4">{posts[0].title}</h2>
              <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {posts[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {posts[0].readTime}
                </span>
              </div>
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <SectionHeading
            badge="Latest Articles"
            title="More Kitchen Inspiration"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="glass-card rounded-2xl overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

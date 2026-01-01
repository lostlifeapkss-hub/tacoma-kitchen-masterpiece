import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnswerBlock from "@/components/ui/AnswerBlock";

const categories = ["All", "Full Remodel", "Cabinets", "Countertops", "Islands", "Modern", "Traditional"];

const projects = [
  { id: 1, title: "Modern Minimalist Kitchen", category: "Modern", location: "Tacoma", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
  { id: 2, title: "Classic White Shaker", category: "Traditional", location: "South Hill", image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80" },
  { id: 3, title: "Rustic Farmhouse", category: "Full Remodel", location: "Ruston", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 4, title: "Contemporary Gray", category: "Cabinets", location: "Steilacoom", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80" },
  { id: 5, title: "Quartz Waterfall Island", category: "Islands", location: "Tacoma", image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80" },
  { id: 6, title: "Marble Elegance", category: "Countertops", location: "South Hill", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" },
  { id: 7, title: "Open Concept Living", category: "Full Remodel", location: "Roy", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" },
  { id: 8, title: "Navy Blue Cabinets", category: "Cabinets", location: "Tacoma", image: "https://images.unsplash.com/photo-1600566752734-2a0cd66c42f5?w=800&q=80" },
  { id: 9, title: "Transitional Design", category: "Modern", location: "Ruston", image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % filteredProjects.length : null);
  const prevImage = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + filteredProjects.length) % filteredProjects.length : null);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="section-container text-center">
          <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent text-sm font-semibold mb-6">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Kitchen Transformation Gallery
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Browse our portfolio of stunning kitchen remodels from homes across Tacoma and Pierce County.
          </p>
        </div>
      </section>

      {/* Answer Block */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <AnswerBlock>
            <strong>View Our Work:</strong> Explore our gallery of completed kitchen remodels featuring custom cabinets, 
            granite and quartz countertops, modern islands, and full kitchen transformations in Tacoma, WA.
          </AnswerBlock>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="section-container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-accent text-primary"
                    : "bg-muted text-muted-foreground hover:bg-accent/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-heading font-bold text-lg">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.location} • {project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[80vh] px-4">
            <img
              src={filteredProjects[lightboxIndex].image}
              alt={filteredProjects[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain mx-auto"
            />
            <div className="text-center mt-4">
              <h3 className="text-white font-heading font-bold text-xl">{filteredProjects[lightboxIndex].title}</h3>
              <p className="text-white/80">{filteredProjects[lightboxIndex].location}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Want Your Kitchen to Look This Good?
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-8">
            Let's discuss your project and create a kitchen you'll love for years to come.
          </p>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link to="/contact-us/">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

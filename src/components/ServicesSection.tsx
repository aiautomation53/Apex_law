import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Home, 
  Building2, 
  Users, 
  Scale, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Work Visas & Employment",
    description: "H-1B, L-1, O-1, and other employment-based visas for skilled professionals and their employers.",
    link: "/services#work-visas"
  },
  {
    icon: GraduationCap,
    title: "Student Visas",
    description: "F-1, J-1, and M-1 visas for international students pursuing education in the United States.",
    link: "/services#student-visas"
  },
  {
    icon: Heart,
    title: "Family & Marriage Visas",
    description: "Reunite with loved ones through family-sponsored immigration and marriage-based green cards.",
    link: "/services#family-visas"
  },
  {
    icon: Home,
    title: "Permanent Residency",
    description: "Green card applications through employment, family, investment, or the diversity lottery.",
    link: "/services#permanent-residency"
  },
  {
    icon: Building2,
    title: "Business & Investor Visas",
    description: "E-2, EB-5, and other visas for entrepreneurs, investors, and business owners.",
    link: "/services#business-visas"
  },
  {
    icon: Users,
    title: "Citizenship & Naturalization",
    description: "Navigate the path to U.S. citizenship with expert guidance through the naturalization process.",
    link: "/services#citizenship"
  },
  {
    icon: Scale,
    title: "Asylum & Refugee Protection",
    description: "Compassionate legal support for those seeking protection and humanitarian relief.",
    link: "/services#asylum"
  },
  {
    icon: ArrowRight,
    title: "Appeals & Visa Refusals",
    description: "Expert representation for visa denials, appeals, and complex immigration challenges.",
    link: "/services#appeals"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
            Comprehensive Immigration Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From work visas to citizenship, we provide end-to-end legal support 
            for all your immigration needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              key={service.title} 
              to={service.link}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-medium hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors">
                <service.icon className="w-7 h-7 text-gold-500 group-hover:text-navy-950 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-gold-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

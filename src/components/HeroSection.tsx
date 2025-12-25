import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Globe, Award } from "lucide-react";
import heroImage from "@/assets/hero-immigration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Diverse professionals in modern office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            <Award className="w-4 h-4 text-gold-500" />
            <span className="text-gold-500 text-sm font-medium">Trusted by 10,000+ Clients Worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Trusted Immigration & Visa Lawyers{" "}
            <span className="text-gradient-gold">Guiding You Every Step</span> of the Way
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-grey-300 mb-10 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            Expert legal support for visas, permanent residency, citizenship, and more. 
            We simplify complex immigration processes so you can focus on your future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Book a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="heroOutline" size="xl">
                View Our Services
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up opacity-0" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">25+</p>
                <p className="text-grey-400 text-sm">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">150+</p>
                <p className="text-grey-400 text-sm">Countries Served</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">98%</p>
                <p className="text-grey-400 text-sm">Success Rate</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">24/7</p>
                <p className="text-grey-400 text-sm">Client Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

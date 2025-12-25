import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Start Your Immigration Journey{" "}
            <span className="text-gradient-gold">With Confidence</span>
          </h2>
          
          <p className="text-grey-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Take the first step toward your new life. Schedule a consultation 
            with our experienced immigration attorneys today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                <Calendar className="w-5 h-5" />
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+1-800-555-0199">
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                Call 1-800-555-0199
              </Button>
            </a>
          </div>

          {/* Trust Message */}
          <p className="text-grey-500 text-sm">
            Free initial consultation • No obligation • Confidential
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

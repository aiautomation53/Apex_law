import { CheckCircle, Shield, Users, Clock, Globe, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Licensed & Experienced Attorneys",
    description: "Our team of immigration lawyers is fully licensed and has decades of combined experience handling complex cases."
  },
  {
    icon: Users,
    title: "Personalized Legal Strategies",
    description: "Every case is unique. We develop customized strategies tailored to your specific circumstances and goals."
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "No hidden fees or surprises. We provide clear, upfront pricing so you know exactly what to expect."
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "We serve clients from around the world with support available in multiple languages."
  },
  {
    icon: Clock,
    title: "End-to-End Case Handling",
    description: "From initial consultation to final approval, we manage every aspect of your immigration journey."
  },
  {
    icon: Award,
    title: "Up-to-Date Legal Knowledge",
    description: "Immigration laws change constantly. We stay current on all policy updates to protect your case."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-3 mb-6">
            Your Trusted Immigration Partners
          </h2>
          <p className="text-grey-400 text-lg">
            We combine legal expertise with genuine care for your success, 
            guiding you through every step of your immigration journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-navy-900/50 border border-navy-700 rounded-xl p-8 hover:border-gold-500/30 transition-colors"
            >
              <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-gold-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-grey-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

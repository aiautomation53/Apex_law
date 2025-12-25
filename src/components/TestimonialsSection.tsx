import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Software Engineer",
    country: "Brazil",
    flag: "🇧🇷",
    visaType: "H-1B Visa",
    content: "GlobalVisa made my H-1B process seamless. They handled everything professionally and kept me informed at every step. I'm now working at my dream job in Silicon Valley!",
    rating: 5
  },
  {
    name: "Ahmed Hassan",
    role: "Business Owner",
    country: "Egypt",
    flag: "🇪🇬",
    visaType: "EB-5 Investor Visa",
    content: "The team's expertise in investor visas is unmatched. They guided me through the complex EB-5 process and helped me achieve my goal of establishing a business in the US.",
    rating: 5
  },
  {
    name: "Li Wei Chen",
    role: "Graduate Student",
    country: "China",
    flag: "🇨🇳",
    visaType: "F-1 Student Visa",
    content: "As an international student, I was overwhelmed by the visa process. GlobalVisa simplified everything and helped me secure my F-1 visa to attend MIT.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Registered Nurse",
    country: "India",
    flag: "🇮🇳",
    visaType: "Green Card",
    content: "After years of waiting, GlobalVisa helped expedite my green card application. Their attention to detail and constant communication made all the difference.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Client Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real clients who achieved their immigration dreams with our help.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-medium transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold-500/20 mb-4" />
              
              {/* Content */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.flag}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role} • {testimonial.country}</p>
                  </div>
                </div>
                <div className="bg-gold-500/10 border border-gold-500/30 rounded-full px-3 py-1">
                  <span className="text-gold-500 text-sm font-medium">{testimonial.visaType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

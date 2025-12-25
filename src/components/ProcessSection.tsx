import { MessageSquare, FileSearch, FileText, Send, Clock, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "Schedule a consultation to discuss your immigration goals, timeline, and any concerns you may have."
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Case Assessment",
    description: "We analyze your situation thoroughly to determine the best visa category and strategy for your case."
  },
  {
    number: "03",
    icon: FileText,
    title: "Document Preparation",
    description: "Our team helps you gather and prepare all required documents, ensuring everything is complete and accurate."
  },
  {
    number: "04",
    icon: Send,
    title: "Application Filing",
    description: "We file your application with the appropriate immigration authorities and handle all communications."
  },
  {
    number: "05",
    icon: Clock,
    title: "Follow-ups & Representation",
    description: "We monitor your case progress, respond to requests for evidence, and represent you in interviews if needed."
  },
  {
    number: "06",
    icon: CheckCircle,
    title: "Approval & Next Steps",
    description: "Once approved, we guide you through next steps including travel, status maintenance, and future planning."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
            Your Immigration Journey, Simplified
          </h2>
          <p className="text-muted-foreground text-lg">
            We've streamlined the immigration process into clear, manageable steps 
            so you always know what to expect.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative bg-card rounded-xl p-8 border border-border hover:shadow-medium transition-all duration-300 group"
            >
              {/* Step Number */}
              <span className="absolute top-6 right-6 text-5xl font-display font-bold text-muted/30 group-hover:text-gold-500/20 transition-colors">
                {step.number}
              </span>
              
              {/* Icon */}
              <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
                <step.icon className="w-7 h-7 text-gold-500 group-hover:text-navy-950 transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (hidden on last column items) */}
              {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

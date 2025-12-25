import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Home, 
  Building2, 
  Users, 
  Scale, 
  FileX,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: "work-visas",
    icon: Briefcase,
    title: "Work Visas & Employment Sponsorship",
    description: "Comprehensive support for employment-based immigration including H-1B, L-1, O-1, and other work visas.",
    whoFor: "Skilled workers, executives, multinational transferees, and their employers",
    requirements: ["Job offer from US employer", "Relevant qualifications", "Labor certification (for some categories)"],
    timeline: "3-12 months depending on visa type",
    challenges: ["Annual visa caps", "Complex documentation", "RFE responses"],
    howWeHelp: "We guide employers and employees through the entire sponsorship process, from labor condition applications to visa interviews."
  },
  {
    id: "student-visas",
    icon: GraduationCap,
    title: "Student Visas",
    description: "Expert guidance for international students pursuing education in the United States.",
    whoFor: "Students accepted to US educational institutions",
    requirements: ["Acceptance letter", "Proof of funds", "Intent to return home"],
    timeline: "2-4 months before program start",
    challenges: ["Visa interview preparation", "Maintaining status", "Work authorization"],
    howWeHelp: "We prepare students for successful visa interviews and help maintain legal status throughout their studies."
  },
  {
    id: "family-visas",
    icon: Heart,
    title: "Family & Marriage Visas",
    description: "Reunite with loved ones through family-sponsored immigration and marriage-based petitions.",
    whoFor: "US citizens and permanent residents seeking to sponsor family members",
    requirements: ["Proof of relationship", "Affidavit of support", "Medical exam"],
    timeline: "Immediate relatives: 12-18 months; Other categories: varies",
    challenges: ["Proving genuine relationship", "Long waiting times", "Conditional residence"],
    howWeHelp: "We guide families through the petition process, prepare for interviews, and handle conditional residence removal."
  },
  {
    id: "permanent-residency",
    icon: Home,
    title: "Permanent Residency (Green Card)",
    description: "Multiple pathways to permanent residence in the United States.",
    whoFor: "Those seeking to live and work permanently in the US",
    requirements: ["Qualifying category", "Clean background", "Medical exam"],
    timeline: "1-10+ years depending on category and country",
    challenges: ["Priority date backlogs", "Maintaining status while waiting", "Adjustment vs. consular processing"],
    howWeHelp: "We evaluate all possible paths to permanent residence and develop a strategy based on your unique situation."
  },
  {
    id: "business-visas",
    icon: Building2,
    title: "Business & Investor Visas",
    description: "Visa solutions for entrepreneurs, investors, and business owners.",
    whoFor: "Investors, entrepreneurs, treaty country nationals, and business managers",
    requirements: ["Substantial investment", "Business plan", "Treaty country nationality (for some)"],
    timeline: "4-24 months depending on category",
    challenges: ["Proving investment requirements", "Business viability", "Documentation complexity"],
    howWeHelp: "We help structure investments, prepare business plans, and navigate complex investor visa requirements."
  },
  {
    id: "citizenship",
    icon: Users,
    title: "Citizenship & Naturalization",
    description: "Navigate the path to U.S. citizenship through naturalization.",
    whoFor: "Lawful permanent residents eligible for citizenship",
    requirements: ["5 years as LPR (3 if married to USC)", "Physical presence", "Good moral character"],
    timeline: "8-14 months from application to oath ceremony",
    challenges: ["English and civics test", "Travel and residence requirements", "Disclosure issues"],
    howWeHelp: "We assess eligibility, prepare applications, and provide interview preparation to ensure success."
  },
  {
    id: "asylum",
    icon: Scale,
    title: "Asylum & Refugee Protection",
    description: "Compassionate legal support for those seeking protection in the United States.",
    whoFor: "Individuals facing persecution based on race, religion, nationality, political opinion, or social group",
    requirements: ["Fear of persecution", "File within 1 year of arrival (with exceptions)", "Supporting documentation"],
    timeline: "6 months to several years",
    challenges: ["Meeting the one-year deadline", "Proving persecution", "Interview preparation"],
    howWeHelp: "We build compelling asylum cases, gather supporting evidence, and prepare clients for interviews and hearings."
  },
  {
    id: "appeals",
    icon: FileX,
    title: "Appeals & Visa Refusals",
    description: "Expert representation for visa denials and complex immigration challenges.",
    whoFor: "Those who have received a visa denial, RFE, or removal order",
    requirements: ["Understanding of denial reason", "New evidence or legal arguments", "Timely filing"],
    timeline: "Varies based on appeal type",
    challenges: ["Tight deadlines", "Overcoming initial denial", "Complex procedural requirements"],
    howWeHelp: "We analyze denial reasons, develop winning strategies, and provide skilled representation before immigration courts."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-navy-950">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-6">
                Comprehensive Immigration Solutions
              </h1>
              <p className="text-grey-300 text-lg">
                From work visas to citizenship, we provide expert legal guidance 
                for all your immigration needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-gold-500" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground text-lg mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Who This Is For</h3>
                          <p className="text-muted-foreground">{service.whoFor}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">How We Help</h3>
                          <p className="text-muted-foreground">{service.howWeHelp}</p>
                        </div>
                      </div>
                      <Link to="/contact" className="inline-block mt-8">
                        <Button variant="gold" className="group">
                          Get Legal Advice
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                    
                    {/* Details Card */}
                    <div className={`bg-secondary rounded-xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-medium text-gold-500 uppercase tracking-wider mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {service.requirements.map((req) => (
                              <li key={req} className="flex items-start gap-2 text-foreground">
                                <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="border-t border-border pt-6">
                          <h4 className="text-sm font-medium text-gold-500 uppercase tracking-wider mb-3">Typical Timeline</h4>
                          <p className="text-foreground">{service.timeline}</p>
                        </div>
                        <div className="border-t border-border pt-6">
                          <h4 className="text-sm font-medium text-gold-500 uppercase tracking-wider mb-3">Common Challenges</h4>
                          <ul className="space-y-2">
                            {service.challenges.map((challenge) => (
                              <li key={challenge} className="text-muted-foreground text-sm">• {challenge}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < services.length - 1 && (
                    <div className="border-b border-border mt-16" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-950">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-grey-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation and our attorneys will evaluate your situation 
              and recommend the best path forward.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

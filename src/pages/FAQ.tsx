import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "How long does the immigration process take?",
        answer: "Processing times vary significantly depending on the visa type, your country of origin, and current USCIS backlogs. Work visas like H-1B typically take 3-6 months, family-based green cards can take 12-24 months for immediate relatives, and employment-based green cards may take several years. During your consultation, we'll provide a realistic timeline based on your specific case."
      },
      {
        question: "What documents are typically required?",
        answer: "Common documents include: valid passport, birth certificate, educational credentials, employment records, financial statements, and photographs. Specific requirements depend on your visa category. We provide a comprehensive checklist tailored to your case and help you gather and organize all necessary documentation."
      },
      {
        question: "What happens if my visa is refused?",
        answer: "A visa refusal is not necessarily the end of the road. Options may include: reapplying with additional evidence, filing an appeal or motion to reopen, or pursuing an alternative visa category. We analyze the specific reasons for denial and develop a strategy to overcome them."
      },
      {
        question: "Do you offer online consultations?",
        answer: "Yes! We offer secure video consultations for clients who cannot visit our office in person. Our online consultations are just as thorough as in-person meetings, and we can handle most of your case remotely. We also offer phone consultations for initial discussions."
      },
      {
        question: "Are consultations confidential?",
        answer: "Absolutely. All communications with our attorneys are protected by attorney-client privilege. We take your privacy seriously and maintain strict confidentiality regarding all case information. Your personal details are never shared without your explicit consent."
      }
    ]
  },
  {
    title: "Work & Business Visas",
    faqs: [
      {
        question: "What is the H-1B visa lottery and how does it work?",
        answer: "The H-1B is a specialty occupation visa with an annual cap of 65,000 regular slots plus 20,000 for advanced degree holders. USCIS conducts a random lottery when applications exceed the cap. We help employers file strong petitions and prepare backup strategies if not selected in the lottery."
      },
      {
        question: "Can I change employers while on a work visa?",
        answer: "Yes, in most cases. H-1B holders can transfer to a new employer who files a new petition on their behalf. You can begin working for the new employer once the petition is filed (portability provision). L-1 and O-1 visas have different rules, which we can explain based on your situation."
      },
      {
        question: "What is the EB-5 investor visa requirement?",
        answer: "The EB-5 requires a minimum investment of $1,050,000 (or $800,000 in a Targeted Employment Area) in a new commercial enterprise that creates at least 10 full-time jobs. This visa leads directly to permanent residence for the investor, spouse, and unmarried children under 21."
      }
    ]
  },
  {
    title: "Family Immigration",
    faqs: [
      {
        question: "How long does it take to sponsor a spouse for a green card?",
        answer: "For spouses of U.S. citizens, the process typically takes 12-18 months if applying from within the U.S. (adjustment of status) or 10-14 months through consular processing abroad. Spouses of green card holders face longer waits due to visa backlogs, often 2-3 years or more."
      },
      {
        question: "Can I sponsor my parents for a green card?",
        answer: "Yes, if you are a U.S. citizen over 21 years old, you can sponsor your parents as immediate relatives, which means no waiting list. The process typically takes 12-18 months. Green card holders cannot sponsor parents; you would need to become a citizen first."
      },
      {
        question: "What is a conditional green card?",
        answer: "If your marriage is less than 2 years old when you receive your green card, it's issued with a 2-year conditional status. You must file a joint petition to remove conditions 90 days before expiration. We help couples navigate this process and handle cases involving divorce or hardship waivers."
      }
    ]
  },
  {
    title: "Citizenship & Naturalization",
    faqs: [
      {
        question: "How long do I need to be a green card holder before applying for citizenship?",
        answer: "Generally, you must hold a green card for 5 years before applying for naturalization. If married to a U.S. citizen and living together, this is reduced to 3 years. You can file your application 90 days before meeting the residency requirement."
      },
      {
        question: "What is the citizenship test like?",
        answer: "The naturalization test has two components: an English test (reading, writing, and speaking) and a civics test (10 questions from a list of 100 about U.S. history and government - you must answer 6 correctly). We provide study materials and practice sessions to help you prepare."
      },
      {
        question: "Can I lose my green card if I travel too much?",
        answer: "Yes, extended absences can jeopardize your permanent resident status. Trips over 6 months may raise concerns, and absences over 1 year may result in abandonment of residence. If you need to travel extensively, we can help you apply for a re-entry permit."
      }
    ]
  },
  {
    title: "Fees & Process",
    faqs: [
      {
        question: "How much do your services cost?",
        answer: "Our fees vary based on case complexity and visa type. We provide transparent, fixed-fee quotes during your initial consultation. We believe in clear pricing with no hidden costs. Payment plans are available for qualifying cases."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit cards, debit cards, bank transfers, and checks. For larger matters, we can arrange payment plans. Government filing fees are separate from our legal fees and must be paid directly to USCIS or the relevant agency."
      },
      {
        question: "What is your success rate?",
        answer: "We maintain a 98% overall approval rate across all visa categories. This high success rate reflects our thorough case preparation, attention to detail, and strategic approach to each case. We only take cases where we believe we can achieve a positive outcome."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-navy-950">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">FAQ</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-grey-300 text-lg">
                Find answers to common immigration questions. Can't find what you're 
                looking for? Contact us for personalized guidance.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {faqCategories.map((category) => (
                <div key={category.title}>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6 pb-4 border-b border-border">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.title}-${index}`}
                        className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold-500/30"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-5">
                          <span className="text-foreground font-medium pr-4">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Every immigration case is unique. Schedule a consultation to get 
              personalized answers from our experienced attorneys.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl" className="group">
                Schedule a Consultation
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

export default FAQ;

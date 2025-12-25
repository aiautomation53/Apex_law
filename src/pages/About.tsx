import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Globe, Scale, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Sarah Mitchell",
    role: "Managing Partner",
    credentials: "J.D., Harvard Law School",
    bio: "25+ years of immigration law experience specializing in corporate and employment-based immigration.",
    image: "SM"
  },
  {
    name: "David Chen",
    role: "Senior Partner",
    credentials: "J.D., Columbia Law School",
    bio: "Expert in investor visas and business immigration with a focus on EB-5 and E-2 cases.",
    image: "DC"
  },
  {
    name: "Elena Rodriguez",
    role: "Partner",
    credentials: "J.D., NYU School of Law",
    bio: "Specializes in family-based immigration and humanitarian cases including asylum.",
    image: "ER"
  },
  {
    name: "Michael Thompson",
    role: "Senior Associate",
    credentials: "J.D., Georgetown Law",
    bio: "Focuses on employment visas, naturalization, and citizenship matters.",
    image: "MT"
  }
];

const values = [
  {
    icon: Scale,
    title: "Integrity",
    description: "We uphold the highest ethical standards in every case we handle."
  },
  {
    icon: Users,
    title: "Client-Centered",
    description: "Your goals and concerns are at the heart of everything we do."
  },
  {
    icon: Globe,
    title: "Diversity",
    description: "We celebrate and serve clients from all backgrounds and cultures."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the best possible outcome in every case."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-navy-950">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">About Us</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-6">
                Dedicated to Your Immigration Success
              </h1>
              <p className="text-grey-300 text-lg">
                For over 25 years, GlobalVisa has been helping individuals and families 
                achieve their American dream through expert legal guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
                  A Legacy of Excellence in Immigration Law
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 1999, GlobalVisa began with a simple mission: to make immigration 
                    accessible, understandable, and achievable for everyone. What started as a 
                    small practice has grown into one of the most trusted immigration law firms 
                    in the country.
                  </p>
                  <p>
                    Our founders recognized that navigating the U.S. immigration system can be 
                    overwhelming and intimidating. They set out to create a firm that combines 
                    legal expertise with genuine compassion and personalized service.
                  </p>
                  <p>
                    Today, we serve clients from over 150 countries, handling everything from 
                    work visas to citizenship applications. Our team speaks multiple languages 
                    and understands the unique challenges faced by immigrants from diverse 
                    backgrounds.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-8 text-center">
                  <p className="text-4xl font-display font-bold text-gold-500">25+</p>
                  <p className="text-muted-foreground mt-2">Years of Experience</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-8 text-center">
                  <p className="text-4xl font-display font-bold text-gold-500">10K+</p>
                  <p className="text-muted-foreground mt-2">Cases Handled</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-8 text-center">
                  <p className="text-4xl font-display font-bold text-gold-500">98%</p>
                  <p className="text-muted-foreground mt-2">Success Rate</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-8 text-center">
                  <p className="text-4xl font-display font-bold text-gold-500">150+</p>
                  <p className="text-muted-foreground mt-2">Countries Served</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
                What Guides Our Practice
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
                Meet Our Attorneys
              </h2>
              <p className="text-muted-foreground">
                Our team of experienced immigration lawyers is committed to providing 
                exceptional legal representation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-all">
                  <div className="w-20 h-20 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4 text-gold-500 font-display font-bold text-xl">
                    {member.image}
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-gold-500 text-sm font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-xs mt-1">{member.credentials}</p>
                  <p className="text-muted-foreground text-sm mt-3">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-950">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-grey-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our experienced attorneys today.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Book a Consultation
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

export default About;

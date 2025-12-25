import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-grey-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-navy-950 font-display font-bold text-xl">G</span>
              </div>
              <div>
                <span className="font-display text-xl font-semibold text-primary-foreground">
                  Global<span className="text-gold-500">Visa</span>
                </span>
                <p className="text-xs text-grey-400 -mt-1">Immigration Lawyers</p>
              </div>
            </div>
            <p className="text-grey-400 text-sm leading-relaxed mb-6">
              Trusted immigration attorneys guiding individuals and businesses through 
              complex visa processes with expertise and care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Case Results", "Blog", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(" ", "-")}`} className="text-grey-400 hover:text-gold-500 transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Work Visas", "Student Visas", "Family Visas", "Citizenship", "Business Immigration", "Asylum & Refugees"].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-grey-400 hover:text-gold-500 transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-grey-400 text-sm">
                  123 Legal Avenue, Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="tel:+1-800-555-0199" className="text-grey-400 hover:text-gold-500 transition-colors text-sm">
                  1-800-555-0199
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@globalvisa.com" className="text-grey-400 hover:text-gold-500 transition-colors text-sm">
                  info@globalvisa.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-grey-500 text-sm">
              © 2025 GlobalVisa Immigration Lawyers. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-grey-500 hover:text-grey-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-grey-500 hover:text-grey-300 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-grey-500 hover:text-grey-300 text-sm transition-colors">
                Legal Disclaimer
              </Link>
            </div>
          </div>
          <p className="text-grey-500 text-xs mt-4 text-center md:text-left">
            Disclaimer: The information on this website is for general informational purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

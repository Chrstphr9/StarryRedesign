import { Star, Facebook, Twitter, Linkedin, Instagram, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Logo and Description */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                <Star className="text-primary-foreground" size={24} />
              </div>
              <span className="text-2xl font-bold text-white font-display">StarryChima</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Transforming businesses through innovative IT solutions. We deliver world-class technology services 
              that drive growth and digital transformation.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 smooth-transition"
                data-testid="link-social-facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 smooth-transition"
                data-testid="link-social-twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 smooth-transition"
                data-testid="link-social-linkedin"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 smooth-transition"
                data-testid="link-social-instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-xl font-display" data-testid="text-services-title">Services</h3>
            <div className="space-y-3">
              <Link href="/services" className="block text-slate-400 hover:text-white hover:translate-x-1 smooth-transition" data-testid="link-footer-web-design">Web Design</Link>
              <Link href="/services" className="block text-slate-400 hover:text-white hover:translate-x-1 smooth-transition" data-testid="link-footer-app-dev">App Development</Link>
              <Link href="/services" className="block text-slate-400 hover:text-white hover:translate-x-1 smooth-transition" data-testid="link-footer-it-management">IT Management</Link>
              <Link href="/services" className="block text-slate-400 hover:text-white hover:translate-x-1 smooth-transition" data-testid="link-footer-digital-locks">Digital Locks</Link>
              <Link href="/services" className="block text-slate-400 hover:text-white hover:translate-x-1 smooth-transition" data-testid="link-footer-electrical">Electrical & Electronics</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-xl font-display" data-testid="text-links-title">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-slate-400 hover:text-white hover:translate-x-1 smooth-transition" data-testid="link-useful-home">Home</Link>
              <Link href="/about" className="block text-slate-400 hover:text-white hover:translate-x-1 smooth-transition" data-testid="link-useful-about">Who We Are</Link>
              <Link href="/services" className="block text-slate-400 hover:text-white hover:translate-x-1 smooth-transition" data-testid="link-useful-services">What We Do</Link>
              <Link href="/contact" className="block text-slate-400 hover:text-white hover:translate-x-1 smooth-transition" data-testid="link-useful-contact">Contact</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-xl font-display" data-testid="text-contact-title">Stay Updated</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest updates and tech insights.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary/20 h-12"
                  data-testid="input-newsletter-email"
                />
                <Button 
                  className="bg-primary hover:bg-primary/90 px-6 py-3 font-semibold whitespace-nowrap shadow-lg"
                  data-testid="button-newsletter-submit"
                >
                  Subscribe
                </Button>
              </div>
              <p className="flex items-start gap-2 text-xs text-slate-400" data-testid="text-newsletter-terms">
                <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={14} />
                <span>By subscribing, you agree to receive our promotional emails and accept our terms.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-slate-700/30">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="text-white font-semibold" data-testid="text-address-title">Our Location</h4>
              <p className="text-slate-300 text-sm leading-relaxed" data-testid="text-address-content">
                44 Ohene Avenue Near Haven<br />
                Ikorodu, Lagos, Nigeria
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-semibold" data-testid="text-email-title">Email Us</h4>
              <p className="text-slate-300 text-sm" data-testid="text-email-content">
                info@starrychima.com
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-semibold" data-testid="text-phone-title">Call Us</h4>
              <p className="text-slate-300 text-sm" data-testid="text-phone-content">
                +234 906 435 1723
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm" data-testid="text-copyright">
              &copy; 2024 StarryChima IT Solutions. All Rights Reserved
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white smooth-transition" data-testid="link-privacy">Privacy Policy</a>
              <a href="#" className="hover:text-white smooth-transition" data-testid="link-terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

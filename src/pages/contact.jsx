import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Get in touch</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight" data-testid="text-page-title">Contact</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">Ready to transform your business? Let's start the conversation.</p>
          <nav className="text-primary-foreground/70 text-lg" data-testid="breadcrumb-nav">
            <span className="hover:text-white smooth-transition cursor-pointer">Home</span> 
            <span className="mx-3">/</span> 
            <span className="text-white font-medium">Contact</span>
          </nav>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20" data-testid="badge-contact">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Contact us
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance" data-testid="text-contact-title">Get in touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-contact-subtitle">
              Starry IT Solutions has a talented and professional staff that offers high-quality IT optimization services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg smooth-transition">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="text-address-title">Office address</h3>
                      <p className="text-muted-foreground leading-relaxed" data-testid="text-address-content">
                        44 Ohene Avenue Near Haven<br />
                        Ikorodu, Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg smooth-transition">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="text-email-title">Email Address</h3>
                      <p className="text-muted-foreground leading-relaxed" data-testid="text-email-content">
                        info@starrychima.com<br />
                        www.starrychima.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg smooth-transition">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="text-phone-title">Phone Number</h3>
                      <p className="text-muted-foreground leading-relaxed" data-testid="text-phone-content">
                        +234 906 435 1723
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl"></div>
              <Card className="relative p-10 shadow-xl border border-border bg-card/80 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4 border border-primary/20">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Free consultation</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3" data-testid="text-form-title">Start Your Project</h3>
                  <p className="text-muted-foreground">Tell us about your vision and we'll help make it reality</p>
                </div>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3" data-testid="label-full-name">
                        Full Name *
                      </label>
                      <Input 
                        type="text" 
                        placeholder="Enter your full name"
                        className="w-full h-12 bg-background border-border focus:border-primary focus:ring-primary/20"
                        data-testid="input-full-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3" data-testid="label-email">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="w-full h-12 bg-background border-border focus:border-primary focus:ring-primary/20"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3" data-testid="label-service">
                      Service of Interest
                    </label>
                    <Select>
                      <SelectTrigger className="w-full h-12 bg-background border-border focus:border-primary" data-testid="select-service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-design">Web Design</SelectItem>
                        <SelectItem value="app-development">App Development</SelectItem>
                        <SelectItem value="it-management">IT Management</SelectItem>
                        <SelectItem value="digital-locks">Digital Locks</SelectItem>
                        <SelectItem value="electrical">Electrical & Electronics</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3" data-testid="label-message">
                      Project Details *
                    </label>
                    <Textarea 
                      rows={6}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      className="w-full resize-none bg-background border-border focus:border-primary focus:ring-primary/20"
                      data-testid="textarea-message"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg font-semibold shadow-lg hover:shadow-xl smooth-transition"
                    data-testid="button-send-message"
                  >
                    Send Message
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">We'll get back to you within 24 hours</p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>24/7 Support Available</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-balance" data-testid="text-cta-title">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed" data-testid="text-cta-subtitle">
            Join hundreds of satisfied clients who trust Starry IT Solutions for their technology needs. Let's discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-lg"
              data-testid="button-contact-us"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
              data-testid="button-call-us"
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

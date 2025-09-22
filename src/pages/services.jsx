import { Code, Smartphone, Lock, Settings, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import { ServiceCard } from "../components/ui/service-card";

export default function Services() {
  const services = [
    {
      icon: <Code className="text-2xl text-primary" size={24} />,
      title: "Web design",
      description: "We provide web designing & Development Services that involves the world standard web content for your business."
    },
    {
      icon: <Smartphone className="text-2xl text-primary" size={24} />,
      title: "App development",
      description: "Development of innovative apps for expanding our business and increasing product sales."
    },
    {
      icon: <Lock className="text-2xl text-primary" size={24} />,
      title: "Digital Locks",
      description: "We can not fabricate enough that smart digital door locks are convenient. It makes access the."
    },
    {
      icon: <Settings className="text-2xl text-primary" size={24} />,
      title: "IT Management",
      description: "Get the competitive advantage by reducing time and cost to manage your own IT setup."
    },
    {
      icon: <Zap className="text-2xl text-primary" size={24} />,
      title: "Electrical & Electronics",
      description: "We provide smart Electrical & Electronics Engineering & Technology solutions."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden lg:py-32 gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-white border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>Our services</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight font-display sm:text-6xl lg:text-7xl text-balance" data-testid="text-page-title">What we do</h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-primary-foreground/80">Comprehensive IT solutions designed to transform your business</p>
          <nav className="text-lg text-primary-foreground/70" data-testid="breadcrumb-nav">
            <span className="cursor-pointer hover:text-white smooth-transition">Home</span> 
            <span className="mx-3">/</span> 
            <span className="font-medium text-white">What we do</span>
          </nav>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 gradient-accent">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-primary/10 text-primary border-primary/20" data-testid="badge-what-we-do">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              What we do
            </div>
            <h2 className="mb-8 text-4xl font-bold font-display sm:text-5xl lg:text-6xl text-foreground text-balance" data-testid="text-services-title">We provide world class service</h2>
            <p className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed text-muted-foreground" data-testid="text-services-subtitle">
              Have a view of our wide range of services that drive business growth and digital transformation
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                className="px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-discover-services"
              >
                Discover More Services
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                data-testid="button-get-quote"
              >
                Get Free Quote
              </Button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-white border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>24/7 Support</span>
          </div>
          <h2 className="mb-8 text-4xl font-bold font-display sm:text-5xl lg:text-6xl text-balance" data-testid="text-cta-title">
            We are here to answer your questions 24/7
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed text-primary-foreground/80" data-testid="text-cta-subtitle">
            Ready to transform your business with cutting-edge IT solutions? Our expert team is standing by to help you succeed.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90"
              data-testid="button-contact-us"
            >
              Contact Us Today
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold text-white border-white/30 hover:bg-white/10 backdrop-blur-sm"
              data-testid="button-schedule-consultation"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Code, Smartphone, Lock, Settings, Zap, Headphones } from "lucide-react";
import { Button } from "../components/ui/button";
import { StatsSection } from "../components/ui/stats-section";
import { ServiceCard } from "../components/ui/service-card";

export default function Home() {
  const stats = [
    { value: "12+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "40+", label: "Project Done" },
    { value: "10+", label: "Service Areas" },
  ];

  const services = [
    {
      icon: <Code className="text-2xl text-primary" size={24} />,
      title: "Web Design",
      description: "We provide web designing & development services that involves the world standard web content for your business."
    },
    {
      icon: <Smartphone className="text-2xl text-primary" size={24} />,
      title: "App Development",
      description: "Development of innovative apps for expanding your business and increasing product sales with modern technology."
    },
    {
      icon: <Lock className="text-2xl text-primary" size={24} />,
      title: "Digital Locks",
      description: "We can not fabricate enough that smart digital door locks are convenient. It makes access fun."
    },
    {
      icon: <Settings className="text-2xl text-primary" size={24} />,
      title: "IT Management",
      description: "Get the competitive advantage by reducing time and cost to manage your own IT setup efficiently."
    },
    {
      icon: <Zap className="text-2xl text-primary" size={24} />,
      title: "Electrical & Electronics",
      description: "We provide smart Electrical & Electronics Engineering & Technology solutions for modern businesses."
    },
    {
      icon: <Headphones className="text-2xl text-primary" size={24} />,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your systems run smoothly and efficiently at all times."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-screen overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available 24/7</span>
                </div>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.9] tracking-tight text-balance" data-testid="text-hero-title">
                  Creating better{" "}
                  <span className="text-transparent bg-gradient-to-r from-white/90 to-white/60 bg-clip-text">
                    IT solutions
                  </span>
                </h1>
                <p className="max-w-3xl text-xl font-medium leading-relaxed sm:text-2xl text-primary-foreground/80" data-testid="text-hero-subtitle">
                  We enable, facilitate and accelerate digital transformation for businesses with world-class IT solutions and innovative technology services.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button 
                  className="px-8 py-4 text-lg font-semibold bg-white shadow-xl text-primary hover:bg-white/90 hover:scale-105 smooth-transition"
                  data-testid="button-our-services"
                >
                  Our Services
                </Button>
                <Button 
                  variant="outline" 
                  className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-primary smooth-transition"
                  data-testid="button-contact-us"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative lg:justify-self-end">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/5 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="relative z-10 p-2 border bg-white/10 backdrop-blur-sm rounded-3xl border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional team working on technology solutions" 
                  className="w-full h-auto shadow-2xl rounded-2xl"
                  data-testid="img-hero-team"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection 
        title="Creating Value for Your Business"
        subtitle="Our numbers speak for themselves - delivering excellence across multiple domains"
        stats={stats}
      />

      {/* Services Section */}
      <section className="py-24 gradient-accent">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-primary/10 text-primary border-primary/20" data-testid="badge-what-we-do">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              What we do
            </div>
            <h2 className="mb-8 text-4xl font-bold font-display sm:text-5xl text-foreground text-balance" data-testid="text-services-title">We provide world class service</h2>
            <p className="max-w-4xl mx-auto text-xl leading-relaxed sm:text-2xl text-muted-foreground" data-testid="text-services-subtitle">
              Have a view of our wide range of services designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="group">
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="px-10 py-5 text-lg font-semibold shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 smooth-transition"
              data-testid="button-discover-services"
            >
              Discover More Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-20 mb-24 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full bg-primary/10 text-primary border-primary/20" data-testid="badge-about-us">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                About Us
              </div>
              <h2 className="text-4xl font-bold font-display sm:text-5xl text-foreground" data-testid="text-about-title">Starry IT Solutions</h2>
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-muted-foreground" data-testid="text-about-description-1">
                  Starry IT Solutions is a business of application development, network infrastructure works ranging from Telecom solutions and products. 
                  IT support, desktops, security software, IT hardware and software, communications such as local infrastructure and many more.
                </p>
                <p className="text-xl leading-relaxed text-muted-foreground" data-testid="text-about-description-2">
                  Our goal is to provide high-quality technology solutions that drive business growth and enhance operational efficiency across all industries.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center p-4 space-x-3 border shadow-sm bg-card rounded-xl border-border">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary"></div>
                  <span className="font-medium text-foreground" data-testid="text-feature-flexible">Flexible Solutions</span>
                </div>
                <div className="flex items-center p-4 space-x-3 border shadow-sm bg-card rounded-xl border-border">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary"></div>
                  <span className="font-medium text-foreground" data-testid="text-feature-support">24/7 Unlimited Support</span>
                </div>
              </div>
            </div>
            <div className="relative lg:justify-self-end">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl"></div>
              <div className="relative p-2 border shadow-xl bg-card rounded-2xl border-border">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional business team in modern office environment" 
                  className="w-full h-auto rounded-xl"
                  data-testid="img-about-team"
                />
              </div>
            </div>
          </div>

          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl"></div>
              <div className="relative p-2 border shadow-xl bg-card rounded-2xl border-border">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Diverse business team collaborating on global projects" 
                  className="w-full h-auto rounded-xl"
                  data-testid="img-global-experience"
                />
              </div>
            </div>
            <div className="order-1 space-y-8 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full bg-accent/10 text-primary border-accent/30" data-testid="badge-why-choose-us">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Why Choose Us
              </div>
              <h2 className="text-4xl font-bold font-display sm:text-5xl text-foreground text-balance" data-testid="text-global-title">
                Give customers a larger perspective through our global experience
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground" data-testid="text-global-description">
                The global experience we carry gives us a chance to spot great trends early on and implement world-class solutions quickly across various projects delivered, guiding customers in finding and most effective solution for their business. We create added value that helps you optimise, scale and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-white border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Ready to help</span>
          </div>
          <h2 className="mb-8 text-4xl font-bold leading-tight font-display sm:text-5xl lg:text-6xl text-balance" data-testid="text-cta-title">
            We are here to answer your questions 24/7
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed sm:text-2xl text-primary-foreground/80" data-testid="text-cta-subtitle">
            Need for IT solution services? Get in touch with our expert team for personalized consultation and solutions.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button 
              className="px-10 py-5 text-lg font-semibold bg-white shadow-xl text-primary hover:bg-white/90 hover:scale-105 smooth-transition"
              data-testid="button-cta-contact"
            >
              Contact Us
            </Button>
            <Button 
              variant="outline" 
              className="px-10 py-5 text-lg font-semibold text-white border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-primary smooth-transition"
              data-testid="button-cta-services"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

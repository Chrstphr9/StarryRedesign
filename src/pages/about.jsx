import { Button } from "../components/ui/button";

export default function About() {
  const stats = [
    { value: "12+", label: "Experience" },
    { value: "500+", label: "Happy clients" },
    { value: "40+", label: "Project done" },
    { value: "10+", label: "Our service area" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden lg:py-32 gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-white border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>About our company</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight font-display sm:text-6xl lg:text-7xl text-balance" data-testid="text-page-title">Who We Are</h1>
          <nav className="text-lg text-primary-foreground/70" data-testid="breadcrumb-nav">
            <span className="cursor-pointer hover:text-white smooth-transition">Home</span> 
            <span className="mx-3">/</span> 
            <span className="font-medium text-white">Who We Are</span>
          </nav>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 gradient-accent">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div className="relative lg:order-1">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl"></div>
              <div className="relative p-3 border shadow-2xl bg-card rounded-3xl border-border">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional business team collaboration" 
                  className="w-full h-auto rounded-2xl"
                  data-testid="img-about-main"
                />
              </div>
              <div className="absolute max-w-xs p-6 border shadow-xl -bottom-6 -right-6 bg-card rounded-2xl border-border">
                <div className="mb-1 text-2xl font-bold text-primary">12+</div>
                <div className="text-sm font-medium text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
            <div className="space-y-8 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full bg-primary/10 text-primary border-primary/20" data-testid="badge-about">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                About us
              </div>
              <h2 className="text-4xl font-bold font-display sm:text-5xl lg:text-6xl text-foreground" data-testid="text-company-name">Starry IT Solutions</h2>
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-muted-foreground" data-testid="text-company-description">
                  Starry IT Solutions is a business of application development, network infrastructure works ranging from Telecom solutions and products. 
                  IT support, desktops, security software, IT hardware and software, communications such as local infrastructure and many more.
                </p>
                <p className="text-xl leading-relaxed text-muted-foreground" data-testid="text-mission-statement">
                  Our goal is to provide high-quality technology solutions to help companies across different industries. With over 12 years of industry 
                  experience across multiple sectors, we have deep expertise across many components.
                </p>
                <p className="text-xl leading-relaxed text-muted-foreground" data-testid="text-global-reach">
                  We believe that successful teams are more than the sum of their parts. With clients spanning across the country, 
                  we build expertise to deliver exceptional projects.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="p-6 border shadow-sm bg-card rounded-xl border-border">
                  <div className="mb-2 text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm font-medium text-muted-foreground">Happy Clients</div>
                </div>
                <div className="p-6 border shadow-sm bg-card rounded-xl border-border">
                  <div className="mb-2 text-2xl font-bold text-primary">40+</div>
                  <div className="text-sm font-medium text-muted-foreground">Projects Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full bg-accent/10 text-primary border-accent/30" data-testid="badge-why-choose">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Why Choose Us
              </div>
              <h2 className="text-4xl font-bold font-display sm:text-5xl lg:text-6xl text-foreground text-balance" data-testid="text-global-perspective-title">
                Give customers a larger perspective through our global experience
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground" data-testid="text-global-experience-description">
                The global experience we carry gives us a chance to spot great trends early on and implement world-class 
                solutions quickly across various projects delivered, guiding customers in finding and most effective solution 
                for their business. We create added value that helps you optimise, scale and grow.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border shadow-sm bg-card rounded-xl border-border">
                  <div className="mb-2 text-lg font-semibold text-foreground">Global Reach</div>
                  <div className="text-sm text-muted-foreground">Clients across multiple countries</div>
                </div>
                <div className="p-6 border shadow-sm bg-card rounded-xl border-border">
                  <div className="mb-2 text-lg font-semibold text-foreground">Expert Team</div>
                  <div className="text-sm text-muted-foreground">Skilled professionals ready to help</div>
                </div>
              </div>
            </div>
            <div className="relative lg:justify-self-end">
              <div className="absolute -inset-6 bg-gradient-to-bl from-accent/20 to-transparent rounded-3xl"></div>
              <div className="relative p-3 border shadow-2xl bg-card rounded-3xl border-border">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Global business collaboration" 
                  className="w-full h-auto rounded-2xl"
                  data-testid="img-global-collaboration"
                />
              </div>
              <div className="absolute p-6 border shadow-xl -top-6 -left-6 bg-card rounded-2xl border-border">
                <div className="mb-1 text-2xl font-bold text-primary">10+</div>
                <div className="text-sm font-medium text-muted-foreground">Service Areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-white border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Our achievements</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-white font-display sm:text-5xl lg:text-6xl text-balance" data-testid="text-stats-title">Our Numbers speaks for itself</h2>
            <p className="max-w-3xl mx-auto text-xl text-primary-foreground/80">Track record of excellence across multiple domains and industries</p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="p-8 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20 hover:bg-white/15 smooth-transition">
                  <div className="mb-3 text-4xl font-bold text-white lg:text-5xl group-hover:scale-110 smooth-transition" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-lg font-medium text-primary-foreground/80" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold font-display sm:text-5xl text-balance" data-testid="text-cta-title">
            We are here to answer your questions 24/7
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-primary-foreground/80" data-testid="text-cta-subtitle">
            Need for IT solution services? Get in touch with our expert team for personalized consultation and solutions.
          </p>
          <Button 
            className="px-8 py-4 font-semibold bg-white text-primary hover:bg-white/90"
            data-testid="button-contact-us"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}

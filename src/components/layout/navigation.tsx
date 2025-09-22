import { Link, useLocation } from "wouter";
import { Star, Menu, X } from "lucide-react";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [location] = useLocation();
  const { isOpen, toggle, close } = useMobileMenu();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Who We Are" },
    { href: "/services", label: "What We Do" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" data-testid="logo-link">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl smooth-transition">
                <Star className="text-primary-foreground" size={20} />
              </div>
              <span className="text-xl font-bold text-foreground font-display group-hover:text-primary smooth-transition">StarryChima</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium smooth-transition relative ${
                    isActive(item.href) 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                  )}
                </Link>
              ))}
              <div className="ml-6">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 font-semibold shadow-lg hover:shadow-xl smooth-transition"
                  data-testid="button-get-started"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-3 rounded-lg hover:bg-muted/50 smooth-transition" 
              onClick={toggle}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu fixed top-20 right-0 w-80 h-screen bg-card/95 backdrop-blur-md shadow-2xl border-l border-border md:hidden ${isOpen ? 'open' : ''}`}>
          <div className="p-8">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-lg font-medium smooth-transition ${
                    isActive(item.href) 
                      ? "text-primary bg-primary/10 border border-primary/20" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  onClick={close}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6">
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 font-semibold shadow-lg"
                  data-testid="button-mobile-get-started"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Ready to transform your business?
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={close}
          data-testid="mobile-menu-overlay"
        />
      )}
    </>
  );
}

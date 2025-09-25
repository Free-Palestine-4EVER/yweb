import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const experienceRoutes = [
  { name: "Hiking", path: "/experiences/hiking" },
  { name: "Trekking", path: "/experiences/trekking" },
  { name: "8-Hour Full-Day Jeep Tour", path: "/experiences/jeep-full-day" },
  { name: "4-Hour Half-Day Jeep Tour", path: "/experiences/jeep-half-day" },
  { name: "Camel Rides", path: "/experiences/camel-rides" },
  { name: "Jebel Umm Ad Dami (Summit)", path: "/experiences/jebel-umm-ad-dami" },
  { name: "Burdah Arch", path: "/experiences/burdah-arch" },
  { name: "Jebel Khash Route", path: "/experiences/jebel-khash" },
];

const mainRoutes = [
  { name: "Home", path: "/" },
  { name: "Camping", path: "/camping" },
  { name: "About Me", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [experiencesOpen, setExperiencesOpen] = useState(false);

  const scrollToBooking = () => {
    const booking = document.getElementById('booking');
    if (booking) {
      booking.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to contact page with booking anchor
      window.location.href = '/contact#booking';
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="text-xl font-heading font-bold text-primary">
              Yousef
            </div>
            <span className="text-muted-foreground">—</span>
            <div className="text-sm font-medium text-muted-foreground">
              Wadi Rum Guide
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-smooth hover:text-accent",
                  isActive ? "text-primary" : "text-foreground"
                )
              }
            >
              Home
            </NavLink>

            {/* Experiences Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setExperiencesOpen(true)}
              onMouseLeave={() => setExperiencesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-accent transition-smooth">
                <span>Desert Experiences</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", experiencesOpen && "rotate-180")} />
              </button>
              
              {experiencesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-popover border border-border rounded-lg shadow-night p-2 z-50">
                  <div className="grid gap-1">
                    <NavLink
                      to="/experiences"
                      className="block px-3 py-2 text-sm font-medium text-primary hover:bg-muted rounded-md transition-smooth"
                    >
                      All Experiences
                    </NavLink>
                    <div className="border-t border-border my-1"></div>
                    {experienceRoutes.map((route) => (
                      <NavLink
                        key={route.path}
                        to={route.path}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-primary rounded-md transition-smooth"
                      >
                        {route.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {mainRoutes.slice(1).map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-smooth hover:text-accent",
                    isActive ? "text-primary" : "text-foreground"
                  )
                }
              >
                {route.name}
              </NavLink>
            ))}

            {/* CTA Button */}
            <Button 
              variant="hero" 
              size="sm"
              onClick={scrollToBooking}
              className="shadow-desert"
            >
              Book / Reserve
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-smooth"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background">
            <div className="space-y-4">
              {/* Main Routes */}
              {mainRoutes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-4 py-2 text-base font-medium transition-smooth",
                      isActive ? "text-primary" : "text-foreground hover:text-accent"
                    )
                  }
                >
                  {route.name}
                </NavLink>
              ))}

              {/* Experiences */}
              <div className="px-4">
                <button
                  onClick={() => setExperiencesOpen(!experiencesOpen)}
                  className="flex items-center justify-between w-full py-2 text-base font-medium text-foreground hover:text-accent transition-smooth"
                >
                  <span>Desert Experiences</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", experiencesOpen && "rotate-180")} />
                </button>
                
                {experiencesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <NavLink
                      to="/experiences"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-sm font-medium text-primary hover:text-accent transition-smooth"
                    >
                      All Experiences
                    </NavLink>
                    {experienceRoutes.map((route) => (
                      <NavLink
                        key={route.path}
                        to={route.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-sm text-foreground hover:text-accent transition-smooth"
                      >
                        {route.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile CTA */}
              <div className="px-4 pt-4">
                <Button 
                  variant="hero" 
                  className="w-full shadow-desert"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToBooking();
                  }}
                >
                  Book / Reserve
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
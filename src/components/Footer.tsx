import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-night-sky text-cloud-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            
            {/* About Section */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Yousef — Wadi Rum Guide
              </h3>
              <p className="text-cloud-white/80 leading-relaxed mb-4 max-w-md">
                Born and raised in Wadi Rum, I specialize in private desert experiences. 
                From camping under the stars to jeep tours and hiking adventures.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-cloud-white/10 text-cloud-white border-cloud-white/30 hover:bg-cloud-white hover:text-night-sky"
                asChild
              >
                <a href="/contact#booking">Book Your Adventure</a>
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-cloud-white/80">
                <li><a href="/experiences" className="hover:text-dune-amber transition-colors">Desert Experiences</a></li>
                <li><a href="/camping" className="hover:text-dune-amber transition-colors">Camping Options</a></li>
                <li><a href="/about" className="hover:text-dune-amber transition-colors">About Yousef</a></li>
                <li><a href="/contact" className="hover:text-dune-amber transition-colors">Contact & Booking</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3 text-cloud-white/80">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-dune-amber" />
                  <a href="https://wa.me/962779886572" className="hover:text-dune-amber transition-colors">
                    +962 7 7988 6572
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-dune-amber" />
                  <a 
                    href="https://www.instagram.com/youssef.wadirum" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-dune-amber transition-colors"
                  >
                    @youssef.wadirum
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-dune-amber mt-0.5" />
                  <span className="text-sm">Wadi Rum Village<br />Aqaba Governorate, Jordan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-cloud-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-cloud-white/60 text-sm mb-4 md:mb-0">
              © 2024 Yousef — Wadi Rum Guide. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/youssef.wadirum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cloud-white/60 hover:text-dune-amber transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
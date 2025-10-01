import { Users, MapPin, Star, Shield, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import yousefAbout from "@/assets/yousef-main-2.jpeg";
import heroImage from "@/assets/hero-desert.jpg";

const highlights = [
  {
    icon: MapPin,
    title: "Born & Raised in Wadi Rum",
    description: "22 years of life in this incredible desert landscape"
  },
  {
    icon: Users,
    title: "Private Guiding Specialist",
    description: "Every experience is exclusively yours with personalized attention"
  },
  {
    icon: Star,
    title: "Outside Camping Expert",
    description: "Specializing in authentic sleeping under the stars experiences"
  },
  {
    icon: Shield,
    title: "Safety First Approach",
    description: "Professional safety briefings and emergency preparedness always"
  },
  {
    icon: Heart,
    title: "Flexible & Friendly",
    description: "We set the pace that suits you, with plenty of stops for photos and tea"
  },
  {
    icon: Award,
    title: "Community Focused", 
    description: "Working with local drivers, cooks, and camp owners to support our community"
  }
];

const services = [
  {
    title: "Outside Camping Under the Stars",
    description: "My specialty - the simplest, most magical way to experience the silence of the desert.",
    badge: "Signature Experience"
  },
  {
    title: "Traditional Bedouin Camps", 
    description: "Authentic cultural experiences with shared meals, music, and storytelling.",
    badge: "Cultural Immersion"
  },
  {
    title: "Luxury Bubble Camps",
    description: "For travelers who prefer comfort - I arrange stays at the finest desert accommodations.",
    badge: "Premium Comfort"
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center bg-gradient-to-b from-dune-amber/20 to-desert-sand/30">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Meet Yousef
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Your Bedouin Guide in Wadi Rum
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
                  A Desert Native with a Passion for Sharing
                </h2>
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    I'm Yousef, 22 years old, born and raised in Wadi Rum. Guiding travelers through my home desert isn't just my profession—it's my passion. This landscape has shaped who I am, and I love sharing its secrets with visitors from around the world.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    I specialize in <strong className="text-foreground">outside camping under the stars</strong>—the simplest, most magical way to experience the silence of the desert. There's nothing quite like falling asleep under the Milky Way and waking up to a desert sunrise.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    For travelers who prefer more comfort, I also arrange <strong className="text-foreground">traditional Bedouin camps</strong> and <strong className="text-foreground">luxury bubble camps</strong>. Whatever you choose, I'll make sure it's safe, comfortable, and unforgettable.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative max-w-md mx-auto">
                  <img 
                    src={yousefAbout} 
                    alt="Yousef - Wadi Rum Guide"
                    className="w-full rounded-2xl shadow-desert"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-dune-amber text-accent-foreground p-4 rounded-xl shadow-soft">
                    <div className="text-center">
                      <div className="text-2xl font-bold">22</div>
                      <div className="text-sm">Years Old</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guiding Philosophy */}
            <div className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6 text-center">
                My Guiding Philosophy
              </h3>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  My guiding style is <strong className="text-foreground">friendly and flexible</strong>: we set the pace that suits you, stop for tea, photos, and stories, and always keep an eye on safety and the weather. Every trip is different because every traveler is unique.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I work closely with local drivers, cooks, and camp owners—so your visit supports the entire community. This is our home, and we want to share it with you in the most authentic way possible.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-8 text-center">
                What Makes My Tours Special
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {highlights.map((highlight, index) => (
                  <Card key={index} className="group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-dune-amber rounded-lg flex items-center justify-center mb-4">
                        <highlight.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-8 text-center">
                Camping Experiences I Offer
              </h3>
              <div className="grid lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-sand rounded-2xl p-8 mb-4 relative overflow-hidden group">
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-night-sky/90 text-cloud-white text-xs">
                          {service.badge}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-heading font-semibold text-foreground mb-4">
                        {service.title}
                      </h4>
                      <p className="text-foreground/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Touch */}
            <div className="text-center bg-gradient-sunset text-cloud-white rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
                Every Journey is Personal
              </h3>
              <p className="text-xl text-cloud-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                When you book with me, you're not just getting a tour guide—you're gaining a local friend who wants to share the magic of his homeland. I'll listen to your interests, adapt to your pace, and make sure you leave with memories that last a lifetime.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="bg-cloud-white/10 text-cloud-white border-cloud-white/30 hover:bg-cloud-white hover:text-night-sky text-lg px-8 py-4"
              >
                <a href="/contact#booking">
                  Book with Yousef
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
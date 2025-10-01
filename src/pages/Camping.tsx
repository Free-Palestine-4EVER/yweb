import { Star, Tent, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import bubbleCamp from "@/assets/bubble-camp.jpg";
import outsideCamping from "@/assets/outside_camping.jpg";
import traditionalCamp from "@/assets/traditional-camp-new.jpg";
import heroImage from "@/assets/hero-desert.jpg";

const campingOptions = [
  {
    id: "bubble-camps",
    title: "Bubble Camps",
    description: "Private transparent tents with panoramic stargazing and comfortable amenities.",
    image: bubbleCamp,
    pros: [
      "Private tents with panoramic views",
      "Comfortable beds and amenities", 
      "Some units have private bathrooms and AC",
      "Perfect for stargazing",
      "Great for couples and special occasions"
    ],
    bestFor: "Couples, special occasions, comfort seekers",
    notes: "Limited availability; book early. Some units have private bathrooms and AC.",
    amenities: ["Private tent", "Comfortable bed", "Panoramic views", "Some with private bathroom"]
  },
  {
    id: "traditional-camps", 
    title: "Traditional Bedouin Camps",
    description: "Fireside tea, music, shared meals, and authentic cultural immersion with the local community.",
    image: traditionalCamp,
    pros: [
      "Authentic cultural experience",
      "Shared meals with traditional cooking",
      "Evening music and storytelling",
      "Community atmosphere",
      "Learn about Bedouin traditions"
    ],
    bestFor: "Families, groups, cultural enthusiasts",
    notes: "Shared facilities in many camps; electricity available in set hours.",
    amenities: ["Traditional tents", "Shared meals", "Cultural activities", "Campfire gatherings"]
  },
  {
    id: "outside-camping",
    title: "Outside Camping Under the Stars", 
    description: "Pure desert silence, flexible locations, and sunrise at your doorstep. The most authentic desert experience.",
    image: outsideCamping,
    pros: [
      "Complete desert silence",
      "Flexible camping locations",
      "Sunrise at your doorstep", 
      "Most authentic experience",
      "Perfect for photographers"
    ],
    bestFor: "Adventure travelers, photographers, nature lovers",
    notes: "Basic setup; warm layers recommended year-round; backup tents available in case of wind.",
    amenities: ["Sleeping mats", "Blankets", "Basic shelter", "Campfire setup"]
  }
];

export default function Camping() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center bg-gradient-to-b from-dune-amber/20 to-desert-sand/30">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Camping Options
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Choose how you want to sleep in the desert. From luxury bubbles to classic Bedouin tents—or roll out your mat and watch the Milky Way.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
              Three Ways to Experience Desert Nights
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Every camping style offers a unique way to connect with Wadi Rum's stunning night sky. I'll help you choose the option that best fits your comfort level, budget, and the type of experience you're seeking.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-dune-amber rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Luxury</h3>
                <p className="text-foreground/70 text-sm">Bubble camps with all amenities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-dune-amber rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Cultural</h3>
                <p className="text-foreground/70 text-sm">Traditional Bedouin experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-night-sky rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tent className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Adventure</h3>
                <p className="text-foreground/70 text-sm">Sleeping under open sky</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Camping Options Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {campingOptions.map((option, index) => (
              <div key={option.id} id={option.id} className="scroll-mt-24">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={option.image} 
                        alt={option.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-night-sky/90 text-cloud-white text-sm px-3 py-1">
                          {option.title}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                      {option.title}
                    </h2>
                    <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                      {option.description}
                    </p>

                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Star className="h-5 w-5 mr-2 text-dune-amber" />
                          Why Choose This Style
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {option.pros.map((pro, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-dune-amber mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-foreground/80">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Best For</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground/80 text-sm">{option.bestFor}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Amenities</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {option.amenities.map((amenity, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {amenity}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-dune-amber/10 border border-dune-amber/20 rounded-lg p-4 mb-6">
                      <p className="text-foreground/80 text-sm">
                        <strong>Booking Note:</strong> {option.notes}
                      </p>
                    </div>

                    <Button 
                      variant="hero" 
                      size="lg"
                      asChild
                    >
                      <a href={`/contact#booking?camping=${encodeURIComponent(option.title)}`}>
                        Book {option.title}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-night-sky text-cloud-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-cloud-white">
            Not Sure Which Style to Choose?
          </h2>
          <p className="text-xl text-cloud-white/90 mb-8 max-w-3xl mx-auto">
            Tell me about your travel style, comfort preferences, and what you hope to experience. I'll recommend the perfect camping option for your desert adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="desert" 
              size="lg" 
              asChild
            >
              <a href="/contact#booking">
                Get My Recommendation
              </a>
            </Button>
            <Button 
              variant="sand" 
              size="lg" 
              asChild
            >
              <a href="https://wa.me/962779886572" target="_blank">
                WhatsApp Yousef
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
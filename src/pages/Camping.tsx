import { Star, Tent, Users, Wifi, Car, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import bubbleCamp from "@/assets/bubble-camp.jpg";
import heroImage from "@/assets/hero-desert.jpg";
import jeepTour from "@/assets/jeep-tour.jpg";

const campingOptions = [
  {
    id: "bubble-camps",
    title: "Bubble Camps",
    subtitle: "Luxury Desert Experience",
    description: "Sleep under the stars in complete comfort with panoramic views of the night sky through transparent walls.",
    image: bubbleCamp,
    pros: [
      "Private transparent tents with 360° star views",
      "Comfortable beds with quality linens",
      "Climate control (heating/cooling)",
      "Private bathroom facilities",
      "Electricity and charging stations",
      "Restaurant-quality meals included"
    ],
    bestFor: ["Couples seeking romance", "Special occasion celebrations", "Comfort-focused travelers", "Photography enthusiasts"],
    amenities: ["Private bathroom", "AC/Heating", "Quality bedding", "Power outlets", "Room service"],
    bookingNote: "Limited availability - book early, especially during peak season (Oct-Apr)"
  },
  {
    id: "traditional-camps", 
    title: "Traditional Bedouin Camps",
    subtitle: "Authentic Cultural Experience",
    description: "Experience authentic Bedouin hospitality with shared meals, traditional music, and stories around the campfire.",
    image: jeepTour,
    pros: [
      "Authentic goat hair tents (beit sha'ar)",
      "Traditional Bedouin meals and tea ceremonies", 
      "Live music and cultural entertainment",
      "Shared community atmosphere",
      "Stories and legends from local guides",
      "Affordable group-friendly pricing"
    ],
    bestFor: ["Families with children", "Cultural immersion seekers", "Group travelers", "Budget-conscious visitors"],
    amenities: ["Shared facilities", "Traditional meals", "Campfire area", "Cultural programs", "Basic electricity"],
    bookingNote: "Electricity available during set hours (usually 6-11 PM). Shared bathroom facilities."
  },
  {
    id: "outside-camping",
    title: "Outside Camping Under the Stars",
    subtitle: "Pure Desert Adventure", 
    description: "Sleep directly under the Milky Way with nothing between you and the infinite desert sky. The most authentic way to experience Wadi Rum's silence.",
    image: heroImage,
    pros: [
      "Unobstructed views of the Milky Way",
      "Complete desert silence and solitude",
      "Flexible locations for best sunrise/sunset",
      "Authentic Bedouin-style experience",
      "Wake up to sunrise at your doorstep",
      "Most affordable camping option"
    ],
    bestFor: ["Adventure travelers", "Stargazing enthusiasts", "Photographers", "Minimalist travelers"],
    amenities: ["Sleeping mats & blankets", "Backup tent (weather)", "Basic meals", "Campfire", "Portable facilities"],
    bookingNote: "Warm layers recommended year-round. Weather-dependent with backup indoor options."
  }
];

export default function Camping() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-night-sky/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-cloud-white mb-6">
            Camping Options
          </h1>
          <p className="text-xl text-cloud-white/90 max-w-3xl mx-auto leading-relaxed">
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
                <div className="w-16 h-16 bg-oasis-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-success-foreground" />
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
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={option.image} 
                        alt={option.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-night-sky/90 text-cloud-white text-sm px-3 py-1">
                          {option.subtitle}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
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
                              <div className="w-2 h-2 rounded-full bg-oasis-green mt-2 mr-3 flex-shrink-0"></div>
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
                          <ul className="space-y-1">
                            {option.bestFor.map((item, i) => (
                              <li key={i} className="text-foreground/80 text-sm">• {item}</li>
                            ))}
                          </ul>
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
                        <strong>Booking Note:</strong> {option.bookingNote}
                      </p>
                    </div>

                    <Button 
                      variant="hero" 
                      size="lg"
                      asChild
                      className="shadow-desert"
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

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-8 text-center">
              Quick Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-background rounded-2xl shadow-soft">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-heading font-semibold">Feature</th>
                    <th className="text-center p-6 font-heading font-semibold">Bubble Camps</th>
                    <th className="text-center p-6 font-heading font-semibold">Bedouin Camps</th>
                    <th className="text-center p-6 font-heading font-semibold">Outside Camping</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">Privacy Level</td>
                    <td className="p-6 text-center">Private</td>
                    <td className="p-6 text-center">Shared</td>
                    <td className="p-6 text-center">Private</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">Bathroom</td>
                    <td className="p-6 text-center">Private</td>
                    <td className="p-6 text-center">Shared</td>
                    <td className="p-6 text-center">Basic</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">Star Views</td>
                    <td className="p-6 text-center">Through ceiling</td>
                    <td className="p-6 text-center">Outside tent</td>
                    <td className="p-6 text-center">Direct</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-6 font-medium">Comfort Level</td>
                    <td className="p-6 text-center">High</td>
                    <td className="p-6 text-center">Medium</td>
                    <td className="p-6 text-center">Basic</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Best Season</td>
                    <td className="p-6 text-center">All year</td>
                    <td className="p-6 text-center">All year</td>
                    <td className="p-6 text-center">Oct-Apr ideal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-sunset text-cloud-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
            Not Sure Which Style to Choose?
          </h2>
          <p className="text-xl text-cloud-white/90 mb-8 max-w-3xl mx-auto">
            Tell me about your travel style, comfort preferences, and what you hope to experience. I'll recommend the perfect camping option for your desert adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="bg-cloud-white/10 text-cloud-white border-cloud-white/30 hover:bg-cloud-white hover:text-night-sky"
            >
              <a href="/contact#booking">
                Get My Recommendation
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="bg-cloud-white/10 text-cloud-white border-cloud-white/30 hover:bg-cloud-white hover:text-night-sky"
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
import { useParams } from "react-router-dom";
import { Clock, TrendingUp, Users, MapPin, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getExperience } from "@/data/experiences";
import heroImage from "@/assets/hero-desert.jpg";

const difficultyColors = {
  Easy: "bg-dune-amber text-accent-foreground",
  Moderate: "bg-dune-amber text-accent-foreground", 
  Challenging: "bg-destructive text-destructive-foreground"
};

export default function ExperienceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const experience = slug ? getExperience(slug) : undefined;

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Experience Not Found</h1>
          <p className="text-muted-foreground mb-8">The experience you're looking for doesn't exist.</p>
          <Button variant="outline" asChild>
            <a href="/experiences">Browse All Experiences</a>
          </Button>
        </div>
      </div>
    );
  }

  const bookingUrl = `/contact#booking?experience=${encodeURIComponent(experience.title)}`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${experience.image || heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-night-sky/50"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-4">
            <Badge className={`${difficultyColors[experience.difficulty]} text-lg px-4 py-2`}>
              <TrendingUp className="h-5 w-5 mr-2" />
              {experience.difficulty}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-cloud-white mb-4">
            {experience.title}
          </h1>
          <p className="text-xl text-cloud-white/90 mb-6">
            {experience.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-cloud-white">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              {experience.duration}
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Private Guide
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Wadi Rum
            </div>
          </div>
        </div>
      </section>

      {/* Experience Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {/* Summary */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                    Experience Overview
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Duration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">{experience.duration}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Best Time</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">{experience.bestTime}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                      Experience Highlights
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {experience.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-dune-amber mr-3" />
                          <span className="text-foreground/80">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Detailed Sections */}
                <Accordion type="multiple" defaultValue={["itinerary", "included"]} className="space-y-4">
                  <AccordionItem value="itinerary">
                    <AccordionTrigger className="text-xl font-heading font-semibold">
                      Detailed Itinerary
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {experience.itinerary.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-dune-amber text-accent-foreground text-sm font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-foreground/80">{item}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="included">
                    <AccordionTrigger className="text-xl font-heading font-semibold">
                      What's Included
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {experience.included.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-dune-amber mr-3" />
                            <span className="text-foreground/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="not-included">
                    <AccordionTrigger className="text-xl font-heading font-semibold">
                      What's Not Included
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {experience.notIncluded.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <XCircle className="h-4 w-4 text-muted-foreground mr-3" />
                            <span className="text-foreground/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="what-to-bring">
                    <AccordionTrigger className="text-xl font-heading font-semibold">
                      What to Bring
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {experience.whatToBring.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <AlertCircle className="h-4 w-4 text-dune-amber mr-3" />
                            <span className="text-foreground/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="safety">
                    <AccordionTrigger className="text-xl font-heading font-semibold">
                      Safety & Important Notes
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {experience.safetyNotes.map((note, index) => (
                          <div key={index} className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-destructive mr-3 mt-0.5" />
                            <span className="text-foreground/80">{note}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Booking Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="shadow-desert">
                    <CardHeader>
                      <CardTitle className="text-xl text-center">
                        Ready to Book?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-center text-foreground/80">
                        Tell me your dates and group size. I'll respond within 24 hours with availability and details.
                      </p>
                      <Button variant="hero" className="w-full" asChild>
                        <a href={bookingUrl}>
                          Book This Experience
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://wa.me/962779886572" target="_blank">
                          WhatsApp Yousef
                        </a>
                      </Button>
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-semibold text-foreground mb-2">Quick Info</h4>
                        <div className="space-y-2 text-sm text-foreground/80">
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Difficulty:</span>
                            <Badge className={`${difficultyColors[experience.difficulty]} text-xs`}>
                              {experience.difficulty}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Guide Type:</span>
                            <span>Private</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Experiences */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-8 text-center">
            Other Experiences You Might Enjoy
          </h2>
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="/experiences">
                Browse All Experiences
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
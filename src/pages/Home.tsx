import { ArrowRight, Star, Users, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ExperienceCard from "@/components/ExperienceCard";
import { getAllExperiences } from "@/data/experiences";
import heroImage from "@/assets/hero-desert.jpg";
import yousefPortrait from "@/assets/yousef-main-1.jpeg";
import yousefAbout from "@/assets/yousef-main-2.jpeg";
import bubbleCamp from "@/assets/bubble-camp.jpg";
import jeepTour from "@/assets/jeep_tour.jpg";
import outsideCamping from "@/assets/outside_camping.jpg";
import camelRide from "@/assets/camel_ride.jpg";
import trekking from "@/assets/trekking.jpg";
import touristJumping from "@/assets/picture_with_tourist.jpg";
import FloatingObjects from "@/components/FloatingObjects";

const experiences = getAllExperiences();

const campingOptions = [
  {
    title: "Bubble Camps",
    description: "Private transparent tents with panoramic stargazing and comfortable amenities.",
    image: bubbleCamp,
    href: "/camping#bubble-camps",
    badge: "Luxury Experience"
  },
  {
    title: "Traditional Bedouin Camps", 
    description: "Fireside tea, music, shared meals, and authentic cultural immersion.",
    image: jeepTour,
    href: "/camping#traditional-camps",
    badge: "Cultural Immersion"
  },
  {
    title: "Outside Camping Under Stars",
    description: "Pure desert silence, flexible locations, and sunrise at your doorstep.",
    image: outsideCamping,
    href: "/camping#outside-camping",
    badge: "Adventure"
  }
];

const faqs = [
  {
    question: "When is the best time to visit Wadi Rum?",
    answer: "Spring (Mar–May) and autumn (Sep–Nov) for mild temperatures; winter nights can be cold and summer afternoons hot."
  },
  {
    question: "Are tours suitable for children?", 
    answer: "Yes—jeep tours and short hikes are family-friendly; we adapt pace and stops."
  },
  {
    question: "Do you offer private tours?",
    answer: "Yes, all experiences here are private unless you request to join a group."
  },
  {
    question: "How do I book?",
    answer: "Use the booking form or WhatsApp; I'll reply within 24 hours to confirm availability."
  },
  {
    question: "Is outside camping safe?",
    answer: "Yes—locations are chosen for safety and shelter; a backup tent is available in case of wind."
  },
  {
    question: "What's included in a jeep tour?",
    answer: "Guide/driver, vehicle, fuel, tea, scenic stops; meals depend on tour length."
  }
];

export default function Home() {
  const scrollToBooking = () => {
    const booking = document.getElementById('booking');
    if (booking) {
      booking.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact#booking';
    }
  };

  const scrollToExperiences = () => {
    const experiences = document.getElementById('experiences');
    if (experiences) {
      experiences.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <FloatingObjects />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-night-sky/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-cloud-white mb-6 leading-tight animate-fade-in">
            Explore Wadi Rum with a Yousef
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animate-stagger-2">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToBooking}
              className="text-lg px-8 py-4 shadow-night hover:shadow-desert"
            >
              Book / Reserve
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToExperiences}
              className="text-lg px-8 py-4 bg-cloud-white/10 text-cloud-white border-cloud-white/30 hover:bg-cloud-white/20"
            >
              See Experiences
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="py-20 bg-desert-sand/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-slide-in-left">
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
                  Your Local Desert Guide
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                    I'm Yousef, a Bedouin guide from Wadi Rum. I specialize in <strong>outside camping under the stars</strong> and also arrange traditional Bedouin camps and luxury bubble camps—so you can choose the style that fits you.
                  </p>
                  <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                    Safety, storytelling, and local knowledge are at the heart of every trip. Every experience is private and tailored to your pace and interests.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge variant="secondary" className="px-3 py-1">
                    <Users className="h-4 w-4 mr-2" />
                    Private Guiding
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    Local Expertise
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    <Star className="h-4 w-4 mr-2" />
                    Family-Friendly
                  </Badge>
                </div>
                <Button variant="outline" asChild size="lg">
                  <a href="/about">
                    Read My Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="order-1 lg:order-2 animate-slide-in-right">
                <div className="relative">
                  <img 
                    src={yousefPortrait} 
                    alt="Yousef - Wadi Rum Guide"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-desert hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-dune-amber/20 rounded-full animate-float" />
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-desert-sand/15 rounded-full animate-float-reverse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desert Experiences */}
      <section id="experiences" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Desert Experiences
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your adventure: from gentle jeep tours to challenging summit climbs. Every experience is private and adapted to your pace.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
            {experiences.map((experience, index) => (
              <div key={experience.slug} className={`animate-fade-in animate-stagger-${Math.min((index % 4) + 1, 4)}`}>
                <ExperienceCard
                  title={experience.title}
                  description={experience.description}
                  duration={experience.duration}
                  difficulty={experience.difficulty}
                  slug={experience.slug}
                  image={experience.image}
                  highlights={experience.highlights.slice(0, 3)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camping Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Camping Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose how you want to sleep in the desert. From luxury bubbles to classic Bedouin tents—or roll out your mat and watch the Milky Way.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            {campingOptions.map((option, index) => (
              <div key={index} className={`group animate-fade-in animate-stagger-${Math.min(index + 1, 3)}`}>
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-night-sky/90 text-cloud-white">
                      {option.badge}
                    </Badge>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {option.description}
                </p>
                <Button variant="outline" asChild className="group-hover:bg-dune-amber group-hover:text-accent-foreground group-hover:border-dune-amber transition-all">
                  <a href={option.href}>Book this style</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              From the Desert Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Follow my latest adventures and see Wadi Rum through my eyes
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              { img: touristJumping, alt: "Desert adventure with tourists" },
              { img: trekking, alt: "Trekking in Wadi Rum" },
              { img: camelRide, alt: "Camel ride experience" },
              { img: jeepTour, alt: "Jeep tour in the desert" },
              { img: outsideCamping, alt: "Camping under the stars" },
              { img: yousefAbout, alt: "Yousef in traditional attire" }
            ].map((item, i) => (
              <div key={i} className={`aspect-square bg-desert-sand rounded-lg overflow-hidden animate-fade-in animate-stagger-${Math.min(i + 1, 4)}`}>
                <img 
                  src={item.img} 
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center animate-fade-in animate-stagger-3">
            <Button 
              variant="outline" 
              size="lg" 
              className="hover:bg-dune-amber hover:text-accent-foreground hover:border-dune-amber animate-pulse-glow"
              asChild
            >
              <a href="https://www.instagram.com/youssef.wadirum" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Follow @youssef.wadirum
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Questions? I've got answers.
            </h2>
            <p className="text-xl text-muted-foreground">
              Here are some of the most common questions from travelers
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background p-6 rounded-2xl shadow-soft">
                <h3 className="font-heading font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild size="lg">
              <a href="/contact#faq">
                View All FAQs
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Strip */}
      <section id="booking" className="py-20 bg-gradient-sunset text-cloud-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-dune-amber">
            Ready for Your Desert Adventure?
          </h2>
          <p className="text-xl text-dune-amber/90 mb-8 max-w-2xl mx-auto">
            Tell me your dates and what you'd like to do. I'll reply personally and help plan every detail.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="bg-cloud-white/10 text-cloud-white border-cloud-white/30 hover:bg-cloud-white hover:text-night-sky text-lg px-8 py-4"
          >
            <a href="/contact#booking">
              Start Planning Your Trip
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
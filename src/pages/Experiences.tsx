import { Button } from "@/components/ui/button";
import ExperienceCard from "@/components/ExperienceCard";
import { getAllExperiences } from "@/data/experiences";
import heroImage from "@/assets/hero-desert.jpg";

const experiences = getAllExperiences();

export default function Experiences() {
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
          <div className="absolute inset-0 bg-night-sky/50"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-cloud-white mb-6">
            Desert Experiences
          </h1>
          <p className="text-xl text-cloud-white/90 max-w-2xl mx-auto leading-relaxed">
            Choose your adventure in Wadi Rum. Every experience is private, guided by me personally, and adapted to your interests and pace.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
              From Gentle Jeep Tours to Mountain Summits
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              As your private Bedouin guide, I'll show you the hidden corners of Wadi Rum that most tourists never see. Whether you're seeking gentle exploration or challenging adventures, we'll create an experience that's perfect for you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-dune-amber rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">8</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Unique Experiences</h3>
                <p className="text-foreground/70">From easy camel rides to challenging summit climbs</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-oasis-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-success-foreground">100%</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Private Tours</h3>
                <p className="text-foreground/70">Every experience is exclusively yours</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-night-sky rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">22</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Years Old</h3>
                <p className="text-foreground/70">Born and raised in Wadi Rum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Experiences */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              All Desert Experiences
            </h2>
            <p className="text-xl text-muted-foreground">
              Each experience includes professional guiding, safety briefing, and can be customized to your group's needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.slug}
                title={experience.title}
                description={experience.description}
                duration={experience.duration}
                difficulty={experience.difficulty}
                slug={experience.slug}
                highlights={experience.highlights.slice(0, 4)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-sand">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
            Can't Decide? Let's Talk
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Every traveler is different. Tell me about your interests, fitness level, and what you hope to experience in Wadi Rum. I'll help you choose the perfect adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <a href="/contact#booking">
                Plan My Adventure
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://wa.me/962779886572" target="_blank">
                WhatsApp Me
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
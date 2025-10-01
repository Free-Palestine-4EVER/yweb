import { useState } from "react";
import { MessageCircle, Mail, MapPin, Phone, Clock, Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Comprehensive FAQ data (40 questions)
const faqs = [
  {
    id: "best-time",
    question: "When is the best time to visit Wadi Rum?",
    answer: "Spring (Mar–May) and autumn (Sep–Nov) for mild temperatures; winter nights can be cold and summer afternoons hot."
  },
  {
    id: "year-round",
    question: "Can trips run year-round?",
    answer: "Yes, with schedule adjustments for heat or shorter daylight."
  },
  {
    id: "what-wear",
    question: "What should I wear?",
    answer: "Breathable layers, sun hat, sunglasses, sturdy shoes; warm layer for evenings year-round."
  },
  {
    id: "children",
    question: "Are tours suitable for children?",
    answer: "Yes—jeep tours and short hikes are family-friendly; we adapt pace and stops."
  },
  {
    id: "fitness",
    question: "How fit do I need to be?",
    answer: "Most tours are Easy–Moderate; Jebel Umm Ad Dami and Burdah require sure-footedness."
  },
  {
    id: "private-tours",
    question: "Do you offer private tours?",
    answer: "Yes, all experiences here are private unless you request to join a group."
  },
  {
    id: "booking",
    question: "How do I book?",
    answer: "Use the booking form or WhatsApp; I'll confirm availability and details."
  },
  {
    id: "deposit",
    question: "Do you require a deposit?",
    answer: "Usually yes for overnights; details shared on confirmation."
  },
  {
    id: "payment",
    question: "What payment methods are accepted?",
    answer: "Cash (JOD), major cards via link, or bank transfer (details on request)."
  },
  {
    id: "transport",
    question: "Can you arrange transport from Aqaba, Petra, or Amman?",
    answer: "Yes, private transfers can be arranged at extra cost."
  },
  {
    id: "outside-safety",
    question: "Is outside camping safe?",
    answer: "Yes—locations are chosen for safety and shelter; a backup tent is available in case of wind."
  },
  {
    id: "ac",
    question: "Are bubble camps air-conditioned?",
    answer: "Many are; specifics depend on the camp assigned—ask during booking."
  },
  {
    id: "bathrooms",
    question: "Do camps have private bathrooms?",
    answer: "Bubble camps often do; traditional camps typically have shared facilities."
  },
  {
    id: "charging",
    question: "Can I charge my phone/camera?",
    answer: "Yes; availability varies—power banks recommended."
  },
  {
    id: "wifi",
    question: "Is there mobile reception or Wi-Fi?",
    answer: "Reception varies; some camps provide Wi-Fi. Offline maps recommended."
  },
  {
    id: "vegetarian",
    question: "Food options for vegetarians/vegans?",
    answer: "Absolutely—tell me your preferences in advance."
  },
  {
    id: "jeep-included",
    question: "What's included in a jeep tour?",
    answer: "Guide/driver, vehicle, fuel, tea, scenic stops; meals depend on tour length."
  },
  {
    id: "hiking-included",
    question: "What's included on hikes/treks?",
    answer: "Local guide, route planning, safety checks; meals and camping gear if specified."
  },
  {
    id: "sunrise-sunset",
    question: "Can we watch sunrise/sunset?",
    answer: "Yes—add as an option in your booking."
  },
  {
    id: "umm-ad-dami",
    question: "What is Jebel Umm Ad Dami?",
    answer: "Jordan's highest peak (~1,854m) near the Saudi border—full-day hike with grand views."
  },
  {
    id: "burdah-duration",
    question: "How long is the Burdah Arch hike?",
    answer: "Typically 4–6 hours round trip depending on pace."
  },
  {
    id: "khash-route",
    question: "What is the Jebel Khash route like?",
    answer: "Quiet ridge walk with wide views; great for sunrise/sunset and light camping."
  },
  {
    id: "restrooms",
    question: "Are restrooms available during tours?",
    answer: "In camps and at some stops; otherwise nature spots—bring tissues and a small bag."
  },
  {
    id: "water",
    question: "Do you provide water?",
    answer: "Yes—bring a reusable bottle; we carry extra."
  },
  {
    id: "sustainability",
    question: "What about trash and sustainability?",
    answer: "We follow Leave No Trace: pack out waste and avoid disturbing wildlife."
  },
  {
    id: "customize",
    question: "Can you tailor an itinerary?",
    answer: "Yes—tell me your interests (photography, culture, adventure) and time."
  },
  {
    id: "bad-weather",
    question: "What happens in bad weather?",
    answer: "We adapt the plan or reschedule when possible for safety."
  },
  {
    id: "drone",
    question: "Can I fly a drone?",
    answer: "Check current regulations and permits; restrictions may apply."
  },
  {
    id: "tipping",
    question: "Is tipping expected?",
    answer: "Not required, but appreciated for good service."
  },
  {
    id: "night-tours",
    question: "Do you run sunrise or night tours?",
    answer: "Yes—on request; great for astrophotography and cooler hours."
  },
  {
    id: "multi-day",
    question: "Can you arrange multi-day treks with camping?",
    answer: "Yes, with all meals and gear if needed."
  },
  {
    id: "languages",
    question: "What languages do you speak?",
    answer: "English and Arabic (others on request)."
  },
  {
    id: "group-discounts",
    question: "Do you offer group discounts?",
    answer: "For larger groups—ask in your inquiry."
  },
  {
    id: "permits",
    question: "Are permits required to enter Wadi Rum?",
    answer: "Yes—entry fees are typically paid at the Visitor Center; Jordan Pass may apply."
  },
  {
    id: "start-location",
    question: "Where do tours start?",
    answer: "Usually Wadi Rum Village unless a transfer is arranged."
  },
  {
    id: "other-sites",
    question: "Can you help with Petra/Dead Sea/Amman itineraries?",
    answer: "Yes—happy to advise or arrange extensions."
  },
  {
    id: "sleeping-gear",
    question: "Do you provide sleeping gear for outside camping?",
    answer: "Yes—mats, blankets, and tents as needed (confirm during booking)."
  },
  {
    id: "alcohol",
    question: "Is alcohol allowed at camp?",
    answer: "Respectful, moderate consumption is acceptable where permitted; please pack out waste."
  },
  {
    id: "last-minute",
    question: "Can I book last-minute?",
    answer: "Sometimes—WhatsApp for fastest response."
  },
  {
    id: "advance-booking",
    question: "How far in advance should I book bubble camps?",
    answer: "As early as possible—peak months fill quickly."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    arrivalDate: "",
    departureDate: "",
    adults: 1,
    children: 0,
    experiences: [] as string[],
    campingPreference: "",
    pace: "",
    addOns: [] as string[],
    transport: "",
    dietaryNotes: "",
    languages: [] as string[],
    preferredContact: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to be contacted about your inquiry.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `
Desert Adventure Inquiry:

📅 Dates: ${formData.arrivalDate} - ${formData.departureDate}
👥 Group: ${formData.adults} adults${formData.children > 0 ? `, ${formData.children} children` : ''}
🏜️ Experiences: ${formData.experiences.join(', ') || 'To be discussed'}
🏕️ Camping: ${formData.campingPreference || 'To be discussed'}
🚗 Transport: ${formData.transport || 'To be discussed'}

📞 Contact: ${formData.name}
📧 Email: ${formData.email}
${formData.phone ? `📱 Phone: ${formData.phone}` : ''}

${formData.message ? `💬 Message: ${formData.message}` : ''}
    `.trim();

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/962779886572?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // Show success message
    toast({
      title: "Thanks! Opening WhatsApp...",
      description: "I'll reach out within 24 hours to confirm details.",
    });
  };

  const handleExperienceChange = (experience: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        experiences: [...prev.experiences, experience]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        experiences: prev.experiences.filter(exp => exp !== experience)
      }));
    }
  };

  const handleAddOnChange = (addOn: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        addOns: [...prev.addOns, addOn]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        addOns: prev.addOns.filter(item => item !== addOn)
      }));
    }
  };

  return (
    <div className="min-h-screen">
      {/* Contact Header */}
      <section className="py-16 bg-gradient-sand">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Plan Your Desert Adventure
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Tell me your dates and what you'd like to do. I'll reply personally and help plan every detail.
            </p>
            
            {/* Quick Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center hover:shadow-desert transition-all">
                <CardContent className="p-6">
                  <MessageCircle className="h-8 w-8 text-dune-amber mx-auto mb-3" />
                  <h3 className="font-heading font-semibold mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-3">Fastest response</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://wa.me/962779886572" target="_blank">
                      +962 7 7988 6572
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-desert transition-all">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-dune-amber mx-auto mb-3" />
                  <h3 className="font-heading font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground mb-3">Detailed inquiries</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:hello@yousef-wadirum.guide">
                      Email Me
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-desert transition-all">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-night-sky mx-auto mb-3" />
                  <h3 className="font-heading font-semibold mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground mb-3">Meet in person</p>
                  <Button variant="outline" size="sm" disabled>
                    Wadi Rum Village
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Booking Form */}
      <section id="booking" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
                Detailed Booking Form
              </h2>
              <p className="text-muted-foreground">
                The more details you provide, the better I can customize your experience
              </p>
            </div>

            <Card className="shadow-desert">
              <CardHeader>
                <CardTitle className="text-xl">Tell Me About Your Trip</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Trip Dates */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="arrival">Arrival Date *</Label>
                      <Input 
                        type="date" 
                        id="arrival"
                        required
                        value={formData.arrivalDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, arrivalDate: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="departure">Departure Date *</Label>
                      <Input 
                        type="date" 
                        id="departure"
                        required
                        value={formData.departureDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, departureDate: e.target.value }))}
                      />
                    </div>
                  </div>

                  {/* Group Size */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="adults">Adults *</Label>
                      <Input 
                        type="number" 
                        id="adults"
                        min="1"
                        max="12"
                        required
                        value={formData.adults}
                        onChange={(e) => setFormData(prev => ({ ...prev, adults: parseInt(e.target.value) }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="children">Children</Label>
                      <Input 
                        type="number" 
                        id="children"
                        min="0"
                        max="8"
                        value={formData.children}
                        onChange={(e) => setFormData(prev => ({ ...prev, children: parseInt(e.target.value) }))}
                      />
                    </div>
                  </div>

                  {/* Experiences */}
                  <div>
                    <Label className="text-base mb-4 block">Experiences (select all that interest you) *</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        { name: "Hiking", price: 70 },
                        { name: "Trekking", price: 80 },
                        { name: "8-Hour Full-Day Jeep Tour", price: 65 },
                        { name: "4-Hour Half-Day Jeep Tour", price: 50 },
                        { name: "Camel Rides", price: 25 },
                        { name: "Jebel Umm Ad Dami", price: 110 },
                        { name: "Burdah Arch", price: 80 },
                        { name: "Jebel Khash Route", price: 100 }
                      ].map(experience => (
                        <div key={experience.name} className="flex items-center justify-between space-x-2 p-2 rounded hover:bg-muted/50">
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id={experience.name}
                              checked={formData.experiences.includes(experience.name)}
                              onCheckedChange={(checked) => handleExperienceChange(experience.name, checked as boolean)}
                            />
                            <Label htmlFor={experience.name} className="text-sm font-normal cursor-pointer">{experience.name}</Label>
                          </div>
                          <span className="text-sm font-semibold text-dune-amber whitespace-nowrap">{experience.price} JOD</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">All prices include accommodation</p>
                  </div>

                  {/* Camping Preference */}
                  <div>
                    <Label htmlFor="camping">Camping Preference</Label>
                    <Select value={formData.campingPreference} onValueChange={(value) => setFormData(prev => ({ ...prev, campingPreference: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your preferred camping style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="outside">Outside under the stars</SelectItem>
                        <SelectItem value="traditional">Traditional Bedouin camp</SelectItem>
                        <SelectItem value="bubble">Bubble camp</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Pace & Fitness */}
                  <div>
                    <Label className="text-base mb-3 block">Pace & Fitness Level</Label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {["Relaxed", "Moderate", "Active"].map(pace => (
                        <div key={pace} className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            id={pace} 
                            name="pace" 
                            value={pace}
                            checked={formData.pace === pace}
                            onChange={(e) => setFormData(prev => ({ ...prev, pace: e.target.value }))}
                            className="text-dune-amber"
                          />
                          <Label htmlFor={pace} className="text-sm font-normal">{pace}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div>
                    <Label className="text-base mb-4 block">Add-ons</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Sunset spot", "Sunrise start", "Tea ceremony", 
                        "Bedouin dinner", "Photography stops"
                      ].map(addOn => (
                        <div key={addOn} className="flex items-center space-x-2">
                          <Checkbox 
                            id={addOn}
                            checked={formData.addOns.includes(addOn)}
                            onCheckedChange={(checked) => handleAddOnChange(addOn, checked as boolean)}
                          />
                          <Label htmlFor={addOn} className="text-sm font-normal">{addOn}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transport */}
                  <div>
                    <Label htmlFor="transport">Pick-up/Drop-off</Label>
                    <Select value={formData.transport} onValueChange={(value) => setFormData(prev => ({ ...prev, transport: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Where should I meet you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="village">Wadi Rum Village</SelectItem>
                        <SelectItem value="petra">Petra</SelectItem>
                        <SelectItem value="aqaba">Aqaba</SelectItem>
                        <SelectItem value="amman">Amman</SelectItem>
                        <SelectItem value="other">Other location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Personal Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-heading font-semibold">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          type="email" 
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone / WhatsApp Number</Label>
                      <Input 
                        type="tel" 
                        id="phone"
                        placeholder="+962 7 XXXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <Label htmlFor="message">Message to Yousef</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell me about your interests, any special requests, dietary requirements, or questions you have..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="consent"
                      required
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
                    />
                    <Label htmlFor="consent" className="text-sm leading-relaxed">
                      I agree to be contacted about my inquiry. Your information will only be used to respond to your request. *
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full md:w-auto shadow-desert"
                    disabled={!formData.consent}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Inquiry & Open WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about desert adventures in Wadi Rum
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="bg-background rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
              Contact Details
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <MessageCircle className="h-8 w-8 text-dune-amber mx-auto mb-3" />
                <h3 className="font-heading font-semibold mb-2">WhatsApp</h3>
                <p className="text-foreground/80">+962 7 7988 6572</p>
                <p className="text-sm text-muted-foreground">Available 7AM - 10PM Jordan time</p>
              </div>
              <div>
                <Mail className="h-8 w-8 text-dune-amber mx-auto mb-3" />
                <h3 className="font-heading font-semibold mb-2">Email</h3>
                <p className="text-foreground/80">hello@yousef-wadirum.guide</p>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              </div>
              <div>
                <MapPin className="h-8 w-8 text-night-sky mx-auto mb-3" />
                <h3 className="font-heading font-semibold mb-2">Location</h3>
                <p className="text-foreground/80">Wadi Rum Village</p>
                <p className="text-sm text-muted-foreground">Aqaba Governorate, Jordan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
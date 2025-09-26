import hikingImage from "@/assets/hiking-desert.jpg";
import trekkingImage from "@/assets/trekking.jpg";
import jeepFullImage from "@/assets/jeep-tour-8hour-new.jpg";
import jeepHalfImage from "@/assets/jeep-tour-4hour.webp";
import camelImage from "@/assets/camel_ride.jpg";
import summitImage from "@/assets/mountain-summit.jpg";
import burdahImage from "@/assets/burdah-arch.jpg";
import khashImage from "@/assets/hiking-desert.jpg";

export interface Experience {
  slug: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  highlights: string[];
  itinerary: string[];
  included: string[];
  notIncluded: string[];
  whatToBring: string[];
  safetyNotes: string[];
  bestTime: string;
  image?: string;
}

export const experiences: Experience[] = [
  {
    slug: "hiking",
    title: "Hiking",
    description: "Scenic trails across sandstone valleys and hidden canyons. We set the pace to your level.",
    duration: "Half-day or Full-day options",
    difficulty: "Easy",
    bestTime: "Morning or late afternoon for cooler temperatures",
    image: hikingImage,
    highlights: ["Scenic valleys", "Hidden canyons", "Rock formations", "Desert wildlife"],
    itinerary: [
      "Meet at Wadi Rum Village and equipment check",
      "Drive to trailhead (15-20 minutes)",
      "Begin hiking through sandstone formations",
      "Explore hidden canyon with ancient petroglyphs",
      "Tea break at scenic overlook",
      "Continue to natural arch formation", 
      "Photography stop at viewpoint",
      "Return hike with sunset colors (full-day option)",
      "Drive back to village"
    ],
    included: [
      "Professional local guide",
      "Transportation to/from trailheads", 
      "Traditional Bedouin tea",
      "Basic first aid kit",
      "Route planning and safety briefing"
    ],
    notIncluded: [
      "Meals (unless specified)",
      "Personal hiking gear", 
      "Travel insurance",
      "Gratuities"
    ],
    whatToBring: [
      "Sturdy hiking boots or shoes",
      "Sun hat and sunglasses", 
      "Sunscreen (SPF 30+)",
      "Refillable water bottle",
      "Layered clothing",
      "Camera",
      "Small daypack"
    ],
    safetyNotes: [
      "All hikes are adapted to your fitness level",
      "Weather conditions are monitored closely", 
      "Emergency communication device carried",
      "Alternative indoor shelter available if needed",
      "Maximum group size: 8 people"
    ]
  },
  {
    slug: "trekking", 
    title: "Trekking",
    description: "Multi-day routes with lightweight packs, sunsets from ridge lines, and quiet mornings in the dunes.",
    duration: "1-3 days",
    difficulty: "Moderate",
    bestTime: "Spring and autumn for multi-day comfort",
    image: trekkingImage,
    highlights: ["Ridge line sunsets", "Desert camping", "Sunrise views", "Ancient routes"],
    itinerary: [
      "Day 1: Village briefing and gear check",
      "Trek to first campsite via scenic valley",
      "Set up camp and prepare traditional dinner",
      "Stargazing session and desert stories",
      "Day 2: Early morning sunrise from ridge",
      "Pack camp and continue to second location",
      "Afternoon rest at natural shade",
      "Evening arrival at final camp spot",
      "Day 3: Morning exploration of rock formations", 
      "Return trek with stops for photography",
      "Celebration meal back at village"
    ],
    included: [
      "Experienced trekking guide",
      "All camping equipment (tents, sleeping mats)",
      "Meals throughout the trek",
      "Transportation of heavy gear by vehicle",
      "Emergency satellite communication"
    ],
    notIncluded: [
      "Personal trekking gear",
      "Sleeping bag (available to rent)",
      "Personal items and toiletries",
      "Travel insurance"
    ],
    whatToBring: [
      "Comfortable trekking boots",
      "Moisture-wicking base layers",
      "Warm layer for evenings",
      "Rain jacket (seasonal)",
      "Personal water bottles",
      "Headlamp with extra batteries", 
      "Personal medication"
    ],
    safetyNotes: [
      "Daily weather and route assessment",
      "Backup evacuation routes planned",
      "Regular check-ins with base camp",
      "Medical kit includes altitude sickness treatment",
      "Minimum fitness level required"
    ]
  },
  {
    slug: "jeep-full-day",
    title: "8-Hour Full-Day Jeep Tour", 
    description: "See Wadi Rum's highlights and secret spots with flexible stops for photos, tea, and short walks.",
    duration: "~8 hours",
    difficulty: "Easy",
    bestTime: "All year with seasonal time adjustments",
    image: jeepFullImage,
    highlights: ["Lawrence's Spring", "Red Sand Dune", "Natural bridges", "Bedouin tea ceremony"],
    itinerary: [
      "8:00 AM - Pickup from accommodation or village meeting point",
      "9:00 AM - First stop at Nabataean Temple ruins", 
      "10:30 AM - Lawrence's Spring with short hiking opportunity",
      "12:00 PM - Red Sand Dune climbing and photography",
      "1:00 PM - Lunch break with traditional meal",
      "2:30 PM - Khazali Canyon exploration (narrow siq)",
      "4:00 PM - Natural rock bridge and tea ceremony",
      "5:30 PM - Sunset viewpoint for golden hour photography",
      "7:00 PM - Return to village with desert night sounds"
    ],
    included: [
      "Private 4WD vehicle with driver/guide",
      "All fuel and vehicle costs",
      "Traditional Bedouin lunch",
      "Tea ceremony with Arabic coffee",
      "Entrance fees to protected areas"
    ],
    notIncluded: [
      "Accommodation pickup (available for extra cost)",
      "Personal expenses and souvenirs",
      "Additional meals or snacks",
      "Travel insurance"
    ],
    whatToBring: [
      "Comfortable clothing and sturdy shoes",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Camera with extra batteries",
      "Personal water bottle",
      "Light jacket for evening",
      "Cash for optional purchases"
    ],
    safetyNotes: [
      "Professional drivers with local route knowledge",
      "Vehicles regularly maintained and inspected", 
      "First aid kit and emergency contacts",
      "Flexible itinerary based on weather conditions",
      "Maximum 6 people per vehicle for comfort"
    ]
  },
  {
    slug: "jeep-half-day",
    title: "4-Hour Half-Day Jeep Tour",
    description: "Perfect if you're short on time—key vistas, natural arches, and Bedouin tea by the fire.",
    duration: "~4 hours (morning or afternoon)",
    difficulty: "Easy", 
    bestTime: "Morning for cooler temperatures, afternoon for sunset",
    image: jeepHalfImage,
    highlights: ["Natural arch", "Desert vistas", "Tea ceremony", "Rock formations"],
    itinerary: [
      "Morning Tour (8:00 AM - 12:00 PM):",
      "- Meet at village and brief introduction",
      "- Drive to Mushroom Rock formation",
      "- Short walk to natural arch (Jebel Burdah viewpoint)",
      "- Traditional tea break with panoramic views",
      "- Explore colorful rock formations",
      "Afternoon Tour (2:00 PM - 6:00 PM):",
      "- Same route with different lighting",
      "- Extended sunset viewing session", 
      "- Return under early stars"
    ],
    included: [
      "Private vehicle and driver/guide", 
      "Traditional Bedouin tea ceremony",
      "Short guided walks",
      "Basic refreshments",
      "Photography assistance"
    ],
    notIncluded: [
      "Meals (snacks available to purchase)",
      "Hotel transfers (arrangeable)",
      "Entrance fees to Jordan Pass sites",
      "Personal expenses"
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Sun hat and sunglasses",
      "Camera or phone for photos", 
      "Water bottle",
      "Light snack if desired",
      "Warm layer (afternoon tours)"
    ],
    safetyNotes: [
      "Shorter duration suitable for all fitness levels",
      "Easy walking on established paths",
      "Professional local guide throughout",
      "Vehicle equipped with safety equipment", 
      "Emergency procedures in place"
    ]
  },
  {
    slug: "camel-rides",
    title: "Camel Rides",
    description: "A traditional way to cross the sand—slow, peaceful, and unforgettable.",
    duration: "1-3 hours (extendable)",
    difficulty: "Easy",
    bestTime: "Early morning or late afternoon",
    image: camelImage,
    highlights: ["Traditional transport", "Peaceful desert crossing", "Camel handling experience", "Desert silence"],
    itinerary: [
      "Meet your camel and handler at the departure point",
      "Safety briefing and mounting instruction",
      "Begin gentle ride through sand dunes",
      "Photo stops at scenic locations",
      "Optional dismount for short walks",
      "Tea break in the desert (longer rides)",
      "Experience desert silence and sounds",
      "Return to starting point at walking pace"
    ],
    included: [
      "Well-trained camels and experienced handlers",
      "Safety briefing and riding instruction",
      "Traditional Bedouin tea (longer rides)",
      "Photo opportunities and assistance",
      "Cultural stories about Bedouin life"
    ],
    notIncluded: [
      "Transportation to camel station",
      "Meals or extensive refreshments", 
      "Personal riding equipment",
      "Travel insurance"
    ],
    whatToBring: [
      "Comfortable, loose-fitting clothes", 
      "Closed-toe shoes (no sandals)",
      "Sun protection (essential)",
      "Camera with secure strap",
      "Small water bottle",
      "Sense of adventure and patience"
    ],
    safetyNotes: [
      "All camels are gentle and well-trained",
      "Handlers have years of experience", 
      "Mounting and dismounting assistance provided",
      "Alternative activities if you're uncomfortable",
      "Height and weight restrictions may apply"
    ]
  },
  {
    slug: "jebel-umm-ad-dami",
    title: "Jebel Umm Ad Dami (Summit)",
    description: "Climb Jordan's highest peak with a local guide. Panoramic views over the Saudi border.", 
    duration: "Full day",
    difficulty: "Moderate", 
    bestTime: "Cooler months (October-April) recommended",
    image: summitImage,
    highlights: ["Jordan's highest peak", "Saudi border views", "Challenging climb", "Achievement summit"],
    itinerary: [
      "Early morning departure from village (6:00 AM)",
      "Drive to mountain base (1.5 hours)",
      "Begin ascent with guide briefing",
      "Climb through varied terrain and rock formations",
      "Rest breaks with hydration and snacks",
      "Final push to summit (1,854 meters)",
      "Panoramic photography session at the top",
      "Lunch break with views over Saudi Arabia",
      "Careful descent with different route if possible",
      "Return drive to village (late afternoon)"
    ],
    included: [
      "Experienced mountain guide",
      "4WD transportation to/from base",
      "Mountain lunch and snacks",
      "Safety equipment and first aid",
      "Summit certificate of achievement"
    ],
    notIncluded: [
      "Personal climbing gear",
      "Extra meals or beverages",
      "Hotel accommodation the night before/after", 
      "Travel and climbing insurance"
    ],
    whatToBring: [
      "Excellent hiking boots with ankle support",
      "Layered clothing for temperature changes",
      "Plenty of water (3+ liters recommended)",
      "Energy snacks and electrolytes", 
      "Sun protection and lip balm",
      "Camera with extra batteries",
      "Personal medications"
    ],
    safetyNotes: [
      "Good physical fitness required",
      "Weather conditions checked before departure",
      "Turnaround times enforced for safety",
      "Emergency evacuation procedures in place",
      "Not suitable for those with heart conditions or severe altitude sensitivity"
    ]
  },
  {
    slug: "burdah-arch", 
    title: "Burdah Arch",
    description: "Hike to one of Wadi Rum's most iconic natural rock bridges.",
    duration: "4-6 hours",
    difficulty: "Moderate",
    bestTime: "Morning start recommended for cooler hiking",
    image: burdahImage,
    highlights: ["Natural rock bridge", "Scrambling adventure", "Panoramic views", "Geological wonder"],
    itinerary: [
      "Morning meeting and equipment check",
      "Drive to Burdah trailhead (30 minutes)",
      "Begin approach hike across desert floor", 
      "Start of rock scrambling section with guide assistance",
      "Navigate through boulder field and narrow passages",
      "Final climb to the natural arch formation",
      "Extended time for photography and rest", 
      "Alternative descent route when possible",
      "Return to vehicle and drive back to village"
    ],
    included: [
      "Professional guide with scrambling experience",
      "Transportation to and from trailhead",
      "Safety briefing and technique instruction", 
      "Basic climbing assistance when needed",
      "Emergency communication device"
    ],
    notIncluded: [
      "Personal climbing or hiking gear",
      "Meals (bring your own snacks)",
      "Travel insurance with adventure coverage",
      "Accommodation"
    ],
    whatToBring: [
      "Hiking boots with excellent grip",
      "Gloves for rock handling (recommended)",
      "Plenty of water (2+ liters)",
      "High-energy snacks", 
      "Sun protection", 
      "Camera with secure carrying method",
      "Small first aid kit"
    ],
    safetyNotes: [
      "Solid scrambling experience helpful but not required",
      "Guide provides instruction for technical sections",
      "Weather and rock conditions assessed daily",
      "Alternative activities available if conditions unsuitable", 
      "Maximum group size: 4 people for safety"
    ]
  },
  {
    slug: "jebel-khash",
    title: "Jebel Khash Route", 
    description: "Quiet, scenic ridge walk with sweeping desert views—perfect for sunrise or sunset camps.",
    duration: "1-2 days",
    difficulty: "Moderate",
    bestTime: "All seasons with appropriate gear",
    image: khashImage,
    highlights: ["Ridge walking", "Sunrise/sunset camps", "Sweeping views", "Peaceful solitude"],
    itinerary: [
      "Day 1: Afternoon departure from village",
      "Drive to Jebel Khash area (45 minutes)",
      "Begin ridge approach hike",
      "Set up camp at scenic overlook",
      "Sunset viewing and evening meal", 
      "Stargazing session with guide stories",
      "Day 2: Early morning sunrise from summit",
      "Pack camp and explore ridge formations",
      "Descent via different route",
      "Traditional breakfast in the desert",
      "Return to village by mid-morning"
    ],
    included: [
      "Experienced guide with camping expertise",
      "All camping equipment (tent, sleeping mats)",
      "Evening and morning meals", 
      "Transportation of gear and supplies",
      "Traditional Bedouin breakfast"
    ],
    notIncluded: [
      "Personal sleeping bag (available to rent)",
      "Personal hiking and camping gear", 
      "Additional snacks or beverages",
      "Travel insurance"
    ],
    whatToBring: [
      "Comfortable hiking boots", 
      "Warm layers for night temperatures",
      "Personal water bottles",
      "Headlamp with extra batteries",
      "Personal toiletries and medications",
      "Camera for sunrise/sunset photography", 
      "Personal snacks if desired"
    ],
    safetyNotes: [
      "Weather monitoring for sudden changes",
      "Backup shelter locations identified", 
      "Emergency communication maintained",
      "Campfire safety protocols followed",
      "Leave No Trace principles observed"
    ]
  }
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find(exp => exp.slug === slug);
}

export function getAllExperiences(): Experience[] {
  return experiences;
}
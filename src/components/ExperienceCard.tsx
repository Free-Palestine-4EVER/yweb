import { Link } from "react-router-dom";
import { Clock, TrendingUp, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  slug: string;
  image?: string;
  highlights?: string[];
  isPrivate?: boolean;
}

const difficultyColors = {
  Easy: "bg-oasis-green text-success-foreground",
  Moderate: "bg-dune-amber text-accent-foreground",
  Challenging: "bg-destructive text-destructive-foreground"
};

export default function ExperienceCard({
  title,
  description,
  duration,
  difficulty,
  slug,
  image,
  highlights = [],
  isPrivate = true
}: ExperienceCardProps) {
  return (
    <Card className="group hover:shadow-desert transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video bg-gradient-sand relative overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-sand flex items-center justify-center">
              <MapPin className="h-12 w-12 text-dune-amber opacity-40" />
            </div>
          )}
          <div className="absolute top-3 left-3 flex gap-2">
            {isPrivate && (
              <Badge variant="secondary" className="bg-night-sky/90 text-cloud-white border-none">
                <Users className="h-3 w-3 mr-1" />
                Private Guide
              </Badge>
            )}
            <Badge className={`${difficultyColors[difficulty]} border-none`}>
              <TrendingUp className="h-3 w-3 mr-1" />
              {difficulty}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="mb-3">
          <h3 className="font-heading font-semibold text-xl text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm mb-3">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
        </div>
        
        <p className="text-foreground/80 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        
        {highlights.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Highlights
            </h4>
            <div className="flex flex-wrap gap-1">
              {highlights.slice(0, 3).map((highlight, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-desert-sand/50 text-night-sky border-dune-amber/30">
                  {highlight}
                </Badge>
              ))}
              {highlights.length > 3 && (
                <Badge variant="outline" className="text-xs bg-desert-sand/50 text-night-sky border-dune-amber/30">
                  +{highlights.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          asChild 
          variant="outline" 
          className="w-full group-hover:bg-dune-amber group-hover:text-accent-foreground group-hover:border-dune-amber transition-all"
        >
          <Link to={`/experiences/${slug}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
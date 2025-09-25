import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="mb-4 text-6xl font-heading font-bold text-foreground">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">This desert path doesn't exist</p>
        <Button variant="hero" size="lg" asChild>
          <a href="/">
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

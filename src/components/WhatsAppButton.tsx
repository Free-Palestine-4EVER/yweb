import whatsappIcon from "@/assets/whatsapp-official.webp";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "962779886572";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleClick}
        variant="success" 
        size="lg"
        className="rounded-full h-14 w-14 shadow-night hover:shadow-desert transition-all duration-300 hover:scale-110 p-0"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="h-8 w-8"
        />
      </Button>
    </div>
  );
}
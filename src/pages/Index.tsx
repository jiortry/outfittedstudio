import { Sparkles, Camera, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/TypingAnimation";
import { useState, useRef, useEffect } from "react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (bubbleRef.current) {
      const rect = bubbleRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Wardrobe structure background pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {/* Wardrobe shelves */}
        <div className="absolute top-24 left-12 w-32 h-1 bg-foreground/8 opacity-40"></div>
        <div className="absolute top-24 left-12 w-1 h-40 bg-foreground/8 opacity-40"></div>
        <div className="absolute top-64 left-12 w-32 h-1 bg-foreground/8 opacity-40"></div>
        <div className="absolute top-24 right-16 w-28 h-1 bg-foreground/8 opacity-40"></div>
        <div className="absolute top-24 right-16 w-1 h-36 bg-foreground/8 opacity-40"></div>
        <div className="absolute top-60 right-16 w-28 h-1 bg-foreground/8 opacity-40"></div>
        
        {/* Hangers */}
        <div className="absolute top-28 left-16 w-8 h-2 border-t border-foreground/6 opacity-30"></div>
        <div className="absolute top-28 left-20 w-8 h-2 border-t border-foreground/6 opacity-30"></div>
        <div className="absolute top-28 left-24 w-8 h-2 border-t border-foreground/6 opacity-30"></div>
        <div className="absolute top-28 left-28 w-8 h-2 border-t border-foreground/6 opacity-30"></div>
        
        <div className="absolute top-68 left-16 w-8 h-2 border-t border-foreground/6 opacity-30"></div>
        <div className="absolute top-68 left-20 w-8 h-2 border-t border-foreground/6 opacity-30"></div>
        <div className="absolute top-68 left-24 w-8 h-2 border-t border-foreground/6 opacity-30"></div>
        
        <div className="absolute top-28 right-20 w-8 h-2 border-t border-foreground/6 opacity-30"></div>
        <div className="absolute top-28 right-24 w-8 h-2 border-t border-foreground/6 opacity-30"></div>
        <div className="absolute top-28 right-28 w-8 h-2 border-t border-foreground/6 opacity-30"></div>
        
        <div className="absolute top-68 right-20 w-8 h-2 border-t border-foreground/6 opacity-30"></div>
        <div className="absolute top-68 right-24 w-8 h-2 border-t border-foreground/6 opacity-30"></div>
        
        {/* Additional wardrobe sections */}
        <div className="absolute top-1/3 left-1/3 w-24 h-1 bg-foreground/6 opacity-35"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-32 bg-foreground/6 opacity-35"></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-1 bg-foreground/6 opacity-35" style={{top: 'calc(33.33% + 80px)'}}></div>
        
        <div className="absolute top-1/3 left-1/3 w-6 h-2 border-t border-foreground/5 opacity-25" style={{top: 'calc(33.33% + 20px)'}}></div>
        <div className="absolute top-1/3 left-1/3 w-6 h-2 border-t border-foreground/5 opacity-25" style={{top: 'calc(33.33% + 20px)', left: 'calc(33.33% + 8px)'}}></div>
        <div className="absolute top-1/3 left-1/3 w-6 h-2 border-t border-foreground/5 opacity-25" style={{top: 'calc(33.33% + 20px)', left: 'calc(33.33% + 16px)'}}></div>
        
        <div className="absolute top-1/3 left-1/3 w-6 h-2 border-t border-foreground/5 opacity-25" style={{top: 'calc(33.33% + 100px)'}}></div>
        <div className="absolute top-1/3 left-1/3 w-6 h-2 border-t border-foreground/5 opacity-25" style={{top: 'calc(33.33% + 100px)', left: 'calc(33.33% + 8px)'}}></div>
        <div className="absolute top-1/3 left-1/3 w-6 h-2 border-t border-foreground/5 opacity-25" style={{top: 'calc(33.33% + 100px)', left: 'calc(33.33% + 16px)'}}></div>
      </div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-3">
            <img 
              src="/favicon.ico" 
              alt="Outfitted Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg"
            />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Outfitted</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 relative z-20">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight text-foreground">
            <TypingAnimation />
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Outfitted è l'app che rivoluziona il tuo guardaroba con l'intelligenza artificiale.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-delay px-4">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-violet-light text-primary-foreground font-medium px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all hover:scale-105 w-full sm:w-auto"
              aria-label="Scarica Outfitted per iPhone"
            >
              <a href="">
                <img 
                  src="/apple-white.svg" 
                  alt="Apple Logo" 
                  className="mr-2 h-4 w-4 sm:h-5 sm:w-5" 
                />
                Scarica per iPhone
              </a>
            </Button>
            
            <div className="relative group">
              <Button 
                size="lg"
                disabled
                className="bg-muted text-muted-foreground font-medium px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full cursor-not-allowed transition-all duration-300 w-full sm:w-auto"
                aria-disabled="true"
              >
                <img 
                  src="/android-white.svg" 
                  alt="Android Logo" 
                  className="mr-2 h-4 w-4 sm:h-5 sm:w-5" 
                />
                Scarica per Android
              </Button>
              {/* Tooltip per NON DISPONIBILE */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                NON DISPONIBILE
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-destructive rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made in Italy Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden z-20">
        {/* Subtle wardrobe pattern background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-10 left-10 w-16 h-20 border border-foreground/10 rounded-sm transform rotate-12"></div>
          <div className="absolute top-20 right-16 w-12 h-24 border border-foreground/10 rounded-sm transform -rotate-6"></div>
          <div className="absolute bottom-20 left-20 w-14 h-18 border border-foreground/10 rounded-sm transform rotate-3"></div>
          <div className="absolute bottom-16 right-12 w-10 h-22 border border-foreground/10 rounded-sm transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-20 border border-foreground/10 rounded-sm transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-16 border border-foreground/10 rounded-sm transform -rotate-30"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-primary/10 to-teal-accent/10 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mb-8 transition-all duration-300">
            <div className="w-2 h-2 bg-emerald rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">
              🇮🇹 Progetto 100% Italiano
            </span>
          </div>
          
          {/* Liquid Bubble */}
          <div 
            ref={bubbleRef}
            onMouseMove={handleMouseMove}
            className={`relative inline-block transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                hsl(270, 60%, 25%) 0%, 
                hsl(180, 60%, 25%) 50%, 
                hsl(140, 70%, 30%) 100%)`,
              borderRadius: '50% 30% 70% 40% / 30% 50% 20% 60%',
              transition: 'border-radius 200ms ease-out, background 200ms ease-out',
              transform: `scale(${1 + (mousePosition.x - 50) * 0.0005})`,
              border: `2px solid hsl(270, 60%, 35%)`,
              boxShadow: `0 8px 32px hsl(270, 60%, 25%), 
                         0 4px 16px hsl(180, 60%, 25%)`,
            }}
          >
            <div 
              className="relative z-10 px-8 py-6 text-sm sm:text-base text-foreground leading-relaxed max-w-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(2px)',
                borderRadius: 'inherit',
                transition: 'all 200ms ease-out',
              }}
            >
              Nato dalla passione italiana per la moda e l'innovazione, Outfitted unisce il gusto estetico del Made in Italy con le più avanzate tecnologie di intelligenza artificiale.
            </div>
          </div>
        </div>
      </section>

      {/* Come Funziona Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm sm:text-base text-muted-foreground mb-12 sm:mb-16 max-w-3xl mx-auto text-center leading-relaxed px-4">
            Scansiona i tuoi capi, organizza il tuo armadio digitale e ricevi suggerimenti di outfit personalizzati per ogni occasione.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            {/* Step 1 - Scansiona */}
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-violet-primary/20 rounded-full flex items-center justify-center mb-4 sm:mb-8">
                <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-violet-light" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-foreground">Scansiona</h4>
            </div>

            {/* Step 2 - Genera */}
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-4 sm:mb-8">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-teal-accent" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-foreground">Genera</h4>
            </div>

            {/* Step 3 - Indossa */}
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-4 sm:mb-8">
                <Shirt className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-foreground">Indossa</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border relative z-20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2025 Outfitted
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

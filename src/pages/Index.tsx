import { Apple, Smartphone, Sparkles, Camera, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
      <section className="pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight text-foreground">
            SCARICA L'APP:
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
                <Apple className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
                <Smartphone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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

      {/* Come Funziona Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6">
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
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border">
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

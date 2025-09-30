import { Smartphone, Sparkles, Camera, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Outfitted</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight text-foreground">
            SCARICA L'APP:
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Outfitted è l'app che rivoluziona il tuo guardaroba con l'intelligenza artificiale.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-violet-light text-primary-foreground font-medium px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
              aria-label="Scarica Outfitted per iOS"
            >
              <a href="">
                <Smartphone className="mr-2 h-5 w-5" />
                iOS
              </a>
            </Button>
            
            <Button 
              size="lg"
              disabled
              className="bg-muted text-muted-foreground font-medium px-8 py-6 text-lg rounded-full cursor-not-allowed"
              aria-disabled="true"
              aria-describedby="android-tooltip"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Android
            </Button>
            <span id="android-tooltip" className="sr-only">Disponibilità futura</span>
          </div>
        </div>
      </section>

      {/* Come Funziona Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm md:text-base text-muted-foreground mb-16 max-w-3xl mx-auto text-center leading-relaxed">
            Scansiona i tuoi capi, organizza il tuo armadio digitale e ricevi suggerimenti di outfit personalizzati per ogni occasione.
          </p>
          
          <div className="grid md:grid-cols-3 gap-16">
            {/* Step 1 - Scansiona */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-violet-primary/20 rounded-full flex items-center justify-center mb-8">
                <Camera className="h-8 w-8 text-violet-light" strokeWidth={2.5} />
              </div>
              <h4 className="text-2xl font-semibold text-foreground">Scansiona</h4>
            </div>

            {/* Step 2 - Genera */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-8">
                <Sparkles className="h-8 w-8 text-teal-accent" strokeWidth={2.5} />
              </div>
              <h4 className="text-2xl font-semibold text-foreground">Genera</h4>
            </div>

            {/* Step 3 - Indossa */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-8">
                <Shirt className="h-8 w-8 text-secondary" strokeWidth={2.5} />
              </div>
              <h4 className="text-2xl font-semibold text-foreground">Indossa</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Outfitted
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

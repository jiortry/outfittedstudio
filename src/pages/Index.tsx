import { Smartphone, Sparkles, Grid3x3, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight text-primary">Outfitted</h1>
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#come-funziona" className="text-muted-foreground hover:text-foreground transition-colors">
                Come funziona
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Outfitted — Rivoluziona il tuo guardaroba con l'AI
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Scansiona i tuoi capi, organizza il tuo armadio digitale e ricevi suggerimenti di outfit personalizzati per ogni occasione.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Outfitted è l'app che rivoluziona il tuo guardaroba con l'intelligenza artificiale. Scansiona i tuoi capi, organizza il tuo armadio digitale e ricevi suggerimenti di outfit personalizzati per ogni occasione.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-violet-light text-primary-foreground font-medium px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
              aria-label="Scarica Outfitted per iOS (link vuoto per ora)"
            >
              <a href="">
                <Smartphone className="mr-2 h-5 w-5" />
                Scarica per iOS
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
              Non disponibile
            </Button>
            <span id="android-tooltip" className="sr-only">Disponibilità futura per Android</span>
          </div>
        </div>
      </section>

      {/* Come Funziona Section */}
      <section id="come-funziona" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">Come funziona</h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Scansiona i capi</h4>
              <p className="text-muted-foreground">Usa la fotocamera per catalogare ogni capo.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Grid3x3 className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold">Organizza l'armadio</h4>
              <p className="text-muted-foreground">Crea categorie e collezioni digitali.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Shirt className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold">Ricevi outfit</h4>
              <p className="text-muted-foreground">Suggerimenti personalizzati per ogni occasione.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">Funzionalità principali</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-border bg-card">
              <h4 className="text-xl font-semibold mb-4">Organizzazione intelligente</h4>
              <p className="text-muted-foreground">
                Sistema di catalogazione avanzato che riconosce automaticamente tipo, colore e stagionalità dei tuoi capi.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-border bg-card">
              <h4 className="text-xl font-semibold mb-4">Suggerimenti personalizzati</h4>
              <p className="text-muted-foreground">
                L'AI analizza il tuo stile e propone abbinamenti perfetti per ogni occasione e condizione meteo.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-border bg-card">
              <h4 className="text-xl font-semibold mb-4">Compatibilità multi-stagione</h4>
              <p className="text-muted-foreground">
                Gestisci facilmente il cambio armadio con suggerimenti stagionali e outfit adatti ad ogni periodo dell'anno.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 Outfitted — Tutti i diritti riservati
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Termini di Servizio
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contatti
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

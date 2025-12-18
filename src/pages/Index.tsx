import { Sparkles, Camera, Shirt, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/TypingAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Wooden Wardrobe Shelves Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {/* Left side shelves - Main structure */}
        <div className="absolute top-32 left-8 w-24 h-1 bg-wood-medium opacity-40 shadow-sm"></div>
        <div className="absolute top-32 left-8 w-1 h-32 bg-wood-dark opacity-50 shadow-sm"></div>
        <div className="absolute top-64 left-8 w-24 h-1 bg-wood-medium opacity-40 shadow-sm"></div>
        
        <div className="absolute top-40 left-12 w-16 h-1 bg-wood-light opacity-35 shadow-sm"></div>
        <div className="absolute top-40 left-12 w-1 h-20 bg-wood-dark opacity-45 shadow-sm"></div>
        <div className="absolute top-60 left-12 w-16 h-1 bg-wood-light opacity-35 shadow-sm"></div>
        
        {/* Right side shelves - Main structure */}
        <div className="absolute top-28 right-12 w-20 h-1 bg-wood-medium opacity-40 shadow-sm"></div>
        <div className="absolute top-28 right-12 w-1 h-28 bg-wood-dark opacity-50 shadow-sm"></div>
        <div className="absolute top-56 right-12 w-20 h-1 bg-wood-medium opacity-40 shadow-sm"></div>
        
        <div className="absolute top-36 right-16 w-14 h-1 bg-wood-light opacity-35 shadow-sm"></div>
        <div className="absolute top-36 right-16 w-1 h-16 bg-wood-dark opacity-45 shadow-sm"></div>
        <div className="absolute top-52 right-16 w-14 h-1 bg-wood-light opacity-35 shadow-sm"></div>
        
        {/* Center decorative elements */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-wood-accent opacity-30 shadow-sm"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-wood-dark opacity-40 shadow-sm"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-wood-accent opacity-30 shadow-sm" style={{top: 'calc(33.33% + 60px)'}}></div>
        
        {/* Wooden hangers */}
        <div className="absolute top-36 left-16 w-6 h-1 border-t-2 border-wood-dark opacity-30"></div>
        <div className="absolute top-36 left-20 w-6 h-1 border-t-2 border-wood-dark opacity-30"></div>
        <div className="absolute top-36 left-24 w-6 h-1 border-t-2 border-wood-dark opacity-30"></div>
        
        <div className="absolute top-68 left-16 w-6 h-1 border-t-2 border-wood-dark opacity-30"></div>
        <div className="absolute top-68 left-20 w-6 h-1 border-t-2 border-wood-dark opacity-30"></div>
        
        <div className="absolute top-32 right-20 w-6 h-1 border-t-2 border-wood-dark opacity-30"></div>
        <div className="absolute top-32 right-24 w-6 h-1 border-t-2 border-wood-dark opacity-30"></div>
        <div className="absolute top-32 right-28 w-6 h-1 border-t-2 border-wood-dark opacity-30"></div>
        
        <div className="absolute top-60 right-20 w-6 h-1 border-t-2 border-wood-dark opacity-30"></div>
        <div className="absolute top-60 right-24 w-6 h-1 border-t-2 border-wood-dark opacity-30"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border animate-slide-down">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-3">
            <img 
              src="/favicon.ico" 
              alt="Outfitted Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg animate-fade-in hover:scale-105 transition-transform duration-200"
            />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground animate-fade-in" style={{animationDelay: '0.1s'}}>Outfitted</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 relative z-20">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight text-foreground">
            <TypingAnimation />
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Outfitted è l'app che rivoluziona il tuo guardaroba con l'intelligenza artificiale.
            <br className="hidden sm:block" />
            <span className="block sm:inline sm:ml-1 mt-2 sm:mt-0">
              Outfitted is the app that revolutionizes your wardrobe with artificial intelligence.
            </span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up px-4" style={{animationDelay: '0.4s'}}>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-violet-light text-primary-foreground font-medium px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all hover:scale-105 w-full sm:w-auto"
              aria-label="Scarica Outfitted per iPhone / Download Outfitted for iPhone"
            >
              <a href="">
                <img 
                  src="/apple-white.svg" 
                  alt="Apple Logo" 
                  className="mr-2 h-4 w-4 sm:h-5 sm:w-5" 
                />
                Scarica per iPhone / Download for iPhone
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
                Scarica per Android / Download for Android
              </Button>
              {/* Tooltip per NON DISPONIBILE / NOT AVAILABLE */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                NON DISPONIBILE / NOT AVAILABLE
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-destructive rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Come Funziona Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 relative z-20">
        {/* Additional wooden wardrobe elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-10 left-10 w-12 h-1 bg-wood-light opacity-25 shadow-sm"></div>
          <div className="absolute top-10 left-10 w-1 h-16 bg-wood-dark opacity-30 shadow-sm"></div>
          <div className="absolute top-26 left-10 w-12 h-1 bg-wood-light opacity-25 shadow-sm"></div>
          
          <div className="absolute top-16 right-12 w-10 h-1 bg-wood-light opacity-25 shadow-sm"></div>
          <div className="absolute top-16 right-12 w-1 h-12 bg-wood-dark opacity-30 shadow-sm"></div>
          <div className="absolute top-28 right-12 w-10 h-1 bg-wood-light opacity-25 shadow-sm"></div>
          
          <div className="absolute bottom-20 left-1/4 w-8 h-1 bg-wood-accent opacity-20 shadow-sm"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-8 bg-wood-dark opacity-25 shadow-sm"></div>
          <div className="absolute bottom-28 left-1/4 w-8 h-1 bg-wood-accent opacity-20 shadow-sm"></div>
          
          <div className="absolute bottom-16 right-1/4 w-6 h-1 bg-wood-accent opacity-20 shadow-sm"></div>
          <div className="absolute bottom-16 right-1/4 w-1 h-6 bg-wood-dark opacity-25 shadow-sm"></div>
          <div className="absolute bottom-22 right-1/4 w-6 h-1 bg-wood-accent opacity-20 shadow-sm"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <p className="text-sm sm:text-base text-muted-foreground mb-12 sm:mb-16 max-w-3xl mx-auto text-center leading-relaxed px-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Scansiona i tuoi capi, organizza il tuo armadio digitale e ricevi suggerimenti di outfit personalizzati per ogni occasione.
            <br className="hidden sm:block" />
            <span className="block sm:inline sm:ml-1 mt-2 sm:mt-0">
              Scan your clothes, organize your digital wardrobe and receive personalized outfit suggestions for every occasion.
            </span>
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            {/* Step 1 - Scansiona */}
            <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-violet-primary/30 rounded-full flex items-center justify-center mb-4 sm:mb-8 animate-bounce-gentle hover:scale-105 transition-all duration-300">
                <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-violet-primary" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-foreground animate-fade-in-up" style={{animationDelay: '0.2s'}}>Scansiona / Scan</h4>
            </div>

            {/* Step 2 - Genera */}
            <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-accent/30 rounded-full flex items-center justify-center mb-4 sm:mb-8 animate-bounce-gentle hover:scale-105 transition-all duration-300">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-teal-accent" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-foreground animate-fade-in-up" style={{animationDelay: '0.4s'}}>Genera / Generate</h4>
            </div>

            {/* Step 3 - Indossa */}
            <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-secondary/30 rounded-full flex items-center justify-center mb-4 sm:mb-8 animate-bounce-gentle hover:scale-105 transition-all duration-300">
                <Shirt className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-foreground animate-fade-in-up" style={{animationDelay: '0.6s'}}>Indossa / Wear</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contatti / Contact Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 relative z-20">
        {/* Additional wooden wardrobe elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-10 left-10 w-12 h-1 bg-wood-light opacity-25 shadow-sm"></div>
          <div className="absolute top-10 left-10 w-1 h-16 bg-wood-dark opacity-30 shadow-sm"></div>
          <div className="absolute top-26 left-10 w-12 h-1 bg-wood-light opacity-25 shadow-sm"></div>
          
          <div className="absolute top-16 right-12 w-10 h-1 bg-wood-light opacity-25 shadow-sm"></div>
          <div className="absolute top-16 right-12 w-1 h-12 bg-wood-dark opacity-30 shadow-sm"></div>
          <div className="absolute top-28 right-12 w-10 h-1 bg-wood-light opacity-25 shadow-sm"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Contatti / Contact
            </h3>
            
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Per assistenza, domande o supporto, contattaci via email. Siamo qui per aiutarti!
              <br className="hidden sm:block" />
              <span className="block sm:inline sm:ml-1 mt-2 sm:mt-0">
                For assistance, questions or support, contact us via email. We're here to help!
              </span>
            </p>
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <a 
                href="mailto:outfitted.help@gmail.com"
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-primary hover:bg-violet-light text-primary-foreground font-medium text-base sm:text-lg rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label="Contatta Outfitted via email / Contact Outfitted via email"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
                <span className="font-semibold">outfitted.help@gmail.com</span>
              </a>
              
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Supporto / Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border relative z-20">
        {/* Minimal footer wooden elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-4 left-8 w-6 h-1 bg-wood-accent opacity-15 shadow-sm"></div>
          <div className="absolute top-4 left-8 w-1 h-4 bg-wood-dark opacity-20 shadow-sm"></div>
          <div className="absolute top-8 left-8 w-6 h-1 bg-wood-accent opacity-15 shadow-sm"></div>
          
          <div className="absolute top-6 right-12 w-4 h-1 bg-wood-accent opacity-15 shadow-sm"></div>
          <div className="absolute top-6 right-12 w-1 h-3 bg-wood-dark opacity-20 shadow-sm"></div>
          <div className="absolute top-9 right-12 w-4 h-1 bg-wood-accent opacity-15 shadow-sm"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <p className="text-xs sm:text-sm text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            © 2025 Outfitted
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

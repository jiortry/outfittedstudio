import { Sparkles, Camera, Shirt, Mail, Languages, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/TypingAnimation";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

type Language = "it" | "en";

const translations = {
  it: {
    heroDescription: "Outfitted è l'app che rivoluziona il tuo guardaroba con l'intelligenza artificiale.",
    downloadiPhone: "Scarica per iPhone",
    downloadAndroid: "Scarica per Android",
    notAvailable: "NON DISPONIBILE",
    howItWorks: "Scansiona i tuoi capi, organizza il tuo armadio digitale e ricevi suggerimenti di outfit personalizzati per ogni occasione.",
    scan: "Scansiona",
    generate: "Genera",
    wear: "Indossa",
    contact: "Contatti",
    contactDescription: "Per assistenza, domande o supporto, contattaci via email. Siamo qui per aiutarti!",
    support: "Supporto",
    contactLabel: "Contatta Outfitted via email",
    help: "Aiuto",
    helpCenter: "Centro Assistenza",
    faqTitle: "Domande Frequenti",
    faqSubtitle: "Trova risposte alle domande più comuni su Outfitted",
    viewAllFaqs: "Vedi tutte le FAQ",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Termini di Servizio",
    faqs: [
      {
        question: "L'app raccoglie i miei dati personali?",
        answer: "No, assolutamente no. Outfitted non raccoglie, non memorizza e non condivide alcun dato personale. Tutti i dati vengono elaborati esclusivamente sul tuo dispositivo e non vengono mai inviati a server esterni."
      },
      {
        question: "Ho bisogno di una connessione internet per usare l'app?",
        answer: "No, Outfitted funziona completamente offline. Tutte le funzionalità di intelligenza artificiale vengono eseguite direttamente sul tuo dispositivo, quindi puoi usare l'app anche senza connessione internet."
      },
      {
        question: "Le mie foto vengono caricate su server esterni?",
        answer: "No, tutte le foto dei tuoi capi vengono elaborate esclusivamente sul tuo dispositivo. Non vengono mai inviate a server esterni o condivise con terze parti."
      },
      {
        question: "Come funziona Outfitted?",
        answer: "Outfitted ti permette di scansionare i tuoi capi d'abbigliamento con la fotocamera del tuo iPhone, organizzarli nel tuo armadio digitale e ricevere suggerimenti di outfit personalizzati per ogni occasione utilizzando l'intelligenza artificiale."
      },
      {
        question: "L'app utilizza cookie o tracker?",
        answer: "No, Outfitted non utilizza cookie, tracker o tecnologie di monitoraggio. La tua attività nell'app rimane completamente privata e anonima."
      },
      {
        question: "Come posso eliminare i miei dati?",
        answer: "Puoi eliminare tutti i dati dell'app in qualsiasi momento dalle impostazioni dell'app sul tuo iPhone. Una volta eliminati, i dati vengono rimossi permanentemente dal tuo dispositivo."
      }
    ]
  },
  en: {
    heroDescription: "Outfitted is the app that revolutionizes your wardrobe with artificial intelligence.",
    downloadiPhone: "Download for iPhone",
    downloadAndroid: "Download for Android",
    notAvailable: "NOT AVAILABLE",
    howItWorks: "Scan your clothes, organize your digital wardrobe and receive personalized outfit suggestions for every occasion.",
    scan: "Scan",
    generate: "Generate",
    wear: "Wear",
    contact: "Contact",
    contactDescription: "For assistance, questions or support, contact us via email. We're here to help!",
    support: "Support",
    contactLabel: "Contact Outfitted via email",
    help: "Help",
    helpCenter: "Help Center",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to the most common questions about Outfitted",
    viewAllFaqs: "View all FAQs",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    faqs: [
      {
        question: "Does the app collect my personal data?",
        answer: "No, absolutely not. Outfitted does not collect, store, or share any personal data. All data is processed exclusively on your device and is never sent to external servers."
      },
      {
        question: "Do I need an internet connection to use the app?",
        answer: "No, Outfitted works completely offline. All artificial intelligence features are executed directly on your device, so you can use the app even without an internet connection."
      },
      {
        question: "Are my photos uploaded to external servers?",
        answer: "No, all photos of your clothing items are processed exclusively on your device. They are never sent to external servers or shared with third parties."
      },
      {
        question: "How does Outfitted work?",
        answer: "Outfitted allows you to scan your clothing items with your iPhone's camera, organize them in your digital wardrobe, and receive personalized outfit suggestions for every occasion using artificial intelligence."
      },
      {
        question: "Does the app use cookies or trackers?",
        answer: "No, Outfitted does not use cookies, trackers, or monitoring technologies. Your activity in the app remains completely private and anonymous."
      },
      {
        question: "How can I delete my data?",
        answer: "You can delete all app data at any time from the app settings on your iPhone. Once deleted, the data is permanently removed from your device."
      }
    ]
  },
};

const Index = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  
  // Link App Store basato sulla lingua
  const appStoreLink = language === "it" 
    ? "https://apps.apple.com/it/app/outfitted/id6753338218"
    : "https://apps.apple.com/us/app/outfitted/id6753338218";
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/outfittedicon.png" 
                alt="Outfitted Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border-2 border-white animate-fade-in hover:scale-105 transition-transform duration-200"
              />
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground animate-fade-in" style={{animationDelay: '0.1s'}}>Outfitted</h1>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground hover:text-foreground animate-fade-in"
              >
                <Link to="/help">
                  <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline text-sm sm:text-base font-medium">{t.help}</span>
                </Link>
              </Button>
              <Button
                onClick={toggleLanguage}
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground hover:text-foreground animate-fade-in"
                aria-label={language === "it" ? "Switch to English" : "Passa all'italiano"}
              >
                <Languages className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base font-medium">{language === "it" ? "EN" : "IT"}</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 relative z-20">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight text-foreground">
            <TypingAnimation language={language} />
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {t.heroDescription}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up px-4" style={{animationDelay: '0.4s'}}>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all hover:scale-105 w-full sm:w-auto"
              aria-label={language === "it" ? "Scarica Outfitted per iPhone" : "Download Outfitted for iPhone"}
            >
              <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
                <img 
                  src="/apple-white.svg" 
                  alt="Apple Logo" 
                  className="mr-2 h-4 w-4 sm:h-5 sm:w-5" 
                />
                {t.downloadiPhone}
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
                {t.downloadAndroid}
              </Button>
              {/* Tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {t.notAvailable}
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
            {t.howItWorks}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            {/* Step 1 - Scansiona */}
            <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-primary/30 rounded-full flex items-center justify-center mb-4 sm:mb-8 animate-bounce-gentle hover:scale-105 transition-all duration-300">
                <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-white" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-foreground animate-fade-in-up" style={{animationDelay: '0.2s'}}>{t.scan}</h4>
            </div>

            {/* Step 2 - Genera */}
            <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-accent/30 rounded-full flex items-center justify-center mb-4 sm:mb-8 animate-bounce-gentle hover:scale-105 transition-all duration-300">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-foreground animate-fade-in-up" style={{animationDelay: '0.4s'}}>{t.generate}</h4>
            </div>

            {/* Step 3 - Indossa */}
            <div className="text-center space-y-4 sm:space-y-6 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-secondary/30 rounded-full flex items-center justify-center mb-4 sm:mb-8 animate-bounce-gentle hover:scale-105 transition-all duration-300">
                <Shirt className="h-6 w-6 sm:h-8 sm:w-8 text-white" strokeWidth={2.5} />
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-foreground animate-fade-in-up" style={{animationDelay: '0.6s'}}>{t.wear}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              {t.faqTitle}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              {t.faqSubtitle}
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4 mb-8 sm:mb-12">
            {t.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-4 sm:px-6 animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:no-underline py-4 sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-3 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg rounded-full transition-all hover:scale-105"
            >
              <Link to="/help">
                <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
                <span className="font-semibold">{t.viewAllFaqs}</span>
              </Link>
            </Button>
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
              {t.contact}
            </h3>
            
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              {t.contactDescription}
            </p>
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-3 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg rounded-full transition-all hover:scale-105 w-full sm:w-auto"
                >
                  <Link to="/help">
                    <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
                    <span className="font-semibold">{t.helpCenter}</span>
                  </Link>
                </Button>
                <a 
                  href="mailto:outfitted.help@gmail.com"
                  className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base sm:text-lg rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                  aria-label={t.contactLabel}
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
                  <span className="font-semibold">outfitted.help@gmail.com</span>
                </a>
              </div>
              
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                {t.support}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Documents Section - Visible without login, required for app verification */}
      {/* Using HTML anchor tags instead of React Router Link so crawlers can detect the links */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 relative z-20 border-t border-border bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="gap-2 px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-all hover:scale-105 hover:bg-muted"
            >
              <a href="https://outfittedstudio.it/privacy-policy" aria-label={language === "it" ? "Privacy Policy" : "Privacy Policy"}>
                <span className="font-medium text-foreground">{t.privacyPolicy}</span>
              </a>
            </Button>
            
            {/* Separator dot */}
            <div className="w-2 h-2 rounded-full bg-muted-foreground/40 flex-shrink-0"></div>
            
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="gap-2 px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-all hover:scale-105 hover:bg-muted"
            >
              <a href="https://outfittedstudio.it/tos" aria-label={language === "it" ? "Termini di Servizio" : "Terms of Service"}>
                <span className="font-medium text-foreground">{t.termsOfService}</span>
              </a>
            </Button>
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

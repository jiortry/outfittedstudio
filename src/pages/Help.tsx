import { useState } from "react";
import { HelpCircle, Shield, Mail, ArrowLeft, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

type Language = "it" | "en";

const translations = {
  it: {
    title: "Centro Assistenza",
    subtitle: "Trova risposte alle domande più frequenti e scopri come funziona Outfitted",
    privacyTitle: "Privacy e Protezione dei Dati",
    privacySubtitle: "La tua privacy è la nostra priorità",
    privacyDescription: "Outfitted è progettata con la privacy al centro. L'applicazione non raccoglie, non memorizza e non condivide alcun dato personale degli utenti. Tutti i dati (foto dei capi, armadio digitale, suggerimenti di outfit) vengono elaborati esclusivamente sul tuo dispositivo e non vengono mai inviati a server esterni.",
    noDataCollection: "Nessuna Raccolta Dati",
    noDataCollectionDesc: "Outfitted non raccoglie dati personali, informazioni di identificazione o dati di utilizzo. L'app funziona completamente offline e in modo privato sul tuo dispositivo.",
    noTracking: "Nessun Tracciamento",
    noTrackingDesc: "Non utilizziamo cookie, tracker o tecnologie di monitoraggio. La tua attività nell'app rimane completamente privata e anonima.",
    localProcessing: "Elaborazione Locale",
    localProcessingDesc: "Tutte le funzionalità di intelligenza artificiale vengono eseguite direttamente sul tuo dispositivo. Le foto dei tuoi capi e i suggerimenti di outfit vengono elaborati localmente senza connessione internet.",
    dataSecurity: "Sicurezza dei Dati",
    dataSecurityDesc: "I tuoi dati rimangono sempre sul tuo dispositivo. Non abbiamo accesso alle tue foto, al tuo armadio digitale o alle tue preferenze. Puoi eliminare tutti i dati in qualsiasi momento dalle impostazioni dell'app.",
    faqTitle: "Domande Frequenti",
    contactTitle: "Hai bisogno di ulteriore assistenza?",
    contactDescription: "Se non hai trovato la risposta che cercavi, contattaci via email. Siamo qui per aiutarti!",
    backToHome: "Torna alla Home",
    contactLabel: "Contatta Outfitted via email",
    faqs: [
      {
        question: "Come funziona Outfitted?",
        answer: "Outfitted ti permette di scansionare i tuoi capi d'abbigliamento con la fotocamera del tuo iPhone, organizzarli nel tuo armadio digitale e ricevere suggerimenti di outfit personalizzati per ogni occasione utilizzando l'intelligenza artificiale."
      },
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
        question: "Come posso eliminare i miei dati?",
        answer: "Puoi eliminare tutti i dati dell'app in qualsiasi momento dalle impostazioni dell'app sul tuo iPhone. Una volta eliminati, i dati vengono rimossi permanentemente dal tuo dispositivo."
      },
      {
        question: "L'app utilizza cookie o tracker?",
        answer: "No, Outfitted non utilizza cookie, tracker o tecnologie di monitoraggio. La tua attività nell'app rimane completamente privata e anonima."
      },
      {
        question: "I miei suggerimenti di outfit vengono salvati da qualche parte?",
        answer: "I suggerimenti di outfit vengono generati e salvati solo localmente sul tuo dispositivo. Non vengono mai condivisi o inviati a server esterni."
      },
      {
        question: "Outfitted è disponibile per Android?",
        answer: "Attualmente Outfitted è disponibile solo per iPhone. Stiamo lavorando per portare l'app anche su Android in futuro."
      },
      {
        question: "Come posso contattare il supporto?",
        answer: "Puoi contattarci via email all'indirizzo outfitted.help@gmail.com. Siamo sempre disponibili per rispondere alle tue domande e aiutarti con qualsiasi problema."
      },
      {
        question: "L'app è gratuita?",
        answer: "Outfitted è disponibile per il download gratuito sull'App Store. Alcune funzionalità avanzate potrebbero richiedere un acquisto in-app."
      }
    ]
  },
  en: {
    title: "Help Center",
    subtitle: "Find answers to frequently asked questions and learn how Outfitted works",
    privacyTitle: "Privacy and Data Protection",
    privacySubtitle: "Your privacy is our priority",
    privacyDescription: "Outfitted is designed with privacy at its core. The application does not collect, store, or share any user personal data. All data (photos of clothing items, digital wardrobe, outfit suggestions) is processed exclusively on your device and is never sent to external servers.",
    noDataCollection: "No Data Collection",
    noDataCollectionDesc: "Outfitted does not collect personal data, identifying information, or usage data. The app works completely offline and privately on your device.",
    noTracking: "No Tracking",
    noTrackingDesc: "We do not use cookies, trackers, or monitoring technologies. Your activity in the app remains completely private and anonymous.",
    localProcessing: "Local Processing",
    localProcessingDesc: "All artificial intelligence features are executed directly on your device. Photos of your clothing items and outfit suggestions are processed locally without an internet connection.",
    dataSecurity: "Data Security",
    dataSecurityDesc: "Your data always remains on your device. We do not have access to your photos, digital wardrobe, or preferences. You can delete all data at any time from the app settings.",
    faqTitle: "Frequently Asked Questions",
    contactTitle: "Need further assistance?",
    contactDescription: "If you didn't find the answer you were looking for, contact us via email. We're here to help!",
    backToHome: "Back to Home",
    contactLabel: "Contact Outfitted via email",
    faqs: [
      {
        question: "How does Outfitted work?",
        answer: "Outfitted allows you to scan your clothing items with your iPhone's camera, organize them in your digital wardrobe, and receive personalized outfit suggestions for every occasion using artificial intelligence."
      },
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
        question: "How can I delete my data?",
        answer: "You can delete all app data at any time from the app settings on your iPhone. Once deleted, the data is permanently removed from your device."
      },
      {
        question: "Does the app use cookies or trackers?",
        answer: "No, Outfitted does not use cookies, trackers, or monitoring technologies. Your activity in the app remains completely private and anonymous."
      },
      {
        question: "Are my outfit suggestions saved somewhere?",
        answer: "Outfit suggestions are generated and saved only locally on your device. They are never shared or sent to external servers."
      },
      {
        question: "Is Outfitted available for Android?",
        answer: "Currently, Outfitted is only available for iPhone. We are working on bringing the app to Android in the future."
      },
      {
        question: "How can I contact support?",
        answer: "You can contact us via email at outfitted.help@gmail.com. We are always available to answer your questions and help you with any issues."
      },
      {
        question: "Is the app free?",
        answer: "Outfitted is available for free download on the App Store. Some advanced features may require an in-app purchase."
      }
    ]
  }
};

const Help = () => {
  const [language, setLanguage] = useState<Language>("it");
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Wooden Wardrobe Shelves Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute top-32 left-8 w-24 h-1 bg-wood-medium opacity-40 shadow-sm"></div>
        <div className="absolute top-32 left-8 w-1 h-32 bg-wood-dark opacity-50 shadow-sm"></div>
        <div className="absolute top-64 left-8 w-24 h-1 bg-wood-medium opacity-40 shadow-sm"></div>
        
        <div className="absolute top-40 left-12 w-16 h-1 bg-wood-light opacity-35 shadow-sm"></div>
        <div className="absolute top-40 left-12 w-1 h-20 bg-wood-dark opacity-45 shadow-sm"></div>
        <div className="absolute top-60 left-12 w-16 h-1 bg-wood-light opacity-35 shadow-sm"></div>
        
        <div className="absolute top-28 right-12 w-20 h-1 bg-wood-medium opacity-40 shadow-sm"></div>
        <div className="absolute top-28 right-12 w-1 h-28 bg-wood-dark opacity-50 shadow-sm"></div>
        <div className="absolute top-56 right-12 w-20 h-1 bg-wood-medium opacity-40 shadow-sm"></div>
        
        <div className="absolute top-36 right-16 w-14 h-1 bg-wood-light opacity-35 shadow-sm"></div>
        <div className="absolute top-36 right-16 w-1 h-16 bg-wood-dark opacity-45 shadow-sm"></div>
        <div className="absolute top-52 right-16 w-14 h-1 bg-wood-light opacity-35 shadow-sm"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border animate-slide-down">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img 
                  src="/favicon.ico" 
                  alt="Outfitted Logo" 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg animate-fade-in hover:scale-105 transition-transform duration-200"
                />
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground animate-fade-in" style={{animationDelay: '0.1s'}}>Outfitted</h1>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground hover:text-foreground animate-fade-in"
              >
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline text-sm sm:text-base font-medium">{t.backToHome}</span>
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

      {/* Main Content */}
      <main className="pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 relative z-20">
        <div className="container mx-auto max-w-4xl">
          {/* Title Section */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/30 rounded-full mb-6 sm:mb-8">
              <HelpCircle className="h-8 w-8 sm:h-10 sm:w-10 text-primary" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Privacy Section */}
          <section className="mb-16 sm:mb-20 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-primary" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {t.privacyTitle}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    {t.privacySubtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed">
                {t.privacyDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">
                    {t.noDataCollection}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {t.noDataCollectionDesc}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">
                    {t.noTracking}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {t.noTrackingDesc}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">
                    {t.localProcessing}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {t.localProcessingDesc}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">
                    {t.dataSecurity}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {t.dataSecurityDesc}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 sm:mb-20 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
              {t.faqTitle}
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {t.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-4 sm:px-6">
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:no-underline py-4 sm:py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Contact Section */}
          <section className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              {t.contactTitle}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.contactDescription}
            </p>
            <a 
              href="mailto:outfitted.help@gmail.com"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-primary hover:bg-violet-light text-primary-foreground font-medium text-base sm:text-lg rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label={t.contactLabel}
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
              <span className="font-semibold">outfitted.help@gmail.com</span>
            </a>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border relative z-20">
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

export default Help;


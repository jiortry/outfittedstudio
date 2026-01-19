import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, Languages, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

type Language = "it" | "en";

const translations = {
  it: {
    title: "Scarica Outfitted",
    description: "Scarica l'app Outfitted per iPhone e rivoluziona il tuo guardaroba con l'intelligenza artificiale.",
    downloadiPhone: "Scarica per iPhone",
    downloadAndroid: "Scarica per Android",
    notAvailable: "NON DISPONIBILE",
    openInBrowser: "Apri nel Browser",
    openInBrowserDescription: "Per scaricare l'app, apri questa pagina nel browser del tuo dispositivo (Safari o Chrome).",
    openInBrowserInstructions: "Clicca sul menu in alto a destra e seleziona 'Apri nel browser' o 'Apri in Safari/Chrome'",
    help: "Aiuto",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Termini di Servizio",
  },
  en: {
    title: "Download Outfitted",
    description: "Download the Outfitted app for iPhone and revolutionize your wardrobe with artificial intelligence.",
    downloadiPhone: "Download for iPhone",
    downloadAndroid: "Download for Android",
    notAvailable: "NOT AVAILABLE",
    openInBrowser: "Open in Browser",
    openInBrowserDescription: "To download the app, open this page in your device's browser (Safari or Chrome).",
    openInBrowserInstructions: "Click the menu in the top right corner and select 'Open in browser' or 'Open in Safari/Chrome'",
    help: "Help",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
};

// Funzione per rilevare se è un browser in-app
const isInAppBrowser = (): boolean => {
  if (typeof window === "undefined") return false;
  
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  const ua = userAgent.toLowerCase();
  
  // Rileva browser in-app comuni
  const inAppBrowsers = [
    'tiktok',           // TikTok
    'instagram',        // Instagram
    'fban',             // Facebook Android
    'fbios',            // Facebook iOS
    'fbav',             // Facebook App Version
    'line',             // LINE
    'wechat',           // WeChat
    'snapchat',         // Snapchat
    'whatsapp',         // WhatsApp
    'linkedinapp',      // LinkedIn
    'twitter',          // Twitter/X
    'pinterest',        // Pinterest
    'messenger',        // Facebook Messenger
    'micromessenger',   // WeChat (alternativo)
    'wv',               // WebView generico
  ];
  
  // Controlla se è un browser in-app
  const isInApp = inAppBrowsers.some(browser => ua.includes(browser));
  
  // Se è in standalone mode (PWA), non è un browser in-app
  const isStandalone = (window.navigator as any).standalone === true || 
                       window.matchMedia('(display-mode: standalone)').matches;
  
  if (isStandalone) return false;
  
  return isInApp;
};

// Funzione per rilevare se è Safari o Chrome mobile
const isStandardMobileBrowser = (): boolean => {
  if (typeof window === "undefined") return false;
  
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  const ua = userAgent.toLowerCase();
  
  // Rileva Safari iOS
  const isSafariIOS = /iphone|ipad|ipod/.test(ua) && /safari/.test(ua) && !/crios|fxios/.test(ua);
  
  // Rileva Chrome mobile (Android)
  const isChromeAndroid = /android/.test(ua) && /chrome/.test(ua) && !/edg/.test(ua);
  
  // Rileva Chrome iOS
  const isChromeIOS = /iphone|ipad|ipod/.test(ua) && /crios/.test(ua);
  
  return isSafariIOS || isChromeAndroid || isChromeIOS;
};

const Download = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const isMobile = useIsMobile();
  const [isInApp, setIsInApp] = useState(false);
  const [isStandardBrowser, setIsStandardBrowser] = useState(false);
  
  useEffect(() => {
    setIsInApp(isInAppBrowser());
    setIsStandardBrowser(isStandardMobileBrowser());
  }, []);
  
  // Link App Store basato sulla lingua
  const appStoreLink = language === "it" 
    ? "https://apps.apple.com/it/app/outfitted/id6753338218"
    : "https://apps.apple.com/us/app/outfitted/id6753338218";
  
  // Se è mobile e browser in-app, mostra il messaggio per aprire nel browser
  const showOpenInBrowser = isMobile && isInApp && !isStandardBrowser;
  
  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/outfittedicon.png" 
                alt="Outfitted Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border-2 border-white"
              />
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Outfitted</h1>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground hover:text-foreground"
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
                className="gap-2 text-muted-foreground hover:text-foreground"
                aria-label={language === "it" ? "Switch to English" : "Passa all'italiano"}
              >
                <Languages className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base font-medium">{language === "it" ? "EN" : "IT"}</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Messaggio per aprire nel browser - solo su mobile e browser in-app */}
      {showOpenInBrowser && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-card border border-border rounded-lg shadow-lg p-6 space-y-6 text-center">
            {/* Freccia che indica in alto a destra */}
            <div className="relative flex justify-end">
              <div className="absolute -top-8 -right-4 animate-bounce">
                <ArrowUpRight className="h-12 w-12 text-primary" strokeWidth={2} />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                {t.openInBrowser}
              </h2>
              <p className="text-muted-foreground">
                {t.openInBrowserDescription}
              </p>
              <p className="text-sm text-muted-foreground">
                {t.openInBrowserInstructions}
              </p>
            </div>
            
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full gap-2"
              >
                <a href={window.location.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                  {t.openInBrowser}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Contenuto principale - mostrato solo se non è browser in-app o se è desktop */}
      {!showOpenInBrowser && (
        <section className="pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 relative z-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight text-foreground">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              {t.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
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
      )}

      {/* Legal Documents Section */}
      {!showOpenInBrowser && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 relative z-20 border-t border-border bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
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
      )}

      {/* Footer */}
      {!showOpenInBrowser && (
        <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border relative z-20">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2025 Outfitted
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Download;

import { useEffect, useState } from "react";
import { ArrowUp, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

type Language = "it" | "en";

const translations = {
  it: {
    step1: "Clicca i 3 puntini",
    step2: "Clicca apri nel browser",
    step3: "Scarica l'app",
  },
  en: {
    step1: "Click the 3 dots",
    step2: "Click open in browser",
    step3: "Download the app",
  },
};

// Funzione per rilevare se è un browser standard (Safari, Chrome, o desktop)
const isStandardBrowser = (): boolean => {
  if (typeof window === "undefined") return false;
  
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  const ua = userAgent.toLowerCase();
  
  // Se è desktop, è sempre un browser standard
  const isDesktop = !/iphone|ipad|ipod|android/.test(ua);
  if (isDesktop) return true;
  
  // Rileva Safari iOS - deve avere Safari e non essere un browser in-app
  // Escludiamo TikTok che può avere "Mobile Safari" ma anche "BytedanceWebview" o "trill"
  const isIOS = /iphone|ipad|ipod/.test(ua);
  const hasSafari = ua.includes('safari');
  const isTikTok = ua.includes('bytedancewebview') || ua.includes('bytelocale') || ua.includes('trill') || ua.includes('appname/trill');
  const isSafariIOS = isIOS && hasSafari && !/crios|fxios/.test(ua) && !ua.includes('wv') && !isTikTok;
  
  // Rileva Chrome mobile (Android) - deve essere Chrome e non WebView
  const isAndroid = /android/.test(ua);
  const hasChrome = ua.includes('chrome');
  const isChromeAndroid = isAndroid && hasChrome && !/edg/.test(ua) && !ua.includes('wv');
  
  // Rileva Chrome iOS
  const isChromeIOS = isIOS && /crios/.test(ua);
  
  // Firefox iOS
  const isFirefoxIOS = isIOS && /fxios/.test(ua);
  
  return isSafariIOS || isChromeAndroid || isChromeIOS || isFirefoxIOS;
};

// Funzione per rilevare se è un browser in-app
const isInAppBrowser = (): boolean => {
  if (typeof window === "undefined") return false;
  
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  const ua = userAgent.toLowerCase();
  
  // Se è in standalone mode (PWA), non è un browser in-app
  const isStandalone = (window.navigator as any).standalone === true || 
                       window.matchMedia('(display-mode: standalone)').matches;
  
  if (isStandalone) return false;
  
  // Se è un browser standard, non è in-app
  if (isStandardBrowser()) return false;
  
  const isMobile = /iphone|ipad|ipod|android/.test(ua);
  const isIOS = /iphone|ipad|ipod/.test(ua);
  const isAndroid = /android/.test(ua);
  
  // Pattern specifici per TikTok (molto importanti - TikTok usa questi nel user agent)
  const tiktokPatterns = [
    'bytedancewebview',  // BytedanceWebview - segnale tecnico molto specifico di TikTok
    'bytelocale',        // ByteLocale - locale di ByteDance/TikTok
    'bytefulllocale',    // ByteFullLocale - locale completo
    'trill',             // trill - nome bundle di TikTok
    'tiktok',            // TikTok generico
    'musical_ly',        // Musical.ly (predecessore di TikTok)
    'aweme',             // Aweme (TikTok internamente)
    'sslocal',           // TikTok (pattern alternativo)
  ];
  
  // Rileva browser in-app comuni
  const inAppBrowsers = [
    'instagram',        // Instagram
    'fban',             // Facebook Android
    'fbios',            // Facebook iOS
    'fbav',             // Facebook App Version
    'fb_iab',           // Facebook In-App Browser
    'fb4a',             // Facebook for Android
    'line',             // LINE
    'wechat',           // WeChat
    'snapchat',         // Snapchat
    'whatsapp',         // WhatsApp
    'linkedinapp',      // LinkedIn
    'twitter',          // Twitter/X
    'pinterest',        // Pinterest
    'messenger',        // Facebook Messenger
    'micromessenger',   // WeChat (alternativo)
  ];
  
  // Controlla prima i pattern TikTok (più specifici)
  const isTikTok = tiktokPatterns.some(pattern => ua.includes(pattern));
  
  // Controlla altri browser in-app
  const isOtherInApp = inAppBrowsers.some(browser => ua.includes(browser));
  
  const isInApp = isTikTok || isOtherInApp;
  
  // Se già rilevato come TikTok o altro browser in-app, ritorna true
  if (isInApp) {
    return true;
  }
  
  // Controllo aggiuntivo: WebView su mobile (spesso usato da app social)
  // Se è mobile e contiene "wv" (WebView) ma non è Chrome, probabilmente è in-app
  const isWebView = ua.includes('wv') && !ua.includes('chrome');
  
  // Controllo per TikTok specifico su iOS: TikTok può avere pattern come "AppName/trill" nel user agent
  // Esempio: "Mobile Safari/537.36 trill_430104 AppName/trill ByteLocale/en ... BytedanceWebview/..."
  const hasSafari = ua.includes('safari');
  const hasTrillInUA = ua.includes('trill') || ua.includes('appname/trill');
  
  // Se su iOS e ha pattern TikTok ma non Safari standard, è TikTok
  if (isIOS && hasTrillInUA && !hasSafari) {
    return true;
  }
  
  // Controllo per Android: WebView che non è Chrome standard
  if (isAndroid && isWebView) {
    return true;
  }
  
  // Fallback: se è mobile e non è un browser standard riconosciuto, potrebbe essere in-app
  // Ma questo è più conservativo per evitare falsi positivi
  return false;
};

const Download = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const [isInApp, setIsInApp] = useState<boolean | null>(null);
  
  useEffect(() => {
    const inApp = isInAppBrowser();
    const standard = isStandardBrowser();
    
    setIsInApp(inApp);
    
    // Se è un browser standard (Safari, Chrome, o desktop), reindirizza alla homepage
    if (standard) {
      navigate("/", { replace: true });
    }
  }, [navigate]);
  
  // Se non è ancora stato determinato, mostra un loader o nulla
  if (isInApp === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  // Se non è un browser in-app, non mostrare nulla (dovrebbe essere già stato reindirizzato)
  if (!isInApp) {
    return null;
  }
  
  // Mostra il messaggio solo se è un browser in-app
  return (
    <div className="min-h-screen bg-background relative">
      {/* Freccia che indica in alto a destra dello schermo */}
      <div className="fixed top-4 right-4 z-[101] animate-bounce pointer-events-none">
        <ArrowUp className="h-16 w-16 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" strokeWidth={3} />
      </div>

      {/* Messaggio per aprire nel browser - solo su browser in-app */}
      <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card border border-border rounded-lg shadow-lg p-8 space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src="/outfittedicon.png" 
              alt="Outfitted Logo" 
              className="w-16 h-16 rounded-lg border-2 border-white"
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground text-center mb-6">
              {language === "it" ? "Come scaricare l'app" : "How to download the app"}
            </h2>
            
            {/* Elenco puntato semplice */}
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3">
                <span className="text-white font-bold text-lg">1.</span>
                <span className="text-white text-base">{t.step1}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white font-bold text-lg">2.</span>
                <span className="text-white text-base">{t.step2}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white font-bold text-lg">3.</span>
                <span className="text-white text-base">{t.step3}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Switcher di lingua in basso */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-[101]">
        <Button
          onClick={toggleLanguage}
          variant="outline"
          size="lg"
          className="gap-2 bg-background/90 backdrop-blur-sm"
          aria-label={language === "it" ? "Switch to English" : "Passa all'italiano"}
        >
          <Languages className="h-5 w-5" />
          <span className="font-medium">{language === "it" ? "EN" : "IT"}</span>
        </Button>
      </div>
    </div>
  );
};

export default Download;

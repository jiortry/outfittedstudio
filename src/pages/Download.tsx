import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

type Language = "it" | "en";

const translations = {
  it: {
    openInBrowser: "Apri nel Browser",
    openInBrowserDescription: "Per scaricare l'app, apri questa pagina nel browser del tuo dispositivo (Safari o Chrome).",
    openInBrowserInstructions: "Clicca sul menu in alto a destra e seleziona 'Apri nel browser' o 'Apri in Safari/Chrome'",
  },
  en: {
    openInBrowser: "Open in Browser",
    openInBrowserDescription: "To download the app, open this page in your device's browser (Safari or Chrome).",
    openInBrowserInstructions: "Click the menu in the top right corner and select 'Open in browser' or 'Open in Safari/Chrome'",
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
  const isIOS = /iphone|ipad|ipod/.test(ua);
  const hasSafari = ua.includes('safari');
  const isSafariIOS = isIOS && hasSafari && !/crios|fxios/.test(ua) && !ua.includes('wv');
  
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
  
  // Rileva browser in-app comuni - pattern più specifici
  const inAppBrowsers = [
    'tiktok',           // TikTok
    'musical_ly',       // Musical.ly (predecessore di TikTok)
    'aweme',            // Aweme (TikTok internamente)
    'bytedance',        // ByteDance (proprietario di TikTok)
    'sslocal',          // TikTok (pattern alternativo)
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
  
  // Controlla se è un browser in-app con pattern specifici
  const isInApp = inAppBrowsers.some(browser => ua.includes(browser));
  
  // Controllo aggiuntivo: WebView su mobile (spesso usato da app social)
  // Se è mobile e contiene "wv" (WebView) ma non è Chrome, probabilmente è in-app
  const isWebView = ua.includes('wv') && !ua.includes('chrome');
  
  // Controllo per TikTok specifico su iOS: spesso usa WebView senza identificarsi chiaramente
  // TikTok su iOS può avere pattern come "Version/X.X" senza Safari
  const hasSafari = ua.includes('safari');
  const isTikTokLikeIOS = isIOS && !hasSafari && !ua.includes('crios') && !ua.includes('fxios') && !ua.includes('version');
  
  // Controllo per TikTok su Android: spesso usa WebView Android senza identificarsi
  const isTikTokLikeAndroid = isAndroid && ua.includes('wv') && !ua.includes('chrome');
  
  // Controllo aggiuntivo: se è mobile e non ha pattern di browser standard, potrebbe essere in-app
  // Questo è un fallback per casi edge come TikTok che non si identificano bene
  if (isMobile) {
    // Se ha WebView o pattern TikTok-like, è in-app
    if (isWebView || isTikTokLikeIOS || isTikTokLikeAndroid) {
      return true;
    }
    
    // Controllo per iOS: se non ha Safari e non è Chrome/Firefox, potrebbe essere in-app
    if (isIOS && !hasSafari && !ua.includes('crios') && !ua.includes('fxios')) {
      // Ma escludiamo se ha "version" che indica Safari standard
      if (!ua.includes('version')) {
        return true;
      }
    }
  }
  
  return isInApp;
};

const Download = () => {
  const { language } = useLanguage();
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
      {/* Messaggio per aprire nel browser - solo su browser in-app */}
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
    </div>
  );
};

export default Download;

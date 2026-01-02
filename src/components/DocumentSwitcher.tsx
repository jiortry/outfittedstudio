import { Languages, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

type DocumentType = "privacy" | "tos";
type Language = "it" | "en";

const DocumentSwitcher = () => {
  const location = useLocation();

  // Determina il tipo di documento corrente
  const currentDoc: DocumentType = location.pathname.includes("privacy") ? "privacy" : "tos";
  const currentLang: Language = location.pathname.includes("_it") ? "it" : "en";

  // Funzione per ottenere il link corretto
  const getLink = (doc: DocumentType, lang: Language) => {
    if (doc === "privacy") {
      return lang === "it" ? "/privacy_it" : "/privacy_en";
    } else {
      return lang === "it" ? "/tos_it" : "/tos_en";
    }
  };

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {/* Document Switcher */}
      <div className="flex items-center gap-1 bg-muted rounded-lg p-1 border border-border">
        <Button
          asChild
          variant={currentDoc === "privacy" ? "default" : "ghost"}
          size="sm"
          className="gap-2 text-xs sm:text-sm h-8 px-3"
        >
          <Link to={getLink("privacy", currentLang)}>
            <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline font-medium">Privacy</span>
            <span className="sm:hidden">P</span>
          </Link>
        </Button>
        <Button
          asChild
          variant={currentDoc === "tos" ? "default" : "ghost"}
          size="sm"
          className="gap-2 text-xs sm:text-sm h-8 px-3"
        >
          <Link to={getLink("tos", currentLang)}>
            <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline font-medium">ToS</span>
            <span className="sm:hidden">T</span>
          </Link>
        </Button>
      </div>

      {/* Language Switcher */}
      <div className="flex items-center gap-1 bg-muted rounded-lg p-1 border border-border">
        <Button
          asChild
          variant={currentLang === "it" ? "default" : "ghost"}
          size="sm"
          className="gap-2 text-xs sm:text-sm h-8 px-3"
        >
          <Link to={getLink(currentDoc, "it")}>
            <Languages className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="font-medium">IT</span>
          </Link>
        </Button>
        <Button
          asChild
          variant={currentLang === "en" ? "default" : "ghost"}
          size="sm"
          className="gap-2 text-xs sm:text-sm h-8 px-3"
        >
          <Link to={getLink(currentDoc, "en")}>
            <Languages className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="font-medium">EN</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DocumentSwitcher;


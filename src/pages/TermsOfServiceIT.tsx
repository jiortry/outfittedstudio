import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import DocumentSwitcher from "@/components/DocumentSwitcher";
import termsOfServiceIT from "../../TERMS_OF_SERVICE_IT.md?raw";

const TermsOfServiceIT = () => {
  return (
    <div className="min-h-screen bg-background relative">
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
                  <span className="hidden sm:inline text-sm sm:text-base font-medium">Torna alla Home</span>
                </Link>
              </Button>
              <DocumentSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 relative z-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 md:p-12 shadow-sm">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-foreground">{children}</h3>,
                  h4: ({ children }) => <h4 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-foreground">{children}</h4>,
                  p: ({ children }) => <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">{children}</ol>,
                  li: ({ children }) => <li className="text-sm sm:text-base leading-relaxed">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                  a: ({ href, children }) => (
                    <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                  hr: () => <hr className="my-8 border-border" />,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {termsOfServiceIT}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border relative z-20">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <p className="text-xs sm:text-sm text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            © 2025 Outfitted
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfServiceIT;



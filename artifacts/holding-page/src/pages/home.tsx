import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, AlertTriangle } from "lucide-react";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Helmet } from "react-helmet-async";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom aggressive easing for brutalist animations
const brutalistEase = [0.83, 0, 0.17, 1] as const;

export default function Home() {
  const [email, setEmail] = useState("");
  const { mutate, isPending, isSuccess, error } = useCreateSubscriber();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isPending) return;
    mutate({ data: { email } });
  };

  // Determine error message based on common API patterns
  const errorMessage = error
    ? error.status === 409 || error?.response?.status === 409
      ? "YOU'RE ALREADY ON THE LIST."
      : "INVALID SIGNAL. CHECK YOUR EMAIL."
    : null;

  return (
    <>
      <Helmet>
        <title>Personal Brand: Personal Branding for NZ Professionals</title>
        <meta name="description" content="Personal branding, personal websites and LinkedIn for New Zealand professionals. A Small But Mighty brand. Join the launch list." />
        <link rel="canonical" href="https://www.personalbrand.co.nz/" />
      </Helmet>
      <div className="relative min-h-screen w-full bg-background flex flex-col items-center justify-center px-6 py-12 sm:p-12 overflow-x-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 bg-noise mix-blend-difference"></div>
      
      {/* Subtle radial gradient to separate background slightly */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-background to-background pointer-events-none"></div>

      <main className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-start">
        <h1 className="sr-only">Personal branding for people who want to be known.</h1>
        
        {/* Animated Headline Reveal */}
        <div className="mb-12 md:mb-16 overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.7, ease: brutalistEase }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.85] text-foreground m-0 p-0 tracking-tight"
          >
            YOUR BRAND IS <br />
            <span className="text-accent">ALREADY TALKING.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: brutalistEase }}
            className="mt-6 text-base sm:text-lg md:text-xl text-neutral-400 font-mono font-bold max-w-xl uppercase tracking-widest"
          >
            What exactly is it saying? Drop your email. <br/>We'll show you how to take control of the narrative.
          </motion.p>
        </div>

        {/* Dynamic Form Area */}
        <div className="w-full max-w-2xl min-h-[120px] relative">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: brutalistEase }}
                onSubmit={handleSubmit}
                className="w-full"
              >
                <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-0 w-full">
                  <input
                    type="email"
                    required
                    disabled={isPending}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL"
                    className={cn(
                      "w-full h-16 sm:h-20 px-6 bg-transparent border-4 border-border text-foreground font-mono text-lg sm:text-xl placeholder:text-neutral-600 focus:outline-none focus:border-accent transition-colors rounded-none",
                      error && "border-destructive focus:border-destructive"
                    )}
                  />
                  
                  <button
                    type="submit"
                    disabled={isPending || !email.trim()}
                    className={cn(
                      "h-16 sm:h-20 px-8 sm:px-12 bg-foreground text-background font-display text-2xl sm:text-3xl uppercase tracking-widest flex items-center justify-center gap-3 brutalist-shadow rounded-none border-4 border-transparent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                      error && "brutalist-shadow-error bg-destructive text-destructive-foreground"
                    )}
                  >
                    {isPending ? (
                      <Loader2 className="w-8 h-8 animate-spin" />
                    ) : (
                      <>
                        <span>I'M IN</span>
                        <ArrowRight className="w-8 h-8 stroke-[3]" />
                      </>
                    )}
                  </button>
                </div>

                {/* Error State */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-full left-0 mt-4 flex items-center gap-2 text-destructive font-mono font-bold uppercase tracking-wider bg-destructive/10 px-4 py-2 border-l-4 border-destructive"
                    >
                      <AlertTriangle className="w-5 h-5" />
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: brutalistEase }}
                className="w-full h-20 bg-accent text-accent-foreground border-4 border-accent flex items-center px-6 sm:px-8 brutalist-shadow"
              >
                <p className="font-display text-3xl sm:text-4xl uppercase tracking-wider w-full">
                  <span>You're in.</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <section
          className="mt-10 max-w-2xl space-y-4 text-neutral-500 font-mono text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider leading-relaxed"
          aria-label="About Personal Brand"
        >
          <p>Personal Brand is a New Zealand personal branding studio from Small But Mighty. We build the whole thing: a brand identity built around your name, a personal website you own, your LinkedIn and social profiles set up properly, and the ads that put you in front of the right people.</p>
          <p>It is for anyone whose name is the thing people search for. Business owners and directors, consultants and advisers, sports people, creatives, and people looking for their next role. If you are known for what you do but your online presence is not doing you justice, this is for you.</p>
          <p>We are based in Marlborough and Wellington and work with people across New Zealand. The full site is coming soon. Drop your email above and you will be first to see it.</p>
        </section>

      </main>
      <footer className="relative z-10 w-full max-w-4xl mx-auto mt-12 text-neutral-600 font-mono text-[0.65rem] uppercase tracking-widest">
        A <a href="https://www.smallbutmighty.nz/" className="hover:text-neutral-400 transition-colors">Small But Mighty</a> brand ·{" "}
        <a href="mailto:hello@personalbrand.co.nz" className="hover:text-neutral-400 transition-colors">hello@personalbrand.co.nz</a>
      </footer>
    </div>
    </>
  );
}

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

const serviceGroups = [
  {
    heading: "FIND OUT WHERE YOU STAND",
    items: [
      ["A personal brand stocktake to start", "we search you the way a stranger would, across Google, LinkedIn, social and AI search, and show you exactly what comes up, what is missing, and what is working against you. You get a written report and a short list of what to fix first."],
      ["A strategy to be seen", "who you need to reach, where they look, and what you need to be known for."],
      ["A quarterly check in", "what has changed, what is working, and what to do next."],
    ],
  },
  {
    heading: "BE FOUND",
    items: [
      ["Discoverability", "making sure you come up when someone Googles you, searches LinkedIn, or asks an AI who the go to person is."],
      ["SEO for your name", "owning the first page of Google when someone searches you, and ranking for the thing you want to be known for, not just your name."],
      ["AI search visibility", "making sure ChatGPT, Gemini and the rest describe you accurately when asked."],
      ["Your name as a domain", "securing yourname.nz and .co.nz before someone else does, at cost."],
    ],
  },
  {
    heading: "SAY IT PROPERLY",
    items: [
      ["LinkedIn profile rewrite", "headline, about section, featured, and a banner that matches the rest of your brand."],
      ["Social media set up, done properly", "the right platforms, profiles that say the same thing everywhere, nothing half finished."],
      ["Social media content strategy", "what to post, how often, and a system so it actually happens."],
      ["A bio pack", "short, medium and long bios plus a boilerplate, so every introduction, programme and article says the same thing."],
      ["A speaker or media one pager", "what you talk about, who you have talked to, and how to book you."],
    ],
  },
  {
    heading: "OWN YOUR SPACE",
    items: [
      ["A simple website", "that is yours, not your employer's, so your name has a home online."],
      ["On brand email on your own domain", "set up on Google Workspace, so you are not sending from a Gmail address."],
      ["Newsletter set up on Mighty Mail", "the one channel you own that no algorithm can take away."],
      ["Photography and video", "a proper headshot and a set of images you can use for a year, through a partner photographer."],
    ],
  },
  {
    heading: "MAKE IT WORK FOR YOU",
    items: [
      ["Online reputation management", "what is out there, what should not be, and how to tidy it up."],
      ["Podcast and media guesting", "a shortlist of shows and publications that reach your audience, and the pitch to get you on."],
      ["Monetising your profile", "speaking, advisory work, newsletters, courses, partnerships and sponsorship, once you have an audience worth something."],
      ["Training on content creation", "how to write a post, film yourself on a phone, and keep it going without an agency."],
    ],
  },
] as const;

export default function Home() {
  const [email, setEmail] = useState("");
  const { mutate, isPending, isSuccess, error } = useCreateSubscriber();
  const [contactStatus, setContactStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isPending) return;
    mutate({ data: { email } });
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (contactStatus === "pending") return;

    setContactStatus("pending");
    const form = e.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/xkopngpv", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Contact form submission failed");

      const analyticsWindow = window as Window & {
        dataLayer?: Array<Record<string, string>>;
      };
      analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
      analyticsWindow.dataLayer.push({ event: "contact_form_submit" });
      form.reset();
      setContactStatus("success");
    } catch {
      setContactStatus("error");
    }
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
        <meta name="description" content="A strategy to be seen. Personal branding for New Zealand professionals: social, content, discoverability and reputation. A Small But Mighty brand." />
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
            initial={false}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.7, ease: brutalistEase }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.85] text-foreground m-0 p-0 tracking-tight"
          >
            YOUR BRAND IS <br />
            <span className="text-accent">ALREADY TALKING.</span>
          </motion.h2>
          
          <motion.p 
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: brutalistEase }}
            className="mt-6 text-base sm:text-lg md:text-xl text-neutral-400 font-mono font-bold max-w-xl uppercase tracking-widest"
          >
            What exactly is it saying? We give you a strategy to be seen, and we do the work to make it happen.
          </motion.p>
        </div>

        <div className="mt-10 w-full max-w-3xl space-y-16 text-neutral-400 font-mono text-sm sm:text-base leading-relaxed">
          <section className="space-y-5" aria-label="About Personal Brand">
            <p>Personal Brand is a New Zealand personal branding studio from Small But Mighty. We start with a strategy to be seen: where you should show up, what you should be known for, and what to say once you are there. Then we do the work around it.</p>
            <p>It is organic. Showing up consistently in the places your people already look, saying things worth remembering, and making sure that when someone searches your name, what they find is the version of you that you chose.</p>
          </section>

          <section className="space-y-6" aria-labelledby="what-we-do">
            <h2 id="what-we-do" className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">WHAT WE DO</h2>
            <div className="service-card-grid">
              {serviceGroups.map((group, groupIndex) => (
                <article className="service-card" key={group.heading}>
                  <h3>{group.heading}</h3>
                  <ul>
                    {group.items.map(([name, explanation], itemIndex) => (
                      <li key={name}>
                        <details data-testid={`service-item-${groupIndex}-${itemIndex}`}>
                          <summary>{name}</summary>
                          <p>{explanation}</p>
                        </details>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-5" aria-labelledby="opposite">
            <h2 id="opposite" className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">OR THE OPPOSITE.</h2>
            <p>Sometimes the job is not being found. We can work the other way and check what a stranger can dig up about you: old social posts, personal details, addresses, photos you forgot about, accounts you stopped using. Then we lock it down, clean it up, and get the worst of it removed.</p>
          </section>

          <p>It is for anyone whose name is the thing people search for. Business owners and directors, chief executives, consultants and advisers, sports people, creatives, and people looking for their next role. If you are known for what you do but your online presence is not doing you justice, this is for you.</p>

          <section className="space-y-5" aria-labelledby="coming-soon">
            <h2 id="coming-soon" className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">COMING SOON</h2>
            <p>We are putting together practical how to guides for particular groups of people: real estate agents, sports people, company directors, chief executives, consultants, and people between roles. Each one is a short list of things to do this month to be seen for the right reasons. Join the list below and you will get them first.</p>
          </section>

          <section className="space-y-5" aria-labelledby="signup">
            <h2 id="signup" className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">BE FIRST TO SEE IT.</h2>
            <p>The full site is coming. Drop your email and you will get the guides and the launch before anyone else.</p>
            <div className="w-full max-w-2xl min-h-[120px] relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={false}
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
          </section>

          <section className="space-y-5" aria-labelledby="contact">
            <h2 id="contact" className="font-display text-4xl sm:text-5xl text-foreground tracking-wide">WANT TO TALK NOW?</h2>
            <p>Tell us who you are and what you want to be known for. We will come back to you within a day.</p>
            <AnimatePresence mode="wait">
              {contactStatus !== "success" ? (
                <motion.form
                  key="contact-form"
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: 20 }}
                  action="https://formspree.io/f/xkopngpv"
                  method="POST"
                  onSubmit={handleContactSubmit}
                  className="w-full max-w-2xl space-y-4"
                >
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <input type="text" name="name" required placeholder="YOUR NAME" className="w-full h-16 px-6 bg-transparent border-4 border-border text-foreground font-mono text-lg placeholder:text-neutral-600 focus:outline-none focus:border-accent transition-colors rounded-none" />
                  <input type="email" name="email" required placeholder="YOUR EMAIL" className="w-full h-16 px-6 bg-transparent border-4 border-border text-foreground font-mono text-lg placeholder:text-neutral-600 focus:outline-none focus:border-accent transition-colors rounded-none" />
                  <textarea name="message" required placeholder="WHAT DO YOU WANT TO BE KNOWN FOR?" rows={6} className="w-full p-6 bg-transparent border-4 border-border text-foreground font-mono text-lg placeholder:text-neutral-600 focus:outline-none focus:border-accent transition-colors rounded-none resize-y" />
                  <button
                    type="submit"
                    disabled={contactStatus === "pending"}
                    className={cn(
                      "h-16 sm:h-20 px-8 sm:px-12 bg-foreground text-background font-display text-2xl sm:text-3xl uppercase tracking-widest flex items-center justify-center gap-3 brutalist-shadow rounded-none border-4 border-transparent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                      contactStatus === "error" && "brutalist-shadow-error bg-destructive text-destructive-foreground"
                    )}
                  >
                    {contactStatus === "pending" ? <Loader2 className="w-8 h-8 animate-spin" /> : <><span>SEND IT</span><ArrowRight className="w-8 h-8 stroke-[3]" /></>}
                  </button>
                  {contactStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-destructive font-mono font-bold uppercase tracking-wider bg-destructive/10 px-4 py-2 border-l-4 border-destructive"
                    >
                      <AlertTriangle className="w-5 h-5" />
                      SOMETHING BROKE. TRY AGAIN.
                    </motion.div>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full max-w-2xl min-h-20 bg-accent text-accent-foreground border-4 border-accent flex items-center px-6 sm:px-8 brutalist-shadow"
                >
                  <p className="font-display text-3xl sm:text-4xl uppercase tracking-wider">Got it. We will be in touch.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>

      </main>
      <footer className="relative z-10 w-full max-w-4xl mx-auto mt-12 text-neutral-600 font-mono text-[0.65rem] uppercase tracking-widest">
        A <a href="https://www.smallbutmighty.nz/" className="hover:text-neutral-400 transition-colors">Small But Mighty</a> brand
      </footer>
    </div>
    </>
  );
}

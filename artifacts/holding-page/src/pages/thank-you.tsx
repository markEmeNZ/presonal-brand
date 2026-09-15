import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ease = [0.83, 0, 0.17, 1] as const;

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | Personal Brand</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="relative min-h-screen w-full bg-background flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-noise mix-blend-difference pointer-events-none" />

      <main className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-accent font-mono font-bold text-sm uppercase tracking-widest">
            <CheckCheck className="w-5 h-5" />
            Signal received
          </span>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.9] text-foreground uppercase"
          >
            YOU'RE ON<br />
            <span className="text-accent">THE LIST.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease }}
          className="text-neutral-400 font-mono text-base sm:text-lg max-w-lg leading-relaxed uppercase tracking-wider mb-12"
        >
          Watch your inbox. We'll be in touch when something worth saying is ready to be said.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-neutral-600 font-mono text-xs uppercase tracking-widest"
        >
          personalbrand.co.nz
        </motion.p>
      </main>
      </div>
    </>
  );
}

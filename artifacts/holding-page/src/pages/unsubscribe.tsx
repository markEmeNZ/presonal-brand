import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";

const ease = [0.83, 0, 0.17, 1] as const;

type Status = "loading" | "success" | "already" | "error";

export default function Unsubscribe() {
  const [location] = useLocation();
  const [status, setStatus] = useState<Status>("loading");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      setStatus("error");
      return;
    }

    fetch(`/api/unsubscribe?token=${encodeURIComponent(token)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "unsubscribed") {
          setEmail(data.email || "");
          setStatus("success");
        } else if (data.message === "already_unsubscribed") {
          setEmail(data.email || "");
          setStatus("already");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  const content: Record<Status, { heading: string; sub: string; accent?: boolean }> = {
    loading: {
      heading: "HOLD ON...",
      sub: "Processing your request.",
    },
    success: {
      heading: "YOU'RE OUT.",
      sub: email
        ? `${email} has been removed from our list. No hard feelings. The door's open if you change your mind.`
        : "You've been removed from our list. No hard feelings.",
      accent: true,
    },
    already: {
      heading: "ALREADY DONE.",
      sub: "You've already unsubscribed. We won't be in touch.",
    },
    error: {
      heading: "SOMETHING'S OFF.",
      sub: "That unsubscribe link doesn't look right. Try clicking the link in your email again.",
    },
  };

  const { heading, sub, accent } = content[status];

  return (
    <>
      <Helmet>
        <title>Unsubscribe | Personal Brand</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="relative min-h-screen w-full bg-background flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-noise mix-blend-difference pointer-events-none" />

      <main className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-start">
        <div className="overflow-hidden mb-6">
          <motion.h1
            key={heading}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease }}
            className={`font-display text-5xl sm:text-7xl md:text-8xl leading-[0.9] uppercase ${accent ? "text-accent" : "text-foreground"}`}
          >
            {heading}
          </motion.h1>
        </div>

        <motion.p
          key={sub}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease }}
          className="text-neutral-400 font-mono text-base sm:text-lg max-w-lg leading-relaxed uppercase tracking-wider mb-12"
        >
          {sub}
        </motion.p>

        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="font-mono text-xs uppercase tracking-widest text-neutral-600 hover:text-neutral-400 transition-colors"
        >
          ← Back
        </motion.a>
      </main>
      </div>
    </>
  );
}

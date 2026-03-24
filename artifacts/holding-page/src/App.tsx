import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/home";
import ThankYou from "./pages/thank-you";
import Unsubscribe from "./pages/unsubscribe";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center relative">
      <div className="absolute inset-0 z-0 bg-noise mix-blend-difference pointer-events-none" />
      <h1 className="font-display text-8xl md:text-[10rem] text-accent leading-none m-0">404</h1>
      <p className="font-mono font-bold text-xl text-neutral-400 mt-4 uppercase tracking-widest">
        Dead end. You're lost.
      </p>
      <a
        href="/"
        className="mt-12 px-8 py-4 bg-foreground text-background font-display text-2xl uppercase tracking-widest brutalist-shadow rounded-none border-4 border-transparent cursor-pointer inline-block"
      >
        GO BACK
      </a>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/unsubscribe" component={Unsubscribe} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;

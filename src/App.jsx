import { Switch, Route } from "wouter";
import Home from "../src/pages/home";
import About from "../src/pages/about";
import Services from "../src/pages/services";
import { Navigation } from "../src/components/layout/navigation";
import { Footer } from "../src/components/layout/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { Toaster } from "../src/components/ui/toaster";

// Create a client
const queryClient = new QueryClient();

function Router() {


  return (
    <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
    </Switch>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App

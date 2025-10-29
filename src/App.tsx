import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><Index /></DashboardLayout>} />
          <Route path="/students" element={<DashboardLayout><div className="p-6"><h1 className="text-2xl font-bold">Students Page</h1></div></DashboardLayout>} />
          <Route path="/center" element={<DashboardLayout><div className="p-6"><h1 className="text-2xl font-bold">Center Page</h1></div></DashboardLayout>} />
          <Route path="/training" element={<DashboardLayout><div className="p-6"><h1 className="text-2xl font-bold">Training Page</h1></div></DashboardLayout>} />
          <Route path="/applications" element={<DashboardLayout><div className="p-6"><h1 className="text-2xl font-bold">Applications Page</h1></div></DashboardLayout>} />
          <Route path="/settings" element={<DashboardLayout><div className="p-6"><h1 className="text-2xl font-bold">Settings Page</h1></div></DashboardLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { DashboardLayout } from "./components/DashboardLayout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><DashboardLayout><Index /></DashboardLayout></ProtectedRoute>} />
            <Route path="/students" element={<ProtectedRoute><DashboardLayout><div className="p-6"><h1 className="text-2xl font-bold">Students Page</h1></div></DashboardLayout></ProtectedRoute>} />
            <Route path="/center" element={<ProtectedRoute><DashboardLayout><div className="p-6"><h1 className="text-2xl font-bold">Center Page</h1></div></DashboardLayout></ProtectedRoute>} />
            <Route path="/training" element={<ProtectedRoute><DashboardLayout><div className="p-6"><h1 className="text-2xl font-bold">Training Page</h1></div></DashboardLayout></ProtectedRoute>} />
            <Route path="/applications" element={<ProtectedRoute><DashboardLayout><div className="p-6"><h1 className="text-2xl font-bold">Applications Page</h1></div></DashboardLayout></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><DashboardLayout><div className="p-6"><h1 className="text-2xl font-bold">Settings Page</h1></div></DashboardLayout></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

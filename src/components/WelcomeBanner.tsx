import { Sparkles } from "lucide-react";

export function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden rounded-xl p-8 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground shadow-lg">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <h1 className="text-3xl font-bold">सुप्रभात, सेना भारती</h1>
          <Sparkles className="w-6 h-6" />
        </div>
        <p className="text-sm opacity-90 max-w-xl leading-relaxed">
          सेना भारती समाज की सेवा और कल्याणकर्ताओं की सहायता के लिए हमारे संगठन हैं
          <br />
          यह शिक्षा, स्वास्थ्य और सेवाओं के माध्यम से समाज पुनर्निर्माण करने का काम करता है
        </p>
      </div>
      
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-90">
        <div className="relative w-48 h-32">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-lg"></div>
          <div className="absolute inset-2 bg-white/30 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs font-semibold mb-1">सेना भारती</div>
              <div className="flex gap-1 justify-center">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-12 bg-accent/60 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

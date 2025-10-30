import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LOKPRIYA_CENTERS } from "@/constants/dashboard";
import { Building2 } from "lucide-react";

/**
 * Lokpriya Centers section with horizontal carousel
 * Displays popular centers with scroll functionality
 */
export function LokpriyaSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">लोकप्रिय केंद्र</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pr-4">
            {LOKPRIYA_CENTERS.map((center) => (
              <Card key={center.id} className="overflow-hidden hover:shadow-md transition-shadow h-full">
                <CardContent className="p-0">
                  <div className={`${center.bgColor} p-6 flex items-center justify-center min-h-[160px]`}>
                    <div className="w-32 h-32 bg-white/80 rounded-lg flex items-center justify-center">
                      <Building2 className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-base mb-1">{center.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{center.location}</p>
                    <div className="mb-2">
                      <span className="text-xs font-medium text-foreground">Bio</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-3">{center.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

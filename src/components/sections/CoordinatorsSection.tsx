import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MOCK_COORDINATORS } from "@/constants/dashboard";

/**
 * Coordinators section
 * Displays grid of main coordinators for the region
 */
export function CoordinatorsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">मुख्य समन्वयक (राजस्थान)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {MOCK_COORDINATORS.map((coord, idx) => {
            const initials = coord.name.split(" ").map(n => n[0]).join("");
            
            return (
              <Card key={`${coord.name}-${idx}`} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <Avatar className={`w-20 h-20 mx-auto mb-3 ${coord.color}`}>
                    <AvatarFallback className="text-xl font-semibold bg-transparent">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold mb-1">{coord.name}</h3>
                  <p className="text-xs text-muted-foreground">{coord.school}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

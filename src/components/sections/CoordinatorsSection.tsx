import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CoordinatorCard } from "@/components/CoordinatorCard";
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
          {MOCK_COORDINATORS.map((coord, idx) => (
            <CoordinatorCard
              key={`${coord.name}-${idx}`}
              name={coord.name}
              school={coord.school}
              avatarColor={coord.color}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

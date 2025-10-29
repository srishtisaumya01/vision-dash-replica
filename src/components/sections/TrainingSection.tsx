import { GraduationCap, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrainingCard } from "@/components/TrainingCard";
import { TRAINING_PROGRAMS } from "@/constants/dashboard";

/**
 * Training programs section
 * Displays available training programs with illustrations
 */
export function TrainingSection() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-xl flex items-center gap-2">
          प्रशिक्षण 
          <GraduationCap className="w-5 h-5 text-primary" />
        </CardTitle>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          View All
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {TRAINING_PROGRAMS.map((program, index) => (
            <TrainingCard
              key={program.title}
              title={program.title}
              description={program.description}
              illustration={
                <div className={`w-24 h-24 ${program.variant === 'blue' ? 'bg-blue-200' : 'bg-pink-200'} rounded-lg flex items-center justify-center`}>
                  {index === 0 ? (
                    <GraduationCap className={`w-12 h-12 ${program.variant === 'blue' ? 'text-blue-600' : 'text-pink-600'}`} />
                  ) : (
                    <Users className={`w-12 h-12 ${program.variant === 'blue' ? 'text-blue-600' : 'text-pink-600'}`} />
                  )}
                </div>
              }
              variant={program.variant}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

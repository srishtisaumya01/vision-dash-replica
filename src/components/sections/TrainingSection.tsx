import { GraduationCap, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
          {TRAINING_PROGRAMS.map((program, index) => {
            const bgColor = program.variant === "blue" ? "bg-blue-50" : "bg-pink-50";
            const iconBg = program.variant === "blue" ? "bg-blue-200" : "bg-pink-200";
            const iconColor = program.variant === "blue" ? "text-blue-600" : "text-pink-600";
            
            return (
              <Card key={program.title} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className={`${bgColor} p-6 flex items-center justify-center min-h-[140px]`}>
                    <div className={`w-24 h-24 ${iconBg} rounded-lg flex items-center justify-center`}>
                      {index === 0 ? (
                        <GraduationCap className={`w-12 h-12 ${iconColor}`} />
                      ) : (
                        <Users className={`w-12 h-12 ${iconColor}`} />
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{program.description}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

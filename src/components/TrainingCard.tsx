import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TrainingCardProps {
  title: string;
  description: string;
  illustration: React.ReactNode;
  variant?: "blue" | "pink";
}

/**
 * Training program card component
 * Displays training information with illustration and apply button
 */
export function TrainingCard({ title, description, illustration, variant = "blue" }: TrainingCardProps) {
  const bgColor = variant === "blue" ? "bg-blue-50" : "bg-pink-50";
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className={`${bgColor} p-6 flex items-center justify-center min-h-[140px]`}>
          {illustration}
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <Button className="w-full bg-primary hover:bg-primary/90">
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

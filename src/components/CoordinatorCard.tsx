import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface CoordinatorCardProps {
  name: string;
  school: string;
  avatarColor?: string;
}

export function CoordinatorCard({ name, school, avatarColor = "bg-pink-300" }: CoordinatorCardProps) {
  const initials = name.split(" ").map(n => n[0]).join("");
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4 text-center">
        <Avatar className={`w-20 h-20 mx-auto mb-3 ${avatarColor}`}>
          <AvatarFallback className="text-xl font-semibold bg-transparent">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-semibold mb-1">{name}</h3>
        <p className="text-xs text-muted-foreground">{school}</p>
      </CardContent>
    </Card>
  );
}

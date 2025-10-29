import { Card, CardContent } from "@/components/ui/card";

interface NotificationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor?: string;
}

/**
 * Notification card component
 * Displays notification with icon and description
 */
export function NotificationCard({ title, description, icon, bgColor = "bg-blue-50" }: NotificationCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className={`${bgColor} w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0`}>
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

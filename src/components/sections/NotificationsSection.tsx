import { Users, School, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NotificationCard } from "@/components/NotificationCard";
import { NOTIFICATIONS } from "@/constants/dashboard";

/**
 * Notifications section
 * Displays recent notifications from different centers
 */
export function NotificationsSection() {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "users":
        return <Users className="w-8 h-8 text-blue-600" />;
      case "school":
        return <School className="w-8 h-8 text-pink-600" />;
      case "file":
        return <FileText className="w-8 h-8 text-blue-600" />;
      default:
        return <Users className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-xl">नोटिफिकेशन कैंद</CardTitle>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          View All
        </Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        {NOTIFICATIONS.map((notification, index) => (
          <NotificationCard
            key={index}
            title={notification.title}
            description={notification.description}
            icon={getIcon(notification.iconType)}
            bgColor={notification.bgColor}
          />
        ))}
      </CardContent>
    </Card>
  );
}

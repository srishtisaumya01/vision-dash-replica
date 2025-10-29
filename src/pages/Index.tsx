import { WelcomeBanner } from "@/components/WelcomeBanner";
import { TrainingSection } from "@/components/sections/TrainingSection";
import { ApplicationsTable } from "@/components/sections/ApplicationsTable";
import { NotificationsSection } from "@/components/sections/NotificationsSection";
import { CoordinatorsSection } from "@/components/sections/CoordinatorsSection";

/**
 * Main dashboard page
 * Displays overview of training programs, applications, notifications, and coordinators
 */
const Index = () => {
  return (
    <div className="p-6 space-y-6">
      <WelcomeBanner />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Section - Training & Applications */}
        <div className="lg:col-span-2 space-y-6">
          <TrainingSection />
          <ApplicationsTable />
        </div>

        {/* Right Section - Notifications */}
        <div className="space-y-6">
          <NotificationsSection />
        </div>
      </div>

      {/* Coordinators Section */}
      <CoordinatorsSection />
    </div>
  );
};

export default Index;

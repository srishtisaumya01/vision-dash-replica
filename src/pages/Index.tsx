import { WelcomeBanner } from "@/components/WelcomeBanner";
import { TrainingSection } from "@/components/sections/TrainingSection";
import { ApplicationsTable } from "@/components/sections/ApplicationsTable";
import { CoordinatorsSection } from "@/components/sections/CoordinatorsSection";
import { LokpriyaSection } from "@/components/sections/LokpriyaSection";

/**
 * Main dashboard page
 * Displays overview of training programs, applications, notifications, and coordinators
 */
const Index = () => {
  return (
    <div className="p-6 space-y-6">
      <WelcomeBanner />

      <div className="grid lg:grid-cols-2 gap-6">
        <TrainingSection />
        <ApplicationsTable />
      </div>

      <LokpriyaSection />

      {/* Coordinators Section */}
      <CoordinatorsSection />
    </div>
  );
};

export default Index;

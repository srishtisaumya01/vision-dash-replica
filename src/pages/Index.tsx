import { WelcomeBanner } from "@/components/WelcomeBanner";
import { TrainingCard } from "@/components/TrainingCard";
import { NotificationCard } from "@/components/NotificationCard";
import { CoordinatorCard } from "@/components/CoordinatorCard";
import { GraduationCap, Users, School, FileText, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Index = () => {
  const applications = [
    { id: 1, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
    { id: 2, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
    { id: 3, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
    { id: 4, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
    { id: 5, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
    { id: 6, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
    { id: 7, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
    { id: 8, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
    { id: 9, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
  ];

  const coordinators = [
    { name: "Ramesh Kumar", school: "Bal Bharti School", color: "bg-pink-300" },
    { name: "Shyam Soni", school: "Bal Bharti School", color: "bg-slate-700" },
    { name: "Abhishek", school: "Bal Bharti School", color: "bg-amber-200" },
    { name: "Ramesh Kumar", school: "Bal Bharti School", color: "bg-pink-400" },
    { name: "Shyam Soni", school: "Bal Bharti School", color: "bg-slate-700" },
    { name: "Abhishek", school: "Bal Bharti School", color: "bg-amber-200" },
    { name: "Shyam Soni", school: "Bal Bharti School", color: "bg-slate-700" },
    { name: "Abhishek", school: "Bal Bharti School", color: "bg-amber-200" },
  ];

  return (
    <div className="p-6 space-y-6">
      <WelcomeBanner />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Section - Training */}
        <div className="lg:col-span-2 space-y-6">
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
              <div className="grid md:grid-cols-2 gap-4">
                <TrainingCard
                  title="सिलाई कार्य"
                  description="कोलेजों में अल्पकालिक सॉफ्ट स्किल और जीवन कौशल प्रशिक्षण दिया जाएगा"
                  illustration={
                    <div className="w-24 h-24 bg-blue-200 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-12 h-12 text-blue-600" />
                    </div>
                  }
                  variant="blue"
                />
                <TrainingCard
                  title="बिजली कार्य"
                  description="व्यवसाय में उच्च शिक्षा प्राप्त युवाओं को जीवन कौशल प्रशिक्षण दिया जाएगा"
                  illustration={
                    <div className="w-24 h-24 bg-pink-200 rounded-lg flex items-center justify-center">
                      <Users className="w-12 h-12 text-pink-600" />
                    </div>
                  }
                  variant="pink"
                />
              </div>
            </CardContent>
          </Card>

          {/* Applications Table */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-xl">नए आवेदन</CardTitle>
              <Badge variant="destructive">6</Badge>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary/10">
                    <TableHead className="text-primary">#</TableHead>
                    <TableHead className="text-primary">नाम</TableHead>
                    <TableHead className="text-primary">स्थान</TableHead>
                    <TableHead className="text-primary">प्रक्रिया</TableHead>
                    <TableHead className="text-primary">आवेदन</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>{app.id}.</TableCell>
                      <TableCell className="font-medium">{app.name}</TableCell>
                      <TableCell>{app.fatherName}</TableCell>
                      <TableCell>{app.status}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive">
                          <Download className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Right Section - Notifications */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-xl">नोटिफिकेशन कैंद</CardTitle>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                View All
              </Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <NotificationCard
                title="बाल भारती स्कूल"
                description="Ble lorem text Ble lorem text Ble lorem text blue lorem text recruitment alternatives jobs.recruitment@bajajgroup.com"
                icon={<Users className="w-8 h-8 text-blue-600" />}
                bgColor="bg-blue-100"
              />
              <NotificationCard
                title="दयोदय कैंद"
                description="Ble lorem text blue lorem text higher educational recruitment recruitment alternatives@bajajgroup.com"
                icon={<School className="w-8 h-8 text-pink-600" />}
                bgColor="bg-pink-100"
              />
              <NotificationCard
                title="संस्कार शाला"
                description="Ble lorem text blue lorem text ble lorem text recruitment alternatives jobs.recruitment@bajaj"
                icon={<FileText className="w-8 h-8 text-blue-600" />}
                bgColor="bg-blue-100"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Coordinators Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">मुख्य समन्वयक (राजस्थान)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {coordinators.map((coord, idx) => (
              <CoordinatorCard
                key={idx}
                name={coord.name}
                school={coord.school}
                avatarColor={coord.color}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;

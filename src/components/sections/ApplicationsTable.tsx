import { Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MOCK_APPLICATIONS } from "@/constants/dashboard";

/**
 * Applications table section
 * Displays list of new applications with download actions
 */
export function ApplicationsTable() {
  return (
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
            {MOCK_APPLICATIONS.map((app) => (
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
  );
}

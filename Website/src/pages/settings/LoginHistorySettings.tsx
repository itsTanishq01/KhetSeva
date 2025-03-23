
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LoginHistorySettings = () => {
  // Mock login history data - this would typically come from backend
  const loginHistory = [
    { id: 1, date: "2023-10-15 09:30:22", device: "Chrome / Windows", location: "New York, USA" },
    { id: 2, date: "2023-10-12 14:15:45", device: "Safari / MacOS", location: "San Francisco, USA" },
    { id: 3, date: "2023-10-08 18:20:10", device: "Firefox / Linux", location: "London, UK" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login History</CardTitle>
        <CardDescription>
          Recent login activities for your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date & Time</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loginHistory.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.device}</TableCell>
                <TableCell>{entry.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LoginHistorySettings;

import { columns } from "@/components/dashboard/CustomerDataTable/Column";
import CustomerDataTable from "@/components/dashboard/CustomerDataTable/CustomerDataTable";
import Stats from "@/components/dashboard/Stats/Stats";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CustomerData } from "@/types";
import { AlertCircleIcon } from "lucide-react";
import { toast } from "sonner";

export default async function DashboardPage() {
  const res = await fetch("https://69102d7545e65ab24ac5d435.mockapi.io/users");

  if (!res.ok) {
    return toast.custom(() => (
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to fetch users.</AlertTitle>
        <AlertDescription>
          <p>Please try again later.</p>
        </AlertDescription>
      </Alert>
    ));
  }

  const data: CustomerData[] = await res.json();

  return (
    <main className="h-full min-h-[calc(100dvh-103px)] bg-gray-100 p-10">
      <Stats />

      <CustomerDataTable columns={columns} data={data} />
    </main>
  );
}

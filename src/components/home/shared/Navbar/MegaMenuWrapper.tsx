import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { toast } from "sonner";
import MegaMenu from "./MegaMenu";

export default async function MegaMenuWrapper() {
  const megaMenuItemsResponse = await fetch(
    "https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu",
    {
      cache: "force-cache", // As mega menu items are generally static, we can force cache
      next: {
        tags: ["mega-menu"], // We can use tags to revalidate the cache when needed, also time based revalidation can be used according to requirements
      },
    },
  );

  if (!megaMenuItemsResponse.ok) {
    return toast.custom(() => (
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to fetch mega menu items.</AlertTitle>
        <AlertDescription>
          <p>Please try again later.</p>
        </AlertDescription>
      </Alert>
    ));
  }

  const megaMenuItems = await megaMenuItemsResponse.json();

  return <MegaMenu items={megaMenuItems} />;
}

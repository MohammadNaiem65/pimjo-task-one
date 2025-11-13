import MegaMenu from "./MegaMenu";

export default async function MegaMenuWrapper() {
  const megaMenuItemsPromise = await fetch(
    "https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu",
    {
      next: {
        revalidate: 60 * 60 * 24 * 7, // 7 days
      },
    },
  );
  const megaMenuItems = await megaMenuItemsPromise.json();

  return <MegaMenu items={megaMenuItems} />;
}

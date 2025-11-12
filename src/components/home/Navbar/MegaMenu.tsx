"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

// Base interface without type property
interface BaseNavItem {
  id: string;
  label: string;
}

// Interface for regular nav items (without type or type !== "mega")
export interface RegularNavItem extends BaseNavItem {
  type?: never;
  href: string;
  columns?: never;
}

// Interface for mega menu items
export interface MegaNavItem extends BaseNavItem {
  type: "mega";
  href?: never;
  columns: ColumnItem[];
}

// Combined type
export type NavItem = RegularNavItem | MegaNavItem;

interface ColumnItem {
  title: string;
  description: string;
  icon: string;
  href: string;
}

interface MegaMenuProps {
  items: NavItem[];
}

export default function MegaMenu({ items }: MegaMenuProps) {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        {items.map((item) =>
          item?.type === "mega" ? (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuTrigger className="rounded-lg text-sm font-medium text-title hover:bg-gray-secondary">
                {item.label}
              </NavigationMenuTrigger>

              <NavigationMenuContent
                data-motion="from-end"
                data-orientation="vertical"
                className="w-[704px] group-data-[viewport=false]/navigation-menu:mt-5 group-data-[viewport=false]/navigation-menu:divide-y group-data-[viewport=false]/navigation-menu:rounded-[1.25rem] group-data-[viewport=false]/navigation-menu:shadow-lg"
              >
                <ul className="grid w-[704px] grid-cols-[1fr_auto_1fr] gap-x-2 p-2">
                  {/* First column */}
                  <div className="grid gap-4">
                    {item.columns.slice(0, 3).map((column) => (
                      <ListItem key={column.title} item={column} />
                    ))}
                  </div>

                  {/* Vertical divider - only show if there are items in both columns */}
                  {item.columns.length > 3 && (
                    <Separator orientation="vertical" />
                  )}

                  {/* Second column */}
                  <div className="grid gap-4">
                    {item.columns.slice(3).map((column) => (
                      <ListItem key={column.title} item={column} />
                    ))}
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink
                asChild
                className="rounded-lg hover:bg-gray-secondary"
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-title"
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  item,
}: React.ComponentPropsWithoutRef<"li"> & { item: ColumnItem }) {
  return (
    <li>
      <NavigationMenuLink
        asChild
        className="flex flex-row items-start justify-between gap-x-3 rounded-xl p-4"
      >
        <Link href={item.href}>
          <Image
            src={`/icons/${item.icon}.svg`}
            alt={item.title}
            width={24}
            height={24}
          />
          <div className="flex flex-col gap-y-1">
            <span className="text-base font-medium text-title">
              {item.title}
            </span>
            <p className="text-sm leading-snug text-text-secondary">
              {item.description}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

import Navbar from "@/components/dashboard/shared/Navbar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />

      <div className="max-content-width diagonal-background-pattern mx-auto min-h-[calc(100dvh-103px)] border-x">
        <div className="pattern-section-content-width min-h-[calc(100dvh-103px)] border-x bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

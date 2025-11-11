"use client";

import { ChevronRightIcon, X } from "lucide-react";
import { Activity, useState } from "react";
import { Badge } from "../ui/badge";

export default function AnnouncementBar() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  return (
    <Activity mode={showAnnouncement ? "visible" : "hidden"}>
      <div className="max-content-width mx-auto flex h-17 items-center justify-center border-x">
        <div className="relative inline-flex h-11 w-[1431px] items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-black/5 py-3">
          {/* Content container */}
          <div>
            <div className="flex items-center justify-center gap-2.5">
              <p className="text-center text-sm leading-5">
                <span className="font-normal text-text-secondary">
                  We just raised our biggest updates -{" "}
                </span>
                <span className="font-medium text-text">Brand V3.0 🎉</span>
              </p>
              <Badge
                variant="outline"
                className="h-6 bg-white py-1 pr-1.5 pl-2.5 text-text shadow-[0px_0px_0px_1px_rgba(229,231,235,1.00)]"
              >
                Check it out
                <ChevronRightIcon className="size-4" />
              </Badge>
            </div>

            <X
              className="absolute top-1/2 right-3 size-5 -translate-y-1/2 cursor-pointer text-text-tertiary"
              onClick={() => setShowAnnouncement(false)}
            />
          </div>
        </div>
      </div>
    </Activity>
  );
}

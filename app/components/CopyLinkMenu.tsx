"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link2 } from "lucide-react";
import { toast } from "sonner";

export function CopyLinkMenu({ meetingUrl }: { meetingUrl: string }) {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(meetingUrl);
            toast.success("Copied to clipboard");
        } catch (error) {
            toast.error("Failed to copy to clipboard");
        }
    }
    
  return (
    <DropdownMenuItem onSelect={handleCopy}>
      <Link2 className="mr-2 size-4" />
      Copy
    </DropdownMenuItem>
  );
}

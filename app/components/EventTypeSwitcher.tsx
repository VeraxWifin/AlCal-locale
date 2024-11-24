"use client";

import { Switch } from "@/components/ui/switch";
import { useActionState, useEffect, useTransition } from "react";
import { UpdateEventTypeStatusAction } from "../actions";
import { toast } from "sonner";

export function MenuActiveSwitch({
  initalChecked,
  eventTypeId,
}: {
  initalChecked: boolean;
  eventTypeId: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [state, action] = useActionState(
    UpdateEventTypeStatusAction,
    undefined
  );

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state.message);
    } else if (state?.status === "error") {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <Switch
      disabled={isPending}
      defaultChecked={initalChecked}
      onCheckedChange={(checked) =>
        startTransition(() =>
          action({ eventTypeId: eventTypeId, isChecked: checked })
        )
      }
    />
  );
}

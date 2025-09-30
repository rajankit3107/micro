"use client";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/nextjs";
import { ItemProps } from "./sidebar/item";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created successfully");
      })
      .catch(() => toast.error("Failed to create board"));
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center pb-40 pr-20">
      <Image src="/noboards.png" width={500} height={500} alt="No Results" />
      <h2 className="text-2xl font-semibold mt-6">No boards yet!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button
          disabled={pending}
          onClick={onClick}
          size="lg"
          className="cursor-pointer"
        >
          Create Your First Board
        </Button>
      </div>
    </div>
  );
};

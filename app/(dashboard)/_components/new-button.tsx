import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewButton = ({ orgId, disabled }: NewButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then(() => toast.success("New board created successfully"))
      .catch(() => toast.error("Failed creating board"));
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-300 rounded-lg hover:bg-blue-500 flex flex-col items-center justify-centerm py-10 cursor-pointer",
        (pending || disabled) && "opacity-75"
      )}
    >
      <div className="pt-10 pr-1" />
      <Plus className="h-12 w-12 text-white stroke-1 " />
      <p className="text-sm text-white font-medium">New Board</p>
    </button>
  );
};

import Image from "next/image";
import { Button } from "@/components/ui/button";

export const EmptyBoards = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center pb-40 pr-20">
      <Image src="/noboards.png" width={500} height={500} alt="No Results" />
      <h2 className="text-2xl font-semibold mt-6">No boards yet!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size="lg" className="cursor-pointer">
          Create Your First Board
        </Button>
      </div>
    </div>
  );
};

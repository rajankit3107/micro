import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements.svg" alt="Element" width={200} height={200} />
      <h2 className="font-bold text-2xl mt-6">Welcome to micro</h2>
      <p className="text-muted-foreground text-sm mt-2">
        create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger>
            <Button size="lg" className="cursor-pointer">
              create organization
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 w-fit bg-transparent border-none max-w-[480px] cursor-pointer">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

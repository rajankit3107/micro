import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pb-40 pr-20">
      <Image src="noresult.svg" width={300} height={300} alt="No Results" />
      <h2 className="text-2xl font-semibold mt-6">No results found!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
};

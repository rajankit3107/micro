import Image from "next/image";

export const NoFavorites = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center pb-40 pr-20">
      <Image
        src="/nofavorites.jpeg"
        width={300}
        height={300}
        alt="No Results"
      />
      <h2 className="text-2xl font-semibold mt-6">No favorites boards!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try adding a board to favorites
      </p>
    </div>
  );
};

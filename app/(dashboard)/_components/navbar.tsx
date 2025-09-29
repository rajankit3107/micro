"use client";

import { UserButton } from "@clerk/clerk-react";

export const NavBar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-400">
      <div className="hidden lg:flex lg:flex-1 bg-yellow-400">Search</div>
      <UserButton />
    </div>
  );
};

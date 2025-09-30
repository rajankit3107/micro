"use client";

import { useSearchParams } from "next/navigation";
import { BoardList } from "./_components/board-list";
import { EmptyOrg } from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";

const DashboardPage = () => {
  const searchParams = useSearchParams();
  const { organization } = useOrganization();

  // Extract query params
  const search = searchParams.get("search") || undefined;
  const favorites = searchParams.get("favorites") || undefined;

  const query = { search, favorites };

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {/* {JSON.stringify(query)} */}
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={query} />
      )}
    </div>
  );
};

export default DashboardPage;

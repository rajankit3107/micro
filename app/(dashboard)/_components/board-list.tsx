"use client";

import { EmptySearch } from "./empty-search";

interface BaordListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BaordListProps) => {
  const data = []; //TODO : change to API call

  if (!data?.length && query.search) {
    return (
      <div>
        <EmptySearch />
      </div>
    );
  }

  if (!data?.length && query.favorites) {
    return <div>No Favorites</div>;
  }

  if (!data?.length) {
    return <div>No micros created yet</div>;
  }

  return <div></div>;
};

"use client";

import { EmptyBoards } from "./empty-board";
import { EmptySearch } from "./empty-search";
import { NoFavorites } from "./no-favorites";

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
    return (
      <div>
        <NoFavorites />
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div>
        <EmptyBoards />
      </div>
    );
  }

  return <div></div>;
};

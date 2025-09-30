"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { EmptyBoards } from "./empty-board";
import { EmptySearch } from "./empty-search";
import { NoFavorites } from "./no-favorites";
import { BoardCard } from "./board-card";

interface BaordListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BaordListProps) => {
  const data = useQuery(api.boards.getBoards, { orgId });

  if (data === undefined) {
    return <div>Loading...</div>;
  }

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

  return (
    <div className="text-2xl">
      <h2>{query.favorites ? "Favorite Boards" : "Team Boards"}</h2>
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
};

"use client";

import Post from "@/components/post";
import useQueryPost from "@/hooks/use-query-post";
import { useRouter } from "next/navigation";

// const mockPost: Post = {
//   id: "1",
//   title: "Post 1",
//   content: "Content 1",
//   createdAt: 0,
// };

const Content = () => {
  const router = useRouter();
  const { data, isLoading, error } = useQueryPost();

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>error: {error.message}</div>}
      {!isLoading && !data && <div>No posts</div>}
      <button
        onClick={() => router.back()}
        className="text-sm text-white font-bold"
      >
        {"← Back"}
      </button>
      <Post post={data} />
    </div>
  );
};

export default Content;

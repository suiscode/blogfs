import PostCard from "@/components/postCard/PostCard";
import React from "react";

const BlogPage = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-[30%] max-[1280px]:w-[45%] max-[768px]-w-full">
        <PostCard />
      </div>
      <div className="w-[30%] max-[1280px]:w-[45%] max-[768px]-w-full">
        <PostCard />
      </div>
      <div className="w-[30%] max-[1280px]:w-[45%] max-[768px]-w-full">
        <PostCard />
      </div>
      <div className="w-[30%] max-[1280px]:w-[45%] max-[768px]-w-full">
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;

import PostCard from "@/components/postCard/PostCard";
import React from "react";

const getData = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{next:{revalidate:3600}})
  if(!res.ok){
    throw new Error("something went wrong")
  }
  return res.json()
}

const BlogPage = async () => {
  const posts = await getData()
  return (
    <div className="flex flex-wrap max-[768px]:flex-col max-[768px]:items-center">
      {posts.map(post=>(
        <div className="w-[30%] max-[768px]:w-[80%] max-[1280px]:w-[45%] max-[768px]-w-full" key={post.id}>
        <PostCard post={post}/>
      </div>
      ))}
      
    </div>
  );
};

export default BlogPage;

import PostUser from "@/components/postUser/PostUser";
import Image from "next/image";
import React from "react";

const getData = async (params)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params}`)
  if(!res.ok){
    throw new Error("something went wrong")
  }
  return res.json()
}

const SingleBlogPage = async ({params}) => {
  const { slug } = params
  const post = await getData(slug)
  return (
    <div className='flex gap-[100px]'>
      <div className='flex-[1] relative h-[calc(100vh-200px)] max-[768px]:flex-none'>
        <Image src="/about.png" alt="" fill className='object-cover' />
      </div>

      <div className='flex-[2] flex flex-col gap-[50px]'>
        <h1 className='text-[64px]'>{post.title}</h1>
        <div className='flex gap-5'>
        <PostUser userId={post.userId} />

          {/* <Suspense fallback={<div>Loading...</div>}>
          </Suspense> */}

          <div className='flex flex-col gap-[10px]'>
            <span className='text-gray-400'>Published</span>
            <span className='font-medium'>
              date
            </span>
          </div>
        </div>
        <div className='text-xl'>{post.body}</div>
      </div>
    </div>
  );
};

export default SingleBlogPage;

{
  /* <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div> */
}

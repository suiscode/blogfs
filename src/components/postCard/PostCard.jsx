import Image from "next/image"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className='flex flex-col gap-5 mb-5'>
      <div className='flex'>
         <div className='w-[90%] h-[400px] relative'>
          <Image src='/about.png' alt="" fill className="object-cover"/>
        </div>
        <span className='text-[12px] rotate-[270deg] m-auto'>Date</span>
      </div>
      <div className=''>
        <h1 className='w-[90%] text-2xl mb-5 font-semibold'>{post.title}</h1>
        <p className='w-[90%] font-light text-gray-400 mb-5'>{post.body}</p>
        <Link href={`/blog/${post.id}`} className="underline">READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard

{/* <div className='flex flex-col gap-5 mb-5'>
      <div className='flex'>
        {post.img && <div className='w-[90%] h-[400px] relative'>
          <Image src={post.img} alt="" fill className="object-cover"/>
        </div>}
        <span className='text-[12px] rotate-[270deg] m-auto'>{post.createdAt?.toString().slice(4, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className='w-[90%] text-2xl mb-5'>{post.title}</h1>
        <p className='w-[90%] font-light text-gray-400 mb-5'>{post.body}</p>
        <Link href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div> */}
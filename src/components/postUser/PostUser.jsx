// import { getUser } from "@/lib/data";
import Image from "next/image";

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` ,{cache:"no-store"});

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
//   const user = await getUser(userId);

  return (
    <div className='flex items-center gap-5'>
      <Image
        className='object-cover rounded-e-full'
        // user.img ? user.img : 
        src={"/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className='flex flex-col gap-[10px]'>
        <span className='text-gray-400 font-bold'>Author</span>
        <span className='font-medium'>'title'</span>
      </div>
    </div>
  );
};

export default PostUser;
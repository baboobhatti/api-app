
// import React from 'react'

import Link from "next/link";

const page = async (props:any) => {
  // const url = await fetch(`https://simple-books-api.glitch.me/books/url-id`)
  // const url = await fetch(`https://simple-books-api.glitch.me/books/${props.params.id}`)
  // const res = await url.json()
  // console.log("SingleBookResponse" ,res);
  
  const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`)
  const res = await url.json()
  console.log(props);
  


    // console.log(props);
  return (
    <div className="">
      <h1 className="bg-red-600 text-white text-2xl px-2 sm:text-4xl w-[98%] sm:w-[560px]  rounded-full mx-auto mt-5 text-center font-semibold py-2">{`${res.name}s Detail`}</h1>
      <div className="bg-red-500 w-[95%] sm:w-[560px] rounded-3xl flex flex-col gap-2 items-center mx-auto border-t-2 border-white pt-4 pb-6">
        <h1 className="w-[95%] sm:w-[460px] text-sm sm:text-lg px-4 py-2 rounded-full bg-white">{`Username: ${res.username}`}</h1>
        <h1 className="w-[95%] sm:w-[460px] text-sm sm:text-lg px-4 py-2 rounded-full bg-white">{`Email: ${res.email}`}</h1>
        <h1 className="w-[95%] sm:w-[460px] text-sm sm:text-lg px-4 py-2 rounded-full bg-white">{`Address: Street ${res.address.street} City ${res.address.city}`}</h1>
        <h1 className="w-[95%] sm:w-[460px] text-sm sm:text-lg px-4 py-2 rounded-full bg-white">{`Phone: ${res.phone}`}</h1>
        <h1 className="w-[95%] sm:w-[460px] text-sm sm:text-lg px-4 py-2 rounded-full bg-white">{`Site: ${res.website}`}</h1>
        <h1 className="w-[95%] sm:w-[460px] text-sm sm:text-lg px-4 py-2 rounded-full bg-white">{`Company: ${res.company.name}`}</h1>
      </div>

      <Link className="w-24 bg-red-400 py-1 hover:bg-red-500 text-white block mx-auto mt-4 rounded text-center text-xl" href='/#'>Back</Link>

    </div>
  )
}

export default page



// ChatGpt Code //
// type PageProps = {
//     params: {
//       id: string;
//     };
//   };
  
//   const Page = ({ params }: PageProps) => {
//     console.log(params);  // You can keep this if needed for debugging.
  
//     return (
//       <div className="text-5xl">
//         {params?.id || 'ID not provided'}  {/* Fallback if ID is undefined */}
//       </div>
//     );
//   }
  
//   export default Page;

import Link from "next/link";

export default async function Home() {
    
  // const url = await fetch("https://simple-books-api.glitch.me/books")
  const url = await fetch("https://jsonplaceholder.typicode.com/users")
  const res = await url.json()
  console.log("Api Data",res);
  //  fetch("https://simple-books-api.glitch.me/books" , {method:"Get"}) same as above
  
  
  return (
  
    <div className="flex flex-col items-center border-2 gap-y-2 py-4">
     {
      res.map((users:any, index: number) =>(
        <div className="w-[270px] sm:w-[400px] shadow-lg bg-red-600 text-white rounded-full border-gray-400 text-center p-2" key={index}>
          <Link href={`${users.id}`}>
          {/* Each child in a list should have a unique "key" prop. */}
         <h1 className="text-xl">
          {users.name}
         </h1>
         </Link>
        </div>
      ))
     }
    </div>
  );
}

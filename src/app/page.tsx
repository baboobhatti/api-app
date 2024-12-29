import Link from "next/link";
interface Geo {
  lat: string; // Latitude of the address
  lng: string; // Longitude of the address
}

interface Address {
  street: string; // Street name of the address
  suite: string; // Suite or apartment number
  city: string; // City of the address
  zipcode: string; // Zipcode or postal code
  geo: Geo; // Geographical coordinates
}

interface Company {
  name: string; // Company name
  catchPhrase: string; // Company slogan or tagline
  bs: string; // Business domain or niche
}

interface User {
  id: number; // Unique identifier for the user
  name: string; // Full name of the user
  username: string; // Username for the user
  email: string; // Email address of the user
  address: Address; // Address details
  phone: string; // Contact phone number
  website: string; // Personal or company website URL
  company: Company; // Company details
}




export default async function Home() {
      // const url = await fetch("https://simple-books-api.glitch.me/books")
  const url = await fetch("https://jsonplaceholder.typicode.com/users")
  const res = await url.json()
  console.log("Api Data",res);
  //  fetch("https://simple-books-api.glitch.me/books" , {method:"Get"}) same as above
  
  
  return (
  
    <div className="flex flex-col items-center border-2 gap-y-2 py-4">
     {
      res.map((users:User, index: number) =>(
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

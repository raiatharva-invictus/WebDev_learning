// "use client" // this allows the code written below to run on client side that is on browser if we dont write it the code will run on server side that is here
import Navbar from "@/components/Navbar";

// import { useState } from "react";

export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("Hello") // this will be logged on server side if "use client is used else it will log here on server side in the console"
  return (
    <div>
      <Navbar/> {/* this navbar already has use client used in it so we can emebed it here in the server side too so that here we dont have to make it client side since only navbar required it similarly in this way we can give it to individual compoents */}
      I am a component
      {/* I am a component {count} */}
      {/* <button onClick={()=> setcount(count+1)}>Change count</button> */}
    </div>
  );
}

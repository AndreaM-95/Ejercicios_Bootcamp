import Image from "next/image";
import Link from "next/link";
import Contact from "./Components/Contact";
import CardProject from "./Components/Card-Project";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-cover bg-center bg-fixed" style={{backgroundImage:"url(/Backg.jpg)"}}>
      <div className="flex" >
        <h1 className="w-full">
          Testing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500">Welcome to my page</span>
        </h1>

        <p className="text-gray-100">Hello i am Andrea Mejia a FullStack Developer </p>
      </div>
      
      <div>
        <Link
          href="/skills"
          className="rounded-[30px] group relative bg-blue-400 hover:bg-blue-200 px-5 py-3 text-lg text-white"
        >
        Skills
        </Link>
      </div>

      <Contact/>
      <CardProject/>
    </main>
  
  );
}

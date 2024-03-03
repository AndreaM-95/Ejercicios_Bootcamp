import Image from "next/image";
import Contact from "./Components/Contact";
import CardProject from "./Components/Card-Project";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-cover bg-center bg-fixed" style={{backgroundImage:"url(/Backg.jpg)"}}>
      <div className="flex" ></div>
      
      <Contact/>
      <CardProject/>

      {/*<Image 
        src="/Background.jpg"
        alt="bg-code"
        width={1280}
        height={300}
        className="absolute"
      /> 
       <Contact /> /}
  
      <div>
      </div>
        {/ <Link
          href="/projects"
          className="relative"   >
            Hi Projects
        </Link> /}
      </div>*/}
      
    </main>
  
  );
}

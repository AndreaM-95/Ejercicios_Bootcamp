import Descripcion from "@/Components/Descripcion";
import Experiencia from "@/Components/Experiencia";

export default function Home() {
  return (
    <main className="flex bg-cover bg-center bg-fixed flex-col" style={{backgroundImage:"url(/Bg-Projects.jpg)"}}>
      <Descripcion/>
      <Experiencia/>
    </main>
  );
}

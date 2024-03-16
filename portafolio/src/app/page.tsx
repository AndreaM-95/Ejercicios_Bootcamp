import Descripcion from "@/Components/Descripcion";
import Experiencia from "@/Components/Experiencia";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Descripcion/>
      <Experiencia/>
    </main>
  );
}

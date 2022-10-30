import Experiences from "../../components/Experiences";
import { HomeHero } from "../../components/HomeHero";
import Projetos from "../../components/Projetos";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <Experiences />
      <Projetos />
    </main>
  );
}

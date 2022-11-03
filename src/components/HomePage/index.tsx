import Experiences from "../Experiences";
import FormContact from "../FormContact";
import { HomeHero } from "../HomeHero";
import Knowledge from "../Knowledge";
import Projects from "../Projects";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <Experiences />
      <Projects />
      <Knowledge />
      <FormContact />
    </main>
  );
}

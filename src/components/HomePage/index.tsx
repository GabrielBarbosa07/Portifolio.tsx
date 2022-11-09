import { useEffect } from "react";
import Experiences from "../Experiences";
import FormContact from "../FormContact";
import { HomeHero } from "../HomeHero";
import Knowledge from "../Knowledge";
import Projects from "../ProjectsHomepage";
import Aos from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

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

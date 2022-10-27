import Experiences from "../../components/Experiences";
import { HomeHero } from "../../components/HomeHero";

export default function HomePage() {
  return (
    <div>
      <main className="">
        <HomeHero />
        <Experiences />
      </main>
    </div>
  );
}

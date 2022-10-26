import Experiences from "../../components/Experiences";
import { HomeHero } from "../../components/HomeHero";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-[75%] ">
      <main className="">
        <HomeHero />
        <Experiences />
      </main>
    </div>
  );
}

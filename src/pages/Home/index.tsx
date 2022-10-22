import { Header } from "../../components/Header";
import { HomeHero } from "../../components/HomeHero";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="container">
        <HomeHero />
      </main>
    </div>
  );
}

import NavLink from "./NavLink";

export function Header() {
  return (
    <header className="w-full h-16 flex justify-center items-center border-b-bl-700">
      <ul className="flex gap-8 items-center">
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" />
      </ul>
    </header>
  );
}

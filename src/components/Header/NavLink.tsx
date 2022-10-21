import Link from "next/link";
import { useRouter } from "next/router";

interface PropsLi {
  title: string;
  path: string;
  isActive?: boolean;
}

export default function NavLink({ title, path }: PropsLi) {
  const router = useRouter();

  const isActive = router.pathname === path;

  return (
    <li>
      <Link href={path}>
        <a
          className={
            isActive
              ? "text-gree-200 hover:opacity-80"
              : "text-gra-700 hover:opacity-80"
          }
        >
          {title.toUpperCase()}
        </a>
      </Link>
    </li>
  );
}

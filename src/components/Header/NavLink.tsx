import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/Header.module.css";

interface PropsLi {
  title: string;
  path: string;
  isActive?: boolean;
}

export default function NavLink({ title, path }: PropsLi) {
  const router = useRouter();

  const isActive = router.pathname === path;

  return (
    <li className={styles.navLi}>
      <Link href={path}>
        <a
          className={
            isActive
              ? "text-gree-200 hover:opacity-80 after:bg-gree-200"
              : "text-gra-700 hover:opacity-80  after:bg-gra-700"
          }
        >
          {title.toUpperCase()}
        </a>
      </Link>
    </li>
  );
}

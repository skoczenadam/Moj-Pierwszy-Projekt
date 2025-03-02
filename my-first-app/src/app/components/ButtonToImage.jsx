import Link from "next/link";
import styles from "./ButtonToImage.module.css";

export function ButtonToImage() {
  return (
    <Link href="/photo">
      <button>Włącz obrazek</button>
    </Link>
  );
}

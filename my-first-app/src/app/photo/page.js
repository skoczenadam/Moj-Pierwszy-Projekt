import Image from "next/image"
import summersale from "/public/summersale.jpg";
import Link from "next/link";

export default function Photo() {
  return <Link href="/"><Image src={summersale} placeholder="blur" alt="obrazek"/></Link>
}
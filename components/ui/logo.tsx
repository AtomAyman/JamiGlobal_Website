import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Jami Global">
      <Image src={logo} alt="Jami Global logo" width={120} height={110} />
    </Link>
  );
}

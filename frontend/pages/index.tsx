/** @format */


import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center" >
      <h1>Asad</h1>
      <Link  href="/signup">
        signup
      </Link>
    </main>
  );
}

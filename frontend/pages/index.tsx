
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col" >
      <Navbar />
      <h1>Asad</h1>
      <Link  href="/signup">
        signup
      </Link>
    </main>
  );
}

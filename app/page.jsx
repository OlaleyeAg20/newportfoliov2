import Image from "next/image";
import Link from "next/link";
import {Menu} from "../components/Icon";
import Hero from "../components/Hero"

export default function Home() {
  return (
   <>
     <header className="p-4 flex items-center justify-between">
       <h1 className="font2 text-[28px]">AYOMIDE OLALEYE</h1>
       <nav className="hidden sm:block">
         <ul className="flex items-center justify-between gap-4">
          <li>
             <Link href="/">Home</Link>
          </li>
          <li>
             <Link href="/">About</Link>
          </li>
          <li>
             <Link href="/">Contact</Link>
          </li>
         </ul>
       </nav>
       <button className="sm:hidden"><Menu /></button>
     </header>
     <Hero />
   </>
  );
}

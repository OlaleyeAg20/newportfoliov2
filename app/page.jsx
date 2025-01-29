import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
   <>
     <header className="p-4 flex items-center justify-between">
       <h1 className="font2 text-[20px]">Ayomide Olaleye</h1>
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
       <button className="hidden">Menu</button>
     </header>
   </>
  );
}

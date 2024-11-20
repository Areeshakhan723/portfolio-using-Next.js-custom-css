import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="bg-black p-4 w-full">
      <nav className="">
        <ul className="text-lightGray flex justify-center items-center gap-6 font-sans max-lg:hidden">
          <li className="hover:text-darkergray">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-darkergray">
            <Link href="/Sections/About" aria-label="About section">
              About
            </Link>
          </li>
          <li className="hover:text-darkergray">
            <Link href="/Sections/Services">Services</Link>
          </li>
          <li className="hover:text-darkergray">
            <Link href="/Sections/Skills">Skills</Link>
          </li>
          <li className="hover:text-darkergray">
            <Link href="/Sections/Project">Projects</Link>
          </li>
          <li className="hover:text-darkergray">
            <Link href="/Sections/Contact">Contact</Link>
          </li>
        </ul>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Navbar;

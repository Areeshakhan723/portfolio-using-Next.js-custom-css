import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from "next/image";
import logo from "../assets/images/logo.jpg";
const Navbar = () => {
  return (
    <header className="bg-black p-4 w-full">
      <nav className="flex justify-between items-center px-10">
        <div className="flex justify-center items-center gap-2">
          <Image src={logo} alt="logo image" width={40} height={40} />
          <h1 className="text-white font-bold text-xl">
            Areesha <span className="text-blue"> Khan</span>
          </h1>
        </div>
        <ul className="text-lightGray flex justify-center items-center gap-6 font-sans max-lg:hidden">
          <li className="navbar_li">
            <Link href="/">Home</Link>
          </li>
          <li className="navbar_li">
            <Link href="/Sections/About" aria-label="About section">
              About
            </Link>
          </li>
          <li className="navbar_li">
            <Link href="/Sections/Services">Services</Link>
          </li>
          <li className="navbar_li">
            <Link href="/Sections/Skills">Skills</Link>
          </li>
          <li className="navbar_li">
            <Link href="/Sections/Project">Projects</Link>
          </li>
          <li className="navbar_li">
            <Link href="/Sections/Contact">Contact</Link>
          </li>
        </ul>

        <div className="max-lg:hidden">
          <a href="mailto:areshakhan845@gmail.com">
            <button className="text-white bg-blue hover:bg-darkblue transition duration-300 hover:scale-110 px-4 py-2 font-semibold text-lg rounded-full">
              Hire Me
            </button>
          </a>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Navbar;

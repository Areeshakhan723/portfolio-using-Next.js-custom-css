import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
const MobileNav = () => {
  return (
    <div className="hidden max-lg:block">
      <Sheet>
        <SheetTrigger>
          <AlignJustify className="text-white" />
        </SheetTrigger>
        <SheetContent>
          <nav className="flex justify-center items-center flex-col gap-7">
            <ul className="text-blue text-lg flex justify-center items-center flex-col gap-6 font-sans mt-20">
              <li className="hover:text-darkblue">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-darkblue">
                <Link href="/Sections/About" aria-label="About section">
                  About
                </Link>
              </li>
              <li className="hover:text-darkblue">
                <Link href="/Sections/Services">Services</Link>
              </li>
              <li className="hover:text-darkblue">
                <Link href="/Sections/Skills">Skills</Link>
              </li>
              <li className="hover:text-darkblue">
                <Link href="/Sections/Project">Projects</Link>
              </li>
              <li className="hover:text-darkblue">
                <Link href="/Sections/Contact">Contact</Link>
              </li>
            </ul>

          <div >
          <a href="mailto:areshakhan845@gmail.com">
          <button className="text-white bg-blue hover:bg-darkblue px-4 py-2 font-semibold text-lg rounded-full">Hire Me</button>
          </a>
        </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

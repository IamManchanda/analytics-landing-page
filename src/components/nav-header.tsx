import Link from "next/link";
import BrandLogo from "./brand-logo";
import NavLink from "./nav-link";

function NavHeader() {
  return (
    <div className="flex items-center justify-between mx-auto py-7 max-w-75r">
      <div>
        <Link href="/">
          <a className="flex items-center">
            <BrandLogo className="w-5 h-7" />
            <span className="ml-1.5 text-2xl font-medium tracking-tight">
              Pirsch
            </span>
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <NavLink href="/#pricing" text="Pricing" />
          <NavLink href="/#documentation" text="Documentation" />
          <NavLink href="/#blog" text="Blog" />
          <NavLink href="/#login" text="Log in" />
        </ul>
        <Link href="/#get-started">
          <a className="px-3 py-1.5 ml-6 rounded-lg bg-pir-green hover:bg-pir-green-hover text-black font-medium">
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NavHeader;

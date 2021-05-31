import Link from "next/link";
import BrandLogo from "./brand-logo";
import NavHeaderLink from "./nav-header-link";

function NavHeader() {
  return (
    <div className="flex items-center justify-between py-7">
      <div>
        <Link href="/">
          <a className="flex items-center">
            <BrandLogo className="w-5 h-7" />
            <span className="ml-1.5 text-[1.375rem] font-medium tracking-tight">
              Pirsch
            </span>
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <NavHeaderLink href="/#pricing" text="Pricing" />
          <NavHeaderLink href="/#documentation" text="Documentation" />
          <NavHeaderLink href="/#blog" text="Blog" />
          <NavHeaderLink href="/#login" text="Log in" />
        </ul>
        <Link href="/#get-started">
          <a className="px-3 py-1.5 ml-6 rounded-lg bg-pir-green hover:bg-pir-green-hover text-black font-medium transitions-colors duration-200">
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NavHeader;

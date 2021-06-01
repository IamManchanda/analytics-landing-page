import Link from "next/link";
import BrandLogo from "./brand-logo";
import NavHeaderLink from "./nav-header-link";
import MenuIcon from "./menu-icon";
import { useState } from "react";
import CloseIcon from "./close-icon";
import PrimaryButton from "./primary-button";

function NavHeader() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
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
        <div className="md:hidden">
          {showMenu ? (
            <CloseIcon
              className="w-6 h-6 mr-2 cursor-pointer"
              onClick={handleShowMenu}
            />
          ) : (
            <MenuIcon
              className="w-6 h-6 mr-2 cursor-pointer"
              onClick={handleShowMenu}
            />
          )}
        </div>
        <div className="items-center hidden md:flex">
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

      <div className="md:hidden">
        {showMenu && (
          <div className="relative">
            <div className="absolute flex w-full pb-10 bg-pir-beige">
              <ul className="flex flex-col w-full -mt-4">
                <NavHeaderLink href="/#pricing" text="Pricing" isMobile />
                <NavHeaderLink href="/#live-demo" text="Live Demo" isMobile />
                <NavHeaderLink
                  href="/#documentation"
                  text="Documentation"
                  isMobile
                />
                <NavHeaderLink href="/#blog" text="Blog" isMobile />
                <NavHeaderLink href="/#github" text="Github" isMobile />
                <NavHeaderLink href="/#twitter" text="Twitter" isMobile />
                <NavHeaderLink href="/#login" text="Log in" isMobile />
                <li className="flex justify-center mt-8">
                  <PrimaryButton
                    href="/#get-started"
                    text="Get Started"
                    isFull
                  />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default NavHeader;

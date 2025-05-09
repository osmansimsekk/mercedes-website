import { Bars3Icon } from "@heroicons/react/24/solid"; // Doğru yoldan emin olun
import NavbarItem from "./NavbarItem";
import MobileNav from "./MobileNav";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = ({ setIsOpen, isOpen }) => {
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <nav className="w-screen flex items-center md:justify-evenly bg-white text-black md:py-2 md:px-6 py-4 px-4 z-50 fixed justify-between max-sm:justify-between">
      <div className="flex items-center gap-5">
        <img src="/images/logo.png" className="size-8 md:size-11" alt="Logo" />
        <h1 className="md:text-xl text-lg max-sm:text-[1.2rem]">
          Mercedes-Benz
        </h1>
      </div>
      <button
        className="md:hidden max-sm:block cursor-pointer"
        onClick={handleClick}
      >
        <Bars3Icon
          className="size-5 max-sm:size-4"
          strokeWidth="0.3"
          stroke="white"
        />
      </button>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`overflow-hidden bg-gray-100 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <MobileNav handleClose={handleClick} />
      </div>

      {/* Desktop Navigation */}
      <ul className="font-gidole transition-all duration-200 hidden md:block">
        <div className="flex items-center">
          <NavbarItem>Modeller</NavbarItem>
          <NavbarItem>Satış</NavbarItem>
          <NavbarItem>Servis</NavbarItem>
          <NavbarItem>Şubelerimiz</NavbarItem>
          <NavbarItem>Galeri</NavbarItem>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

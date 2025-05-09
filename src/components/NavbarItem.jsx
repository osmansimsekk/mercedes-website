import { ChevronDownIcon } from "@heroicons/react/16/solid";
import InnerNavItem from "./InnerNavItem";

const NavbarItem = ({ children, innerNav, handleHover }) => {
  return (
    <li className="group px-3 py-4">
      <div
        className="flex gap-2 cursor-pointer justify-center items-center"
        onMouseEnter={() => handleHover((prev) => !prev)}
        onMouseLeave={() => handleHover((prev) => !prev)}
      >
        <button className="relative cursor-pointer text-md">
          {children}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full "></span>
        </button>
        <ChevronDownIcon className="size-5 group-hover:rotate-180 transition-all duration-300" />
      </div>
      <div className="absolute left-0 border-t-gray-500 w-screen bg-white transform translate-y-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-6 transition-all duration-300 z-49 shadow-md">
        <InnerNavItem innerNav={innerNav} />
      </div>
    </li>
  );
};

export default NavbarItem;

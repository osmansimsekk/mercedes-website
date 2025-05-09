import { XMarkIcon } from "@heroicons/react/24/outline";

const MobileNav = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-0 flex flex-col items-center justify-center text-black font-gidole">
      <button
        className="absolute top-4 right-4 text-2xl font-bold cursor-pointer"
        onClick={handleClose}
      >
        <XMarkIcon className="size-6" color="black" />
      </button>
      <ul className="space-y-6 text-2xl font-medium">
        <li>
          <a href="#modeller" className="hover:text-gray-300">
            Modeller
          </a>
        </li>
        <li>
          <a href="#satis" className="hover:text-gray-300">
            Satış
          </a>
        </li>
        <li>
          <a href="#servis" className="hover:text-gray-300">
            Servis
          </a>
        </li>
        <li>
          <a href="#subelerimiz" className="hover:text-gray-300">
            Şubelerimiz
          </a>
        </li>
        <li>
          <a href="#galeri" className="hover:text-gray-300">
            Galeri
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;

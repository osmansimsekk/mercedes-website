import { Bars3Icon } from "@heroicons/react/24/solid"; // Doğru yoldan emin olun
import NavbarItem from "./NavbarItem";
import MobileNav from "./MobileNav";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import NavbarContext from "../contexts/NavbarProvider";

const navbarItems = [
  {
    title: "Modeller",
    innerNav: [
      {
        key: "sedan",
        title: "Sedan",
        content: "Lüks sedanlar. Konforlu sürüş. Modern tasarım.",
      },
      {
        key: "suv",
        title: "SUV",
        content: "Güçlü SUV'lar. Off-road deneyimi. Geniş iç mekan.",
      },
      {
        key: "electric",
        title: "Elektrikli",
        content: "EQ serisi. Sıfır emisyon. Yüksek menzil.",
      },
      {
        key: "amg",
        title: "AMG",
        content: "Yüksek performans. Sportif tasarım. Güçlü motor.",
      },
    ],
  },
  {
    title: "Satış",
    innerNav: [
      {
        key: "campaigns",
        title: "Kampanyalar",
        content: "Yeni fırsatlar. Özel indirimler. Avantajlı teklifler.",
      },
      {
        key: "financing",
        title: "Finansman",
        content: "Ödeme çözümleri. Uygun faiz oranları. Esnek planlar.",
      },
      {
        key: "test-drive",
        title: "Test Sürüşü",
        content: "Modeli deneyin. Kolay rezervasyon. Ücretsiz test sürüşü.",
      },
      {
        key: "trade-in",
        title: "Takas",
        content: "Aracınızı değiştirin. Hızlı işlemler. Adil değerleme.",
      },
    ],
  },
  {
    title: "Servis",
    innerNav: [
      {
        key: "maintenance",
        title: "Bakım Hizmetleri",
        content: "Düzenli bakım. Uzman ekip. Kaliteli hizmet.",
      },
      {
        key: "spare-parts",
        title: "Yedek Parça",
        content: "Orijinal parçalar. Uzun ömürlü. Hızlı temin.",
      },
      {
        key: "warranty",
        title: "Garanti",
        content:
          "Garanti detayları. Ek garanti seçenekleri. Güvence paketleri.",
      },
      {
        key: "appointment",
        title: "Servis Randevusu",
        content: "Hızlı randevu. Online işlem. Kolay erişim.",
      },
    ],
  },
  {
    title: "Şubelerimiz",
    innerNav: [
      {
        key: "istanbul",
        title: "İstanbul",
        content: "İstanbul şubeleri. Merkezi lokasyon. Uzman ekip.",
      },
      {
        key: "ankara",
        title: "Ankara",
        content: "Ankara bayileri. Geniş showroom. Deneyimli ekip.",
      },
      {
        key: "izmir",
        title: "İzmir",
        content: "İzmir şubeleri. Kolay ulaşım. Müşteri odaklı hizmet.",
      },
      {
        key: "bursa",
        title: "Bursa",
        content: "Bursa şubeleri. Çevre dostu bina. Yüksek memnuniyet.",
      },
    ],
  },
  {
    title: "Galeri",
    innerNav: [
      {
        key: "photos",
        title: "Fotoğraflar",
        content: "Galeri görselleri. Yüksek çözünürlük. Detaylı inceleme.",
      },
      {
        key: "videos",
        title: "Videolar",
        content: "Tanıtım videoları. Hareketli içerikler. Farklı modeller.",
      },
      {
        key: "events",
        title: "Etkinlikler",
        content: "Etkinlik kareleri. Katılım detayları. Eğlenceli anlar.",
      },
      {
        key: "press",
        title: "Basın",
        content: "Basın içerikleri. Son duyurular. Resmi açıklamalar.",
      },
    ],
  },
];

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
          {navbarItems.map((navArray, i) => (
            <NavbarItem key={i} innerNav={navArray.innerNav}>
              {navArray.title}
            </NavbarItem>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

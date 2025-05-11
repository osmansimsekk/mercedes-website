import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const accordionItems = [
  {
    title: "Yeni Modellerimiz",
    content:
      "Mercedes-Benz’in en son yenilikleri ve performans harikası modelleri ile tanışın. Sürüş keyfini yeniden tanımlayan, her detayıyla fark yaratan araçlarımızı keşfedin.",
  },
  {
    title: "Elektrikli Araç Teknolojisi",
    content:
      "Mercedes-Benz’in geleceğe yön veren elektrikli araçları ile tanışın. Yüksek performans, sıfır emisyon ve sürdürülebilirlik sunan EQ serisi, her yolculuğu benzersiz kılar.",
  },
  {
    title: "Yüksek Performanslı AMG Serisi",
    content:
      "Mercedes-AMG, otomobil tutkunlarına olağanüstü hız ve tasarım sunuyor. Yüksek performanslı motorlar, aerodinamik tasarımlar ve üstün sürüş deneyimi ile AMG dünyasına adım atın.",
  },
  {
    title: "Sürücü Yardım Sistemleri",
    content:
      "Mercedes-Benz, sürüş güvenliğini en üst düzeye çıkaran gelişmiş sürücü yardım sistemleriyle donatılmıştır. Otomatik park, şerit takip sistemi, kör nokta uyarısı ve daha fazlası ile güvende hissedin.",
  },
  {
    title: "Mercedes Benz ile Konfor",
    content:
      "Mercedes-Benz, konforu her detayda sunar. Yüksek kaliteli iç mekanlar, modern teknoloji ve ergonomik tasarımlar ile her yolculuğu özel kılın.",
  },
  {
    title: "Sıfırdan Elektrikli Sürüş Deneyimi",
    content:
      "Mercedes-Benz EQ serisi, tamamen elektrikli sürüşün keyfini çıkarabileceğiniz araçlarla donatılmıştır. Sıfır emisyon, uzun menzil ve sürüş performansı ile elektrikli geleceğe adım atın.",
  },
  {
    title: "Kampanyalar ve Özel Teklifler",
    content:
      "Mercedes-Benz’de hayalinizdeki araca şimdi sahip olun. Mayıs ayına özel kampanyalar ve cazip finansman seçenekleri ile Mercedes-Benz dünyasında bir adım daha yakın olun.",
  },
  // {
  //   title: "Efsane Tasarım",
  //   content:
  //     "Mercedes-Benz’in her yeni modeli, mükemmel bir tasarım anlayışının sonucudur. Sade ama zarif hatlar, aerodinamik form ve benzersiz dış tasarım ile gözleri üzerine çeker.",
  // },
];

const Accordion = ({ scrollRef }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef(null);
  const textsRef = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? 0 : index));
  };

  useGSAP(() => {
    gsap.to("#section", {
      scrollTrigger: {
        trigger: scrollRef.current[3],
        start: "top bottom",
        end: "center top",
        onEnter: () => {
          document.fonts.ready.then(() => {
            textsRef.current.forEach((text) => {
              let splitTitle = SplitText.create(text, {
                type: "chars",
              });

              gsap.from(splitTitle.chars, {
                y: 100,
                opacity: 0,
                stagger: {
                  amount: 1,
                },
              });
            });
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useGSAP(() => {
    gsap.set(imageRef.current, { opacity: 0 });
    gsap.to(imageRef.current, {
      opacity: 1,
      delay: 0.1,
      duration: 0.5,
      ease: "slow",
    });
  }, [activeIndex]);

  return (
    <section
      className="w-screen md:pt-50 lg:grid lg:grid-cols-2 relative bg-white font-gidole lg:mt- max-sm:h-[130vh] md:h-[130vh]"
      ref={(el) => (scrollRef.current[3] = el)}
    >
      <h1
        className="absolute lg:top-1/20 pt-10 top-1/20 lg:left-1/2 text-5xl left-1/2 font-tinos lg:pt-20  lg:translate-x-[-50%] translate-x-[-50%] text-gray-800 hidden lg:block w-200"
        ref={(el) => (textsRef.current[0] = el)}
      >
        Mercedes-Benz ile Geleceğe Yolculuk.
      </h1>
      <h1
        className="text-center md:text-5xl max-sm:py-20 max-sm:text-2xl max-sm:px-6 font-tinos sm:text-2xl sm:px-6 sm:py-20 max-lg:block hidden"
        ref={(el) => (textsRef.current[1] = el)}
      >
        Mercedes-Benz ile Geleceğe Yolculuk.
      </h1>
      <div>
        <img
          src={`/images/accordion/image-${activeIndex}.webp`}
          className="absolute lg:top-1/5 left-1/4 translate-x-[-40%] translate-y-[15%] block max-lg:hidden lg:h-150"
          ref={imageRef}
        />
      </div>

      <div className="w-full max-w-150 mx-auto md:col-span-1 cursor-pointer md:mt-15 md:px-4 max-sm:max-w-70 lg:mt-35">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="md:mb-2 mb-1 shadow-sm transition-all duration-300"
          >
            {/* Accordion Header */}
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center md:px-8 md:py-6 py-4 px-6 bg-white text-black text-md hover:bg-gray-100 cursor-pointer max-sm:text-sm"
            >
              <span>{item.title}</span>
              <svg
                className={`w-5 h-5 transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Accordion Content with Animation */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden bg-white"
            >
              <div className="px-10 py-6 text-gray-700 text-sm max-sm:text-xs">
                {item.content}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;

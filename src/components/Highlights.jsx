import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import Accordion from "./Accordion";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Highlights = ({ scrollRef }) => {
  const cardsRef = useRef([]);
  const textTitleRef = useRef(null);

  useGSAP(() => {
    const cards = cardsRef.current;
    // ScrollTrigger ile animasyon
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#highlights-section",
          start: "top bottom",
          end: "center top",

          scrub: 1,
          onEnter: () => {
            let splitTitle = SplitText.create(textTitleRef.current, {
              type: "chars",
            });

            gsap.from(splitTitle.chars, {
              y: 100,
              opacity: 0,
              stagger: {
                amount: 1,
              },
            });
          },
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="md:h-[110vh] w-screen bg-white md:py-10  max-sm:h-[270vh] sm:h-[280vh]"
      id="highlights-section"
      ref={(el) => (scrollRef.current[2] = el)}
    >
      <h1
        className="md:text-5xl text-center text-black max-sm:text-3xl max-sm:py-10 sm:py-10 sm:text-4xl"
        ref={textTitleRef}
      >
        Öne Çıkanlar.
      </h1>
      <div className="w-full min-h-full flex flex-col md:flex-row max-sm:flex-col max-sm:gap-15 md:items-start items-center md:mt-15 md:gap-x-10 md:px-4 md:justify-center sm:gap-15">
        <div
          className="max-w-80 h-140 shadow-xl rounded-md flex flex-col cursor-pointer max-sm:h-120 max-sm:max-w-60"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <img
            src="/images/highlights/image-1.webp"
            className="w-full rounded-t-md"
          />
          <div className="mt-3 px-4 flex flex-col text-center space-y-5 flex-1 py-5">
            <p className="text-2xl max-sm:text-lg">C Serisi All-Terrain</p>
            <p className="text-sm font-gidole max-sm:text-xs">
              Şehrin dinamik yüzü.
            </p>
            <button className="bg-blue-500 px-4 py-2 w-30 text-white text-sm rounded-sm font-gidole mt-auto mx-auto">
              Keşfedin
            </button>
          </div>
        </div>
        <div
          className="max-w-80 h-140 shadow-xl rounded-md flex flex-col cursor-pointer max-sm:h-120 max-sm:max-w-60"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <img
            src="/images/highlights/image-2.webp"
            className="w-full rounded-t-md"
          />
          <div className="mt-3 px-4 flex flex-col text-center space-y-5 flex-1 py-5">
            <p className="text-2xl max-sm:text-lg">
              Hayalinizdeki tamamen elektrikli model ile bir test sürüşü
              gerçekleştirin.
            </p>
            <p className="text-sm font-gidole max-sm:text-xs">
              Elektrikli geleceği şimdi deneyimleyin.
            </p>
            <button className="bg-blue-500 px-4 py-2 w-50 text-white text-sm rounded-sm font-gidole mt-auto mx-auto">
              Test sürüşü randevusu alın
            </button>
          </div>
        </div>
        <div
          className="max-w-80 h-140 shadow-xl rounded-md flex flex-col cursor-pointer max-sm:h-120 max-sm:max-w-60"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <img
            src="/images/highlights/image-3.webp"
            className="w-full rounded-t-md"
          />
          <div className="mt-3 px-4 flex flex-col text-center space-y-5 flex-1 py-5">
            <p className="text-2xl max-sm:text-lg">
              Mayıs ayına özel avantajlar Mercedes-Benz'de.
            </p>
            <p className="text-sm font-gidole max-sm:text-xs">
              Güncel Kampanyalar
            </p>
            <button className="bg-blue-500 px-4 py-2 w-50 text-white text-sm rounded-sm font-gidole mt-auto mx-auto">
              Kampanyayı inceleyin
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

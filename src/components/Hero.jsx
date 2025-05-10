import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = ({ scrollRef }) => {
  const heroRef = useRef(null);
  const heroElementRef = useRef(null);
  const heroTextsRef = useRef([]);

  useGSAP(() => {
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
      filter: "blur(10px)",

      ease: "power4.inOut",
    });
  }, []);

  useGSAP(() => {
    gsap.to(heroElementRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      delay: 2.5,
    });
  }, []);

  useGSAP(() => {
    heroTextsRef.current.forEach((text) => {
      SplitText.create(text, {
        type: "words",
        autoSplit: true,
        onSplit: (self) => {
          gsap.set(self.words, { opacity: 1 });
          gsap.from(self.words, {
            opacity: 0,
            ease: "back.inOut",
            stagger: {
              amount: 2,
            },
          });
        },
      });
    });
  }, []);

  return (
    <section
      ref={(el) => {
        scrollRef.current[0] = el;
        heroRef.current = el;
      }}
      className="min-h-screen w-screen md:bg-[url('/images/merco.jpg')] bg-[url('/images/merco-vertical.jpg')] bg-cover md:bg-cover z-0 relative"
    >
      <div
        className="text-white absolute top-1/4 left-1/2 md:translate-x-[-45%] translate-y-[0%] flex flex-col gap-10 text-shadow-amber-700 px-10 py-5 translate-x-[-55%] w-full max-sm:translate-x-[-53%]
        sm:translate-x-[-50%]"
      >
        <h1
          className="text-5xl md:text-6xl max-sm:text-3xl"
          ref={(el) => {
            heroTextsRef.current[0] = el;
          }}
        >
          Tasarımın Ötesinde Bir Sanat.
        </h1>
        <p
          className="md:text-lg max-md:text-md text-white font-gidole max-sm:text-[0.6rem] sm:text-sm"
          ref={(el) => {
            heroTextsRef.current[1] = el;
          }}
        >
          Sadece bir araç değil, bir yaşam tarzı. Mercedes-Benz ile her yolculuk
          bir başyapıt. <br />
          Hayallerinizdeki sürüş şimdi sizinle.
          <br /> Mercedes-Benz, teknolojiyi sanatla buluşturuyor. <br /> Her
          modeli, yenilikçi tasarım ve eşsiz performansın birleşimini sunar.
        </p>
        <button
          className="md:px-8 md:py-4 bg-white text-black w-52 text-sm md:text-md font-gidole rounded-sm cursor-pointer px-4 py-4 hover:bg-gray-100 mt-5 max-sm:w-40 max-sm:px-3 max-sm:py-3 opacity-0"
          ref={heroElementRef}
        >
          Yeni SUV'ları incele
        </button>
      </div>
    </section>
  );
};

export default Hero;

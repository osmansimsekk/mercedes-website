import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import gsap from "gsap";

import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const IMAGE_COUNT = 5;

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(SplitText);

const Gallery = ({ scrollRef }) => {
  const textTitleRef = useRef(null);
  const textAreaRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  let prevImage =
    currentImage === 0
      ? IMAGE_COUNT - 1
      : (currentImage - 1) % (IMAGE_COUNT - 1);

  let nextImage = (currentImage + 1) % IMAGE_COUNT;

  useGSAP(() => {
    document.fonts.ready.then(() => {
      let splitTitle = SplitText.create(textTitleRef.current, {
        type: "chars, words",
      });

      gsap.from(splitTitle.chars, {
        scrollTrigger: {
          trigger: scrollRef.current[1],
          end: "bottom center",
          scrub: false,
        },
        y: 100,
        autoAlpha: 0,
        stagger: {
          amount: 1,
        },
      });

      let splitArea = SplitText.create(textAreaRef.current, {
        type: " words, lines, chars",
      });

      gsap.from(splitArea.lines, {
        scrollTrigger: {
          trigger: textAreaRef.current,
          end: "bottom center",
          scrub: false,
        },

        autoAlpha: 0,
        stagger: 0.5,
        y: 100,
      });
    });
  }, []);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.to("#mini-image", {
          transformOrigin: "center center",
          scale: 1,
          width: "65vw",
          duration: 1,
          ease: "power1.inOut",
        });

        gsap.from("#image", {
          scale: 0,
          transformOrigin: "center center",
          duration: 1,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentImage], revertOnUpdate: true }
  );

  const handleClick = () => {
    setHasClicked(true);
    setCurrentImage((prev) => (prev + 1) % IMAGE_COUNT);
  };

  return (
    <section
      className="lg:h-[130vh] md:h-[110vh] w-screen bg-white font-tinos h-[100vh]"
      ref={(el) => (scrollRef.current[1] = el)}
    >
      <div className="flex flex-col justify-center items-center gap-10 md:pt-30 pt-10">
        <h1
          className="md:text-5xl text-4xl text-center px-4 max-sm:text-3xl"
          ref={textTitleRef}
        >
          Mercedes-Benz: Mükemmelliğin Simgesi.
        </h1>
        <div className="md:w-150 max-sm:w-90 sm:w-100">
          <p
            className="md:text-xl text-md text-center text-gray-800 font-gidole max-sm:text-sm sm:text-sm"
            ref={textAreaRef}
          >
            Mercedes-Benz, yenilikçi teknolojileri, üstün konforu, zarif
            tasarımıyla otomotiv dünyasının öncüsüdür. Her model, mühendislik
            harikası ve lüksün birleşimini sunar. Hayalinizdeki sürüş deneyimi
            için
            <span className="border-b-1"> şimdi keşfedin!</span>
          </p>
        </div>

        <div className="w-full h-full flex justify-center items-center relative">
          <div className="relative" id="image-container">
            <img
              src={`/images/gallery/image-${
                !hasClicked ? currentImage : prevImage
              }.webp`}
              className="md:w-[65vw] opacity-100 absolute top-1/2 left-0 translate-x[50%] translate-y-[-50%] w-[100vw]"
            />
            <img
              src={`/images/gallery/image-${currentImage % IMAGE_COUNT}.webp`}
              className="md:w-[65vw] w-[100vw] object-cover opacity-100"
              id="image"
            />
            <span className="absolute bottom-5 right-10 z-50 text-white lg:text-4xl md:text-2xl sm:text-md max-sm:text-md font-light font-gidole opacity-80">
              {(currentImage % IMAGE_COUNT) + 1}{" "}
              <span className="border-l-2 md:px-2 sm:px-1 max-sm:px-1">
                {IMAGE_COUNT}
              </span>
            </span>
          </div>

          <div
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  opacity-0  hover:opacity-100 transisiton-all duration-200 cursor-pointer origin-center lg:w-100 lg:h-100 md:w-60 md:h-60 max-md:w-30 max-md:h-30"
            onClick={handleClick}
          >
            <img
              src={`/images/gallery/image-${nextImage}.webp`}
              className="object-cover size-full"
              id="mini-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

//  <div className="absolute  top-3/5 left-7/10 z-51 translate-x-[50%] font-tinos text-white">
//           <span className="text-4xl">
//             {(currentImage % IMAGE_COUNT) + 1} / {IMAGE_COUNT + 1}
//           </span>
//         </div>

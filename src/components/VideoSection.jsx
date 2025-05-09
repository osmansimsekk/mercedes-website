import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? "merc-video-vertical.mp4" : "merc-video.mp4"
  );
  const divRef = useRef(null);

  useEffect(() => {
    const handleVideoSrcSet = () => {
      if (window.innerWidth < 760) {
        setVideoSrc("merc-video-vertical.mp4");
      } else {
        setVideoSrc("merc-video.mp4");
      }
    };

    handleVideoSrcSet();

    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#section",
        start: "center center",
        end: "+=400px center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to("#video-container", {
      width: "100vw",
      height: "100vh",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      clipAnimation.kill();
    };
  }, []);

  return (
    <section className="w-screen bg-white relative h-screen" id="section">
      <div className="h-screen w-full flex flex-col justify-center items-center">
        {/* H1 Başlık */}
        <h1 className="text-5xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white  opacity-80 md:text-5xl max-sm:text-3xl">
          AMG GT <span className="text-gray-400">R.</span>
        </h1>

        {/* Video Konteyner */}
        <div
          className="relative w-[50vw] h-[50vh] overflow-hidden"
          ref={divRef}
          id="video-container"
        >
          <video
            src={`/videos/${videoSrc}`}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

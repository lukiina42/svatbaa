import type { V2_MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import WelcomeModal from "~/components/WelcomeModal";
import { useMediaQuery } from "react-responsive";
import heroBg from "~/images/hero-bg.png";
import heroBgMobile from "~/images/hero-bg-mobile.jpeg";
import SectionWrapper from "~/components/Utils/SectionWrapper";
import BrideAndGroom from "~/components/BrideAndGroom";
import Countdown from "~/components/Countdown";
import Agendas from "~/components/Agendas";
import LocationMap from "~/components/LocationMap";
import DigitalEnvelope from "~/components/DigitalEnvelope";
import MusicPlayer from "~/components/MusicPlayer";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Svatební oznámení - Lukáš & Danča",
    },
    {
      description:
        "Sobota, 6. září 2025 v Plástovicích",
    },
    // {
    //   "og:image": ogimage,
    // },
    // {
    //   "og:image:type": "image/jpeg",
    // },
    {
      "og:site_name": "lukasdanča",
    },
    { "og:url": "https://www.lukasdanča.cz/" },
    { "og:title": "Svatební oznámení - Lukáš & Danča" },
    {
      "og:description": `Sobota, 6. září 2025 v Plástovicích, Česká republika`,
    },
    { "og:type": "website" },

    // { "twitter:image": ogimage },
    // { "twitter:card": "summary_large_image" },
    {
      "twitter:description":
        "Sobota, 6. září 2025 v Plástovicích, Česká republika",
    },
  ];
};

export default function Index() {
  const isSmallScreen = useMediaQuery({ query: `(max-width: 768px)` });

  const [openWelcome, setOpenWelcome] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (openWelcome) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openWelcome]);

  const onCloseWelcomeModal = () => {
    setOpenWelcome(false);
    // Defer scroll to avoid potential DOM conflicts
    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 0);
  };

  useEffect(() => {
    // Debounce the mobile state change to prevent rapid re-renders
    const timer = setTimeout(() => {
      setIsMobile(isSmallScreen);
    }, 50);

    return () => clearTimeout(timer);
  }, [isSmallScreen]);

  const thisYear = new Date().getFullYear();

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", background: "#b8ddcb" }}
      className="bg-background-2"
    >
      <WelcomeModal isOpen={openWelcome} onClose={onCloseWelcomeModal} />

      <div
        className="flex justify-center items-center h-screen md:h-[750px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${isMobile ? heroBgMobile : heroBg})` }}
      >
        <div className="mt-32">
          <h4
            className="text-center font-head font-bold text-5xl mb-4 text-[#EFEFEF]"
            style={{ textShadow: "3px 3px 1px #6621a6" }}
          >
            Lukáš & Danča
          </h4>
          <div
            className="text-center font-black font-sans text-md text-[#EFEFEF] italic border-t-2 border-[#6621a6] pt-3"
            style={{ textShadow: "2px 2px 1px #6621a6" }}
          >
            06.09.2025
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-background">
        <BrideAndGroom />
      </SectionWrapper>

      <SectionWrapper className="mb-8 pt8">
        <Countdown />
      </SectionWrapper>

      <SectionWrapper className="mb-36">
        <Agendas />
      </SectionWrapper>

      <div className="mb-24">
        <LocationMap />
      </div>

      {/*<SectionWrapper className="mb-36">*/}
      {/*  <GalleryPhotos />*/}
      {/*</SectionWrapper>*/}

      <SectionWrapper className="mb-36">
        <DigitalEnvelope />
      </SectionWrapper>

      <div className="py-24 bg-background text-gray-700 relative text-center font-sans">
        © {thisYear} by <span className="font-semibold">Lukáš</span>
      </div>

      <MusicPlayer play={!openWelcome} />
    </div>
  );
}

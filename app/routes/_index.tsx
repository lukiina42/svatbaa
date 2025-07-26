import type { V2_MetaFunction } from "@remix-run/node";
import { useEffect, useState, useRef } from "react";
import WelcomeModal from "~/components/WelcomeModal";
import { useMediaQuery } from "react-responsive";
import heroBg from "~/images/hero-bg.jpg";
import heroBgMobile from "~/images/hero-bg-mobile.jpg";
import SectionWrapper from "~/components/Utils/SectionWrapper";
import BrideAndGroom from "~/components/BrideAndGroom";
import Countdown from "~/components/Countdown";
import Agendas from "~/components/Agendas";
import LocationMap from "~/components/LocationMap";
import DigitalEnvelope from "~/components/DigitalEnvelope";
import MusicPlayer from "~/components/MusicPlayer";
import lizaSide from "../images/liza-side.png";

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
  const navRef = useRef<HTMLDivElement>(null);

  const [openWelcome, setOpenWelcome] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showLiza, setShowLiza] = useState(false);
  const [lizaOut, setLizaOut] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

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

  useEffect(() => {
    if (!openWelcome) {
      const timer = setTimeout(() => setShowLiza(true), 3000);
      return () => clearTimeout(timer);
    }
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

  // Scroll handler for anchor links to offset sticky nav
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    const nav = navRef.current;
    if (el) {
      const navHeight = nav ? nav.offsetHeight : 0;
      const y = el.getBoundingClientRect().top + window.scrollY - navHeight; // 6px extra space
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", background: "#a6b3a9" }}
      className="bg-background-2"
    >
      {/* Liza-side image animation */}
      {showLiza && (
        <div
          onClick={() => {
            setLizaOut(true);
            setTimeout(() => {
              setShowLiza(false);
              setLizaOut(false);
            }, 700);
          }}
          className={`fixed z-50 flex flex-col items-center
            right-0 bottom-16 md:bottom-24 md:right-0
            max-w-[90vw] w-24 md:w-48
            transition-transform duration-700 ease-in-out
            ${lizaOut ? 'animate-liza-slide-out' : 'animate-liza-slide-in'}`}
          style={{ pointerEvents: 'auto' }}
        >
          <span className="mb-2 px-3 py-2 rounded-lg bg-[#7a494d] text-white text-xs md:text-base shadow-lg relative">
            BEZ PAMLSKŮ NECHOĎTE 🐕🦴
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#7a494d]"></span>
          </span>
          <img src={lizaSide} alt="Líza" className="w-full h-auto drop-shadow-2xl" style={{ cursor: 'pointer' }} />
        </div>
      )}
      <WelcomeModal isOpen={openWelcome} onClose={onCloseWelcomeModal} />
      {/* Top Navigation - Responsive */}
      {!openWelcome && (
        <>
          {/* Hamburger for mobile */}
          <div className="md:hidden fixed top-4 right-4 z-50">
            <button
              onClick={() => setNavOpen((v) => !v)}
              className="p-2 rounded bg-white/80 shadow-md border border-[#7a494d]"
              aria-label="Otevřít navigaci"
            >
              <span className="block w-6 h-0.5 bg-[#7a494d] mb-1"></span>
              <span className="block w-6 h-0.5 bg-[#7a494d] mb-1"></span>
              <span className="block w-6 h-0.5 bg-[#7a494d]"></span>
            </button>
          </div>
          {/* Overlay nav for mobile */}
          <nav
            ref={navRef}
            className={`sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md py-3 px-4 flex justify-center gap-6 md:gap-12 text-lg font-semibold text-[#7a494d] transition-all duration-300
              ${navOpen ? 'fixed inset-0 flex-col items-center justify-center !gap-10 !py-0 !px-0' : 'hidden md:flex'}`}
            style={navOpen ? { minHeight: '100vh' } : {}}
          >
            <a href="#bride-and-groom" className="hover:underline" onClick={e => { handleNavClick(e, "bride-and-groom"); setNavOpen(false); }}>Nevěsta & Ženich</a>
            <a href="#countdown" className="hover:underline" onClick={e => { handleNavClick(e, "countdown"); setNavOpen(false); }}>Odpočet</a>
            <a href="#agendas" className="hover:underline" onClick={e => { handleNavClick(e, "agendas"); setNavOpen(false); }}>Program</a>
            <a href="#location" className="hover:underline" onClick={e => { handleNavClick(e, "location"); setNavOpen(false); }}>Místo</a>
            <a href="#envelope" className="hover:underline" onClick={e => { handleNavClick(e, "envelope"); setNavOpen(false); }}>Svatební dar</a>
          </nav>
          {/* Overlay background for mobile nav */}
          {navOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setNavOpen(false)} />}
        </>
      )}

      <div
        className="flex justify-center items-center h-screen md:h-[772px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${isMobile ? heroBgMobile : heroBg})` }}
      >
        <div className="mt-32">
          <h4
            className="text-center font-head font-bold text-5xl mb-4 text-[#EFEFEF]"
            style={{ textShadow: "3px 3px 1px #7a494d" }}
          >
            Lukáš & Danča
          </h4>
          <div
            className="text-center font-black font-sans text-md text-[#EFEFEF] italic border-t-2 border-[#7a494d] pt-3"
            style={{ textShadow: "2px 2px 1px #7a494d" }}
          >
            06.09.2025
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-background" id="bride-and-groom">
        <BrideAndGroom />
      </SectionWrapper>

      <SectionWrapper className="mb-8 pt8" id="countdown">
        <Countdown />
      </SectionWrapper>

      <SectionWrapper className="mb-36" id="agendas">
        <Agendas />
      </SectionWrapper>

      <div className="mb-12" id="location">
        <LocationMap />
      </div>

      {/*<SectionWrapper className="mb-36">*/}
      {/*  <GalleryPhotos />*/}
      {/*</SectionWrapper>*/}

      <SectionWrapper className="mb-36" id="envelope">
        <DigitalEnvelope />
      </SectionWrapper>

      <div className="py-8 bg-background text-gray-700 relative text-center font-sans">
        © {thisYear} by <span className="font-semibold">Lukáš</span>
      </div>

      <MusicPlayer play={!openWelcome} />
    </div>
  );
}

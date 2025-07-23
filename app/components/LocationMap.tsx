import SectionWrapper from "./Utils/SectionWrapper";

const MAP_EMBEDED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.073282361872!2d14.35500031568213!3d49.03500097930537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773f1e2e2e2e2e3%3A0x123456789abcdef!2sPl%C3%A1stovice+5%2C+373+48+Sedlec%2C+%C4%8Cesk%C3%A9+Bud%C4%9Bjovice!5e0!3m2!1sen!2scz!4v1717430000000!5m2!1sen!2scz";
const MAP_REDIRECT_URL =
  "https://www.google.com/maps/dir//Pl%C3%A1stovice+5,+373+48+Sedlec,+%C4%8Cesk%C3%A9+Bud%C4%9Bjovice/@49.0350009,14.3550003,17z";
const MAP_TITLE = "Svatební místo - Stodola Plástovice";
const MAP_ADDRESS =
  "Plástovice 5, Sedlec, České Budějovice";

const LocationMap = () => {
  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <iframe
                src={MAP_EMBEDED_URL}
                className="w-full h-[580px] md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                scrolling="no"
                aria-label={MAP_TITLE}
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="text-3xl font-head font-bold mb-3 text-gray-700">
                Místo svatby
              </h3>
              <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 md:mb-10 font-sans">{MAP_ADDRESS}</p>
              <div className="flex md:justify-start justify-center">
                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-[#7a494d] hover:bg-[#4b157a] outline-[#7a494d] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  rel="noreferrer"
                >
                  Otevřít mapu
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;

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
              <p className="mb-8 font-sans">{MAP_ADDRESS}</p>
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
              
              {/* Accommodation Section - Hidden on mobile */}
              <div className="mt-16 hidden md:block">
                <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                  Ubytování
                </h4>
                <div className="text-gray-600 font-sans leading-relaxed space-y-3">
                  <p>
                    <strong>Pro rodinu:</strong> Ubytování je zajištěno v objektu! 🏠
                  </p>
                  <p>
                    <strong>Pro přátele:</strong> Je možné spaní na zahradě ve stanech nebo obytných vozech! 🏕️
                  </p>
                  <p className="text-sm">
                    Pokud nechcete spát venku, můžete si vybrat z těchto hotelů a zajistit si to sami 😄:
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li>
                      • <a 
                          href="https://www.booking.com/hotel/cz/rychta-netolice.cs.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDqIAQGYAQW4AQfIAQ3YAQHoAQH4AQyIAgGoAgO4Ao7YhMQGwAIB0gIkZGQ3MjBiMDUtYWFmYi00NjA1LWI2ZWEtMzJlN2VhZDRjNmRk2AIG4AIB&sid=e78b70fc82574a9a40bd625c5bf00734&all_sr_blocks=117514708_226150141_1_42_0&checkin=2025-09-06&checkout=2025-09-07&dest_id=-552644&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&highlighted_blocks=117514708_226150141_1_42_0&hpos=1&matching_block_id=117514708_226150141_1_42_0&nflt=review_score%3D80&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=117514708_226150141_1_42_0__3900&srepoch=1753295951&srpvid=21418313b6f1067f&type=total&ucfs=1&activeTab=main"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#7a494d] hover:underline"
                        >
                          Rychta Netolice
                        </a>
                    </li>
                    <li>
                      • <a 
                          href="https://www.booking.com/hotel/cz/ubytovani-v-soukromi-jaronice.cs.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDqIAQGYAQW4AQfIAQ3YAQHoAQH4AQyIAgGoAgO4Ao7YhMQGwAIB0gIkZGQ3MjBiMDUtYWFmYi00NjA1LWI2ZWEtMzJlN2VhZDRjNmRk2AIG4AIB&sid=e78b70fc82574a9a40bd625c5bf00734&all_sr_blocks=653256004_343457598_2_0_0&checkin=2025-09-06&checkout=2025-09-07&dest_id=-552644&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=2&highlighted_blocks=653256004_343457598_2_0_0&hpos=2&matching_block_id=653256004_343457598_2_0_0&nflt=review_score%3D80%3Bhotelfacility%3D8&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=653256004_343457598_2_0_0__4000&srepoch=1753296293&srpvid=21418313b6f1067f&type=total&ucfs=1&"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#7a494d] hover:underline"
                        >
                          Ubytování v soukromí Jaronice
                        </a>
                    </li>
                    <li>
                      • <a 
                          href="https://www.booking.com/hotel/cz/pension-marislav.cs.html?label=gen173nr-1BCAEoggI46AdIM1gEaDqIAQGYAQW4AQfIAQ3YAQHoAQGIAgGoAgO4Ao7YhMQGwAIB0gIkZGQ3MjBiMDUtYWFmYi00NjA1LWI2ZWEtMzJlN2VhZDRjNmRk2AIF4AIB&sid=e78b70fc82574a9a40bd625c5bf00734&aid=304142&ucfs=1&checkin=2025-09-06&checkout=2025-09-07&dest_id=-552644&dest_type=city&group_adults=1&no_rooms=1&group_children=0&srpvid=21418313b6f1067f&srepoch=1753296422&matching_block_id=138870501_372860814_1_0_0&atlas_src=sr_iw_title"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#7a494d] hover:underline"
                        >
                          Pension Marislav
                        </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Accommodation Section - Mobile only */}
        <div className="mt-12 px-4 md:hidden">
          <h4 className="text-xl mb-4 font-sans font-semibold text-gray-700">
            Ubytování
          </h4>
          <div className="text-gray-600 font-sans leading-relaxed space-y-3">
            <p>
              <strong>Pro rodinu:</strong> Ubytování je zajištěno v objektu! 🏠
            </p>
            <p>
              <strong>Pro přátele:</strong> Je možné spaní na zahradě ve stanech nebo obytných vozech! 🏕️
            </p>
            <p className="text-sm">
              Pokud nechcete spát venku, můžete si vybrat z těchto hotelů a zajistit si to sami 😄:
            </p>
            <ul className="text-sm space-y-2 text-left">
              <li>
                • <a 
                    href="https://www.booking.com/hotel/cz/rychta-netolice.cs.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDqIAQGYAQW4AQfIAQ3YAQHoAQH4AQyIAgGoAgO4Ao7YhMQGwAIB0gIkZGQ3MjBiMDUtYWFmYi00NjA1LWI2ZWEtMzJlN2VhZDRjNmRk2AIG4AIB&sid=e78b70fc82574a9a40bd625c5bf00734&all_sr_blocks=117514708_226150141_1_42_0&checkin=2025-09-06&checkout=2025-09-07&dest_id=-552644&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&highlighted_blocks=117514708_226150141_1_42_0&hpos=1&matching_block_id=117514708_226150141_1_42_0&nflt=review_score%3D80&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=117514708_226150141_1_42_0__3900&srepoch=1753295951&srpvid=21418313b6f1067f&type=total&ucfs=1&activeTab=main"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#7a494d] hover:underline"
                  >
                    Rychta Netolice
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.booking.com/hotel/cz/ubytovani-v-soukromi-jaronice.cs.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaDqIAQGYAQW4AQfIAQ3YAQHoAQH4AQyIAgGoAgO4Ao7YhMQGwAIB0gIkZGQ3MjBiMDUtYWFmYi00NjA1LWI2ZWEtMzJlN2VhZDRjNmRk2AIG4AIB&sid=e78b70fc82574a9a40bd625c5bf00734&all_sr_blocks=653256004_343457598_2_0_0&checkin=2025-09-06&checkout=2025-09-07&dest_id=-552644&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=2&highlighted_blocks=653256004_343457598_2_0_0&hpos=2&matching_block_id=653256004_343457598_2_0_0&nflt=review_score%3D80%3Bhotelfacility%3D8&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=653256004_343457598_2_0_0__4000&srepoch=1753296293&srpvid=21418313b6f1067f&type=total&ucfs=1&"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#7a494d] hover:underline"
                  >
                    Ubytování v soukromí Jaronice
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.booking.com/hotel/cz/pension-marislav.cs.html?label=gen173nr-1BCAEoggI46AdIM1gEaDqIAQGYAQW4AQfIAQ3YAQHoAQGIAgGoAgO4Ao7YhMQGwAIB0gIkZGQ3MjBiMDUtYWFmYi00NjA1LWI2ZWEtMzJlN2VhZDRjNmRk2AIF4AIB&sid=e78b70fc82574a9a40bd625c5bf00734&aid=304142&ucfs=1&checkin=2025-09-06&checkout=2025-09-07&dest_id=-552644&dest_type=city&group_adults=1&no_rooms=1&group_children=0&srpvid=21418313b6f1067f&srepoch=1753296422&matching_block_id=138870501_372860814_1_0_0&atlas_src=sr_iw_title"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#7a494d] hover:underline"
                  >
                    Pension Marislav
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;

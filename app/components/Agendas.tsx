const CALENDAR_URL = `https://www.google.com/calendar/render?
action=TEMPLATE&
text=Svatba+Luk%C3%A1%C5%A1+%26+Danča+%F0%9F%92%8C&
location=Pl%C3%A1stovice+5%2C+Sedlec%2C+%C4%8Cesk%C3%A9+Bud%C4%9Bjovice&
details=S%20velkou%20radost%C3%AD%20V%C3%A1s%20zveme%20na%20na%C5%A1i%20svatbu%3A%20Luk%C3%A1%C5%A1%20Vala%20a%20Danča%20Skobl%C3%ADkov%C3%A1.%0A%0AOdkaz%20na%20pozv%C3%A1nku%3A%0Ahttps%3A%2F%2Fwww.svatba.lukasvala.net%2F%0A%0AT%C4%9B%C5%A1%C3%ADme%20se%20na%20v%C3%A1s%21%0A%0AZdrav%C3%AD%2C%0ALuk%C3%A1%C5%A1%20%26%20Danča&
dates=20250906T110000Z%2F20250906T200000Z`;

const Agendas = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-4 text-gray-500 font-head md:text-lg font-medium">
        Naše svatba se koná:
      </div>
      <h3 className="text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans">
        SOBOTA, 6. ZÁŘÍ 2025
      </h3>
      <div className="px-12 flex max-w-md mx-auto mb-10">
        <a
          href={CALENDAR_URL}
          target={"_blank"}
          className="px-8 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-[#7a494d] hover:bg-[#4b157a] outline-[#7a494d] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          rel="noreferrer"
        >
          Uložit do kalendáře
        </a>
      </div>

        <div className={'flex flex-col md:gap-8 gap-4 mt-24 px-8'}>
                <div className="grid grid-cols-3 gap-4 text-center text-2xl px-4 md:px-0 md:text-3xl font-black">
                    <div className="col-span-2 text-gray-700 text-left font-sans">
                        PŘÍJEZD HOSTŮ
                    </div>
                    <div className="col-span-1 text-gray-700 text-right font-sans">
                        10:30
                    </div>
                </div>
              <div className="grid grid-cols-3 gap-4 text-center text-2xl px-4 md:px-0 md:text-3xl font-black">
                <div className="col-span-2 text-gray-700 text-left font-sans">
                  OBŘAD + FOCENÍ
                </div>
                <div className="col-span-1 text-gray-700 text-right font-sans">
                  11:30
                </div>
              </div>

                <div className="grid grid-cols-3 gap-4 text-center text-2xl px-4 md:px-0 md:text-3xl font-black">
                    <div className="col-span-2 text-gray-700 text-left font-sans">
                        OBĚD
                    </div>
                    <div className="col-span-1 text-gray-700 text-right font-sans">
                        13:00
                    </div>
                </div>

            <div className="grid grid-cols-3 gap-4 text-center text-2xl px-4 md:px-0 md:text-3xl  font-black">
                <div className="col-span-2 text-gray-700 text-left font-sans">
                    KRÁJENÍ DORTU
                </div>
                <div className="col-span-1 text-gray-700 text-right font-sans">
                    15:00
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center text-2xl px-4 md:px-0 md:text-3xl  font-black">
                <div className="col-span-2 text-gray-700 text-left font-sans">
                    PRVNÍ TANEC
                </div>
                <div className="col-span-1 text-gray-700 text-right font-sans">
                    17:30
                </div>
            </div>

              <div className="grid grid-cols-3 gap-4 text-center text-2xl px-4 md:px-0 md:text-3xl  font-black">
                <div className="col-span-2 text-gray-700 text-left font-sans">
                    RAUT
                </div>
                <div className="col-span-1 text-gray-700 text-right font-sans">
                    18:00
                </div>
            </div>
        </div>
    </div>
  );
};

export default Agendas;

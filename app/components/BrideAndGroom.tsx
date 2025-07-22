import TextWithLine from "./Utils/TextWithLine";
import bride from "~/images/danca-img.jpg";
import groom from "~/images/lukas-img.jpeg";
import dawg from "~/images/liza-img.jpeg";

const BrideAndGroom = () => {
  return (
    <div className="pt-20 pb-4">
      <h3 className="text-3xl text-center font-sans font-bold text-gray-700 mb-6">
        Šťastní budoucí wajfu a husbando
      </h3>
      <div className="w-full flex flex-wrap pb-20 flex-col md:flex-row md:justify-center">
        {/* Bride */}
        <div className="w-full md:w-1/3 px-4 flex justify-center">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src={bride}
              alt="nevěsta"
              className="w-48 h-48 rounded-full mb-8"
            />
            <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
              Danča Skoblíková
            </h3>
            <div className="mb-4">
              <TextWithLine>Nevěsta</TextWithLine>
            </div>
            <p className="font-sans text-gray-500 leading-6">
              Narozena 25. září 2001 v Písku. Nejmladší dcera <strong>Fandy a Radky Skoblíkových</strong>
            </p>
          </div>
        </div>
        {/* Dog */}
        <div className="w-full md:w-1/3 px-4 flex justify-center">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src={dawg}
              alt="dawg"
              className="w-48 h-48 rounded-full mb-8 border-4 "
            />
            <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
              Líza
            </h3>
            <div className="mb-4">
              <TextWithLine>Dawg</TextWithLine>
            </div>
            <p className="font-sans text-gray-500 leading-6">
              Je to pes. Haf
            </p>
          </div>
        </div>
        {/* Groom */}
        <div className="w-full md:w-1/3 px-4 flex justify-center">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={groom}
                alt="ženich"
                className="w-48 h-48 rounded-full mb-8"
              />
              <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
                Lukáš Vala
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>Ženich</TextWithLine>
              </div>
              <p className="font-sans text-gray-500 leading-6">
                Narozen 15. dubna 2000 v Praze. Nejstarší syn <strong>Tomáše a Ivany Valových</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;

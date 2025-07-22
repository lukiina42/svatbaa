// Simplified component - removed Google Sheets integration

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {

  return (
    <div
      className={
        "fixed h-screen w-screen left-0 top-0 z-10 transition-all duration-1000" +
        (!isOpen ? " -translate-y-full" : "")
      }
    >
      <div className="bg-background h-screen w-screen flex flex-row justify-center items-start fixed overflow-auto py-20 box-border">
        <div className="flex flex-col items-center p-5 my-auto w-full md:w-[500]">
          <h5 className="text-center font-medium font-sans text-xl md:text-2xl mb-2 md:mb-3 text-gray-500">
            Svatební oznámení
          </h5>
          <h4 className="text-center font-head text-5xl md:text-6xl mb-6 text-gray-800">
            Lukáš & Danča
          </h4>

          <div className="w-[350px] mb-12">
            {/* Simplified - removed personalization */}
          </div>

          <button
            type="button"
            className="px-5 transition-all py-3 font-sans font-medium rounded-md bg-[#6621a6] hover:bg-[#4b157a] outline-[#6621a6] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            onClick={onClose}
          >
            Otevřít oznámení
          </button>
        </div>
      </div>
    </div>
  );
}

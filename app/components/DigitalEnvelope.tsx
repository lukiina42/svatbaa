import { useEffect, useRef, useState } from "react";

const DigitalEnvelope = () => {
  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="text-3xl font-head font-bold text-center text-gray-700">
        Svatební dar
      </h4>

      <div className="max-w-2xl pt-4 mx-auto text-center px-4">
        <p className="text-gray-600 font-sans leading-relaxed mb-4">
          Nejkrásnější dárek pro nás je ale vaše přítomnost na naší svatbě! 💕
        </p>
      </div>

      <div className=" flex justify-evenly pt-4 flex-col md:flex-row md:flex-wrap">
        <div className="px-4 mb-10">
          <DebitCard
            bank="Česká spořitelna"
            accountNumber="4299886093/0800"
            name="Společný účet svatebčanů"
          />
        </div>
      </div>
    </div>
  );
};

interface DebitCardProps {
  bank: string;
  accountNumber: string;
  name: string;
}

const DebitCard = ({ bank, accountNumber, name }: DebitCardProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copy = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (copy.current) {
        clearTimeout(copy.current);
      }
    };
  }, []);

  const onCopy = () => {
    if (copy.current) clearTimeout(copy.current);
    navigator.clipboard.writeText(accountNumber);
    setIsCopied(true);

    copy.current = setTimeout(() => {
      setIsCopied(false);
      copy.current = null;
    }, 2000);
  };

  return (
    <div
      className=" flex-shrink-0 rounded-[20px] bg-[#a6b3a9] shadow-lg shadow-[#7a494d] w-full md:w-[430px] h-52 md:h-64 p-6"
      style={{
        backgroundImage: "linear-gradient(62deg, #a6b3a9 0%, #e6e6fa 45%)",
      }}
    >
      <div className="flex flex-col justify-end h-full text-gray-800 font-sans">
        <div className="mb-0.5 font-medium">{bank}</div>
        <div className="mb-4 relative flex items-center">
          <div className="text-2xl md:text-3xl font-bold mr-2">
            {accountNumber}
          </div>
          <div className="relative pl-0.5">
            <button
              className="text-lg relative pt-0.5"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={onCopy}
              aria-label="copy"
            >
              <i className={isHover ? "bx bxs-copy" : "bx bx-copy"} />
            </button>
            <div
              className="h-full absolute right-0 top-0 translate-x-full pl-2 flex items-center text-xs pt-1.5 whitespace-nowrap"
              style={{
                display: isHover ? "block" : "none",
              }}
            >
              {isCopied ? "ZKOPÍROVÁNO" : "KOPÍROVAT"}
            </div>
          </div>
        </div>
        <div className="mb-0.5 font-medium">Majitel účtu</div>
        <div className="text-lg md:text-xl font-semibold">{name}</div>
      </div>
    </div>
  );
};

export default DigitalEnvelope;

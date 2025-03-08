import clipboardIcon from "@/app/assets/clipboard.png";
import Image from "next/image";

type Props = {
  onBack: () => void;
};

export default function Confirmation({ onBack }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={clipboardIcon}
            alt="Clipboard Icon"
            width={48}
            height={48}
          />
          <h2 className="text-2xl font-bold">Thank You!</h2>
          <p className="my-4 font-semibold text-center">
            Your information was submitted to our team of immigration attorneys
          </p>
        </div>

        <button className="btn" onClick={onBack}>
          Go Back to Homepage
        </button>
      </div>
    </div>
  );
}

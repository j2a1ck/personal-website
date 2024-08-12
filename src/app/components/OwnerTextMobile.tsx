import OwnerImage from "./OwnerImage";
import SocialMedia from "./SocialMedia";

// OwnerTextMobile component
const OwnerTextMobile: React.FC = () => {
  return (
    <div className="item-center flex flex-col justify-center">
      <div className="mt-12">
        <OwnerImage />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="pt-36 text-sm text-white lg:text-base"> My name is</h2>
        <h1 className="px-8 pt-2 text-9xl font-extrabold text-navy-blue md:text-9xl lg:text-9xl">
          Jack
        </h1>
        <h3 className="w-25 h-10 pt-8 text-sm font-bold text-gray-lite md:text-base lg:text-2xl">
          Newcomer to front-end development
        </h3>
        <h3 className="h-auto w-auto pt-4 text-sm font-bold text-gray-lite md:pt-7 md:text-base lg:pt-9 lg:text-2xl">
          exploring of the front-end.
        </h3>
        <div className="px-7 pt-3 md:pt-5 lg:pt-3">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};
export default OwnerTextMobile;

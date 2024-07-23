import SocialMedia from "./SocialMedia";
import { sanchez } from "../layout";

// OwnerText component
const OwnerText: React.FC = () => {
  return (
    <div>
      <h1 className="text-white"> My name is</h1>
      <h2
        className={`px-8 pt-4 text-6xl font-extrabold text-navy-blue md:text-9xl lg:text-9xl ${sanchez.className}`}
      >
        Jack
      </h2>
      <h3 className="w-25 h-10 pt-12 text-xs text-gray-lite md:text-base lg:text-2xl">
        newcomer to front-end development
      </h3>
      <h3 className="h-auto w-auto pt-4 text-xs text-gray-lite md:pt-7 md:text-base lg:pt-9 lg:text-2xl">
        Exploring of the front-end.
      </h3>
      <div className="px-5 pt-3 md:pt-5 lg:pt-6">
        <SocialMedia />
      </div>
    </div>
  );
};
export default OwnerText;

import SocialMedia from "./SocialMedia";
import { sanchez } from "../layout"; 

// OwnerText component
const OwnerText: React.FC = () => {
  return (
    <div>
      <h1 className="text-white"> My name is</h1>
      <h2
        className={`text-navy-blue pt-4 px-8 lg:text-9xl md:text-9xl text-6xl font-extrabold ${sanchez.className}`} 
      >
        Jack
      </h2>
      <h3 className="text-gray-lite pt-12 text-xs w-25 h-10 lg:text-2xl md:text-base">
        newcomer to front-end development
      </h3>
      <h3 className="text-gray-lite pt-4 text-xs w-auto h-auto lg:text-2xl lg:pt-9 md:text-base md:pt-7">
        Exploring of the front-end.
      </h3>
      <div className="pt-3 lg:pt-6 md:pt-5 px-5">
        <SocialMedia />
      </div>
    </div>
  );
};
export default OwnerText;

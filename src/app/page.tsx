"use client";
import OwnerImage from "./components/OwnerImage";
import OwnerText from "./components/OwnerText";
import OwnerTextMobile from "./components/OwnerTextMobile";

import useMediaQuery from "../app/hook/useMediaQuery";

// Home component
const Home: React.FC = () => {
  // Using custom hook to determine if screen is 430px or less
  const isMobile = useMediaQuery("(max-width: 430px)");
  return (
    <main>
      {isMobile ? (
        <OwnerTextMobile />
      ) : (
        <div className="mt-20 flex justify-evenly">
          <OwnerText />
          <OwnerImage />
        </div>
      )}
    </main>
  );
};

export default Home;

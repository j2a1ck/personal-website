"use client";
import OwnerImage from "./components/OwnerImage";
import OwnerText from "./components/OwnerText";
import OwnerTextMobile from "./components/OwnerTextMobile";

import useMediaQuery from "../app/hook/useMediaQuery";

const Home: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 430px)");
  return (
    <main>
      {isMobile ? (
        <OwnerTextMobile />
      ) : (
        <div className="mt-24 flex justify-evenly">
          <OwnerText />
          <OwnerImage />
        </div>
      )}
    </main>
  );
};

export default Home;

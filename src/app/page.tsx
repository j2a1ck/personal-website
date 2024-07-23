import OwnerImage from "./components/OwnerImage";
import OwnerText from "./components/OwnerText";

const Home: React.FC = () => {
  return (
    <main>
      <div className="mt-6 flex justify-evenly">
        <OwnerText />
        <OwnerImage />
      </div>
    </main>
  );
};

export default Home;

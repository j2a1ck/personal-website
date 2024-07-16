import Navbar from "./components/Navbar";
import OwnerImage from "./components/OwnerImage";
import OwnerText from "./components/OwnerText";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-evenly mt-6">
        <OwnerText />
        <OwnerImage />
      </div>
    </main>
  );
}

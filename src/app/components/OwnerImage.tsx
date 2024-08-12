import Image from "next/image";
import ownerImage from "../../../public/ownerImage.jpg";

// ownerImage component
const OwnerImage: React.FC = () => {
  return (
    // display Image
    <div className="flex items-start justify-center">
      <div className="h-44 w-44 overflow-hidden rounded-full md:h-60 md:w-60 lg:h-80 lg:w-80">
        <Image
          priority={true}
          src={ownerImage}
          alt="Owner"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default OwnerImage;

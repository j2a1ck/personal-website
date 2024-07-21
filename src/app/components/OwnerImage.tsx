import Image from "next/image";
import ownerImage from "../../../public/ownerImage.jpg";

const OwnerImage: React.FC = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="overflow-hidden rounded-full w-32 h-32 md:w-60 md:h-60 lg:w-80 lg:h-80">
        <Image
          priority={true}
          src={ownerImage}
          alt="Owner"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default OwnerImage;

import React from "react";
import Image from "next/image";
import ownerImage from "../../../public/ownerImage.jpg";

const OwnerImage: React.FC = () => {
  return (
    //display owner picture
    <div className="">
      <div className="overflow-hidden rounded-full ">
        <Image src={ownerImage} alt="Owner" className="w-32 h-auto lg:w-80"/>
      </div>
    </div>
  );
};
  
export default OwnerImage;

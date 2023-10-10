import React from "react";
import { MdOutlineDeliveryDining } from "react-icons/md";

const Card = ({ imageSrc, title, price, description, btn }) => {
  return (
    <div
      className="bg-gray-200"
      style={{
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <div>
        <img src={imageSrc} alt="" className="card-img w-full h-60" />
      </div>
      <div className="p-4 flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
          <span className="text-lg font-semibold">{title}</span>
          <span className="text-orange-500 font-semibold">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
        <a href="/#" className="flex flex-row items-center gap-1 font-semibold">
          {btn}
          <MdOutlineDeliveryDining />
        </a>
      </div>
    </div>
  );
};

export default Card;

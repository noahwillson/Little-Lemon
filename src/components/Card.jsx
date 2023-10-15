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
      <div className="p-4 flex flex-col gap-6 h-60 mx-3 my-3">
        <div className="flex flex-row items-center justify-between">
          <span className="text-lg font-semibold font-serif">{title}</span>
          <span className="text-orange-500 font-semibold text-lg">{price}</span>
        </div>
        <p className="text-gray-600 font-serif text-lg">{description}</p>
        <a
          href="/#"
          className="flex flex-row items-center gap-1 font-semibold text-xl"
        >
          {btn}
          <MdOutlineDeliveryDining className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Card;

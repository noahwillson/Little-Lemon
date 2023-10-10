import React from "react";

const Card = ({ imageSrc, title, price, description, btn }) => {
  return (
    <div>
      <div>
        <img src={imageSrc} alt="" className="card-img w-100 h-100" />
      </div>
      <div className="flex justify-between mt-4">
        <span className="ml-4">{title}</span>
        <span className="mr-4">{price}</span>
      </div>
      <div className="text-start p-4">
        <p className="mb-6 ">{description}</p>
        <a href="/#" className="font-normal">
          {btn}
        </a>
      </div>
    </div>
  );
};

export default Card;

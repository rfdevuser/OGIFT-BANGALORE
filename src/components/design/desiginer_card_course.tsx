import React from "react";

const DesignerCard = ({title , desc , link}) => {
  return (
   <div className="max-w-xs shadow-lg rounded-lg overflow-hidden m-auto transition hover:bg-purple-100 mt-2 shadow-xl border-2 border-purple-200 relative "
    style={{
      backgroundImage: "url('/images/assets/buttonbg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      
    }}
  >
             <div
        className="absolute inset-0 bg-black opacity-20 rounded-lg"
        style={{ zIndex: -1 }}
      ></div>
      <a href={link} className="block">
        <div className="p-4">
          <p className="font-semibold text-white opacity-100">{title}</p>
          <p className="text-sm text-gray-200 opacity-100">{desc}</p>
        </div>
        <div className="go-corner absolute top-0 right-0 bg-teal-500 rounded-bl-lg flex items-center justify-center ">
          
        </div>
      </a>
    </div>

  );
};

export default DesignerCard;

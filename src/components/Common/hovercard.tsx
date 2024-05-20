import React from 'react';

const hoverCard = () => {
  return (
    <div className="card-container w-72 h-72 relative border-4 border-gray-500 rounded-lg overflow-hidden shadow-lg">
      <div className="card">
        <div className="front-content w-full h-full flex items-center justify-center transition-all duration-600 ease-in-out">
          <p className="text-4xl font-bold opacity-100 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent transition-all duration-600 ease-in-out">Hover me</p>
        </div>
        <div className="content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center gap-4 bg-gradient-to-r from-orange-400 to-pink-600 text-gray-200 p-8 rounded-md pointer-events-none transform -translate-x-full transition-all duration-600 ease-in-out">
          <p className="heading text-4xl font-bold">Card Hover</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas tenetur mollitia pariatur odit, ab minus ratione adipisci accusamus vel est excepturi laboriosam magnam necessitatibus dignissimos molestias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default hoverCard;

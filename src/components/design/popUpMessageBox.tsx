import React, { useRef, useEffect } from "react";

const PopupMessage = ({ message, onClose, fullscreen }) => {
  const backdropRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (backdropRef.current && !backdropRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${fullscreen ? '' : 'px-4 py-8 max-w-3xl'}`} ref={backdropRef}>
      <div className={`bg-white rounded-lg shadow-lg relative ${fullscreen ? 'w-4/5 h-4/5 max-h-screen overflow-y-auto' : ''}`}>
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-8">
          <p>{message}</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">Close</button>
        </div>
      </div>
    </div>
  );
};

export default PopupMessage;

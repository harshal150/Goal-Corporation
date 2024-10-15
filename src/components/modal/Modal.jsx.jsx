import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Overlay background */}
        <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
        
        {/* Modal content with custom width */}
        <div className="bg-white p-8 rounded-lg shadow-lg relative z-10 w-full max-w-3xl transform transition-transform duration-300 ease-in-out animate-fade-in">
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
            ✖
          </button>
          {children}
        </div>
      </div>
    );
  };
  
export default Modal;


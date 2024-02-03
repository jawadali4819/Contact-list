import React from 'react';
import {createPortal} from 'react-dom';

import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="relative z-40 min-h-[200px] max-w-[80%] bg-white p-2 m-auto rounded-lg translate-y-[-100px]">
            <div className="flex justify-end">
              <IoIosCloseCircleOutline onClick={onClose} className="cursor-pointer text-black text-2xl font-bold" />
            </div>
            {children}
          </div>

          <div onClick={onClose} className="backdrop-blur-sm absolute top-0 left-0 h-screen w-screen z-30" />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;

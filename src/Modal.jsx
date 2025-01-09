// isOpen- to make modal visible 
// onClose - to close the modal function

import { createPortal } from "react-dom";

// children - UI /Component 
export const Modal = ({ isOpen, onClose, children }) => {
        //  !true->false
    if (!isOpen) return null;


    // createPortal(UIElement,element-location)

    return createPortal(
        <>
            <div className="w-1/4  rounded-xl shadow-lg shadow-orange-400 h-1/4 bg-green-500 absolute top-0 left-10">
                <button onClick={onClose}>X</button>
                {children}
            </div>
        </>,
        document.getElementById('portal-root'))
}
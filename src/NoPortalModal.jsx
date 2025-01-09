import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";

export default function NoPortalModal() {
    // const [visibility, setVisibility] = useState("hidden");
    // const handleClick = () => {
    //     if (visibility === "hidden") {
    //         //if the visibility state is 'hidden'
    //         setVisibility("visible"); //then set it to 'visible'
    //     } else {
    //         setVisibility("hidden"); //otherwise, make it 'hidden'
    //     }
    // };

    const [isOpen, setIsOpen] = useState(false)
    const close = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="App">

            <div className="h-1/5 w-1/4 flex flex-col bg-gray-500 border-r-emerald-950 border-5 rounded-xl overflow-hidden">


                <button onClick={() => setIsOpen(true)}>Show/Hide</button>
                {/*The visibility of the modal*/}
                <Modal isOpen={isOpen} onClose={close}>
                    <>
                    <div className="w-full bg-red-500">
                        <p>This is a modal</p>
                       
                    </div>
                    </>
                </Modal>
            </div>
        </div>
    );
}


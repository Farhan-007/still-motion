// Modal as a separate component
import { useEffect, useRef } from "react";

function Modal({ openModal, closeModal, children }) {
    const ref = useRef();

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        <dialog
            ref={ref}
            onCancel={closeModal}
            class="rounded-2xl"
        >
            {children}
            <button onClick={closeModal} className=" absolute top-[10px] right-[10px]">
                <span className=" w-2 h-2">
                    <img  className="w-10 h-10" src="./close-circle-svgrepo-com.svg" alt="" />
                </span>
            </button>
        </dialog>
    );
}

export default Modal;
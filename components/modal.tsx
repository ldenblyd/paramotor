import React from "react";
import ReactDOM from "react-dom";

export interface PropsModal {
  isShowing: boolean;
  hide: () => void;
}

// TODO: REFACTOR THIS COMPONENT.
const Modal: React.FC<PropsModal> = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          {/* DESIGN SOURCE https://tailwindui.com/components/application-ui/overlays/modals */}

          <div
            className="fixed z-10 inset-0 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className=" block p-0 min-h-screen text-center">
              <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 "
                aria-hidden="true"
                onClick={hide}
              ></div>

              {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
              <span
                className="inline-block align-middle h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform">
                {children}
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;

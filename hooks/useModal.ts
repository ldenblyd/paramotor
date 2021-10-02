import { useState } from "react";
import Modal, { PropsModal } from "components/modal";

type Params = {
  isShowing: boolean;
  toggle: () => void;
  Modal: React.FC<PropsModal>;
};

const useModal = (): Params => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
    Modal,
  };
};

export default useModal;

import React, { FC } from "react";
import "./Modal.scss";

import Icon from "../Icon/Icon";
import { useAppDispatch } from "../../../app/hooks/redux";
import { modalIdChanged } from "../../../features/global/global-slice";

interface ModalProps {
  modifier?: string;
}

const Modal: FC<ModalProps> = ({ children, modifier }) => {
  const dispatch = useAppDispatch();
  const className = modifier ? `modal modal--${modifier}` : "modal";

  const handleClose = () => {
    dispatch(modalIdChanged(""));
  };

  return (
    <div className={className}>
      <button type="button" className="modal__close" onClick={handleClose}>
        <Icon id="plus" width={20} />
      </button>
      {children}
    </div>
  );
};

export default Modal;

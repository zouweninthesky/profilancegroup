import React from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks/redux";
import { modalIdChanged } from "../../../features/global/global-slice";

const Overlay = () => {
  const { modalId } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(modalIdChanged(""));
  };

  return modalId ? (
    <div className="overlay" onClick={handleClick}></div>
  ) : (
    <></>
  );
};

export default Overlay;

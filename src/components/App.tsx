import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AppHeader from "./common/AppHeader/AppHeader";
import Main from "./main/Main";
import News from "./news/News";
import LoginModal from "./common/LoginModal/LoginModal";
import LogoutModal from "./common/LogoutModal/LogoutModal";
import Sprite from "../utils/Sprite";
import Overlay from "./common/Modal/Overlay";
import { useAppSelector } from "../app/hooks/redux";
import { MODAL_LOGIN, MODAL_LOGOUT } from "../utils/modal-ids";

const App = () => {
  const { modalId } = useAppSelector((state) => state.global);

  return (
    <>
      <Sprite />
      <AppHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {modalId === MODAL_LOGIN && <LoginModal />}
      {modalId === MODAL_LOGOUT && <LogoutModal />}
      <Overlay />
    </>
  );
};

export default App;

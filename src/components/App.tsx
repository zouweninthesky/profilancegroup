import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AppHeader from "./common/AppHeader/AppHeader";
import Main from "./main/Main";
import LoginModal from "./common/LoginModal/LoginModal";
import Sprite from "../utils/Sprite";
import { useAppSelector } from "../app/hooks/redux";
import Overlay from "./common/modals/Overlay";

const App = () => {
  const { modalId } = useAppSelector((state) => state.global);

  return (
    <>
      <Sprite />
      <AppHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<p>новости</p>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {modalId && <LoginModal />}
      <Overlay />
    </>
  );
};

export default App;

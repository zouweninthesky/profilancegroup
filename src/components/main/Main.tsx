import React from "react";
import "./Main.scss";

import { useAppSelector } from "../../app/hooks/redux";

const Main = () => {
  const { userName } = useAppSelector((state) => state.auth);

  return (
    <main className="container main">
      <h1>Привет, {userName ? userName : "Гость"}</h1>
    </main>
  );
};

export default Main;

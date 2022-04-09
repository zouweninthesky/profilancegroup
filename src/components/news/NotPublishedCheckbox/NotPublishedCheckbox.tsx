import React, { useState } from "react";

import { useAppDispatch } from "../../../app/hooks/redux";
import { notPublishedToggled } from "../../../features/news/news-slice";

const NotPublishedCheckbox = () => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent) => {
    setChecked((prev) => !prev);
    dispatch(notPublishedToggled());
  };

  return <input checked={checked} type="checkbox" onChange={handleChange} />;
};

export default NotPublishedCheckbox;

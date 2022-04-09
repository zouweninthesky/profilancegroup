import React, { FC, useState } from "react";
import "./NotPublishedCheckbox.scss";

import { useAppDispatch } from "../../../app/hooks/redux";
import { notPublishedToggled } from "../../../features/news/news-slice";
import Icon from "../../common/Icon/Icon";

interface CheckboxProps {
  modifier?: string;
}

const NotPublishedCheckbox: FC<CheckboxProps> = ({ modifier }) => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent) => {
    setChecked((prev) => !prev);
    dispatch(notPublishedToggled());
  };

  return (
    <div
      className={
        modifier ? `not-published not-published--${modifier}` : "not-published"
      }
    >
      <input
        id="not-published"
        checked={checked}
        type="checkbox"
        onChange={handleChange}
      />
      <label htmlFor="not-published">
        Только ожидающие публикации
        <Icon id="accept" width={28} />
      </label>
    </div>
  );
};

export default NotPublishedCheckbox;

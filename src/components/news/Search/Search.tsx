import React, { useState, useEffect } from "react";
import "./Search.scss";

import { useAppDispatch, useAppSelector } from "../../../app/hooks/redux";
import { searchChanged } from "../../../features/news/news-slice";

const Search = () => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.news);
  const [searchState, setSearch] = useState("");

  useEffect(() => {
    setSearch(search);
  }, [search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchChanged(e.target.value));
  };

  return (
    <div className="search">
      <input
        placeholder="Начните поиск"
        value={searchState}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;

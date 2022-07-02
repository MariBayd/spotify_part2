import React from "react";
import SpotifySelect from "./UI/Select/SpotifySelect.jsx";

const SortSelect = ({ sort, setSort, options }) => {
  return (
    <SpotifySelect
      value={sort}
      onChange={(selectedSort) => setSort(selectedSort)}
      defaultValue="Сортировка по"
      options={options}
    />
  );
};

export default SortSelect;

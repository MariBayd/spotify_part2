import React from "react";
import SpotifySelect from "./UI/Select/SpotifySelect.jsx";

const SortSelect = ({ sort, setSort }) => {
  return (
    <SpotifySelect
      value={sort}
      onChange={(selectedSort) => setSort(selectedSort)}
      defaultValue="Сортировка по"
      options={[
        { value: "popularity", name: "По популярности" },
        { value: "name", name: "По алфавиту" },
      ]}
    />
  );
};

export default SortSelect;

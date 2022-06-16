import React from "react";
import MySelect from "./UI/Select/MySelect.jsx"


const PostFilter = ({sort, setFilter}) => {
  
    return (    
        <MySelect
          value={sort}
          onChange={selectedSort => setFilter(selectedSort)}
          defaultValue="Сортировка по"
          options={[
            {value:'popularity', name:'По популярности'},
            {value:'title', name:'По алфавиту'}]}
        />

    );
}

export default PostFilter;
import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const NoteFilter = ({filter, setFilter}) => {
    return (
        <div>
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder='Поиск по названию'
        />
        <MySelect
          value = {filter.sort}
        //   при изменении компонента onChange, результаты быбора попадет в selectedSort
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue='Сортировка по'
          options={[
            {value: 'title', name:'По названию'},
            {value: 'body', name:'По содержимому'}
          ]}
        />
      </div>
    )
}

export default NoteFilter;
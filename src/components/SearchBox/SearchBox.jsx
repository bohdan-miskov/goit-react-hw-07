import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const id = useId();
  const searchValue = useSelector((state) => state.filters.name);
  const changeQuery = (newQuery) => dispatch(changeFilter(newQuery));

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={`${id}-searchName`}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        onChange={(event) => changeQuery(event.target.value)}
        name="searchName"
        id={`${id}-searchName`}
        value={searchValue}
      />
    </div>
  );
}

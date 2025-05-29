import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBox() {
  const dispatch = useDispatch();
  const id = useId();
  const searchValue = useSelector((state) => state.filters.name);

  const debounced = useDebouncedCallback(
    (value) => dispatch(handleChangeQuery(value)),
    500
  );

  const handleChangeQuery = (newQuery) => dispatch(changeFilter(newQuery));

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={`${id}-searchName`}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        onChange={(event) => debounced(event.target.value)}
        name="searchName"
        id={`${id}-searchName`}
        defaultValue={searchValue}
      />
    </div>
  );
}

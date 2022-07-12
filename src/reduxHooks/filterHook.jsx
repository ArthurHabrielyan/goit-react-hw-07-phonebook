import { useDispatch, useSelector } from "react-redux";
import { onFilterChange } from "redux/contact-reducer/filterSlice";
import { filterAction } from "../redux/contact-reducer/filterSlice";

export const useFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(onFilterChange);
  const onUseFilter = (value) => dispatch(filterAction.changeFilter(value));

  return {
    filter,
    onChangeFilter: onUseFilter,
  };
};

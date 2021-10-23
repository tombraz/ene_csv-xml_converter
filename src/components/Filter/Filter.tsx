import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleExported,
  toggleNotExported,
} from "../../redux/slicers/filterSlice";
import { RootState } from "../../redux/store";

import "./Filter.scss";

const Filter = () => {
  const dispatch = useDispatch();

  const isExportedChecked: boolean = useSelector(
    (state: RootState) => state.filter.exportedChecked
  );
  const isNotExportedChecked: boolean = useSelector(
    (state: RootState) => state.filter.notExportedChecked
  );

  const renderCheckboxes = (
    label: string,
    checked: boolean,
    handleCheck: () => void
  ) => {
    return (
      <label className="filter__label">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className="checkbox"
        />
        {label}
      </label>
    );
  };

  const handleToggleNotExported = () => {
    dispatch(toggleNotExported());
  };

  const handleToggleExported = () => {
    dispatch(toggleExported());
  };

  return (
    <div className="filter">
      <p className="filter__title">Filtruj dane:</p>
      {renderCheckboxes(
        "Nie wyeksportowane",
        isNotExportedChecked,
        handleToggleNotExported
      )}
      {renderCheckboxes(
        "Wyeksportowane",
        isExportedChecked,
        handleToggleExported
      )}
    </div>
  );
};

export default Filter;

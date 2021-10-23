import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import "./LeftCounter.scss";

const LeftCounter = () => {
  const pointsCounter = useSelector(
    (state: RootState) => state.records.data
  )?.filter((point) => point.exported !== true).length;

  return (
    <div className="left-counter">
      <p className="left-counter__text">Pozostało do eksportu: </p>
      <p className="left-counter__count">{pointsCounter}</p>
    </div>
  );
};

export default LeftCounter;

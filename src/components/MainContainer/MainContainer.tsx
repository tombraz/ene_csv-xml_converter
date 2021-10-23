import React from "react";
import PointsTable from "../PointsTable";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Filter from "../Filter";

const MainContainer = () => {
  const data = useSelector((state: RootState) => state.records.data);

  const renderTable = data?.length ? <PointsTable data={data} /> : null;

  return (
    <div>
      <Filter />
      {renderTable}
    </div>
  );
};

export default MainContainer;

import React, { FC } from "react";
import ConsumptionPoint from "../ConsumptionPoint";
import { PointsTableProps } from "./models";
import { headers } from "./headers";

import "./PointsTable.scss";

const PointsTable: FC<PointsTableProps> = ({ data }) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          {headers.map((header) => (
            <th className="table__header" key={header}>
              {header}
            </th>
          ))}
        </tr>
        {data.map((record: CommonTypes.InputType, idx: number) => {
          return (
            <ConsumptionPoint key={`${record.PodCode}_${idx}`} {...record} />
          );
        })}
      </tbody>
    </table>
  );
};

export default PointsTable;

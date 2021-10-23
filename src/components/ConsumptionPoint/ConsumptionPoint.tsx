import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExported } from "../../redux/slicers/dataSlice";
import { RootState } from "../../redux/store";
import Button from "../common/Button";
import { VARIANT } from "../common/Button/models.d";
import { prepareXml } from "../../xml/template";
import fileDownload from "js-file-download";

const ConsumptionPoint: FC<CommonTypes.InputType> = (props) => {
  const dispatch = useDispatch();

  const isExported = props.exported;

  const isExportedChecked: boolean = useSelector(
    (state: RootState) => state.filter.exportedChecked
  );

  const isNotExportedChecked: boolean = useSelector(
    (state: RootState) => state.filter.notExportedChecked
  );

  const dateMilliseconds = Date.parse(props.UsrEndDate);
  const date = new Date(dateMilliseconds);

  const handleExport = (id: string) => {
    dispatch(setExported(id));
    const xml = prepareXml(props);
    fileDownload(xml, `${props.PPE_City}_${props.PodCode}.xml`);
  };

  const renderDataRow = () => (
    <tr className="table__row">
      <td className="row-item">{props.PPE_City}</td>
      <td className="row-item">{props.PPE_Street}</td>
      <td className="row-item">{props.PPE_House}</td>
      <td className="row-item">{props.PPE_Flat}</td>
      <td className="row-item">{props.PodCode}</td>
      <td className="row-item">{date.toLocaleDateString()}</td>
      <td className="row-item">
        <Button
          variant={isExported ? VARIANT.EXPORTED : VARIANT.EXPORT}
          isActive={true}
          onClick={() => handleExport(props.PodCode)}
        >
          {isExported ? "Wyeksportowano" : "Wyeksportuj"}
        </Button>
      </td>
    </tr>
  );

  return (
    <>
      {(isExported && isExportedChecked) ||
      (!isExported && isNotExportedChecked)
        ? renderDataRow()
        : null}
    </>
  );
};

export default ConsumptionPoint;

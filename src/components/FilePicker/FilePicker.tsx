import React, { FC, useEffect } from "react";
import { useFilePicker } from "use-file-picker";
import { FileContent } from "use-file-picker/dist/interfaces";
import { FilePickerType } from "./models";

import renameHeaders from "../../utils/renameHeaders";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/slicers/dataSlice";
import { setHeaders } from "../../redux/slicers/headersSlice";
import { RootState } from "../../redux/store";
import classNames from "classnames";
import CountUp from "react-countup";
import Button from "../common/Button";
import { VARIANT } from "../common/Button/models.d";
import ConfirmModal from "../ConfirmModal";

import "./FilePicker.scss";
import {
  cleanActivate,
  cleanDeactivate,
  pickActivate,
  pickDeactivate,
  populateActivate,
  populateDeactivate,
} from "../../redux/slicers/buttonsSlice";
import { openModal } from "../../redux/slicers/confirmModalSlice";
import { setIsFileRead } from "../../redux/slicers/fileSlice";

const FilePicker: FC<FilePickerType> = () => {
  const dispatch = useDispatch();

  const isConfirmModalOpened = useSelector(
    (state: RootState) => state.confirmModal.isModalOpened
  );

  const isFileRead = useSelector((state: RootState) => state.file.isFileRead);

  const [openFileSelector, { filesContent, clear }] = useFilePicker({
    multiple: false,
    accept: ".csv",
  });

  useEffect(() => {
    const localData = localStorage.getItem("pointsData");

    if (localData) {
      dispatch(pickDeactivate());
      dispatch(cleanActivate());
      dispatch(populateDeactivate());
      dispatch(setData(JSON.parse(localData)));
    }
  }, []);

  const createArray = (content: FileContent[]) => {
    const [first, ...rest] = content[0].content?.split("\r");

    const headers = renameHeaders(first.split(";"));

    const data = rest
      .map((field: string) => {
        const newField = field.split(";");
        return newField;
      })
      .filter((field) => field.length > 1);

    const objData = data.map((item) => {
      const parsedObj = Object.fromEntries(
        headers.map((_, i) => [headers[i], item[i]])
      );
      const newobj = Object.assign(parsedObj, { exported: false });
      return newobj;
    });

    return [headers, objData];
  };

  if (!!filesContent.length && !isFileRead) {
    dispatch(setIsFileRead(true));

    dispatch(pickActivate());
    dispatch(cleanDeactivate());
    dispatch(populateActivate());
  }

  const renderConfirmModal = isConfirmModalOpened ? (
    <ConfirmModal clearData={() => clear()} />
  ) : null;

  const populateData = () => {
    const dataArray = createArray(filesContent)[1];
    const headers = createArray(filesContent)[0];
    localStorage.setItem("pointsData", JSON.stringify(dataArray));
    dispatch(setData(dataArray));
    dispatch(setHeaders(headers));

    dispatch(pickDeactivate());
    dispatch(cleanActivate());
    dispatch(populateDeactivate());
  };

  const cleanData = () => {
    dispatch(openModal());
  };

  const readDataCount =
    filesContent.length && createArray(filesContent)[1].length;

  const counterClasses = classNames("count", {
    count__amount: readDataCount,
  });

  return (
    <div className="file-picker">
      {renderConfirmModal}
      <Button
        variant={VARIANT.PICK}
        isActive={useSelector((state: RootState) => state.buttons.isPickActive)}
        onClick={() => openFileSelector()}
      >
        Wybierz plik
      </Button>
      <p className="file-picker__counter">
        Ilość punktów:
        <CountUp
          className={counterClasses}
          end={readDataCount}
          duration={1.5}
        />
      </p>
      <div className="buttons-wrapper">
        <Button
          variant={VARIANT.POPULATE}
          onClick={populateData}
          isActive={useSelector(
            (state: RootState) => state.buttons.isPopulateActive
          )}
        >
          Publikuj dane
        </Button>
        <Button
          variant={VARIANT.CLEAN}
          onClick={cleanData}
          isActive={useSelector(
            (state: RootState) => state.buttons.isCleanActive
          )}
        >
          Wyczyść dane
        </Button>
      </div>
    </div>
  );
};

export default FilePicker;

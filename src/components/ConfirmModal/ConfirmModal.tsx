import React, { FC } from "react";
import Button from "../common/Button";
import { VARIANT } from "../common/Button/models.d";
import { useDispatch } from "react-redux";

import "./ConfirmModal.scss";
import { closeModal } from "../../redux/slicers/confirmModalSlice";
import {
  pickActivate,
  cleanDeactivate,
  populateDeactivate,
} from "../../redux/slicers/buttonsSlice";
import { setIsFileRead } from "../../redux/slicers/fileSlice";
import { setData } from "../../redux/slicers/dataSlice";
import { ConfirmModalTypes } from "./models";

const ConfirmModal: FC<ConfirmModalTypes> = ({ clearData }) => {
  const dispatch = useDispatch();

  const confirmClean = () => {
    dispatch(setIsFileRead(false));
    dispatch(closeModal());
    dispatch(pickActivate());
    dispatch(cleanDeactivate());
    dispatch(populateDeactivate());
    dispatch(setData([]));
    localStorage.removeItem("pointsData");
    clearData();
  };

  const cancelCleaning = () => {
    dispatch(closeModal());
  };

  return (
    <div className="confirm-modal">
      <div className="confirm-modal__background" />
      <div className="confirm-modal__content">
        <h2 className="content-header">
          Czy na pewno chcesz usunąć aktywne dane?
        </h2>
        <p className="content-text">
          Poniższe dane, wraz z informacją o dokonanych eksportach zostaną
          usunięte{" "}
        </p>
        <div className="buttons-wrapper">
          <Button
            variant={VARIANT.CLEAN}
            onClick={confirmClean}
            isActive={true}
          >
            Potwierdź
          </Button>
          <Button
            variant={VARIANT.POPULATE}
            onClick={cancelCleaning}
            isActive={true}
          >
            Anuluj
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

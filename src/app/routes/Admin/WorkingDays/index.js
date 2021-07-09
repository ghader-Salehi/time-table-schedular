import React, { useState, useEffect } from "react";
import {
  makeStyles,
  FormControl,
  OutlinedInput,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import DaysCheckBox from "./DaysCheckBox";
import BellsCheckBox from "./BellsCheckBox"; ;


const useStyle = makeStyles((theme) => ({
  font: {
    fontFamily: "iranYekan",
    "& sapn": {
      fontFamily: "iranYekan !important",
    },
  },
  fullwidth: {
    width: "100%",
  },
  Input: {
    "& input": {
      padding: "12px",
      textAlign: "left ",
      fontSize: "12px",
    },
  },
  AdminButtonStyle: {
    backgroundColor: "#7A8FF6",
    color: "white",
    "&:hover": {
      backgroundColor: "#4015F1",
    },
    fontSize: "15px",
    padding: "8px 10px",
  },
}));

const Index = () => {
  const classes = useStyle();

  const handleChange = (event) => {
    // setState(event.target.checked);
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-flex m-5">روز های کاری دانشگاه را انتخاب کنید</div>
      <div className="d-flex mr-4">
        <DaysCheckBox />
      </div>
      <div className="d-flex m-5">زنگ های فعال را انتخاب کنید</div>
      <div className="d-flex mr-4">
        <BellsCheckBox />
      </div>
    </div>
  );
};

export default Index;

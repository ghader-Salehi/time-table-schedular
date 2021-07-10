import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles(() => ({
    font: {
      fontFamily: "iranYekan",
    },
    container: {
      "& div": {
        color: "#8B8989",
      },
    },
  }));

function TimeTable() {
    const classes = useStyle();
    return (
        <>
            <div
        className={clsx([
          " d-flex mt-4  p-1 pr-2 pl-2 mr-3 ml-5 ",
          classes.container,
        ])}
      >
        <div className="col-3 d-flex justify-content-center">درس</div>
        <div className="col-3 d-flex justify-content-center">زمان برگزاری</div>

        <div className="col-3 d-flex justify-content-center">نامعلوم</div>

        <div className="col-3 d-flex justify-content-center">-</div>
      </div>
        </>
    )
}

export default TimeTable

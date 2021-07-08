import React from "react";
import { makeStyles } from "@material-ui/core";
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

function Announcement({data}) {
  const classes = useStyle();
  return (
    <>
      <div
        className={clsx([
          " d-flex mt-4  p-1 pr-2 pl-2 mr-5 ml-5 ",
          classes.container,
        ])}
      >
        <div className="col-3 d-flex justify-content-center">درس</div>
        <div className="col-3 d-flex justify-content-center">زمان برگزاری</div>
       
          <div className="col-3 d-flex justify-content-center">استاد</div>
        

        <div className="col-3 d-flex justify-content-center">محل برگزاری</div>
      </div>
    </>
  );
}

export default Announcement;

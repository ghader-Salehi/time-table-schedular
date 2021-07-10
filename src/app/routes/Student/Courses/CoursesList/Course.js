import React from "react";
import { makeStyles, Modal, Fade, Backdrop, Button } from "@material-ui/core";
import clsx from "clsx";

import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
import { chooseCourseByMaster } from "../../../../../api/Admin/Courses";

const useStyle = makeStyles((theme) => ({
  font: {
    fontFamily: "iranYekan",
    color: "#8B8989",
    borderRadius: "10px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "white",
    borderRadius: "5px",
    width: "800px",
    height: "350px",
  },
  DeleteButtonStyle: {
    backgroundColor: "#F95269",
    color: "white",
    "&:hover": {
      backgroundColor: "#F51F3C",
    },
    borderRadius: "20px",
  },
}));

function Course({ data }) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [courseTimeTables, setCourseTimeTables] = React.useState([]);

  const handleChoose = ()=>{
    Swal.fire({
        title: `دوره  ${data.title}  انتخاب شد`,
        text: 'دوره مورد نظر به لیست دوره های انتخابی اضافه شد',
        icon: 'success',
        showConfirmButton: false,
        timer: 2500
      })
     
  }


  return (
    <>
      <div
        style={{ borderRadius: "10px" }}
        className={clsx([
          " d-flex justify-content-around p-4 mr-3 ml-3 mb-3 shadow",
        ])}
      >
        <div className="d-flex col-3">
          <div>درس :</div>
          <div>{/* {data.title} */}</div>
        </div>
        <div className="d-flex col-2">
          <div>استاد :</div>
          <div>{/* {data.unitsCount} */}</div>
        </div>
        <div className="d-flex col-5">
          <div>زمان :</div>
          <div>{/* {data.title} */}</div>
        </div>
        <div className="col-2">
          <Button
            className={clsx([" bg-light shadow", classes.font])}
            onClick={handleChoose}
          >
            انتخاب درس
          </Button>
        </div>
      </div>
    </>
  );
}

export default Course;

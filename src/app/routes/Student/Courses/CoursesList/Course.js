import React from "react";
import { makeStyles, Modal, Fade, Backdrop, Button } from "@material-ui/core";
import clsx from "clsx";

import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
import { chooseTimeTableByMaster } from "../../../../../api/Admin/Courses";

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
    chooseTimeTableByMaster(data._id)
        .then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err)
        })
    Swal.fire({
        title: `دوره  ${data.course.title}  انتخاب شد`,
        text: 'دوره مورد نظر به لیست دوره های انتخابی اضافه شد',
        icon: 'success',
        showConfirmButton: false,
        timer: 2500
      })
     
  }


  return (
    <>
      <div
        style={{ borderRadius: "10px",fontSize:'13px' }}
        className={clsx([
          " d-flex justify-content-around p-4  mb-3 shadow",
        ])}
      >
        <div className="d-flex col-3">
          <div className='m-1'  >درس :</div>
          <div className='m-1' >{data.course.title}</div>
        </div>
        <div  className="d-flex col-2">
          <div className='m-1' >واحد :</div>
          <div className='m-1' >{data.course.unitsCount}</div>
        </div>
        <div className="d-flex col-5">
          
          <div style={{fontSize:'12px'}} className=' d-flex ' >
          {
          data.timeTableBells.map((item,index)=>{
              return(
                <div>

                    <span className=''>
                      {`* ${item.day.label}(${item.bell.label}) *  `}
                    </span>
                </div>
               
              )
            })}
            
            
          </div>
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

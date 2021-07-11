import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
// import ChoosedCourse from './ChoosedCourse'
import { useSelector } from 'react-redux';
// import {getCourseById} from '../../../../../api/Admin/Courses'


const useStyle = makeStyles(() => ({
    font: {
      fontFamily: "iranYekan",
      color: "#8B8989",
    },
    container: {
      borderRadius: "5px",
      backgroundColor: "#F1EFF5",
      "& div": {
        color: "#8B8989",
      },
      boxShadow: "0px 0px 0px 0px ",
      borderRadius: "10px",
    },
  }));

function Index() {
    const classes = useStyle();
    return (
       <>
         {/* <div
                className={clsx([" d-flex mt-4  p-3 mr-3 ml-5 ", classes.container])}
            >
                <div className="col-4 d-flex justify-content-center">درس مربوطه</div>
                <div className="col-3 d-flex justify-content-center">  تعداد واحد </div>

              

                <div className="col-3 d-flex justify-content-center">
                تعداد دانشجویان
                </div>
            </div> */}
       </> 
    )
}

export default Index

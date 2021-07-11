import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import {getTimeTableById} from '../../../../../api/Admin/TImeTable'

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

function Announcement({data,title}) {
    const classes = useStyle();
    const [courseName,setCourseName] = useState('')

    useEffect(()=>{
      console.log(data);
      getTimeTableById(data.timeTable)
      .then(res=>{
         console.log(res);
         setCourseName(res.data.data.timetables.course.title)
      })

    },[])

    // timetables
    return (
        <>
            <div
                    className={clsx([
                    " d-flex mt-4  p-1 pr-2 pl-2 mr-5 ml-5 ",
                    classes.container,
                    ])}
                >
                    <div className="col-6 d-flex justify-content-center">{data.message}</div>
                   
                
                    <div className="col-2 d-flex justify-content-center">{courseName}</div>
                    

                   
                </div>
        </>
    )
}

export default Announcement

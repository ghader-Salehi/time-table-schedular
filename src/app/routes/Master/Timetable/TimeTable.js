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

function TimeTable({data}) {
    const classes = useStyle();

    React.useEffect(()=>{
        console.log(data)
    },[])
    return (
        <>
            <div
        className={clsx([
          " d-flex mt-4  p-1 pr-2 pl-2 mr-3 ml-5 ",
          classes.container,
        ])}
      >
        {/* unitsCount */}
        <div className="col-3 d-flex justify-content-center">{data.course.title}</div>
        <div className="col-6 d-flex justify-content-center">
          
        {data.timeTableBells.map((item,index)=>{
              return(
                <div>

                    <span>
                      {` ${item.day ? item.day.label : ''}(${item.bell ? item.bell.label : ''}) / `}
                    </span>
                </div>
               
              )
            })}
          
          
          </div>

        <div className="col-2 d-flex justify-content-center">{data.course.unitsCount}</div>

        
      </div>
        </>
    )
}

export default TimeTable

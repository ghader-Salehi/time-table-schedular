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
const Class = ({ data ,role}) => {
  const classes = useStyle();

  React.useEffect(()=>{
      // console.log(data,'from here')
  },[])
  return (
    <>
      <div
        className={clsx([
          " d-flex mt-4  p-1 pr-2 pl-2 mr-5 ml-5 ",
          classes.container,
        ])}
      >
        <div className="col-3 d-flex justify-content-center">{data.course.title}</div>
        <div className="col-6 d-flex justify-content-center">
        {
          data.timeTableBells.map((item,index)=>{
              return(
                <div>

                    <span className=''>
                      {`* ${item.day ? item.day.label : ''}(${item.bell ? item.bell.label : ''}) *  `}
                    </span>
                </div>
               
              )
            })}
          
        </div>
        {role !== "master" && (
          <div className="col-3 d-flex justify-content-center">{data.master.lastname}</div>
        )}

       
      </div>
    </>
  );
};

export default Class;

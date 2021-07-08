import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import User from "./User";

const useStyle = makeStyles((theme) => ({
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
    width: "100%",
  },
 
}));

function Index({ index, content , modal}) {
  const classes = useStyle();
  
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className={clsx([
            " d-flex mt-4  p-3 mr-5 ml-5 shadow",
            classes.container,
          ])}
        >
          <div className="col-4 d-flex justify-content-center">نام</div>
          <div className="col-4 d-flex justify-content-center">
            نام خانوادگی
          </div>

          <div className="col-3 d-flex justify-content-center">
            {!index ? <>شماره پرسنلی</> : <>شماره دانشجویی</>}
          </div>
        </div>
      </div>
      <div className="mb-5">
        {content.map((item, index) => {
          return <User  data={item}  key={index} />;
        })}
      </div>
      
    </>
  );
}

export default Index;

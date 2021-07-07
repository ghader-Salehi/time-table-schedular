import React from "react";
import { makeStyles, Typography,Button } from "@material-ui/core";

import clsx from "clsx";
const useStyle = makeStyles(() => ({
  container: {
    borderRadius: "5px",
    width:'220px'
  },
  font: {
    fontFamily: "iranYekan",
    color:'#8B8989'
  },
  AddminButtonStyle:{
    
    backgroundColor:'#7A8FF6',
    color:'white',
    '&:hover':{
        backgroundColor: "#4015F1",
    }
    ,fontSize:'12px',
    padding:'4px'
    
}
}));

const RecentAnnouncement = ({data}) => {
  const classes = useStyle();
  return (
    <>
      <div
        className={clsx([
          " shadow m-4 mr-5 d-flex flex-column p-3  pt-4 pb-4",
          classes.container,
        ])}
      >
        <div className="d-flex flex-column align-items-center">
          <div>
            <Typography style={{fontSize:'16px',fontWeight:'bold'}}  className={clsx([classes.font,'mb-1'])} variant="h6">
              عنوان :
            </Typography>
          </div>
          <div>
            <Typography style={{fontSize:'14px'}} className={clsx([classes.font])} variant="subtitle2">
              تعطیلی
            </Typography>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center m-3">
          <div>
            <Typography style={{fontSize:'16px',fontWeight:'bold'}}   className={clsx([classes.font,'mb-1'])} variant="h6">
              متن :
            </Typography>
          </div>
          <div>
            <Typography style={{fontSize:'14px'}} className={clsx([classes.font,'text-center'])} variant="subtitle2">
            با سلام .کلاس روز سه شنبه 

            </Typography>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <Typography style={{fontSize:'12px'}} className={clsx([classes.font])} variant="subtitle2">
            23خرداد
          </Typography>
        </div>
        <div className="d-flex justify-content-center mt-2">

            <Button className={clsx([classes.font,classes.AddminButtonStyle,'shadow'])}>
                مشاهده
            </Button>

        </div>
      </div>
    </>
  );
};

export default RecentAnnouncement;

import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import Announcement from "./Announcement";
import Pagination from "@material-ui/lab/Pagination";
import {getAnnouncementsList} from '../../../../../api/Admin/Announcements'
import {getTimeTableById} from '../../../../../api/Admin/TImeTable'
import { useSelector } from "react-redux";




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
  const [Announcements, setAnnouncements] = React.useState([]);
  const [courses, setCourse] = React.useState([]);

  const id = useSelector(({ auth }) => auth.user._id);


  const filterAnnouncements = (array)=>{
    //   timeTable  timetables
    let Temp = []
      return array.map(item=>{
        getTimeTableById(item.timeTable)
            .then(res=>{
                
                if(res.data.data.timetables.master._id === id)  {
                    console.log(res.data.data.timetables.master);
                    setAnnouncements(Announcements=>([...Announcements,item]))
                    setCourse(courses=>([...courses,res.data.data.timetables]))
                }
                       
            })
      })

      
  }

  React.useEffect(()=>{
    getAnnouncementsList()
            .then(res=>{
                console.log(res);
                filterAnnouncements(res.data.data.announcements)
            }).catch(err=>{

            })
  },[])

  React.useEffect(()=>{
    console.log(courses);
  })

  return (
    <>
      <div
        className={clsx([" d-flex mt-4  p-3 mr-5 ml-5 ", classes.container])}
      >
        <div className="col-6 d-flex ">متن</div>

        <div className="col-3 d-flex ">درس مربوطه</div>
      </div>

      {!Announcements.length && (
        <div className="d-flex justify-content-center mt-5">
          <Typography className={clsx([classes.font, "mt-5"])}>
            هیچ اطلاعیه ای برای نمایش وجود ندارد
          </Typography>
        </div>
      )}
      <div className="mb-5">
        {Announcements.map((item, index) => {
          return <Announcement data={item} title={courses}/>;
        })}
      </div>
      <div className="d-flex justify-content-center mb-5 mt-3 pb-5">
        {Announcements.length ? (
          <Pagination count={1} shape="rounded" variant="outlined" />
        ) : null}
      </div>
    </>
  );
}

export default Index;

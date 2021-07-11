import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import {getTimeTableById} from '../../../../../api/Admin/TImeTable'
import {deleteAnnouncement} from '../../../../../api/Admin/Announcements'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

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



function Announcement({data,handleUpdateList}) {
  const classes = useStyle();
  // const [timeTable,setTimetable] = useState({})
  const [course,setCourse] = useState('')
  const [master,setMaster] = useState('')



  React.useEffect(()=>{
    console.log(data.timeTable);
      getTimeTableById(data.timeTable)
        .then(res=>{
            console.log(res);
            setCourse(res.data.data.timetables.course.title)
            console.log(res.data.data.timetables.course.title);
            setMaster(res.data.data.timetables.master.lastname)
        }).catch(err=>{

        })
      
      },[])

      const handleDeleteAnnouncement = ()=>{

            deleteAnnouncement(data._id)
                  .then(res=>{
                      console.log(res);
                      Swal.fire({
                        title: 'اطلاعیه پاک شد',
                        text: 'اطلاعیه مورد نظر با موفقیت پاک شد',
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                      })

                      handleUpdateList()

                  }).catch(err=>{

                  })
      }

  return (
    <>
      <div
        className={clsx([
          " d-flex mt-4  p-1 pr-2 pl-2 mr-5 ml-5 ",
          classes.container,
        ])}
      >
        <div className="col-3 d-flex justify-content-center">{course}</div>
        <div className="col-3 d-flex justify-content-center">{master}</div>
       
          <div className="col-3 d-flex justify-content-center">{data.message}</div>
        

        <div className="col-3 d-flex justify-content-center">
          <IconButton aria-label="delete" onClick={handleDeleteAnnouncement}>
              <DeleteIcon />
          </IconButton>
      
      </div>
      </div>
    </>
  );
}

export default Announcement;

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { getTimeTableById } from "../../../../../api/Admin/TImeTable";
import { deleteAnnouncement } from "../../../../../api/Admin/Announcements";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
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

function Announcement({ data,updateFanction }) {
  const classes = useStyle();
  const [courseName, setCourseName] = useState("");

  useEffect(() => {
    console.log(data);
    getTimeTableById(data.timeTable).then((res) => {
      console.log(res);
      setCourseName(res.data.data.timetables.course.title);
    });
  }, []);

  // timetables

  const handleDeleteAnnouncement=()=>{
      // alert(data._id)

      deleteAnnouncement(data._id)
          .then(res=>{
            Swal.fire({
              title: 'اطلاعیه پاک شد',
              text: 'اطلاعیه مورد نظر با موفقیت پاک شد',
              icon: 'error',
              showConfirmButton: false,
              timer: 1500
            })
            updateFanction();
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
        <div className="col-6 d-flex ">{data.message}</div>

        <div className="col-4 d-flex ">{courseName}</div>

        <div className="d-flex col-2">
          {" "}
          <IconButton aria-label="delete" onClick={handleDeleteAnnouncement}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Announcement;

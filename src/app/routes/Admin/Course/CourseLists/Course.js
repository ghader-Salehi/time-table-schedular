import React, { useState } from "react";
import { makeStyles, Modal, Fade, Backdrop, Button } from "@material-ui/core";
import clsx from "clsx";
import {
  getCourseTimeTable,
  getCourseMasters,
  deleteCourse,
} from "../../../../../api/Admin/Courses";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

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

function Course({ data, updateList }) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [courseTimeTables, setCourseTimeTables] = useState([]);
  const [masters, setMasters] = useState([]);

  const handleOpen = () => {
    setOpen(true);
    // getUserById(data._id)
    //   .then((res) => {
    //     console.log(data._id);
    //     setUserData(res.data.data.users);
    //   })
    //   .catch((err) => {});

    getCourseTimeTable(data._id)
      .then((res) => {
        console.log(res);
        // timeTables
        setCourseTimeTables(res.data.data.timeTables);
      })
      .catch((err) => { });

    getCourseMasters(data._id)
      .then((res) => {
        console.log(res);
        setMasters(res.data.data.masters);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteCourseHandler = () => {
    console.log("test");
    deleteCourse(data._id)
      .then((res) => {
        setOpen(false);
        Swal.fire({
          title: "دوره حذف شد",
          text: "دوره مورد نظر از لیست دوره ها حذف شد",
          icon: "error",
          showConfirmButton: false,
          timer: 2500,
        });
        updateList();

        console.log(res);
      })
      .catch((err) => { });
  };

  return (
    <>
      <div
        style={{ borderRadius: "10px" }}
        className=" d-flex justify-content-around p-4 mr-5 ml-5 mb-3 shadow"
      >
        <div className="d-flex col-4">
          <div>درس :</div>
          <div>{data.title}</div>
        </div>
        <div className="d-flex col-3">
          <div>تعداد واحد :</div>
          <div>{data.unitsCount}</div>
        </div>
        <div className="col-2">
          <Button
            className={clsx([" bg-light shadow", classes.font])}
            onClick={handleOpen}
          >
            مشاهده
          </Button>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={clsx([classes.paper, "d-flex flex-column "])}>
            <div className="d-flex m-3 justify-content-center">
              <div className=" ml-4">{data.title}</div>
              <div className="d-flex">
                <div className="ml-3">تعداد دانشجو :</div>
                <div>نامعلوم</div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="ml-4">اساتید ارائه دهنده :</div>
              <div className="d-flex">
                {!masters.length && (
                  <div className="ml-3">
                    هیچ استادی این درس را ارائه نداده است
                  </div>
                )}

                {masters.map((item, index) => {
                  return (
                    <>
                      <div className="ml-3">{item.lastname}</div>
                      <div className="ml-2">-</div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className=" d-flex m-5 ">جدول زمانی :</div>
            <div className=" d-flex   justify-content-center">
              {!courseTimeTables.length && (
                <> جدول زمانی برای نمایش وجود ندارد</>
              )}
            </div>

            <div className=" d-flex mr-5  flex-column">
              {courseTimeTables.map((item, index) => {
                return (
                  <>
                    <div className="d-flex justify-content-center">
                      {item.timeTableBells.map((item, index) => {
                        return (
                          <>
                            <div className="col-3 d-flex  justify-content-center">
                              {`${item.day.label} ( ${item.bell.label} ) `}
                            </div>
                            <div>/</div>
                          </>
                        );
                      })}
                      <div></div>
                      <div className="col-3 d-flex ">
                        {item.master.lastname}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div classsName="d-flex justify-content-center m-5">
              <Button
                onClick={deleteCourseHandler}
                style={{ width: "80px" }}
                className={clsx([
                  classes.font,
                  classes.DeleteButtonStyle,
                  "shadow m-3 mt-5",
                ])}
              >
                حذف
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default Course;

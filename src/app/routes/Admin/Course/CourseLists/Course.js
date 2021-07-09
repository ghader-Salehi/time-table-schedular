import React, { useState } from "react";
import { makeStyles, Modal, Fade, Backdrop, Button } from "@material-ui/core";
import clsx from "clsx";
import {getCourseTimeTable} from '../../../../../api/Admin/Courses'

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
    height: "400px",
  },
  DeleteButtonStyle: {
    backgroundColor: "#F95269",
    color: "white",
    "&:hover": {
      backgroundColor: "#F51F3C",
    },
    borderRadius:'20px'
  },
}));

function Course({ data }) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [courseTimeTables,setCourseTimeTables] = useState([]);

  const handleOpen = () => {
    setOpen(true);
    // getUserById(data._id)
    //   .then((res) => {
    //     console.log(data._id);
    //     setUserData(res.data.data.users);
    //   })
    //   .catch((err) => {});


    // getCourseTimeTable(data._id)
    //     .then(res=>{
    //             console.log(res);
    //             // timeTables
    //     }).catch(err=>{

    //     })
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteUser=()=>{
      
  }

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
        <div className='col-2'>
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
                
                <div className='d-flex m-3 justify-content-center'>
                    <div className=' ml-4'>
                         {data.title}
                    </div>
                    <div className='d-flex'>
                            <div className='ml-3'>
                                    تعداد دانشجو :
                            </div>
                            <div>
                                    نامعلوم
                            </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='ml-4'>
                            اساتید ارائه دهنده :
                    </div>
                    <div className='d-flex'>
                           <div className='ml-3'>
                                جعفر
                           </div>
                           <div className='ml-3'>
                               -
                           </div>
                           <div className=''>
                               پاشا
                           </div>
                    </div>

                </div>
                <div className=' d-flex m-5 '>
                        جدول زمانی :
                </div>
                <div className=' d-flex   justify-content-center'>
                    {!courseTimeTables.length 
                            &&
                           <> جدول زمانی برای نمایش وجود ندارد</>
                    }
                </div>

                <div className=' d-flex mr-5  flex-column'>
                        {
                            courseTimeTables.map((item,index)=>{
                                return (
                                    <>
                                    <div className='d-flex justify-content-center'>
                                        <div className='col-3 d-flex m-1'>
                                                شنبه  : ساعت 8-10
                                            </div>
                                            <div>
                                                /
                                            </div>
                                            <div className='col-4 d-flex m-1'>
                                            سه شنبه  : ساعت  18-16
                                            </div>
                                            <div>
                                                /
                                            </div>
                                            <div className='col-3 d-flex m-1' >
                                            جعفر تنها
                                            </div>
                                    </div>
                                       
                                    </>
                                )
                            })
                        }
                </div>
                <div classsName='d-flex justify-content-center m-5' >
                    <Button onClick={handleDeleteUser} style={{width:'80px'}}  className={clsx([classes.font, classes.DeleteButtonStyle, "shadow m-3 mt-5"])} >
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
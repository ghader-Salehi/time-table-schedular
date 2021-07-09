import React, { useState ,useContext} from "react";
import { makeStyles, Modal, Fade, Backdrop,Button } from "@material-ui/core";
import clsx from "clsx";
import { getUserById } from "../../../api/Admin/Users";
import { useSelector } from "react-redux";
import {deleteUser} from  '../../../api/Admin/Users'
import {UserContext} from '../../../context/UserContext'
import {useHistory} from 'react-router-dom'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

const useStyle = makeStyles((theme) => ({
  font: {
    fontFamily: "iranYekan",
  },
  container: {
    "&:hover": {
      backgroundColor: "#E0E6FB",
    },
    "& div": {
      color: "#8B8989",
    },
    cursor: "pointer",
    transition: "0.2s",
    borderRadius: "5px",
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
  AdminButtonStyle: {
    backgroundColor: "#7A8FF6",
    color: "white",
    "&:hover": {
      backgroundColor: "#4015F1",
    },
    borderRadius:'20px',
   
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

function User({ data }) {
  const role = useSelector(({ auth }) => auth.user.rule);
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [UserData, setUserData] = useState({});
  const [user,setUser] = useContext(UserContext)
  const history = useHistory()

  const handleOpen = () => {
    setOpen(true);
    getUserById(data._id)
      .then((res) => {
        console.log(data._id);
        setUserData(res.data.data.users);
      })
      .catch((err) => {});
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate= ()=>{
    setUser(data)
    history.push('/dashboard/createUser')
  }

  const handleDeleteUser = ()=>{
    deleteUser(data._id)
      .then((res)=>{
          console.log(res);
          Swal.fire({
            title: 'کاربر حذف شد',
            text: 'کاربر مورد نظر از لیست کاربان حذف شد',
            icon: 'error',
            showConfirmButton: false,
            timer: 2500
          })
          setOpen(false)
      }).catch((err)=>{
        console.log(err);
      })
  }
  return (
    <>
      <div
        className={clsx([
          " d-flex mt-3  pt-3 pb-2 pr-2 pl-2 mr-5 ml-5 ",
          classes.container,
        ])}
        onClick={handleOpen}
      >
        <div className="col-4 d-flex justify-content-center">
          {data.firstname}
        </div>
        <div className="col-4 d-flex justify-content-center">
          {data.lastname}
          {""}
        </div>
        <div className="col-3 d-flex justify-content-center">{data.code}</div>
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
          <div className={clsx([classes.paper, "d-flex flex-column justify-content-around"])}>
            <div className=" d-flex justify-content-center m-4">
              {data.rule === "student" ? "اطلاعات دانشجو" : " اطلاعات استاد"}
            </div>
            <div className=" d-flex align-items-center flex-column ">
              <div className="d-flex m-5 ">
                <div className="ml-5">نام :</div>
                <div className="ml-5">{UserData.firstname}</div>
                <div className="ml-4">نام خانوادگی :</div>
                <div>{UserData.lastname}</div>
              </div>
              <div className="d-flex mr-5">
                <div className="ml-4">{data.rule === "student" ? <>: شماره  دانشجویی</> : <> کد پرسنلی</>}</div>
                <div className="ml-4">{UserData.code}</div>
                <div className="ml-4">کد ملی :</div>
                <div>0</div>
              </div>
              <div classsName='d-flex justify-content-center m-5'>
                  <Button onClick={handleUpdate} style={{width:'80px'}}  className={clsx([classes.font, classes.AdminButtonStyle, "shadow m-3 mt-5"])} >
                         ویرایش  
                  </Button>
                  <Button onClick={handleDeleteUser} style={{width:'80px'}}  className={clsx([classes.font, classes.DeleteButtonStyle, "shadow m-3 mt-5"])} >
                         حذف  
                  </Button>
              </div>
            </div>
            <div>
              
              
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default User;

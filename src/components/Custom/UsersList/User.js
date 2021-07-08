import React, { useState } from "react";
import { makeStyles, Modal, Fade, Backdrop } from "@material-ui/core";
import clsx from "clsx";
import { getUserById } from "../../../api/Admin/Users";
import { useSelector } from "react-redux";

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
}));

function User({ data }) {
  const role = useSelector(({ auth }) => auth.user.rule);
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState({});

  const handleOpen = () => {
    setOpen(true);
    getUserById(data._id)
      .then((res) => {
        console.log(data._id);
        setUser(res.data.data.users);
      })
      .catch((err) => {});
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          <div className={clsx([classes.paper, "d-flex flex-column"])}>
            <div className=" d-flex justify-content-center m-4">
              {data.rule === "student" ? "اطلاعات دانشجو" : " اطلاعات استاد"}
            </div>
            <div className=" d-flex flex-column">
              <div className="d-flex m-5">
                <div className="ml-5">نام :</div>
                <div className="ml-5">{user.firstname}</div>
                <div className="ml-5">نام خانوادگی :</div>
                <div>{user.lastname}</div>
              </div>
              <div className="d-flex mr-5">
                <div className="ml-5">{data.rule === "student" ? <>: شماره  دانشجویی</> : <> کد پرسنلی</>}</div>
                <div className="ml-5">{user.code}</div>
                <div className="ml-5">کد ملی :</div>
                <div>0</div>
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

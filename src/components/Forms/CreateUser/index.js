import React, { useContext, useState } from "react";
import {
  makeStyles,
  FormControl,
  OutlinedInput,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import { UserContext } from "../../../context/UserContext";
import RecentAnnouncement from "../../Custom/RecentAnnouncements/RecentAnnouncement";
import { createUser, updateUser } from "../../../api/Admin/Users";
import { useHistory } from "react-router";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

const useStyle = makeStyles((theme) => ({
  font: {
    fontFamily: "iranYekan",
    "& sapn": {
      fontFamily: "iranYekan !important",
    },
  },
  fullwidth: {
    width: "100%",
  },
  Input: {
    "& input": {
      padding: "12px",
      textAlign: "left ",
      fontSize: "12px",
    },
  },
  AdminButtonStyle: {
    backgroundColor: "#7A8FF6",
    color: "white",
    "&:hover": {
      backgroundColor: "#4015F1",
    },
    fontSize: "15px",
    padding: "8px 10px",
  },
}));



const Index = ({ index }) => {
  const classes = useStyle();
  const [state, setState] = React.useState(false);
  const [user, setUser] = useContext(UserContext);
  const [firstname, setFirstName] = useState(user ? user.firstname : "");
  const [lastname, setLastname] = useState(user ? user.lastname : "");
  const [code, setCode] = useState(user ? user.code : "");
  const [pass, setPass] = useState("0");

  const history = useHistory()
  const handleChange = (event) => {
    setState(event.target.checked);
  };



  const handleConfirm = () => {
    console.log(user.firstname);
    if (!user.firstname) {
      let obj = {
        firstname: firstname,
        lastname: lastname,
        rule: index ? "master" : "student",
        password: pass,
        code: code,
      };

      console.log(user.user);
      createUser(obj)
        .then((res) => {
          console.log(res);
          Swal.fire({
            title: 'کاربر ایجاد شد',
            text: 'کاربر مورد نظر با موفقیت ایجاد شد',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })
          history.push('/dashboard/usersList')
        })
        .catch((err) => {
          console.log(err);
        });

        console.log(user);
    } else {
      console.log("update");
      console.log(user);
          let obj = {
            firstname: firstname,
            lastname: lastname,
            code: code,
          };
          
          console.log(obj);
          updateUser(user._id,obj)
            .then((res)=>{
              console.log(res);
              Swal.fire({
                title: 'کاربر ویرایش شد',
                text: 'کاربر مورد نظر با موفقیت ویرایش شد',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
              })
              history.push('/dashboard/usersList')
            }).catch((err)=>{
              console.log(err);
            })

            setUser({})
    }
  };

  return (
    <>
      <div
        className={clsx([
          "d-flex flex-column ",
          classes.fullwidth,
          classes.font,
        ])}
      >
        <div>
          <FormControlLabel
            classes={{ label: classes.font }}
            control={
              <Checkbox
                checked={state}
                onChange={handleChange}
                color="primary"
              />
            }
            label="اضافه کردن به صورت گروهی"
          />
        </div>

        <div
          className={clsx(["d-flex justify-content-center", classes.fullwidth])}
        >
          <FormControl className="col-3 m-3 ml-5">
            <div
              className={clsx([
                "d-flex flex-column align-items-start",
                //   classes.fullwidth,
              ])}
            >
              <label> نام </label>
              <OutlinedInput
                className={clsx([
                  "",
                  classes.font,
                  classes.Input,
                  classes.fullwidth,
                ])}
                placeholder="نام را وارد کنید"
                value={firstname}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
          </FormControl>

          <FormControl className={clsx(["col-4 m-3 mr-5"])}>
            <div className={clsx(["d-flex flex-column align-items-start"])}>
              <label> نام خانوادگی </label>
              <OutlinedInput
                className={clsx([
                  "",
                  classes.font,
                  classes.Input,
                  classes.fullwidth,
                ])}
                placeholder="نام خانوادگی را وارد کنید"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </div>
          </FormControl>
        </div>

        <div
          className={clsx(["d-flex justify-content-center", classes.fullwidth])}
        >
          <FormControl className="col-3 m-3 ml-5">
            <div
              className={clsx([
                "d-flex flex-column align-items-start",
                //   classes.fullwidth,
              ])}
            >
              {!index ? (
                <label> شماره دانشجویی </label>
              ) : (
                <label> شماره پرسنلی </label>
              )}

              <OutlinedInput
                className={clsx([
                  "",
                  classes.font,
                  classes.Input,
                  classes.fullwidth,
                ])}
                placeholder={
                  !index
                    ? "شماره دانشجویی را وارد کنید"
                    : "شماره پرسنلی را وارد کنید"
                }
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>
          </FormControl>

          <FormControl className={clsx(["col-3 m-3 "])}>
            <div
              className={clsx([
                "d-flex flex-column align-items-start",
                // classes.fullwidth,
              ])}
            >
              <label> کد ملی </label>
              <OutlinedInput
                className={clsx([
                  "",
                  classes.font,
                  classes.Input,
                  classes.fullwidth,
                ])}
                placeholder="کد ملی 10 رقمی را وارد کنید"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
          </FormControl>
        </div>
        <div className="d-flex justify-content-center mt-5">
          {!index ? (
            <sapn>
              * نام کاربری و رمز عبور به صورت پیش فرض برای هر دانشجو شماره ی
              دانشجویی و کدملی در نظر گرفته می شود *
            </sapn>
          ) : (
            <sapn>
              * نام کاربری و رمز عبور به صورت پیش فرض برای هر استاد شماره ی
              پرسنلی و کد ملی در نظر گرفته می شود *
            </sapn>
          )}
        </div>

        <div className="d-flex justify-content-center mt-3">
          <Button
            className={clsx([classes.font, classes.AdminButtonStyle, "shadow"])}
            onClick={handleConfirm}
          >
            تایید
          </Button>
        </div>
      </div>
    </>
  );
};

export default Index;

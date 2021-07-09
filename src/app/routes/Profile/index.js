import React, { useState } from "react";
import {
  makeStyles,
  FormControl,
  OutlinedInput,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import { useSelector ,useDispatch} from 'react-redux';
import {updateloggedUser} from '../../../api/Admin/Users'

const useStyle = makeStyles((theme) => ({
  font: {
    fontFamily: "iranYekan",
    "& sapn": {
      fontFamily: "iranYekan !important",
    },
  },
  fullwidth: {
    width: "200px",
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
  AdminButtonStyle: {
    backgroundColor: "#7A8FF6",
    color: "white",
    "&:hover": {
      backgroundColor: "#4015F1",
    },
    fontSize: "15px",
    padding: "8px 10px",
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

function Index() {
  const classes = useStyle();
  const [title, setTitle] = useState("");

  const [firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [code, setCode] = useState("");
  const [nationalCode, setNationalCode] = useState("0");
  const [editMode,setEditMode] = useState(false)

  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();

  React.useEffect(()=>{

        let obj = JSON.parse(localStorage.getItem('user'))
        console.log(obj);
        setFirstname(user.firstname)
        setlastname(user.lastname)
        setCode(user.code)

  },[])

  const handleEditProfile = ()=>{
    setEditMode(true)
        
  }
  const confirmEdit = ()=>{
    let obj ={
        firstname : firstname,
        lastname :lastname,
        code : code,

    }
    
    updateloggedUser(obj)
          .then(res=>{
                console.log(res);
                dispatch({type:'UPDATE_LOGGED_USER' , payload:res.data.data.user})
                localStorage.setItem('user' , JSON.stringify(res.data.data.user))
                setEditMode(false)
          }).catch(err=>{

          })
  }

  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex">
          <div
            className={clsx([
              "d-flex justify-content-center m-5",
              classes.fullwidth,
            ])}
          >
            <FormControl className={clsx(["col-4 m-3 ", classes.fullwidth])}>
              <div
                className={clsx([
                  "d-flex flex-column align-items-start",
                  classes.fullwidth,
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
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                    handleEditProfile()
                  }}
                />
              </div>
            </FormControl>
          </div>
          <div
            className={clsx([
              "d-flex justify-content-center m-5",
              classes.fullwidth,
            ])}
          >
            <FormControl
              className={clsx(["col-4 m-3 ml-5", classes.fullwidth])}
            >
              <div
                className={clsx([
                  "d-flex flex-column align-items-start",
                  classes.fullwidth,
                ])}
              >
                <label> نام خانوادگی </label>
                <OutlinedInput
                  className={clsx([
                    "",
                    classes.font,
                    classes.Input,
                    classes.fullwidth,
                  ])}
                  value={lastname}
                  onChange={(e) => {
                    setlastname(e.target.value);
                    handleEditProfile()
                  }}
                />
              </div>
            </FormControl>
          </div>
          <div
            className={clsx([
              "d-flex justify-content-center m-5",
              classes.fullwidth,
            ])}
          >
            <FormControl
              className={clsx(["col-4 m-3 ml-5", classes.fullwidth])}
            >
              <div
                className={clsx([
                  "d-flex flex-column align-items-start",
                  classes.fullwidth,
                ])}
              >
                  {user.rule === 'student' ?  <label> شماره دانشجویی </label> :  <label> کد پرسنلی </label>}
                
                <OutlinedInput
                  className={clsx([
                    "",
                    classes.font,
                    classes.Input,
                    classes.fullwidth,
                  ])}
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    handleEditProfile()
                  }}
                />
              </div>
            </FormControl>
          </div>
        </div>
        <div className="d-flex">
          <div
            className={clsx([
              "d-flex justify-content-center mr-5",
              classes.fullwidth,
            ])}
          >
            <FormControl className={clsx(["col-4 m-3 ", classes.fullwidth])}>
              <div
                className={clsx([
                  "d-flex flex-column align-items-start",
                  classes.fullwidth,
                ])}
              >
                <label> کدملی </label>
                <OutlinedInput
                  className={clsx([
                    "",
                    classes.font,
                    classes.Input,
                    classes.fullwidth,
                  ])}
                  value={nationalCode}
                  onChange={(e) => {
                    setNationalCode(e.target.value);
                    handleEditProfile()
                  }}
                />
              </div>
            </FormControl>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-5'>
            {
            editMode &&
                        <Button
                        className={clsx([classes.font, classes.AdminButtonStyle, "shadow mt-5"])}
                        onClick={confirmEdit}
                    >
                    ویرایش
                </Button>
            }
                            
         </div>
      </div>
    </>
  );
}

export default Index;

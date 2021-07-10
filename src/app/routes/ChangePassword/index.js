import React,{useState,useEffect} from 'react'
import {
    makeStyles,
    FormControl,
    OutlinedInput,
    Checkbox,
    FormControlLabel,
    Button,
  } from "@material-ui/core";
  import clsx from "clsx";
  import {changePassword} from '../../../api/Admin/Users'

  import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {useHistory} from 'react-router-dom'

 
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
    const [currentPass,setCurrentPass]  = useState()
    const [newPass,setNewPass] = useState()
    const history  = useHistory()

    
  const handleConfirm =()=>{
    let obj = {
        currentPassword : currentPass,
        newPassword : newPass
    }
    changePassword(obj)
        .then(res=>{

            Swal.fire({
                title: 'رمز عبور تغییر داده شد',
                text: 'رمز عبور شما با موفقیت تغییر داده شد',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
              })
              history.push('/dashboard')

        }).catch(err=>{

        })
  }


    return (
        <>
            <div className='d-flex  justify-content-center m-5'>
                <div className='d-flex flex-column col-5'>
                    <div>
                    <FormControl  className={clsx(["col-12 m-3 ml-5",classes.fullwidth])} >
                                <div
                                className={clsx([
                                    "d-flex flex-column align-items-start",
                                    classes.fullwidth,
                                ])}
                                >
                                <label> رمز عبور فعلی </label>
                                <OutlinedInput
                                    className={clsx([
                                    "",
                                    classes.font,
                                    classes.Input,
                                    classes.fullwidth,
                                    ])}
                                    placeholder="رمز عبور فعلی را وارد کنید"
                                    value={currentPass}
                                    onChange={(e) => {
                                        setCurrentPass(e.target.value);
                                    }}
                                />
                                </div>
                            </FormControl>
                    </div>
                    <div className='mt-3'>
                    <FormControl  className={clsx(["col-12 m-3  ml-5",classes.fullwidth])} >
                                <div
                                className={clsx([
                                    "d-flex flex-column align-items-start",
                                    classes.fullwidth,
                                ])}
                                >
                                <label> رمز جدید </label>
                                <OutlinedInput
                                    className={clsx([
                                    "",
                                    classes.font,
                                    classes.Input,
                                    classes.fullwidth,
                                    ])}
                                    placeholder="رمز عبور جدید را وارد کنید"
                                    value={newPass}
                                    onChange={(e) => {
                                        setNewPass(e.target.value);
                                    }}
                                />
                                </div>
                            </FormControl>
                    </div>
                    <div className='d-flex justify-content-center'>
                            <Button
                                    className={clsx([classes.font, classes.AdminButtonStyle, "shadow mt-5"])}
                                    onClick={handleConfirm}
                                >
                                تغییر
                                </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index

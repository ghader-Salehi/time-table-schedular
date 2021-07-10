import React,{useStae, useState} from 'react'
import {
    makeStyles,
    FormControl,
    OutlinedInput,
    Checkbox,
    FormControlLabel,
    Button,
  } from "@material-ui/core";
  import clsx from "clsx";
  import {createCourse} from '../../../../../api/Admin/Courses'
  import { useHistory } from 'react-router';
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
    const [title,setTitle] = useState('')
    const [unitCount,SetUnitCount] = useState()
    const history = useHistory()

    const handleConfirm = ()=>{ 

        let obj  = {
            title:title,
            unitsCount:unitCount
        }
        createCourse(obj)
            .then(res=>{
                console.log(res);
                Swal.fire({
                  title: 'دوره ایجاد شد',
                  text: 'دوره مورد نظر به لیست دوره ها اضافه شد',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 2500
                })
                history.push('/dashboard/coursesList')
            }).catch(err=>{
                console.log(err);
            })
    }   
    return (
        <>
        <div className='d-flex flex-column  '>
            <div className='d-flex m-4'>
                    ایجاد دوره ی آموزشی
            </div>
                <div className='d-flex'>
                        <div  className={clsx(["d-flex justify-content-center", classes.fullwidth])}>
                                    <FormControl  className={clsx(["col-6 m-3 ml-5",classes.fullwidth])} >
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
                                    placeholder="نام دوره ی آموزشی را وارد کنید"
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                    }}
                                />
                                </div>
                            </FormControl>
                        </div>
                        <div  className={clsx(["d-flex ", classes.fullwidth])}>
                                    <FormControl className="col-5 m-3 ml-5">
                                <div
                                className={clsx([
                                    "d-flex flex-column align-items-start",
                                    //   classes.fullwidth,
                                ])}
                                >
                                <label> واحد </label>
                                <OutlinedInput
                                type='number'
                                    className={clsx([
                                    "",
                                    classes.font,
                                    classes.Input,
                                    classes.fullwidth,
                                    ])}
                                    placeholder="تعداد واحد درس مربوطه را وارد کنید"
                                    value={unitCount}
                                    onChange={(e) => {
                                        SetUnitCount(e.target.value);
                                    }}
                                />
                                </div>
                            </FormControl>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                            <Button
                                    className={clsx([classes.font, classes.AdminButtonStyle, "shadow mt-5"])}
                                    onClick={handleConfirm}
                                >
                                تایید
                                </Button>
                    </div>
        </div>
            
       
        </>
    )
}

export default Index

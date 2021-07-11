import React,{useState} from 'react'
import {
    makeStyles,
    FormControl,
    OutlinedInput,
    Button,
    TextField
  } from "@material-ui/core";
  import clsx from "clsx";
  import {createAnnouncement} from '../../../api/Admin/Announcements'

  import Swal from 'sweetalert2/dist/sweetalert2.js'
  import 'sweetalert2/src/sweetalert2.scss'
  import { useHistory } from 'react-router';


  const useStyle = makeStyles((theme) => ({
    font: {
      fontFamily: "iranYekan",
      "& sapn": {
        fontFamily: "iranYekan !important",
      },
      "& label":{
        fontFamily: "iranYekan !important",
        fontSize:'14px'
      }
    },
    fullwidth: {
      width: "100%",
     
    },
    Input: {
      "& input": {
        padding: "12px",
        textAlign: "left ",
        fontSize: "14px",
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
    textAreaStyle:{
        height:'300px',
        "& textarea": {
            padding: "12px",
            textAlign: "left ",
            fontSize: "14px",
            height:'200px',
          },
    }
  }));

function Index({timeTableId}) {
    const classes = useStyle();
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const history = useHistory()
     

    const handleCreateAnnouncement = ()=>{
      let obj ={
        message:body,
        timeTable:timeTableId
      }
      createAnnouncement(obj)
        .then((res)=>{
            console.log(res);
            Swal.fire({
              title: 'اطلاعیه ایجاد شد',
              text: 'اطلاعیه مورد نظر با موفقیت ایجاد شد',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
            })
            history.push('/dashboard/announcementsList')
        }).catch(err=>{

        })


    }


    return (
        <>
            <div className='d-flex'>
                    <FormControl className="col-3 m-3 ml-5">
                    <div
                    className={clsx([
                        "d-flex flex-column align-items-start",
                        //   classes.fullwidth,
                    ])}
                    >
                    <label> عنوان اطلاعیه </label>
                    <OutlinedInput
                        className={clsx([
                        "",
                        classes.font,
                        classes.Input,
                        classes.fullwidth,
                        ])}
                        placeholder="عنوان اطلاعیه را وارد کنید "
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                    </div>
                </FormControl>
            </div>
            <div className='d-flex'>
             <TextField
             classes={{root:classes.textAreaStyle}}
             className={clsx([classes.fullwidth,'ml-5 mr-2',classes.font])}
                   
                    id="filled-multiline-flexible"
                    label="عنوان اطلاعیه را وارد کنید "
                    multiline
                    rows={2}
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                    variant="outlined"
                    />
            </div>
            <div className='d-flex justify-content-center m-4'>
                    <Button
                    className={clsx([classes.font, classes.AdminButtonStyle, "shadow"])}
                     onClick={handleCreateAnnouncement}
                >
                    ایجاد اطلاعیه
                </Button>
            </div>
        </>
    )
}

export default Index

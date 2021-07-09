import React,{useState} from 'react'
import {
    makeStyles,
    FormControl,
    OutlinedInput,
    Button,
    TextField
  } from "@material-ui/core";
  import clsx from "clsx";

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

function Index() {
    const classes = useStyle();
    const [title,setTitle] = useState('')
     
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
                    // value={value}
                    // onChange={handleChange}
                    variant="outlined"
                    />
            </div>
            <div className='d-flex justify-content-center m-4'>
                    <Button
                    className={clsx([classes.font, classes.AdminButtonStyle, "shadow"])}
                  
                >
                    ایجاد اطلاعیه
                </Button>
            </div>
        </>
    )
}

export default Index

import React, { useState,useEffect } from 'react'
import {
    makeStyles,
    Typography,
    FormControl,
    OutlinedInput,
    Select,
    MenuItem
  
  } from "@material-ui/core";

  import clsx from "clsx";
  import CreateAnnouncement from '../../../../../components/Forms/CreateAnnouncement'
  import {getTimeTablesList} from '../../../../../api/Admin/TImeTable'

const useStyles = makeStyles((theme) => ({
  font: {
    fontFamily: "iranYekan",
    color: "#8B8989",
  },
  container: {},
  Input: {
    "& input": {
      padding: "12px",
      textAlign: "left ",
      fontSize: "12px",
    },
    
      
  },
  selectRoot:{
    padding:'10px'
  },
  fullWidth:{
    width:'100%'
}
}));


function Index() {
    const classes = useStyles();
    const [course, setCourse] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [showForm,setShowForm] = useState(false);
    const [timeTables,setTimeTables] = React.useState([1,2,2])

  const handleChange = (event) => {
    setCourse(event.target.value);
    setShowForm(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  React.useEffect(()=>{
    console.log('hello')
    getTimeTablesList()
      .then((res)=>{
        console.log(res)
        // setTimeTables(res.data.data.timetables)
      }).catch((err)=>{
        console.log(err)
      })
     
  },[])

  

    return (
        <>
        <div className='d-flex m-5  flex-column align-items-center'>
          <div className='d-flex justify-content-center mb-3'>
          لطفا یکی از درس های جدول زمانی را انتخاب کنید
          </div>
            <FormControl style={{ width: "400px" }} className=''>
                    <Select
                            className={clsx([ classes.font, classes.Input,'text-right'])}
                            classes={{root:classes.selectRoot}}
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={course}
                            onChange={handleChange}
                            placeholder='sdsds'
                            input={<OutlinedInput  />}
                            >
                             
                            <MenuItem disabled className={classes.font} selected={true} value={0}>یکی از  دروس  موجود را انتخاب کنید</MenuItem>
                            {/* <MenuItem className={classes.font} value={2}>طرحی الگویتم - جعفر تنها  - شنبه 10-12 - سه شنبه  16-18</MenuItem>
                            <MenuItem className={classes.font} value={3}>طرحی الگویتم - جعفر تنها  - شنبه 10-12 - سه شنبه  16-18</MenuItem>
                            <MenuItem className={classes.font} value={4}>طرحی الگویتم - جعفر تنها  - شنبه 10-12 - سه شنبه  16-18</MenuItem>
                            <MenuItem className={classes.font} value={5}>طرحی الگویتم - جعفر تنها  - شنبه 10-12 - سه شنبه  16-18</MenuItem> */}
                            {timeTables.map((item,index)=>{
                              return (
                               
                                    <MenuItem key={index} className={classes.font} value={index+1}>طرحی الگویتم - جعفر تنها  - شنبه 10-12 - سه شنبه  16-18</MenuItem>
                               
                              )
                            })}
                    </Select>
            </FormControl>
        </div>
        <div>
          {showForm &&   <CreateAnnouncement timeTableId=''/>}
          

        </div>
        </>
    )
}

export default Index

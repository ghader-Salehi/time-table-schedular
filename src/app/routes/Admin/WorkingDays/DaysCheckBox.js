import React, { useState, useEffect  } from "react";
import {
  makeStyles,
  FormControl,
  OutlinedInput,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import {
  createDay,
  deleteDay,
  getListOfDays,
} from "../../../../api/Admin/Days";

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


const idArray = [0,0,0,0,0,0]
const Temp = []
const Flag = true

function DaysCheckBox() {
    const [Days,setDays] = useState([])


    const handleStatusOfCheckbox = (index,array )=>{
        
        const day =  array.findIndex((item)=>item.dayOfWeek === index)
                if(day !== -1){
                    return true
                }
                else 
                return false
      }
  const classes = useStyle();


  const [Saturday, setSaturday] = useState(false);
  const [Sunday, setSunday] = useState(false);
  const [Monday, setMonday] = useState(false);
  const [Tuesday, setTuesday] = useState(false);
  const [Wednesday, setWednesday] = useState(false);
  const [Thursday, setThursday] = useState(false);

 


  React.useEffect(()=>{



        getListOfDays()
            .then(res=>{
                    console.log(res);
                    setDays(res.data.data.days);

                    res.data.data.days.forEach((item,index)=>{
                      
                          idArray[item.dayOfWeek] = item._id
                    })

                    console.log( res.data.data.days);


                        setSaturday(handleStatusOfCheckbox(0,res.data.data.days))
                        setSunday(handleStatusOfCheckbox(1,res.data.data.days))
                        setMonday(handleStatusOfCheckbox(2,res.data.data.days))
                        setTuesday(handleStatusOfCheckbox(3,res.data.data.days))
                        setWednesday(handleStatusOfCheckbox(4,res.data.data.days))
                        setThursday(handleStatusOfCheckbox(5,res.data.data.days))

                   

                   Flag = false


            }).catch(err=>{

            })
            
        
  },[])

 

  const handlecreateDay = (obj,index)=>{
             createDay(obj)
            .then(res=>{
                console.log(res);
                idArray[index] = res.data.data.days._id
                console.log(idArray);
            }).catch(err=>{
                console.log(err);
            })

  }
  const handleDelete = (index)=>{

    deleteDay(idArray[index])
    .then(res=>{
            console.log(res);
    }).catch(err=>{

    })
      
}

  const handleChange = (event) => {
    

    let obj ={}
    console.log(event.target.name, event.target.checked);

    
    if (event.target.name === "شنبه" && event.target.checked) {
        obj['label'] = 'شنبه' ;
        obj['dayOfWeek'] = 0 ;

   
    handlecreateDay(obj,0)
    setSaturday(event.target.checked)

    } else if (event.target.name === "شنبه" && !event.target.checked) {


      handleDelete(0)
      setSaturday(event.target.checked)
    }


    if (event.target.name === "یکشنبه" && event.target.checked) {
      console.log("ye created");
      obj['label'] = 'یکشنبه' ;
      obj['dayOfWeek'] = 1 ;

      handlecreateDay(obj,1)
      setSunday(event.target.checked)
    } else if (event.target.name === "یکشنبه" && !event.target.checked) {
      console.log("ye removed");
      handleDelete(1)
      setSunday(event.target.checked)
    }

    

    if (event.target.name === "دوشنبه" && event.target.checked) {
      console.log("do created");
      obj['label'] = 'دوشنبه' ;
      obj['dayOfWeek'] = 2 ;

      handlecreateDay(obj,2)
      setMonday(event.target.checked)
    
    } else if (event.target.name === "دوشنبه" && !event.target.checked) {
      console.log("do removed");
      handleDelete(2)
      setMonday(event.target.checked)
    }



    if (event.target.name === "سه شنبه" && event.target.checked) {
        obj['label'] = 'سه شنبه' ;
        obj['dayOfWeek'] = 3 ;
        handlecreateDay(obj,3)
        setTuesday(event.target.checked)
    } else if (event.target.name === "سه شنبه" && !event.target.checked) {
        handleDelete(3)
        setTuesday(event.target.checked)
    }



    if (event.target.name === "چهار شنبه" && event.target.checked) {
        obj['label'] = 'چهار شنبه' ;
        obj['dayOfWeek'] = 4 ;
        handlecreateDay(obj,4)
        setWednesday(event.target.checked)
    } else if (event.target.name === "چهار شنبه" && !event.target.checked) {
        handleDelete(4)
        setWednesday(event.target.checked)
    }


    if (event.target.name === "پنج شنبه" && event.target.checked) {
        obj['label'] = 'پنج شنبه' ;
        obj['dayOfWeek'] = 5 ;
        handlecreateDay(obj,5)
        setThursday(event.target.checked)
    } else if (event.target.name === "پنج شنبه" && !event.target.checked) {
             handleDelete(5)
             setThursday(event.target.checked)
    }
  };

  //

  return (
    <>
      <div>
        <FormControlLabel
          classes={{ label: classes.font }}
          className="m-4"
          control={
            <Checkbox
              checked={Saturday}
              onChange={handleChange}
              color="primary"
              
            />
          }
          label="شنبه"
          name="شنبه"
        />
      </div>
      <div>
        <FormControlLabel
          classes={{ label: classes.font }}
          className="m-4"
          control={
            <Checkbox
              checked={Sunday}
              onChange={handleChange}
              color="primary"
            />
          }
          label="یکشنبه"
          name="یکشنبه"
        />
      </div>
      <div>
        <FormControlLabel
          classes={{ label: classes.font }}
          className="m-4"
          control={
            <Checkbox
              checked={Monday}
              onChange={handleChange}
              color="primary"
            />
          }
          label="دوشنبه"
          name="دوشنبه"
        />
      </div>
      <div>
        <FormControlLabel
          classes={{ label: classes.font }}
          className="m-4"
          control={
            <Checkbox
              checked={Tuesday}
              onChange={handleChange}
              color="primary"
            />
          }
          label="سه شنبه"
          name="سه شنبه"
        />
      </div>
      <div>
        <FormControlLabel
          classes={{ label: classes.font }}
          control={
            <Checkbox
              checked={Wednesday}
              onChange={handleChange}
              color="primary"
            />
          }
          className="m-4"
          label="چهار شنبه"
          name="چهار شنبه"
        />
      </div>
      <div>
        <FormControlLabel
          classes={{ label: classes.font }}
          control={
            <Checkbox
              checked={Thursday}
              onChange={handleChange}
              color="primary"
            />
          }
          className="m-4"
          label="پنج شنبه"
          name="پنج شنبه"
        />
      </div>
    </>
  );
}

export default DaysCheckBox;

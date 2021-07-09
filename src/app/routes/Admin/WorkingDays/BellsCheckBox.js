import React ,{useState} from 'react'
import {
    makeStyles,
    FormControl,
    OutlinedInput,
    Checkbox,
    FormControlLabel,
    Button,
  } from "@material-ui/core";
  import clsx from "clsx";
  import {createBell,deleteBell,getListOfBells} from '../../../../api/Admin/Bells'

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

function BellsCheckBox() {


  const handleStatusOfCheckbox = (index,array )=>{
        
    const day =  array.findIndex((item)=>item.bellOfDay === index)
            if(day !== -1){
                return true
            }
            else 
            return false
  }

    const classes = useStyle();

    const [time_1, setTime_1] = useState(false);
    const [time_2, setTime_2] = useState(false);
    const [time_3, setTime_3] = useState(false);
    const [time_4, setTime_4] = useState(false);
    const [time_5, setTime_5] = useState(false);
    const [time_6, setTime_6] = useState(false);

    const handlecreateDay = (obj,index)=>{
      createBell(obj)
     .then(res=>{
         console.log(res);
         idArray[index] = res.data.data.bells._id
     }).catch(err=>{
         console.log(err);
     })

}

const handleDelete = (index)=>{

  deleteBell(idArray[index])
  .then(res=>{
          console.log(res);
  }).catch(err=>{

  })
    
}

React.useEffect(()=>{



  getListOfBells()
      .then(res=>{
              console.log(res);
              // setDays(res.data.data.bells);

              res.data.data.bells.forEach((item,index)=>{
                  idArray[index] = item._id
              })

              console.log(handleStatusOfCheckbox(0,res.data.data.bells));
              setTime_1(handleStatusOfCheckbox(0,res.data.data.bells))
              setTime_2(handleStatusOfCheckbox(1,res.data.data.bells))
              setTime_3(handleStatusOfCheckbox(2,res.data.data.bells))
              setTime_4(handleStatusOfCheckbox(3,res.data.data.bells))
              setTime_5(handleStatusOfCheckbox(4,res.data.data.bells))
              setTime_6(handleStatusOfCheckbox(5,res.data.data.bells))

             

            //  Flag = false


      }).catch(err=>{

      })
      
  
},[])


    const handleChange =(event)=>{


        
    let obj ={}
    console.log(event.target.name, event.target.checked);

    
    if (event.target.name === "8-10" && event.target.checked) {
        obj['label'] = '8-10' ;
        obj['bellOfDay'] = 0 ;

   
    handlecreateDay(obj,0)
    setTime_1(event.target.checked)

    } else if (event.target.name === "8-10" && !event.target.checked) {


      handleDelete(0)
      setTime_1(event.target.checked)
    }


    if (event.target.name === "10-12" && event.target.checked) {
      console.log("ye created");
      obj['label'] = '10-12' ;
      obj['bellOfDay'] = 1 ;

      handlecreateDay(obj,1)
      setTime_2(event.target.checked)
    } else if (event.target.name === "10-12" && !event.target.checked) {
      console.log("ye removed");
      handleDelete(1)
      setTime_2(event.target.checked)
    }

    

    if (event.target.name === "12-14" && event.target.checked) {
      console.log("do created");
      obj['label'] = '12-14' ;
      obj['bellOfDay'] = 2 ;

      handlecreateDay(obj,2)
      setTime_3(event.target.checked)
    
    } else if (event.target.name === "12-14" && !event.target.checked) {
      console.log("do removed");
      handleDelete(2)
      setTime_3(event.target.checked)
    }



    if (event.target.name === "14-16" && event.target.checked) {
        obj['label'] = '14-16' ;
        obj['bellOfDay'] = 3 ;
        handlecreateDay(obj,3)
        setTime_4(event.target.checked)
    } else if (event.target.name === "14-16" && !event.target.checked) {
        handleDelete(3)
        setTime_4(event.target.checked)
    }



    if (event.target.name === "16-18" && event.target.checked) {
        obj['label'] = '16-18' ;
        obj['bellOfDay'] = 4 ;
        handlecreateDay(obj,4)
        setTime_5(event.target.checked)
    } else if (event.target.name === "16-18" && !event.target.checked) {
        handleDelete(4)
        setTime_5(event.target.checked)
    }


    if (event.target.name === "18-20" && event.target.checked) {
        obj['label'] = '18-20' ;
        obj['bellOfDay'] = 5 ;
        handlecreateDay(obj,5)
        setTime_6(event.target.checked)
    } else if (event.target.name === "18-20" && !event.target.checked) {
             handleDelete(5)
             setTime_6(event.target.checked)
    }
    }
    return (
        <>
      <div>
        <FormControlLabel
          classes={{ label: classes.font }}
          className="m-4"
          control={
            <Checkbox
              checked={time_1}
              onChange={handleChange}
              color="primary"
              
            />
          }
          label="8-10"
          name="8-10"
        />
      </div>
      <div>
        <FormControlLabel
          classes={{ label: classes.font }}
          className="m-4"
          control={
            <Checkbox
              checked={time_2}
              onChange={handleChange}
              color="primary"
            />
          }
          label="10-12"
          name="10-12"
        />
      </div>
      <div>
        <FormControlLabel
          classes={{ label: classes.font }}
          className="m-4"
          control={
            <Checkbox
              checked={time_3}
              onChange={handleChange}
              color="primary"
            />
          }
          label="12-14"
          name="12-14"
        />
      </div>
      <div>
        <FormControlLabel
          classes={{ label: classes.font }}
          className="m-4"
          control={
            <Checkbox
              checked={time_4}
              onChange={handleChange}
              color="primary"
            />
          }
          label="14-16"
          name="14-16"
        />
      </div>
      <div>
        <FormControlLabel
          classes={{ label: classes.font }}
          control={
            <Checkbox
              checked={time_5}
              onChange={handleChange}
              color="primary"
            />
          }
          className="m-4"
          label="16-18"
          name="16-18"
        />
      </div>
      <div>
        <FormControlLabel
          classes={{ label: classes.font }}
          control={
            <Checkbox
              checked={time_6}
              onChange={handleChange}
              color="primary"
            />
          }
          className="m-4"
          label="18-20"
          name="18-20"
        />
      </div>
    </>
    )
}

export default BellsCheckBox

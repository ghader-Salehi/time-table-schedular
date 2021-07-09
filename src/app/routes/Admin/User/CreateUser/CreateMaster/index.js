import React from 'react'

import CreateUser from '../../../../../../components/Forms/CreateUser'
import {
    makeStyles,
   
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
  
    font: {
      fontFamily: "iranYekan",
      color: "#8B8989",
    },
    fullwidth: {
        width: "100%",
      },
  
  }));

  

function Index({index}) {
    const classes = useStyles();
    return (
      
                <div  className={classes.fullwidth}>
                      
                            <CreateUser  index={index} />
                     

                </div>
            
        
    )
}

export default Index

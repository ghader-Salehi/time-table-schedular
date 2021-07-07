import React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import Class from './Class'

const useStyle = makeStyles(() => ({

    font: {
      fontFamily: "iranYekan",
    },
    container:{
        borderRadius:'5px',
        backgroundColor:'#F1EFF5',
        "& div":{
            color:'#8B8989'
        }
        
    }
   
  }));

const Index = ({role,content })=> {
    const classes = useStyle();

    return (
        <>  
            <div className={clsx([' d-flex mt-4  p-3 mr-5 ml-5 shadow',classes.container])}>
                <div className='col-3 d-flex justify-content-center'>
                    درس
                </div>
                <div className='col-3 d-flex justify-content-center'>
                    زمان برگزاری
                </div>
                <div className='col-3 d-flex justify-content-center'> 
                        استاد
                </div>
                <div className='col-3 d-flex justify-content-center'>
                    محل برگزاری
                </div>
            </div>
            <div className='mb-5'>
                    {content.map((item,index)=>{
                        return(
                            
                                <Class data={item}/>
                        
                        
                        )
                    })}
            </div>
        </>
    )
}

export default Index

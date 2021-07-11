import React from 'react'
import { makeStyles ,Typography} from '@material-ui/core'
import clsx from 'clsx'
import Class from './Class'
import {getTodayClasses} from '../../../api/Admin/TImeTable'

const useStyle = makeStyles(() => ({

    font: {
      fontFamily: "iranYekan",
      color: "#8B8989",
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

    React.useEffect(()=>{
       console.log(content);
       getTodayClasses()
       .then(res=>{
            //  console.log(res.data.data.timeTables)
            
       }).catch(err=>{

       })

    },[])

    return (
        <>  
            <div className={clsx([' d-flex mt-4  p-3 mr-5 ml-5 shadow',classes.container])}>
                <div className='col-3 d-flex justify-content-center'>
                    درس
                </div>
                <div className='col-6 d-flex justify-content-center'>
                    زمان های برگزاری
                </div>
                {role !== 'master' && 
                <div className='col-3 d-flex justify-content-center'> 
                        استاد
                </div>}
                
               
            </div>
            { !content.length && 
                <div className='d-flex justify-content-center mt-5'>
                    <Typography className={clsx([classes.font,'mt-5'])} >
                         هیچ کلاسی برای برگزاری وجود ندارد       
                    </Typography>
                      
                </div>
                   
                }
            <div className='mb-5'>
                
                    {content.map((item,index)=>{
                        return(
                            
                                <Class role={role} data={item}/>
                        
                        
                        )
                    })}
            </div>
        </>
    )
}

export default Index

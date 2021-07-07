import React from 'react'
import RecentAnnouncement from './RecentAnnouncement'
import { Button ,makeStyles,Typography} from '@material-ui/core'
import clsx from 'clsx'
import {ADMIN,MASTER,STUDENT} from "../../../constants/Roles"

const useStyle = makeStyles(() => ({

    font: {
      fontFamily: "iranYekan",
      
    },
    AdminButtonStyle:{
        backgroundColor:'#7A8FF6',
        color:'white',
        '&:hover':{
            backgroundColor: "#4015F1",
        }

    },
    MasterButtonStyle:{
        backgroundColor:'#F6877A',
        color:'white',
        '&:hover':{
            backgroundColor: "#F36554",
        }

    },
    StudentButtonStyle:{
        backgroundColor:'#93BB90',
        color:'white',
        '&:hover':{
            backgroundColor: "#71CE6A",
        }

    }
  }));

 

const Index = ({role,content })=> {
    const classes = useStyle();

    const handleButtonStyle = (role)=>{
        if(role === ADMIN)
            return classes.AdminButtonStyle;
        else if(role === MASTER)
            return classes.MasterButtonStyle;

        else if(role === STUDENT)
            return classes.StudentButtonStyle
        
  }
    return (
        <>
            <div className='d-flex mt-1 align-items-center'>
                
                {content.map((item,index)=>{
                    return (
                        <>
                            <RecentAnnouncement role={role} key={index} data={item} />
                        </>
                    )
                })}
                <div className='col-2 mt-5'>
                    <Button className={clsx([classes.font,handleButtonStyle(role),'shadow'])}>
                        {role === STUDENT ? 
                        <Typography style={{fontSize:'13px'}} className={clsx([classes.font])} variant="subtitle2">
                            مشاهده لیست کامل
                        </Typography>
                        
                        : 
                      <>  +   ایجاد اطلاعیه </>
                    }
                        
                    </Button>
                </div>

            </div>
        </>        
    )
}

export default Index

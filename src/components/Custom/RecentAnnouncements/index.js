import React from 'react'
import RecentAnnouncement from './RecentAnnouncement'
import { Button ,makeStyles} from '@material-ui/core'
import clsx from 'clsx'

const useStyle = makeStyles(() => ({

    font: {
      fontFamily: "iranYekan",
      
    },
    AddminButtonStyle:{
        backgroundColor:'#7A8FF6',
        color:'white',
        '&:hover':{
            backgroundColor: "#4015F1",
        }

    }
  }));

const Index = ({role,content })=> {
    const classes = useStyle();
    return (
        <>
            <div className='d-flex mt-1 align-items-center'>
                
                {content.map((item,index)=>{
                    return (
                        <>
                            <RecentAnnouncement key={index} data={item} />
                        </>
                    )
                })}
                <div className='col-2 mt-5'>
                    <Button className={clsx([classes.font,classes.AddminButtonStyle,'shadow'])}>
                         +   ایجاد اطلاعیه 
                    </Button>
                </div>

            </div>
        </>        
    )
}

export default Index

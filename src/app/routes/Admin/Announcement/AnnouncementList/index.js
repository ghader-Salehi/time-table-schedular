import React from 'react'
import { makeStyles ,Typography} from '@material-ui/core'
import clsx from 'clsx'
import Announcement from './Announcement'
import {getAnnouncementsList} from '../../../../../api/Admin/Announcements'
import Pagination from "@material-ui/lab/Pagination";


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
        },
        boxShadow: "0px 0px 0px 0px ",
        borderRadius: "10px",
        
    }
   
  }));

function Index() {
    const classes = useStyle();
    const [Announcements,setAnnouncements] = React.useState([])

    React.useEffect(()=>{
        getAnnouncementsList()
            .then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err)
            })
    },[])

    return (
        <>
        <div className={clsx([' d-flex mt-4  p-3 mr-5 ml-5 ',classes.container])}>
                <div className='col-3 d-flex justify-content-center'>
                          درس مربوطه
                </div>
                <div className='col-3 d-flex justify-content-center'>
                   استاد مربوطه
                </div>
                
                <div className='col-3 d-flex justify-content-center'> 
                       عنوان اطلاعیه
                </div>
                
                <div className='col-3 d-flex justify-content-center'>
                    تاریخ ایجاد اطلاعیه
                </div>
            </div>

            { !Announcements.length && 
                <div className='d-flex justify-content-center mt-5'>
                    <Typography className={clsx([classes.font,'mt-5'])} >
                         هیچ اطلاعیه ای برای نمایش وجود ندارد       
                    </Typography>
                      
                </div>
                   
                }
            <div className='mb-5'>
                
                    {Announcements.map((item,index)=>{
                        return(
                            
                                <Announcement  data={item}/>
                        
                        
                        )
                    })}
            </div>
            <div className="d-flex justify-content-center mb-5 mt-3 pb-5">
                {Announcements.length ? (
                    <Pagination count={10} shape="rounded" variant="outlined" />
                ) : null}
        </div>
        </>
    )
}

export default Index

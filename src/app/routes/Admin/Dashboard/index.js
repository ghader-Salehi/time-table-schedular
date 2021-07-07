import React from 'react'
import { makeStyles,Typography } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import clsx from 'clsx'
import TodayClassesList from "../../../../components/Custom/TodayClassesList";
import RecentAnnouncements from "../../../../components/Custom/RecentAnnouncements";
import {ADMIN,MASTER,STUDENT} from  '../../../../constants/Roles'
const useStyle = makeStyles((theme)=>({
    font: {
        fontFamily: "iranYekan",
        color:'#8B8989'
      },
}))

const Index = () =>  {
    const classes = useStyle();
    return (
        <>
            <div className='d-flex flex-column '>
                <div className='d-flex mt-4'>
                   <Typography className={clsx([classes.font])}>
                       اخرین اطلاعیه ها
                   </Typography>
                </div>
                 <RecentAnnouncements role={STUDENT} content={[1,2,3]}/>
                 <div className='d-flex mt-4'>
                   <Typography className={clsx([classes.font])}>
                       کلاس های امروز
                   </Typography>
                </div>
                <TodayClassesList  role={STUDENT} content={[1,2,3,1,5,5,]} />
                <div className='d-flex justify-content-center mb-5 mt-3 pb-5'>
                        <Pagination  count={10} shape="rounded"  variant="outlined"/>
                </div>
                
            </div>
            
        </>
    )
}

export default Index

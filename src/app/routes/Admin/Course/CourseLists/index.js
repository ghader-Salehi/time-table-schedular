import React, { useState,useEffect } from 'react'
import {makeStyles} from '@material-ui/core' 
import Pagination from "@material-ui/lab/Pagination";
import clsx from "clsx";
import Course from './Course'
import {getListOfCourses}from '../../../../../api/Admin/Courses'

const useStyle = makeStyles((theme) => ({
   
  }));


function Index() {
    const classes = useStyle();
    const [courses,setCourese] = useState([1,2,3])

        useEffect(()=>{
            getListOfCourses()
                .then((res)=>{ 
                    console.log(res);
                    setCourese(res.data.data.courses)
                }).catch((err)=>{
                    console.log(err);
                })
        },[])

    return (
        <div className='d-flex flex-column'>
            <div className='d-flex m-4'>
                لیست دوره های تعریف شده 

               
            </div>
            <div className='d-flex justify-content-center'>
                {!courses.length &&
                
                  <div className='m-5'>
                    هیچ دوره ای برای نمایش موجود نمی باشد
                  </div>
                }
                <div  style={{width:'100%'}} className = 'd-flex flex-column mr-5 ml-5'>
                    {courses.map((item,index)=>{
                        return(
                            <>
                            <Course data={item} key={index} />
                            </>
                        )
                    })}

                     <div className='d-flex justify-content-center  m-5'>
                    <Pagination count='5' shape="rounded" variant="outlined" />

                 </div>
                </div>
               
                

               
            </div>
        </div>
    )
}

export default Index

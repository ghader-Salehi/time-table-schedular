import React ,{useState}from 'react'
import { makeStyles ,Typography} from '@material-ui/core'
import clsx from 'clsx'
import Course from './Course'
import Pagination from "@material-ui/lab/Pagination";
import {getTimeTablesList} from '../../../../../api/Admin/TImeTable'



function Index() {

    // const classes = useStyle();
    const [courses,setCourese] = useState([1,2,1])

    React.useEffect(()=>{
        // getTimeTablesList()
        //     .then((res)=>{
        //             console.log(res);
        //             setCourese(res.data.data.timetables)
        //     }).catch((err)=>{
        //         console.log(err);
        //     })

    },[])

    return (
        <>

                <div className='d-flex flex-column'>
                            <div className='d-flex m-4'>
                                لیست دوره های تعریف شده 

                            
                            </div>
                            <div className='d-flex justify-content-center'>
                                {!courses.length ?
                                
                                <div className='m-5 d-flex justify-content-center'>
                                    هیچ دوره ای برای نمایش موجود نمی باشد
                                </div>
                                :
                                    <div style={{width:'100%'}}  className = 'd-flex flex-column mr-5 ml-5'>
                                    {courses.map((item,index)=>{
                                        return(
                                            <>
                                            <Course data={item} key={index} />
                                            </>
                                        )
                                    })}

                                    
                                </div>
                                }
                            
                                
                                

                            
                            </div>
                            <div className="d-flex justify-content-center mb-5 mt-3 pb-5">
                                    {courses.length ? (
                                        <Pagination count={1} shape="rounded" variant="outlined" />
                                    ) : null}
                                </div>
                        </div>

        </>
    )
}

export default Index

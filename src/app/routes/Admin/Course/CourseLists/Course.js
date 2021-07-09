import React from 'react'
import {Button,makeStyles} from '@material-ui/core'
import clsx from 'clsx'

const useStyle = makeStyles((theme) => ({
    font: {
        fontFamily: "iranYekan",
        color: "#8B8989",
        borderRadius:'10px'
      },
}));

function Course() {

    const classes = useStyle();
    return (
        <>
            <div style={{borderRadius:'10px'}}  className=' d-flex justify-content-around p-4 mr-5 ml-5 mb-3 shadow' >
                <div className='d-flex'>
                        <div>   
                            درس :
                        </div>
                        <div>
                            طراحی الگوریتم
                        </div>
                </div>
                <div className='d-flex'>   
                        <div>   
                            تعداد واحد :
                        </div>
                        <div>
                            3
                        </div>
                </div>
                <div>
                    <Button  className={clsx([' bg-light shadow',classes.font])} >
                        مشاهده
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Course

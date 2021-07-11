import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import ChoosedCourse from './ChoosedCourse'
import { useSelector } from 'react-redux';
import {getCourseById} from '../../../../../api/Admin/Courses'


const useStyle = makeStyles(() => ({
    font: {
      fontFamily: "iranYekan",
      color: "#8B8989",
    },
    container: {
      borderRadius: "5px",
      backgroundColor: "#F1EFF5",
      "& div": {
        color: "#8B8989",
      },
      boxShadow: "0px 0px 0px 0px ",
      borderRadius: "10px",
    },
  }));

function Index() {
    const classes = useStyle();
    const [course, setCourses] = React.useState([]);
    const user = useSelector(({ auth }) => auth.user)
// courses
    React.useEffect(()=>{
        console.log(user)
        user.courses.map((item)=>{
          console.log(item);
          getCourseById(item)
              .then(res=>{
                console.log(res);
                 setCourses(course => [...course,res.data.data.courses])
              }).catch(err=>{
                console.log(err)
              })
        })
    },[])
    return (
        <>
                <div
                className={clsx([" d-flex mt-4  p-3 mr-3 ml-5 ", classes.container])}
            >
                <div className="col-4 d-flex justify-content-center">درس مربوطه</div>
                <div className="col-3 d-flex justify-content-center">  تعداد واحد </div>

              

                <div className="col-3 d-flex justify-content-center">
                تعداد دانشجویان
                </div>
            </div>
            {!course.length ?
                <div className="d-flex justify-content-center mt-5">
                <Typography className={clsx([classes.font, "mt-5"])}>
                    * دوره ای انتخاب نشده است *
                </Typography>
            </div>
            
            : 
            
            <div className="mb-5">
            {course.map((item, index) => {
              return <ChoosedCourse data={item} />;
            })}
          </div>
        }
        </>
    )
}

export default Index

import React from 'react'
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import TimeTable from  './TimeTables'

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
    const [timeTable, setTimeTable] = React.useState([]);

    return (
        <>

            <div
                    className={clsx([" d-flex mt-4  p-3 mr-3 ml-5 ", classes.container])}
                >
                    <div className="col-3 d-flex justify-content-center">درس مربوطه</div>
                    <div className="col-3 d-flex justify-content-center">  تایم برگزاری  </div>

                    <div className="col-3 d-flex justify-content-center">
                    مکان برگزاری  
                    </div>

                    <div className="col-3 d-flex justify-content-center">
                        استاد
                    </div>
                </div>

                {!timeTable.length && (
                    <div className="d-flex justify-content-center mt-5">
                    <Typography className={clsx([classes.font, "mt-5"])}>
                        * جدول زمانی برای نمایش وجود ندارد *
                    </Typography>
                    </div>
                )}

                <div className="mb-5">
                    {timeTable.map((item, index) => {
                    return <TimeTable data={item} />;
                    })}
                </div>
                <div className="d-flex justify-content-center mb-5 mt-3 pb-5">
                    {timeTable.length ? (
                    <Pagination count={1} shape="rounded" variant="outlined" />
                    ) : null}
                </div>


        </>
    )
}

export default Index

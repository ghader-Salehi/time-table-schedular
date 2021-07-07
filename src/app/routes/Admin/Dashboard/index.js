import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import clsx from "clsx";
import TodayClassesList from "../../../../components/Custom/TodayClassesList";
import RecentAnnouncements from "../../../../components/Custom/RecentAnnouncements";
import { ADMIN, MASTER, STUDENT } from "../../../../constants/Roles";
import { useSelector } from "react-redux";
import moment from 'jalali-moment'
const useStyle = makeStyles((theme) => ({
  font: {
    fontFamily: "iranYekan",
    color: "#8B8989",
  },
}));

const Index = () => {
  const classes = useStyle();
  const role = useSelector(({ auth }) => auth.user.rule);
  const [Todayclasses, setClasses] = useState([]);
  return (
    <>
      <div className="d-flex flex-column ">
        <div className="d-flex mt-4">
          <Typography className={clsx([classes.font])}>
            اخرین اطلاعیه ها
          </Typography>
        </div>
        <RecentAnnouncements role={role} content={[]} />
        <div className="d-flex mt-4">
          <Typography className={clsx([classes.font])}>
            کلاس های امروز ( {moment().locale('fa').format('dddd')} )
          </Typography>
        </div>
        <TodayClassesList role={role} content={Todayclasses} />
        <div className="d-flex justify-content-center mb-5 mt-3 pb-5">
          {Todayclasses.length ? (
            <Pagination count={10} shape="rounded" variant="outlined" />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Index;

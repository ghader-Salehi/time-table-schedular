import React ,{useContext}from "react";
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
} from "@material-ui/core";
import PropTypes from "prop-types";
import clsx from "clsx";
import MastersList from "./MastersList";
import StudentList from "./StudentsList";
import { UserWrapper } from "../../../../../context/UserContext";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F1EFF5",
    boxShadow: "0px 0px 0px 0px ",
    borderRadius: "10px",
    padding: "0 20px",
  },
  font: {
    fontFamily: "iranYekan",
    color: "#8B8989",
  },
  indicator: {
    backgroundColor: "#7A8FF6",
  },
}));

const Index = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

        <div>
          <AppBar
            className={clsx(["mt-5", classes.font])}
            classes={{
              root: classes.root,
            }}
            position="static"
          >
            <Tabs
              classes={{ indicator: classes.indicator }}
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab
                className={classes.font}
                label="لیست اساتید"
                {...a11yProps(0)}
              />
              <Tab
                className={classes.font}
                label="لیست دانشجویان"
                {...a11yProps(1)}
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <MastersList index={0} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <StudentList index={1} />
          </TabPanel>
        </div>

        <div></div>

    </>
  );
};

export default Index;

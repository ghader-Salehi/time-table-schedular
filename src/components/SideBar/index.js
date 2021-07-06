import React, { useState } from "react";
import {
  makeStyles,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import MasterPhoto from "../../styles/icnos/profile-Master.svg";
import blueCircle from "../../styles/icnos/rec-blue.svg";
import upArrowBlue from "../../styles/icnos/up-arrow-blue.svg";
import downArrowBlue from "../../styles/icnos/down-arrow-blue.svg";



const useStyle = makeStyles((theme) => ({
  sideBarcontainer: {
    width: "300px",
    maxHeight: "100vh",
    overflowY: "auto",

    position: "absolute",
    bottom: "0",
    top: "0",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#B7C3FF",
      outline: "0px solid slategrey",
    },
  },

  listItemStyle: {
    padding: "13px 15px",
    borderRadius: "10px",
    "&:hover": {},
  },

  fullWidth: {
    width: "100%",
  },
  font: {
    fontFamily: "iranYekan ",

    "& span": {
      fontFamily: "iranYekan !important",
      fontSize: "16px",
      fontWeight: "normal",
    },
  },
  subItemText: {
    "& span": {
      fontFamily: "iranYekan !important",
      fontSize: "14px",
      fontWeight: "normal",
    },
  },
  subItemStyle: {

    padding: "8px 10px",
    borderRadius: "10px",
  },
}));

const Index = ({ content }) => {
  const classes = useStyle();
  const [activeItem, setActiveItem] = useState();

  const handleSelectItem = (item, index) => {
    if (item.type === "dropDown")
      setActiveItem(
        activeItem === index + item.title ? undefined : index + item.title
      );

    console.log(item.type);
  };

  return (
    <>
      <div className="d-flex">
        <Paper className={clsx([classes.sideBarcontainer])}>
          <div className={clsx(["d-flex flex-column"])}>
            <div className="d-flex flex-column align-items-center mt-5 ">
              <img src={MasterPhoto} />
              <div className="mt-4">
                <Typography className={clsx([classes.font])}>
                  قادر صالحی
                </Typography>
              </div>
              <div>
                <Typography className={clsx([classes.font])} variant="caption">
                  ادمین سیستم
                </Typography>
              </div>
            </div>
            <List>
              {content.map((item, index) => (
                <div className=" pt-2 pb-2 pr-3 pl-3">
                  <ListItem
                    className={classes.listItemStyle}
                    button
                    onClick={() => handleSelectItem(item, index)}
                  >
                    <ListItemIcon>
                      <img src={blueCircle} />
                    </ListItemIcon>
                    <ListItemText
                      className={clsx([classes.font])}
                      primary={item.title}
                    />
                    {item.type == "dropDown" && (
                      <ListItemIcon className={clsx(["pr-5"])}>
                        
                        {activeItem === (index + item.title) ? <img src={upArrowBlue} /> : <img src={downArrowBlue} />}
                      </ListItemIcon>
                    )}
                  </ListItem>
                  {item.type == "dropDown" && (
                    <Collapse
                      in={activeItem === index + item.title}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List>
                        {item.children.map((child, childInd) => (
                          
                            <ListItem
                               className={classes.subItemStyle}
                              key={childInd}
                              button
                            >
                              <ListItemText
                                className={clsx([classes.subItemText, "pr-4"])}
                                primary={child.title}
                              />
                            </ListItem>
                        
                        ))}
                      </List>
                    </Collapse>
                  )}
                </div>
              ))}
            </List>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Index;

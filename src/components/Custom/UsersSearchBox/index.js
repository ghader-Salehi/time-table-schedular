import React from "react";
import {
  makeStyles,
  Typography,
  FormControl,
  OutlinedInput,
  Select,
  MenuItem

} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  font: {
    fontFamily: "iranYekan",
    color: "#8B8989",
  },
  container: {},
  Input: {
    "& input": {
      padding: "12px",
      textAlign: "left ",
      fontSize: "12px",
    },
  },
  selectRoot:{
    padding:'10px'
  },
  fullWidth:{
    width:'100%'
}
}));

function Index({ index }) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="d-flex justify-content-around mt-4">
      <div>
        <FormControl style={{ width: "300px" }}>
          <OutlinedInput
            className={clsx(["", classes.font, classes.Input])}
            placeholder="کاربر مورد نظر را سرچ کنید"
          />
        </FormControl>
      </div>
      <div>
        <FormControl style={{ width: "200px" }}>
                <Select
                        className={clsx([ classes.font, classes.Input,'text-right'])}
                        classes={{root:classes.selectRoot}}
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={filter}
                        onChange={handleChange}
                        placeholder='sdsds'
                        input={<OutlinedInput  />}
                        >
                            
                            12
                        <MenuItem className={classes.font} selected={true} value={1}>بر اساس نام</MenuItem>
                        <MenuItem className={classes.font} value={2}>بر اساس شماره</MenuItem>
                </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Index;

import React,{useEffect} from "react";
import {
  makeStyles,
  Typography,
  FormControl,
  OutlinedInput,
  Input,
  Link,
  Checkbox,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Login} from "../../../api/Auth/Login"
import { useSelector , useDispatch } from "react-redux";
import {LoginAction} from '../../../redux/actions/Auth'


const useStyle = makeStyles((theme) => ({
  fullwidth: {
    width: "100%",
  },
  font: {
    fontFamily: "iranYekan",
  },
  Input: {
    "& input": {
      padding: "12px",
      textAlign: "left ",
      fontSize: "12px",
    },
  },
  label: {
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  errorLable: {
    fontSize: "11px",
    color: "red",
  },
  submitButton: {
    borderRadius: "5px",
    backgroundColor: "#714EFF",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#4015F1",
    },
  },
  linkStyles: {
    fontSize: "12px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
    "&:hover": {
      textDecoration: "none",
    },
  },
  checkBoxStyle: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
}));

const LoginForm = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const test = () => {
    toast.error('کاربری با این مشخصات یافت نشد!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

    const handleSubmit = ()=>{
      
    }

    useEffect(()=>{

    },[])



  return (
    <div className="p-3 pt-0">
      <Formik
        initialValues={{ userName: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.userName) {
            errors.userName = "* ورود نام کاربری الزامی است *";
          }
          if (!values.password) {
            errors.password = " * ورود رمز عبور الزامی است *";
          }
          return errors;
        }}
        onSubmit={(values) => {

          console.log(JSON.stringify(values))

          Login(values.userName,values.password)
            .then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column align-items-center p-4">
              <FormControl className={clsx(classes.fullwidth)}>
                <div
                  className={clsx([
                    "d-flex flex-column align-items-start",
                    classes.fullwidth,
                  ])}
                >
                  <label className={clsx([classes.label])}>نام کاریری</label>
                  <OutlinedInput
                    className={clsx(["mb-4 mt-2", classes.font, classes.Input])}
                    id="userName"
                    name="userName"
                    placeholder="نام کاربری خود را وارد کنید"
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                  />
                  {errors.userName && touched.userName ? (
                    <div className={clsx([classes.errorLable, "mb-2"])}>
                      {errors.userName}
                    </div>
                  ) : null}
                </div>
              </FormControl>
              <FormControl className={clsx(classes.fullwidth)}>
                <div
                  className={clsx([
                    "d-flex flex-column align-items-start",
                    classes.fullwidth,
                  ])}
                >
                  <label className={clsx([classes.label])}>رمز عبور</label>
                  <OutlinedInput
                    className={clsx(["mb-4 mt-2", classes.font, classes.Input])}
                    id="password"
                    name="password"
                    placeholder="رمز عبور خود را وارد کنید"
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <div className={clsx([classes.errorLable, "mb-2"])}>
                      {errors.password}
                    </div>
                  ) : null}
                </div>
              </FormControl>

              <div
                className={clsx([
                  "d-flex justify-content-between align-items-center  pl-2",
                  classes.fullwidth,
                ])}
              >
                <div className="d-flex  justify-content-center align-items-end">
                  <div>
                    <Checkbox
                      id="remmeber-checkbox"
                      className={classes.checkBoxStyle}
                      disableRipple
                      color="default"
                      checkedIcon={
                        <span
                          className={clsx(classes.icon, classes.checkedIcon)}
                        />
                      }
                      icon={<span className={classes.icon} />}
                      inputProps={{ "aria-label": "decorative checkbox" }}
                    />
                  </div>
                  <div>
                    <Link
                      className={clsx([
                        classes.linkStyles,
                        classes.forgetPassLinkStyle,
                        "text-dark",
                      ])}
                      href="#"
                    >
                      <label htmlFor="remmeber-checkbox">
                        مرا به خاطر بسپار
                      </label>
                    </Link>
                  </div>
                </div>
                <div>
                  <Link
                    className={clsx([
                      classes.linkStyles,
                      classes.forgetPassLinkStyle,
                    ])}
                    href="#"
                  >
                    فراموشی رمز عبور
                  </Link>
                </div>
              </div>
              <div className={classes.fullwidth}>
                <Button
                  className={clsx([
                    classes.font,
                    classes.fullwidth,
                    "mt-4 p-2 mb-3 shadow",
                    classes.submitButton,
                  ])}
                  type="submit"
                  variant="outlined"
                  onClick={test}
                >
                  ورود
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default LoginForm;

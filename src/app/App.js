import React, { useState } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch,useHistory } from "react-router-dom";
import {
  ThemeProvider,
  StylesProvider,
  jssPreset,
  createMuiTheme,
} from "@material-ui/core";
import { create } from "jss";
import rtl from "jss-rtl";
import "../styles/globals.scss";
import Component from './routes/index'

const Login = lazy(() => import("./routes/Login"));

const App = () => {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const rtlTheme = createMuiTheme({ direction: "rtl" });
  const [flag,setflag]   = useState(false)
  const history = useHistory()
  const test = ()=>{
    setflag(true)
    history.push('/dashboard')
  }

  return (
    
    <ThemeProvider theme={rtlTheme}>
       <button onClick={test}>
          1321651
        </button>
      <StylesProvider jss={jss}>
        <Suspense fallback={<> </>}>
        
            <Switch>
              {/* 
        Todo
        put a condition in login page  that if user token dosent expire go to dashboard
        */}
              <Route exact path="/" component={Login} />
              {flag &&  <Route exact path='/dashboard'  component={Component} />}
              {/* 
          a component to render routes,if the user is logged then render the components
        */}
       
            </Switch>
         
        </Suspense>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;

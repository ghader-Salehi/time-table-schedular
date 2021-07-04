import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ThemeProvider,
  StylesProvider,
  jssPreset,
  createMuiTheme,
} from "@material-ui/core";
import { create } from "jss";
import rtl from "jss-rtl";
import "../styles/globals.scss";

const Login = lazy(() => import("./routes/Login"));

const App = () => {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const rtlTheme = createMuiTheme({ direction: "rtl" });

  return (
    <ThemeProvider theme={rtlTheme}>
      <StylesProvider jss={jss}>
        <Suspense fallback={<> </>}>
          <Router>
            <Switch>
              {/* 
        Todo
        put a condition in login page  that if user toker dosent expire go to dashboard
        */}
              <Route path="/" component={Login} />
              {/* 
          a component to render routes,if the user is logged then render the components
        */}
            </Switch>
          </Router>
        </Suspense>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import { ITEMS } from "../../constants/SideBarItems";
import routes from "./routes";
import clsx from "clsx";
import { MASTER, ADMIN, STUDENT, GENERAL } from "../../constants/Roles";
import { useSelector } from "react-redux";
import { UserWrapper } from "../../context/UserContext";

const useStyle = makeStyles((theme) => ({
  main: {
    width: "calc(100% - 300px)",
  },
}));

const Index = () => {
  const classes = useStyle();
  const role = useSelector(({ auth }) => auth.user.rule);

  React.useEffect(() => {
    console.log(role);
  }, []);
  return (
    <>
      <UserWrapper>
        <SideBar
          role={role}
          content={ITEMS.filter(
            (item) => item.part === role || item.part === GENERAL
          )}
        />

        <div className="d-flex justify-content-end">
          <div className={clsx(["d-flex flex-column ", classes.main])}>
            <Header />
            <div className="container">
              <Switch>
                {routes.map((item, index) => (
                  <Route
                    path={item.path}
                    exact={item.exact}
                    component={item.component}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </div>
      </UserWrapper>
    </>
  );
};

export default Index;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import { ITEMS } from "../../constants/SideBarItems";
import routes from "./routes";
import clsx from "clsx";

const useStyle = makeStyles((theme)=>({
    main:{
        width:'calc(100% - 300px)',
    }
}))

const Index = () => {
    const classes = useStyle()
  return (
    <>
    <SideBar content={ITEMS} />


      <div className="d-flex justify-content-end">
        

        <div className={clsx(["d-flex flex-column ",classes.main])}>
            <Header/>
            <div className='container'>

                1231
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
    </>
  );
};

export default Index;

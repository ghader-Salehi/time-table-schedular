import React from 'react'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import SideBar from '../../components/SideBar'
import  {ITEMS} from '../../constants/SideBarItems'
import routes from './routes'

const Index = () => {
    return (
        <>
            <Switch>
                {/* 
                map on routes.js objects and make Routes with it
                */}
                {

                    routes.map((item,index)=>(
                        <Route path={item.path} exact={item.exact} component={item.component}  />

                    )
                              
                    )
                }


            </Switch>

            
            <SideBar content={ITEMS} />
        </>
    )
}

export default Index;
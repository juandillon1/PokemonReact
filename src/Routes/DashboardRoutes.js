import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import { HomeScreen } from '../components/Home/HomeScreen';
import { SearchScreen } from '../components/Search/SearchScreen';
import {NavBar} from '../components/UI/NavBar';

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <Switch>
                    <Route exact path="/home" component={HomeScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        </>
    )
}

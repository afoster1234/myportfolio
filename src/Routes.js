import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar'
import Home from '../src/components/Home/Home';
import AboutMe from '../src/components/AboutMe/AboutMe';
import ContactMe from '../src/components/ContactMe/ContactMe'

export const BaseRouter = () => {

    return (
      <div>
        <NavBar />
        <Switch>
          <Route path = '/' component={Home} exact/>
          <Route path = '/aboutme' component={AboutMe} exact/>
          <Route path = '/contactme' component={ContactMe} exact/>
        </Switch>
      </div>
    );
  };
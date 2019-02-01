import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import House from './component/House/House';
export default <Switch>
    <Route exact path = '/' component={Dashboard}/>
    <Route path='/wizard' component={Wizard}/>
    <Route path='/' component={House}/>
</Switch>
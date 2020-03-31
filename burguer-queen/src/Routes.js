import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ComponenteVistaMesero from './Components/componente-vista-mesero';
import ComponenteChef from './Components/componete-chef';

const Routes = () => {

    return(
     <Switch>
        <Route exact path='/' component={ComponenteVistaMesero} />
        <Route  path='/Chefs' component={ComponenteChef} />
      </Switch>
    )
}

export default Routes;

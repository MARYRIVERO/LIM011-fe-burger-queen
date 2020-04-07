
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ComponenteVistaMesero from './Components/componente-vista-mesero';
import ComponenteVistaChef from './Components/componente-vista-chef';

const Routes = () => {
      return(
        <Switch>
           <Route exact path='/' component={ComponenteVistaMesero} />
           <Route path='/chef' component={ComponenteVistaChef} />
        </Switch>

      )}
export default Routes;
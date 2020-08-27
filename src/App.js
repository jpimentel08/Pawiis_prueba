import React from 'react';
import logo from './logo.svg';
import Home from './componentes/Home';
import Mascota from './componentes/Mascota'
import {Route, Switch, Redirect} from 'react-router-dom';
import Mascotas from './componentes/Mascotas';
import Nav from './componentes/Nav';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Nav />
    <Switch>
      <Redirect exact from="/mascotas" to="/mascotas/mascota" />
      <Redirect exact from="/" to="/mascotas/mascota" />
      <Route exact path="/mascotas/:page?" render={props => <Mascotas {...props} />} />
      
      <Redirect exact from="/mascotas" to="/mascotas/cliente" />
      <Redirect exact from="/mascotas" to="/mascotas/calendario" />
      <Redirect exact from="/mascotas" to="/mascotas/atencion" />
    </Switch>

    </React.Fragment>

    
  );
}

export default App;

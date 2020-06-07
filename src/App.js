import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Grants from './components/grants/Grants';
import Sidebar from './components/layout/Sidebar';
import Bar from './components/layout/Bar';

import GrantState from './context/grants/GrantState';

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <GrantState>
      <div className="contenedor-app">
        <Sidebar />
        <div className="seccion-principal">
          <Bar />

          <main>
            <div className="contenedor-grants">
              <Router>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/grants" /> 
                  </Route> 
                  <Route exact path="/grants" component={Grants} /> 
                  {/* <Route exact path="/grant:id" component={Grant} />  */}
                  <Route exact path="/prueba">
                    <p>Prueba</p>
                  </Route>
                </Switch>
              </Router>

            </div>
          </main>

        </div>
      </div>
      
    </GrantState>
  );
}

export default App;

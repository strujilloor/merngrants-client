import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Grants from './components/grants/Grants';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/grants" /> 
        </Route> 
        <Route exact path="/grants" component={Grants} /> 
        {/* <Route exact path="/grant:id" component={Grant} />  */}
      </Switch>
    </Router>
  );
}

export default App;

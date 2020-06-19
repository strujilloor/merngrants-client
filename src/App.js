import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout';
import Routes from './Routes';

import GrantState from './context/grants/GrantState';

function App() {

  // console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <GrantState>
    <Router>
      <Layout>
        <Routes/>
      </Layout>
    </Router>
    </GrantState>
  );
}

export default App;

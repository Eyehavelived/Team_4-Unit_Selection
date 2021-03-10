import React from 'react';
import Navigation from './components/common/navigation';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageRenderer from './page-renderer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={()=> <Redirect to="/home"/>}/>
          {/* Add new route for Scheduling page */}
          <Route path="/" render={()=> <Redirect to="/schedule"/>}/>
          <Route component={()=>404}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

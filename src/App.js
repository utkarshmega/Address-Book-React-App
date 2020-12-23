import logo from './logo.svg';
import './App.css';
import AddPersonForm from './components/add-person-form/add-person-form.jsx';
import HomePage from './components/homePage/homePage.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
}from "react-router-dom";

function App() {
  return (
      <div className="App">
      <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <AddPersonForm />
          </Route>
          <Route exact path="/add">
            <AddPersonForm />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      </div>  
    </div>
  );
}

export default App;

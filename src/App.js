import logo from './logo.svg';
import './App.css';
import AddPersonForm from './components/add-person-form/add-person-form.jsx';
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
          <Route exact path="/home">
            <AddPersonForm />
          </Route>
        </Switch>
      </Router>
      </div>  
    </div>
  );
}

export default App;

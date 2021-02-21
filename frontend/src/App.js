import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/navbar";
import { Navbar, Nav, NavDropdown, Button, Form, FormControl,} from "react-bootstrap";

import MakeAccount  from './pages/makeacc';
import Home         from './pages/home';
import Talk         from './pages/talk';
import About        from './pages/about';
import Account      from './pages/account';

function App() {
  return (
    
      <>
        <NavigationBar/>

        <Router>
          <Switch>
            <Route path="/signup" exact component={MakeAccount} />
            <Route path="/home" exact component={Home}/>
            <Route path="/talk" exact component={Talk}/>
            <Route path="/about" exact component={About}/>
            <Route path="/account" exact component={Account}/>
          </Switch>
        </Router>
        
      </>
  );
}

export default App;

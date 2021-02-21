import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/navbar";
//import { Navbar, Nav, NavDropdown, Button, Form, FormControl,} from "react-bootstrap";

import MakeAccount  from './pages/makeacc';
import Home         from './pages/home';
import Talk         from './pages/talk';
import About        from './pages/about';
import Makeacc      from './pages/makeacc';


function App() {
  return (
    
      <>
        <NavigationBar/>

        <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Makeacc} />
          <Route path="/home" exact component={Home}/>
          <Route path="/talk" exact component={Talk}/>
          <Route path="/about" exact component={About}/>
        </Switch>
        </Router>
        
      </>
  );
}

export default App;

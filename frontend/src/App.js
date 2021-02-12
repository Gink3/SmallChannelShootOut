import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Makeacc from './pages/makeacc';
import Home from './pages/home';


function App() {
  return (
    <Router>

    <>
      <Navbar collapseOnSelect expand="lg"  variant="dark" className="nav">
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features"className="nav">About</Nav.Link>
          
           
            <Nav.Link  className="nav btn-nav" href="#winner">Featured Channels</Nav.Link>
            <Nav.Link href="#talk" className="nav">Talk</Nav.Link>
            <NavDropdown title="Genre" id="collasible-nav-dropdown" className="nav">
              <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" >Free-style</NavDropdown.Item>
            </NavDropdown>
            <form >
              <div className="container">
  <input href="/searchengine" type="text" placeholder="Search..."/>
  <div className="search"></div>
  </div>
        </form>
            {/* <Form inline className="nav" >
              <FormControl
                type="text"
                placeholder="Search..."
                className="mr-sm-2 ml-xl-5 "
              />
              <Button variant="outline-success" className="">Search</Button>
            </Form> */}
          </Nav>
          <Nav>
           
             <Nav.Link href="/signup" className="nav btn-nav">SIGN UP</Nav.Link>
            <Nav.Link /* eventKey={2} */ href="#login" className="nav">
              SIGN IN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
       <Route path="/" exact component={Home}/>
        <Route path="/signup" exact component={Makeacc}/>
      </Switch>

      <div className="test-container">
        <h1 className="test">Hello World!</h1>
        <h1 className="next">Helloworld 2!</h1>
      </div>
    </>
    </Router>

  );
}

export default App;

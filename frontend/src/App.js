import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Button, Form, FormControl,} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Makeacc from './pages/makeacc';
import Home from './pages/home';


function App() {
  return (
    <Router>

    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">About</Nav.Link>

            <Button variant="outline-info" href="#features">
              Monthly Winner
            </Button>
            {/* <Nav.Link  href="#features">Featured Channels</Nav.Link> */}
            <Nav.Link href="#talk">Talk</Nav.Link>
            <NavDropdown title="Genre" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Free-style</NavDropdown.Item>
            </NavDropdown>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search..."
                className="mr-sm-2 ml-xl-5"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
          <Nav>
            <Button variant="outline-info" href="/signup">
              SIGN UP
            </Button>
            {/*  <Nav.Link href="#make_account">SIGN UP</Nav.Link> */}
            <Nav.Link eventKey={2} href="#login" className="">
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

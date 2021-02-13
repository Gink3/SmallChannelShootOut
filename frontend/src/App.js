import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Makeacc from "./pages/makeacc";
import Home from "./pages/home";
import NavigationBar from "./components/navbar";

function App() {
  return (
    
      <>
        <NavigationBar />

        <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Makeacc} />
        </Switch>
        </Router>
        
      </>
  );
}

export default App;

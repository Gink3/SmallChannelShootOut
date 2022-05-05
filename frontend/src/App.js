import  { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AuthContextProvider} from "./context/authcontext.js"
import NavigationBar  from "./components/navbar";
import Footer         from "./components/footer";
import VideoTemplate  from "./components/video-template";
import MakeAccount    from './pages/makeacc';
import Home           from './pages/home';
import Talk           from './pages/talk';
import Leaderboard          from './pages/leaderboard';
import Account        from './pages/account';
import BestChoice     from './pages/bestchoice';
import CreateThread   from './pages/createthread';

import Gaming         from './pages/voting/gaming';
import Sports         from './pages/voting/sports';
import Fashion        from './pages/voting/fashion';
import News           from './pages/voting/news';

function App() {
  return (
      <AuthContextProvider>

        <Router>

          <NavigationBar/>
          

          <Switch>
            
            <Route path="/signup" exact component={MakeAccount} />
            <Route path="/" exact component={Home}/>
            
            <Route path="/talk" exact component={Talk}/>
      
            <Route path="/leaderboard" exact component={Leaderboard}/>
            <Route path="/account" exact component={Account}/>
            <Route path="/bestchoice" exact component={BestChoice}/>
            <Route path="/createthread" exact component={CreateThread}/>

            <Route path="/voting/gaming" exact component={Gaming}/>
            <Route path="/voting/fashion" exact component={Fashion}/>
            <Route path="/voting/sports" exact component={Sports}/>
            <Route path="/voting/news" exact component={News}/>

            <Route path="/components/video-template" exact component={VideoTemplate}/>
          </Switch>  

          <Footer/>

        </Router>

        </AuthContextProvider>
  );
}

export default App;


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/home/home';
import Register from "./pages/Register/form"

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/Register"} exact component={Register}/>
      </Switch>
  
    </Router>

  );
}

export default App;

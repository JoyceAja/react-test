import React from "react";
import {Link, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Joke from "./Joke/All_Joke"
const styles = {
  container: {
    color: "yellow"
  }
};

const App = () => (
  <div style={styles.container}>
     <Link to="/">Home</Link>
     {" "}
     <Link to="/jokes"> All Joke </Link>
     {" "}
     <Link to="/jokes/random"> Random Joke </Link>
     
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/jokes" component={Joke} />
    </Switch>
  </div>
)

export default App;
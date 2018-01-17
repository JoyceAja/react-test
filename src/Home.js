import React from "react";
import {Route} from "react-router-dom";

const styles = {
  text: {color: "yellow"}
};

class Home extends React.Component{

  render(){
    return (
      <div style={styles.text}>
        <div>
          <h1>Joke Central</h1>
        </div>
      </div>
    )
  }
}

export default Home;
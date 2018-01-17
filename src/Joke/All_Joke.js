import React from "react";
import { Route } from "react-router-dom";
import RandomJoke from "./Random_Joke";

const jokeObj = [
  "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all",
  "Doctor: Im sorry but you suffer from a terminal illness and have only 10 to live Patient: What do you mean, 10? 10 what? Months? Weeks?! Doctor: Nine."
]

class Joke extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      jokes: jokeObj,
      Joke:""
    };
  }

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    const { text, jokes } = this.state;
    e.target.value = "";
    const newJoke = [...jokes, text];
    this.setState({
      jokes: newJoke
    });
  };

  pickJoke = () => {
    const { jokes } = this.state;
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    this.setState({
      Joke: randomJoke
    });
  };

  componentDidMount(){
    this.pickJoke()
  }

  renderJoke = () => {
    const { Joke } = this.state;
    return <RandomJoke val={Joke} func={this.pickJoke} />;
  };

  renderAllJokes = () => {
    const { text, jokes } = this.state;

    return (
      <div>
        <h1>All Jokes</h1>

        <input value={text} onInput={this.handleText} />
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>{jokes.map(joke => <li>{joke}</li>)}</ul>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Route exact path="/jokes/" render={this.renderAllJokes} />
        <Route exact path="/jokes/random" render={this.renderJoke} />
      </div>
    );
  }
}

export default Joke;


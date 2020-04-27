import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import axios from "axios";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

class CardList extends React.Component {
  render(props) {
    return (
      <div>
        {this.props.profiles.map((profile) => (
          <Card profile={profile} />
        ))}
      </div>
    );
  }
}

class Card extends React.Component {
  render(props) {
    return (
      <div style={{ margin: "1rem" }}>
        <img src={this.props.profile.avatar_url} />
        <div style={{ display: "inline-block", marginLeft: 10 }}>
          <div>{this.props.profile.name}</div>
          <div>{this.props.profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = {
    userName: "",
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="GitHub UserName"
            value={this.state.userName}
            onChange={(event) =>
              this.setState({ userName: event.target.value })
            }
            required
          ></input>
          <button>Add Card</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: testData,
  };

  addNewProfile = (profile) => {
    this.setState((previousState) => ({
      profiles: [...previousState.profiles, profile],
    }));
  };
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;

import React from "react";
import "h8k-components";
import "./App.css";
import "./index.css";
import axios from "axios";

const testData = [
    {
        name: "Keerthilingu",
        avatar_url: "https://avatars0.githubusercontent.com/u/62399797?v=4",
        company: "Philips",
    },
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
            <div className="card w-50 mx-auto">
                <table>
                    <thead>
                        <tr>
                            <th> Photo</th>
                            <th>UserInfo</th>
                        </tr>
                    </thead>
                    {this.props.profiles.map((profile) => (
                        <Card key={profile.avatar_url} profile={profile} />
                    ))}
                </table>
            </div>
        );
    }
}

class Card extends React.Component {
    render(props) {
        return (
            <tbody>
                <tr>
                    <td>
                        <img
                            src={this.props.profile.avatar_url}
                            alt=" of Github Users"
                        />
                    </td>

                    <td>
                        <div>{this.props.profile.name}</div>
                        <div>{this.props.profile.company}</div>
                    </td>
                </tr>
            </tbody>
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
                <button className="small">Add Card</button>
            </form>
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
            <div className="App">
                <h8k-navbar header={this.props.title}></h8k-navbar>
                <h1>{this.props.title}</h1>
                <div className="layout-row align-items-center justify-content-center my-20 navigation">
                    <Form onSubmit={this.addNewProfile} />
                </div>
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}

export default App;

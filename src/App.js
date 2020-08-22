import React from "react";
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
        name: "Shiv Yadav",
        avatar_url: "https://avatars0.githubusercontent.com/u/4556628?s=400&u=3c390f9b120ea323d07ddc56cbe454f1d37bcbcd&v=4",
        company: "Cisco",
    },
    {
        name: "Chinmay Dalvi",
        avatar_url: "https://avatars1.githubusercontent.com/u/14978241?s=400&u=f7d857967e60a7b86e7be406a6603641e698a4ac&v=4",
        company: "@HereMaps",
    },
    {
        name: "Lydia Hallie",
        avatar_url: "https://avatars0.githubusercontent.com/u/29451794?s=400&u=47e794ab07401636441a34d4d4cb1bcc1443f6ba&v=4",
        company: "@LydiaHallie",
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

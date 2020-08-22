import React from "react";
import "./App.css";
import "./index.css";
import testData from "./Data/data.js";
import Form  from "./Components/form.js";
import CardList from "./Components/cardList.js";
class App extends React.Component {
    state = {
        profiles: testData,
    };

    addNewProfile = (profile) => {
        this.setState((previousState) => ({
            profiles: [profile, ...previousState.profiles],
        }));
    };
    render() {
        return (
            <div className="App">
                <h1>{this.props.title}</h1>
                <div>
                    <Form onSubmit={this.addNewProfile} />
                </div>
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}

export default App;

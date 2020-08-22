import React from "react";
import Card from "./card.js";


class CardList extends React.Component {
    render(props) {
        return (
            <div>
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

export default CardList;
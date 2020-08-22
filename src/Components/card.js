import React from "react";

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

export default Card;
import React, { Component } from "react";

class UserGreeting extends Component {
    render() {
        return (
            <div>
                <h2>Hello, {this.props.firstName} {this.props.lastName}!</h2>
            </div>
        );
    }
}

export default UserGreeting;

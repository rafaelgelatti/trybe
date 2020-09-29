import React from 'react';

class Users extends React.Component {
  render() {
    return (
      <div>
        <h5>Users</h5>
        <p>First Mate {this.props.name}! {this.props.greetingMessage}!!</p>
      </div>
    );
  }
}

export default Users;

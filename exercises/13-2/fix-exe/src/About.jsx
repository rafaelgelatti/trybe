import React from 'react';

class About extends React.Component {
  render() {
    const { age } = this.props.match.params;
    // pass the age as url parameter
    return (
      <div>
        <h3>About</h3>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default About;

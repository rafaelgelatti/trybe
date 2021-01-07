import React from 'react';
import MyContext from './MyContext';

class Child extends React.Component {
  render() {
    return (
      <div>
        <p>child component</p>
        <MyContext.Consumer >
          {({ number, addNumber, subNumber }) => {
            // console.log(value)
            return (
              <div>
                <p>{`Number: ${number}`}</p>
                <button onClick={() => addNumber()}>+</button>
                <button onClick={() => subNumber()}>-</button>
              </div>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Child;

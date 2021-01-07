import React from 'react';
import Child from './Child';
import MyContext from './MyContext';

class Draft extends React.Component {
  constructor() {
    super();

    this.handleAddNumber = this.handleAddNumber.bind(this);
    this.handleSubNumber = this.handleSubNumber.bind(this);

    this.state = { number: 0 };
  }

  handleAddNumber() {
    this.setState((pValue) => ({ number: pValue.number + 1 }));
  }

  handleSubNumber() {
    this.setState((pValue) => ({ number: pValue.number - 1 }));
  }
  
  render() {
    const obj = {
      number: this.state.number,
      addNumber: this.handleAddNumber,
      subNumber: this.handleSubNumber,
    }
    return (
      <MyContext.Provider value={obj}>
        <Child />
      </MyContext.Provider>
    );
  }
}

export default Draft;

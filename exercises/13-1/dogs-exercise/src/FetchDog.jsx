import React from 'react';
import './FetchDog.css'

class FetchDog extends React.Component {
  constructor() {
    super();
    this.fetchDogImage = this.fetchDogImage.bind(this);
    this.renderImageElement = this.renderImageElement.bind(this);
    this.handleTerrier = this.handleTerrier.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.setList = this.setList.bind(this);
    this.state = {
      source: '',
      loading: true,
      isTerrier: false,
      name: '',
      arr: [],
    }
  }

  handleTerrier() {
    alert("Can't change, is a Terrier!");
  }

  handleInput({ target }) {
    this.setState ({ name: target.value });
  }

  setList() {
    const newItem = {
      name: this.state.name,
      path: this.state.source,
    }
    this.setState((previousState) => ({
      arr: [...previousState.arr, newItem],
    }));
    localStorage.setItem('Array de dogs', JSON.stringify(this.state.arr));
  }

  fetchDogImage() {
    const { isTerrier, source } = this.state;
    if (!isTerrier) {
      localStorage.setItem('url', source);
      this.setState(
        { loading: true },
        async () => {
          let response = await fetch('https://dog.ceo/api/breeds/image/random');
          const sourceObj = await response.json(); 
          const sourceUrl = sourceObj.message;
          const breed = sourceUrl.split('/');
          alert(breed[4]);
            this.setState({
            source: sourceUrl,
            loading: false,
          });
          if (sourceUrl.toLowerCase().includes('terrier')) {
            this.setState({
              isTerrier: true,
            });
            console.log(sourceUrl);
          }
        }
      )
    } else {
      this.handleTerrier();
    }
  }

  renderImageElement() {
    const { source } = this.state;
    return (
      <div>
        <div>
          <img src={source} alt="Dog" />
        </div>
        <div className="container">
          <button onClick={this.fetchDogImage}>Next</button>
        </div>
        <div className="container">
          <label htmlFor="name-input">Dê um nome ao dog: </label>
          <input type="text" id="name-input" onChange={this.handleInput} />
          <button onClick={this.setList}>Guarde o nome</button>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.fetchDogImage();
    localStorage.setItem('Array de dogs', JSON.stringify(this.state.arr));
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <p>Loading...</p>
    return (
      <div>
        <p>Dog image</p>
        {loading ? loadingElement : this.renderImageElement()}
      </div>
    );
  }
}

export default FetchDog;

import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  product = {
    name: "Langarmshirt - black/legion green/reflective orange",
    image: "https://mosaic01.ztat.net/vgs/media/catalog-sm/TP/72/1D/0D/FJ/11/TP721D0DF-J11@10.jpg",
    brand: "Nike Performance",
    price: {
      old: "€129,99",
      current: "€122,49"
    }
  };

  changeTest() {
    this.product.name = "sdfsdfsdfsf";
    console.log(this.product);
  }

  constructor(props) {
    super(props);
    this.changeTest = this.changeTest.bind(this);
  }

  processProductData(data) {
    if (data) {
      return JSON.stringify(data);
    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener("productLiked", () => {
      console.log("Product liked");
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.changeTest} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <h1>Product card</h1>
      <z-product-card product={this.processProductData(this.product)}></z-product-card>
      </div>
    );
  }
}

export default App;

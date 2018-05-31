import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import {products} from './mocks/products';

class App extends Component {
  products = products;

  changeTest() {
    this.product.name = "sdfsdfsdfsf";
    console.log(this.product);
  }

  constructor(props) {
    super(props);
    this.changeTest = this.changeTest.bind(this);
    this.state = {
      likedProducts: []
    }
  }

  processProductData(data) {
    if (data) {
      return JSON.stringify(data);
    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener("productLiked", (e) => {
      const liked = this.state.likedProducts;
      const currentProduct = JSON.parse(e.detail);
      liked.push(currentProduct);
      this.setState({
        likedProducts: liked
      });
    });
  }

  render() {
    const productsHtml = this.products.map((product, i) => {
      return (
        <div className="product-grid-item" key={i}>
          <z-product-card product={this.processProductData(product)}></z-product-card>
        </div>
      );
    });

    const likedHtml = this.state.likedProducts.map((product, i) => {
      return (
        <li key={i}>
          <img src={product.image} alt={product.name} />{product.name}
        </li>
      );
    });

    return (
      <div className="demo-container">
        <div className="col-left">
          <h2>Custom web component test</h2>
            {productsHtml}
        </div>
        <div className="col-right">
          <h2>Liked products</h2>
          <ul className="liked-products">
            {likedHtml}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

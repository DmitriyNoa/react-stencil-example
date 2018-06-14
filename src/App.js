import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import {products} from './mocks/products';



class App extends Component {
  products = products;

  constructor(props) {
    super(props);
    this.onProductLiked = this.onProductLiked.bind(this);
    this.state = {
      likedProducts: [],
      products: products
    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener("productLiked", this.onProductLiked)
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('productLiked', this.onProductLiked);
  }

  onProductLiked(event) {
    const liked = this.state.likedProducts;
    console.log(event.detail);
    liked.push(event.detail);
    this.setState({
      likedProducts: liked
    });

  }

  render() {
    const productsHtml = this.state.products.map((data, i) => {
      return (
        <div className="product-grid-item" key={i}>
          <z-product-card  ref={(el) => { if (el) {  el.product=data; } }}></z-product-card>
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
          <h2>React custom web component test</h2>
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

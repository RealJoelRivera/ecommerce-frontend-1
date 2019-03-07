import React, { Component } from "react";

class Purchase extends Component {
  render() {
    return (
      <div>
        <p>{this.props.purchase.total}</p>
        You bought:
        <ul>
          {this.props.purchase.products.map(product => (
            <li>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Purchase;

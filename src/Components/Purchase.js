import React, { Component } from "react";

class Purchase extends Component {
  render() {
    return (
      <div className="purchase-info">
        <p className="purchase-price">
          Total: ${this.props.purchase.total}
          <br />
          <br />
          You Bought:{" "}
        </p>
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

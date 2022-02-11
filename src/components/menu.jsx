import React, { Component } from "react";
import Cart from "./cart";
class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Menu</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td >
                  <Cart onClick={this.props.onClick} product={product}></Cart>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Menu;

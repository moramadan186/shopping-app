import React, { Component } from 'react';
import Product from './product';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        console.log("consturctor function from shoppingCart");
    }
    componentDidMount() {
        console.log("componentDidMount function from shoppingCart");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate function from shoppingCart")
    }
    render() {
        console.log("render function from shoppingCart")
        const { onReset, onDelete, onIncrement } = this.props;
        const products = this.props.products.filter(product => product.isInCart === true)
        return (
            <React.Fragment>
                <h1 className="m-1">shoppingCart</h1>
                <button onClick={onReset} className="btn btn-secondary btn-sm m-2">Reset</button>
                {/*4.1 Add more than one component ,
                   4.2 How to pass data to component,
                   4.3 Passing children to component
                */}
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            //4.6 Raising Events
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                        >
                            {/* <h4>{product.id}</h4> */}

                        </Product>)
                }
                <form action="">
                    {/* <input type="search" name="search1" id="search" />
                    <input type="search" name="search2" id="search" /> */}
                    <input type="text" name="text1" id="" />
                    <input type="submit" value="submit" />
                </form>

            </React.Fragment>
        );
    }
}

export default ShoppingCart;
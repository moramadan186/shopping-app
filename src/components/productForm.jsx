import React, { Component } from 'react';
import axios from 'axios';
class ProductForm extends Component {
    state = {
        name: "",
        price: "",
    }
    async componentDidMount() {
        let id = this.props.match.params.id;

        //when editing existed product 
        if (id !== "new") {
            const { data } = await axios.get('http://localhost:3000/products/' + id)
            //clone 
            const state = { ...this.state }
            //edit 
            state.name = data.name;
            state.price = data.price;
            //set state
            this.setState(state)
        }
    }
    handleSubmit = async e => {
        e.preventDefault();
        let id = this.props.match.params.id;
        //ADD
        if (id === "new") {
            //call backend
            let obj = { ...this.state, count: 0, isInCart: false }
            const returnAwait = await axios.post('http://localhost:3000/products', obj)
            console.log(returnAwait)
        }else {
            let editedObj = { ...this.state, count: 0, isInCart: false };
            await axios.put('http://localhost:3000/products/' + this.props.match.params.id, editedObj)
        }
        this.props.history.push('/admin');

    }
    handleChange = e => {
        // clone 
        let state = { ...this.state }
        // Edit 
        state[e.currentTarget.name] = e.currentTarget.value
        // set state 
        this.setState(state)
    }
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.match.params.id === "new" ? "Add Product" : "Edit Product"}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="text" className="form-control" id="price"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="btn btn-primary">{this.props.match.params.id === "new" ? "Add" : "Edit"}</button>
                </form>
                {/* <button onClick={() => this.props.addNewProduct(this.state.name,this.state.price)} className="btn btn-primary">Add</button> */}
            </React.Fragment>
        );
    }
}
export default ProductForm;
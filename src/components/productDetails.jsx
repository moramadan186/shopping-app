import React, { Component } from 'react';
const qs = require('query-string');
class  ProductDetails extends Component {

    handleSave = () => {
        // this.props.history.push('/cart')
        this.props.history.replace('/cart')
    }
    render() { 
        let ownedPro=this.props.products.filter((pro)=>pro.id===parseInt(this.props.match.params.id))[0]
        let obj=qs.parse(this.props.location.search)
        console.log(obj)
        return (
            <React.Fragment>
                <h2>id from URL : {this.props.match.params.id}</h2>
                <h2>Name : {ownedPro.name}</h2>
                <h2>count : {ownedPro.count}</h2>
                <button className="btn btn-primary btn-sm my-2" onClick={this.handleSave}>Save</button>
            </React.Fragment>
            
        );
    }
}
export default ProductDetails;

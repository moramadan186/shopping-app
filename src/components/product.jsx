/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Product extends Component {
    // state = {
    //     // name:"burger",
    //     name:this.props.product.name,
    //     // count:5,
    //     count:this.props.product.count,
    //     // imgUrl:"logo192.png",  
    //     // list:[]//["mohamed","ahmed","ali"]
    // }
    checkFun =() =>
    {return this.props.product.count!==0 ? "badge bg-primary m-2":"badge bg-warning m-2"}


    /*3.6 conditional rendering using function */
    // renderNames(){
    //     if(this.props.product.list.length===0) return(<h4>list is empty</h4> )
    //     return( 
    //     <ul>{this.props.product.list.map(item => <li key={item}>{item}</li>)}</ul>
    //     )
    // }


    /*3.7 Rebind "this" and using events in react  */
    // constructor(){
    //     super();
    //     this.incrementHandler=this.incrementHandler.bind(this)
    // }

    // incrementHandler(){
    //     this.setState({count:this.props.product.count+1})
    // }
    incrementHandler= ()=>{
        //3.8 Updating the state
        this.props.product.count++;
    }
   
    /*3.9 pass arguments to the handler */
    // incrementHandler= (num)=>{
    //     this.setState({count:this.props.product.count+num});
    // }

    // //1. use a new function 
    // increment=()=>{this.incrementHandler(3)}
    // // then call increment in the event

    //2. use bind function 
    // onClick={this.incrementHandler.bind(this,3)}

    //3. use anonymns func in the event

    componentWillUnmount(){
        console.log("one product UNMOUNTED")
    }
    render() { 
        console.log("render() from product")
        return (
            /*main product rendering*/
            <div className="row my-2 align-items-center align-content-center">
                <div className="col-2">
                    {/* {this.props.children} */}
                    <span className="m-2">
                      <Link to={`/products/${this.props.product.id}`}>{this.props.product.name}</Link>
                    </span>
                </div>
                <div className="col d-flex align-items-center">
                    <span className={this.checkFun()}>{this.props.product.count}</span>
                    <button onClick={()=>this.props.onIncrement(this.props.product)} className="btn btn-primary btn-sm " style={{fontSize:'20px',padding:"3px 5px"}}>🍔</button>
                    {/* /<button onClick={()=>{this.incrementHandler(3)}} className="btn btn-primary btn-sm m-2">+</button> */}
                    <span onClick={/*4.6 Raising Events*/() => this.props.onDelete(this.props.product)} style={{cursor:'pointer',fontSize:"20px"}}>
                        <i className="fas fa-trash m-2 text-danger"></i>
                    </span>
                </div> 
            </div>


            /*3.6 conditional rendering using function */
            // <div>
            //     {this.renderNames()}
            // </div>

            /*3.6 Conditional Rendering using  && operator*/
            // <div>
            //     {this.props.product.list.length===0 && <h4>list is empty</h4>}
            //     <ul>
            //         {this.props.product.list.map(item => <li key={item}>{item}</li>)}
            //     </ul>
            // </div>
            
        );
    }
}
 
export default Product;
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom"
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

import Navbar from "./navBar";
import ShoppingCart from "./shoppingCart";
import Home from './home';
import About from './about';
import Contact from './contact';
import ProductDetails from './productDetails';
import NotFound from "./notfound"
import Menu from './menu';
import Login from "./login";
import Admin from './admin';
import ProductForm from './productForm';

class App extends Component {
  state = {
    products: [
      // {id: 1, name: "Burger", count: 1, price:10,isInCart:false},
      // {id: 2, name: "Fries", count: 1, price:20,isInCart:false},
      // {id: 3, name: "cola", count: 1, price:30,isInCart:false}
    ],
    // selectedProducts:[],
    // cartColor:"gray"
  }
  async componentDidMount() {
    // const promise = fetch('https://jsonplaceholder.typicode.com/posts')
    //   promise.then(res=>res.json())// this line return new promise 
    //   .then(data=>console.log(data))

    // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // console.log(res)
    // const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // console.log(data)

    const { data } = await axios.get('http://localhost:3000/products');
    this.setState({ products: data })
  }
  mapCountSum = () => {
    let mapped = this.state.products.filter(p => p.isInCart === true && p.count !== 0).map(p => p.count), sumAll = 0;
    for (const count of mapped) sumAll += count;
    return sumAll;
  }
  /*4.6 Raising Events */
  handelDelete = async (proToDeleted) => {
    let oldProducts = [...this.state.products]

    //DELETE FROM FRONTEND
    /*to change the state , we going through 3 phases [clone , edit , setState()]*/
    // clone and edit 
    let newProducts = this.state.products.filter(p => p.id !== proToDeleted.id);
    // set state 
    this.setState({ products: newProducts })
    // if newproductsName was products --> this.setState(products)

    //DELETE FROM THE BACKEND
    try {
      await axios.delete('http://localhost:3000/products/' + proToDeleted.id);
    } catch (ex) {
      // alert("can't delete")
      toast.warn('Can\'t delete', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        this.setState({ products: oldProducts })
      }, 1000)

    }

  }
  // addNewProduct = (n, p) => {
  //   let products = [...this.state.products];

  //   products.push({ id: (products[products.length - 1].id + 1), name: n, count: 1, price: p, isInCart: false })

  //   console.log(products)
  //   this.setState({ products })


  // }
  handleInCartChange = product => {
    //clone 
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] }

    //Edit
    products[index].isInCart = !products[index].isInCart

    //set state
    this.setState({ products })
  }

  resetHandler = () => {
    //clone 
    let pro = [...this.state.products];
    // console.log(pro);
    //edit
    pro.map(p => p.count = 0)
    //setState
    this.setState({ products: pro })
  }

  /*4.8  Deep clone objects to maintain increment function */
  incrementFromCart = (proToIn) => {
    // let newProducts = this.state.products.filter(p => p.id === proToIn.id),
    // new2=this.state.products;
    // newProducts[0].count+=1;
    // var index = this.state.products.indexOf(proToIn);
    // if (index !== -1) {
    //     new2[index] =  newProducts[0];
    // }
    // this.setState({products:new2})

    let newProducts = [...this.state.products];
    let index = newProducts.indexOf(proToIn);
    newProducts = newProducts.map(pro => { return { ...pro } })
    newProducts[index].count++;

    this.setState({ products: newProducts })

  }
  // addProduct=(proToAdded)=>{
  //   let addedPro = this.state.products.filter(p => p.id === proToAdded.id)[0];
  //   console.log(addedPro)
  //   let newSelectedProducts=this.state.selectedProducts;
  //   if(newSelectedProducts.indexOf(proToAdded)===-1){
  //     newSelectedProducts.push(addedPro);
  //     this.setState({cartColor:"red"})
  //   }
  //   this.setState({selectedProducts:newSelectedProducts})
  // }


  render() {
    return (
      <React.Fragment>

        <Navbar productsLen={this.state.products.filter(p => p.isInCart === true && p.count !== 0).length}
          allLen={this.mapCountSum()} />
        <main className="container">
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/ab'><h2>ab</h2></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/c0'><h2>c0</h2></Route>



            <Route path='/admin' render={(hlm) => <Admin
              products={this.state.products}
              onDelete={this.handelDelete}
              {...hlm} />
            } />

            <Route path='/productForm/:id' render={(hlm) => <ProductForm
              // addNewProduct={this.addNewProduct}
              {...hlm} />
            } />

            <Route path='/menu' render={(hlm) => <Menu
              products={this.state.products}
              // selectedProducts={this.state.selectedProducts}
              // onAddPro={this.addProduct}
              onClick={this.handleInCartChange}
            // cartColor={this.state.cartColor}
            />} />

            <Route path='/cart' render={(hlm) => <ShoppingCart
              products={this.state.products}
              onReset={this.resetHandler}
              onDelete={this.handleInCartChange}
              onIncrement={this.incrementFromCart}
              {...hlm} />
            } />

            <Route path='/products/:id/:name?' render={(hlm) => <ProductDetails products={this.state.products} {...hlm} />} />


            <Route path='/login' render={(hlm) => <Login {...hlm} />} />

            <Route path='/notFound' component={NotFound}></Route>
            <Redirect from='/home' to='/' />
            <Redirect to="/notFound" />
            {/* <Route><h2>not found</h2></Route> */}
          </Switch>
        </main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import joi from "joi-browser"
class Login extends Component {
    state = {
        userEmail: "",
        password: "",
        errors: {}
    };
    // userEmail=React.createRef();
    // handleSubmit=(e)=>{
    //     e.preventDefault();
    //     let userEmail=this.userEmail.current.value;
    //     console.log(userEmail)
    // }
    handleChange = e => {
        // let userEmail={...this.state.userEmail} // this step can be excluded
        // userEmail=e.currentTarget.value;
        // this.setState({userEmail})

        // clone 
        let state = { ...this.state }
        // Edit 
        state[e.currentTarget.name] = e.currentTarget.value
        // set state 
        this.setState(state)

    }
    handleSubmit = e => {
        e.preventDefault(); // to prevent page reload 
        const errors = this.validate();
        if (errors) return;
        console.log("submit");
    }

    /* pure react validation */
    // validate = () => {
    //     const errors = {};
    //     if (this.state.userEmail.trim() === "") errors.userEmail = "userEmail is required.";
    //     if (this.state.password.trim() === "") errors.password = "Password name is required.";
    //     this.setState({ errors })
    //     return Object.keys(errors).length === 0 ? null : errors;
    // }

    /* validation using joi library */
    schema = {
        userEmail: joi.string().required(),
        password: joi.string().required()
    }

    validate = () => {
        const errors = {};
        // clone state to remove errors object
        const state = { ...this.state };
        delete state.errors;
        // joi.validate(object, schema, option object);
        let res = joi.validate(state, this.schema, { abortEarly: false })   // return object have error have details array have errors objects
        // to get all errors ,set abourtEarly:false
        console.log(res)
        // to get all errors ,set abortEarly:false 
        // if thier is no errors --> res.error=null
        if (res.error == null) {
            this.setState({errors:{}})
            return null
        }
        // if thier is errors --> res.error.details[0].message|path[0]
        for (const error of res.error.details) {
            errors[error.path] = error.message;
        }
        //set state 
        this.setState({ errors })
        return errors
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="my-3">Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="userEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="userEmail"
                            // ref={this.userEmail}
                            name="userEmail"
                            value={this.state.userEmail}
                            onChange={this.handleChange}
                        />
                        <div style={{ color: "red" }}>{this.state.errors.userEmail}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}

                        />
                        <div style={{ color: "red" }}>{this.state.errors.password}</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;

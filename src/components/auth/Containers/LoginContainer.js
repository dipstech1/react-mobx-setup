import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import 'antd/dist/antd.css';

import validator from 'validator';
import { Button } from 'antd';


import Login from "../Login";

@inject("authStore")
@observer
class LoginContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      errors : {
        email : [],
        password : []
      },
      isSubmit : false,
      loading : false
    }

    // throw new Error("hik")

  }

  setEmail = e => {
    this.props.authStore.setEmail(e.target.value);
  };

  setPassword = e => {
    console.log(e.target.value);
    this.props.authStore.setPassword(e.target.value);
  };

  validateLogin({email, password}){
    let flag = true;
    if(validator.isEmpty(email)){
      let emailValid = ["Please privide email"]
      this.setState({
         "email" : this.state.errors["email"] = (emailValid)
      })
      flag = false;
    }

    else if(!validator.isEmail(email)){
      let emailValid = ["Please enter a valid email"]
      this.setState({
        "email" : this.state.errors["email"] = (emailValid)
      })

      flag = false
  }

  else if(validator.isEmpty(password)){
    let passValid = ["Please provide password"]
    this.setState({
       "password" : this.state.errors["password"] = (passValid)
    })
    flag = false;
  }

  else{
    Object.keys(this.state.errors).map(key => {
      this.setState({
        [this.state.errors[key]] : []
      })
    });
    flag = true;
  }

    return flag
  }

  login = e => {
    e.preventDefault();
    this.setState({
      isSubmit : true,
      loading : true
    })

    let valid = this.validateLogin(this.props.authStore.loginData)

    // let {email, password} = this.props.authStore.loginData
    if(valid){
      this.setState({
        loading : false
      })
      this.props.authStore.login().then(res => {
        this.props.history.push("/dashboard");
      });
    }else{
      this.setState({
        loading : false
      })
    }
   
  };

  render() {
    console.log(this.props);
    return (
      // <Login props = {this.props}/>
      <div className="jumbotron">
        <form className="justify-content-center">
          {/* <div>
            <input
              type="text"
              placeholder="email"
              onChange={e => this.setEmail(e)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="pasword"
              onChange={e => this.setPassword(e)}
            />
          </div>

          <div>
            <input type="submit" value="Login" onClick={e => this.login(e)} />
            <Button variant="primary">Primary</Button>
          </div> */}

          <div className="form-group col-md-4 col-sm-4">
            <label>Email</label>
            <input
              type="email"
              name = "email"
              onChange={e => this.setEmail(e)}
              className="form-control input-normal"
              placeholder="email"
            />
            <div>
              {
                this.state.isSubmit ? 
                    <span>
                      {
                         this.state.errors.email.map((err) => (
                           <li>{err}</li>
                         ))
                      }
                    </span>
                    :
                    ""
              }
            </div>
          </div>
          <div className="form-group col-md-4 col-sm-4">
            <label>password</label>
            <input
              type="password"
              onChange={e => this.setPassword(e)}
              className="form-control input-normal"
              placeholder="password"
            />
            <div>
              {
                this.state.isSubmit ? 
                    <span>
                      {
                         this.state.errors.password.map((err) => (
                           <li>{err}</li>
                         ))
                      }
                    </span>
                    :
                    ""
              }
            </div>
          </div>
          {/* <div className="checkbox">
            <label>
              <input type="checkbox" onChange={this.onChange} />{" "}
              {options.checkbox.text}
            </label>
          </div> */}
          <Button type="primary"
            type="submit"
            onClick={e => this.login(e)}
            className="btn btn-danger"
            shape="round" loading= {false} 
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginContainer;

import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Button } from "react-bootstrap";

import Login from "../Login";

@inject("authStore")
@observer
class LoginContainer extends Component {
  setEmail = e => {
    console.log(e.target.value);
    this.props.authStore.setEmail(e.target.value);
  };

  setPassword = e => {
    console.log(e.target.value);
    this.props.authStore.setPassword(e.target.value);
  };

  login = e => {
    e.preventDefault();
    console.log(this.props.authStore.getJsonLoginData);
    this.props.authStore.login().then(res => {
      this.props.history.push("/dashboard");
    });
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
              onChange={e => this.setEmail(e)}
              className="form-control input-normal"
              placeholder="email"
            />
          </div>
          <div className="form-group col-md-4 col-sm-4">
            <label>password</label>
            <input
              type="password"
              onChange={e => this.setPassword(e)}
              className="form-control input-normal"
              placeholder="password"
            />
          </div>
          {/* <div className="checkbox">
            <label>
              <input type="checkbox" onChange={this.onChange} />{" "}
              {options.checkbox.text}
            </label>
          </div> */}
          <button
            type="submit"
            onClick={e => this.login(e)}
            className="btn btn-danger"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginContainer;

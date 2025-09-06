// src/components/LoginClass.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withNavigation } from "../utils/withNavigation";

class LoginClass extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // use this.props.navigate("/dashboard");
    this.props.navigate("/dashboard");
  };

  render() {
    // ... form markup (use this.handleSubmit)
  }
}

export default withNavigation(LoginClass);

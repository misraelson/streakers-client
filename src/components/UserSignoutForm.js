import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "reactstrap";
import Session from '../requests/session';

export default class UserSignoutForm extends Component {
  state = {
    toHome: false,
  }

  // AXIOS DELETE REQUEST FOR USER SIGN OUT
  handleSubmit = event => {
    event.preventDefault();

    Session.signOut().then( res => {
      // console.log(res);
      if (!res.data.errmsg) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('email')
        this.setState(() => ({
          toHome: true
        }))
        alert("Signed out");
      } else {
        alert("Well that was weird! Please try again.");
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  render() {
    if ( !localStorage.accessToken && this.state.toHome === true ) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    else {
      return (
        <Form className="Form" onSubmit={this.handleSubmit}>
          <br />
          <div className="Button">
            <Button className="submitButton" type="submit">Sign Out</Button>
          </div>
        </Form>
      )
    }
  }
}

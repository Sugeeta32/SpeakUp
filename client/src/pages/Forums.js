import React, {Component} from "react";
import API from "../utils/API";
import {Link} from "react-router-dom";

class Forums extends Component {
  state = {
    forums: [],
    title: "",
    description: "",
  };

  componentDidMount() {
    this.loadForums();
  }

  loadForums = () => {
    API.getForums()
      .then(res =>
        this.setState({forums: res.data, title: "", description: ""})
      )
      .catch(err => console.log(err));
  };

  deleteForum = id => {
    API.deleteForum(id)
      .then(res => this.loadForums())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.description) {
      API.newForum({
        title: this.state.title,
        description: this.state.description
      })
        .then(res => this.loadForums())
        .catch(err => console.log(err));
    }
  };

  render() {
    return( //HTML IN HERE!
      <h1>All Forums</h1>
    );
  }
}

export default Forums;
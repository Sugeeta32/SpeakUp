import React, {Component} from "react";
import API from "../utils/API";
import {Link} from "react-router-dom";

class Topics extends Component {
  state = {
    topics: [],
    subject: "",
    content: ""
  };

  componentDidMount() {
    this.loadTopics();
  }

  loadTopics = () => {
    API.getTopics()
      .then(res =>
        this.setState({topics: res.data, subject: "", content: ""})
      )
      .catch(err => console.log(err));
  };

  deleteTopic = id => {
    API.deleteTopic(id)
      .then(res => this.loadTopics())
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
    if (this.state.subject && this.state.content) {
      API.newForum({
        subject: this.state.subject,
        content: this.state.content
      })
        .then(res => this.loadTopics())
        .catch(err => console.log(err));
    }
  };

  render() {
    return( //HTML IN HERE!
      <h1>All Topics</h1>
    );
  }
}

export default Topics;
import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../utils/API";

class Topic extends Component {
  state = {
    topic: {}
  };
  // Grabs all posts from the topic with the _id of this.props.match.params.id
  // e.g. localhost:3000/forums/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getTopic(this.props.match.params.id)
      .then(res => this.setState({topic: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return( //HTML IN HERE!
      <h1>Some Topic</h1>
    );
  }
}

export default Topic;
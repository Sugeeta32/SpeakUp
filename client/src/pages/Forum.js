import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../utils/API";

class Forum extends Component {
  state = {
    forum: {}
  };
  // Grabs all posts from the forum with the _id of this.props.match.params.id
  // e.g. localhost:3000/forums/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getForum(this.props.match.params.id)
      .then(res => this.setState({forum: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return( //HTML IN HERE!
      <h1>Some Forum</h1>
    );
  }
}

export default Forum;
import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../utils/API";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from "../components/Jumbotron";

class Reply extends Component {
  state = {
    reply: {}
  };
  // Grabs a reply with the _id of this.props.match.params.id
  // e.g. localhost:3000/replies/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getReply(this.props.match.params.id)
      .then(res => this.setState({topic: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return( //HTML IN HERE!
      <h1>Some Reply</h1>
    );
  }
}

export default Reply;
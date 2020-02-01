import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../utils/API";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from "../components/Jumbotron";

class Category extends Component {
  state = {
    category: {}
  };
  // Grabs all the topics with the category of this.props.match.params.category
  // e.g. localhost:3000/topics/medical
  componentDidMount() {
    API.getCategory(this.props.match.params.category)
      .then(res => this.setState({category: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return( //HTML IN HERE!
      <h1>Some Category</h1>
    );
  }
}

export default Category;
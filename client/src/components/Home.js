import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from "../components/Jumbotron";
import axios from 'axios'
import './home.css'


// class Descriptions extends Component {
//     state = {
//         articles: []
//     }

//     componentDidMount(){
//         this.getDescriptions()
//     }

//     getDescriptions = () => {
//       axios.get("/all").then(res => {
//         console.log(res.data)
//       }) 
//     }
// } 
function Home() {
    return (
<div className="shadow-lg">
        <Jumbotron>
            
            <Container>
                <Row >
                  
                        <Col md={6} >{`SpeakUp is a share your story site where you can share your story anonymously and unburden yourself. Feel free to ask your question or share your story .`}</Col>
                        <Col md={{ span: 4, offset: 0 }}>{`💬 Share your story, strengthen your resilience`}</Col>
                        </Row>
                        
                    <Row>
                    
                    </Row>
                  <Row>
                      <Col md={6}></Col>
                    <Col md={{ span: 4, offset: 0 }}>{`🗨️ Help Others, share your wisdom`}</Col>
                    </Row>
                
            </Container>

        </Jumbotron>
        </div>
    );
}

export default Home;

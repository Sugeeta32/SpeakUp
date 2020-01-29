import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from "../components/Jumbotron";

function Home() {
    return (

        <Jumbotron>
            <Container>
                <Row >
                  
                        <Col md={6}>{`SpeakUp is a share your story site where you can share your story anonymously and unburden yourself. It only takes a minute to sign up.`}<button type = "button"className="btn">LogIn</button></Col>
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
    );
}

export default Home;

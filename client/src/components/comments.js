import React, { Component } from "react";
import axios from "axios";
import {Link } from "react-router-dom";
import FirstPost from "./FirstPost";
//import "./style.css"

class Comments extends Component {

    state = {
        story: "",
        author: "",
        comment: "",
        comments: [],
        loggedIn: false,
        username: null
    }

    componentDidMount() {
        console.log('componentDidmount called--');
        this.getUser();
        this.getBook();
        this.getComments();
    }
    getUser() {
        console.log('comments.js-->getUser called-->');
        axios.get('/user/').then(response => {
            console.log('comments.js-Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username
                })

            } else {
                this.setState({
                    loggedIn: false,
                    username: null
                })
            }
        })
    }

    getBook = () => {
        axios.get("/api/story/" + this.props.match.params.id).then(res => {
            console.log(res.data)
            this.setState({ story: res.data.description, author: res.data.author })
        })
    }

    getComments = () => {
        axios.get("/api/comment/" + this.props.match.params.id).then(res => {
            console.log(res.data)
            this.setState({ comments: res.data })
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        const post = {
            author: this.state.username,
            body: this.state.comment,
            postId: this.props.match.params.id
        }
        axios.post("/submit/" + this.props.match.params.id, post).then(res => {
            console.log(res.data)
        })
        this.setState({
            comment: ""
        })
        this.getComments()
    }

    render() {
        const loggedIn = this.state.loggedIn;
        console.log('loggedIn--->' + loggedIn);
        return (
            <div>
                <FirstPost
                    description={this.state.story}
                    author={this.state.author}
                />
                {this.state.comments.map(comment => (
                    <FirstPost
                        description={comment.body}
                        author={comment.author}
                    />
                ))}
                {loggedIn ? (
                    <form className="commentForm">
                        <div className="col-12 mt-5">
                            <textarea className="form-input"
                                type="text"
                                id="commentBox"
                                name="description"
                                rows="10"
                                cols="150"
                                id="commentBox"
                                value={this.state.comment}
                                onChange={(event) => this.setState({ comment: event.target.value })}
                            />
                        </div>
                        <button
                            className="btn btn-primary col-1"
                            id="addCommentButton"

                            onClick={(event) => this.handleSubmit(event)}
                            type="submit">Submit</button>
                    </form>
                ) : 
                (
                    <Link to={"/login"} className="btn btn-primary" id="logintoadd" role="button">Login to add to this story</Link>

                )}
            </div>
        )
    }
}
export default Comments;
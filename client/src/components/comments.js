import React, { Component } from "react";
import axios from "axios";
//import {Link } from "react-router-dom";
//import FirstPost from "./FirstPost";

class Comments extends Component{

    state ={
        story:"",
        author: "",
        comment: "",
        comments: [],
        loggedIn: false,
        username: null
    }

    componentDidMount(){
        this.getUser()
        this.getCategory()
        this.getComments()
    }
    getUser(){
        axios.get("/user").then(res=>{
            if(res.data.user){
                this.setState({
                    loggedIn:true,
                    username:res.data.user.username
                }) 

            }else{
                this.setState({
                    loggedIn: false,
                    username: null
                })
            }
        })
    }

    getCategory =()=>{

        axios.get("/api/story/" + this.props.match.params.id).then(res =>{
            this.setState({
                story: res.data.description,
                author: res.data.author
            })
        })
    }

    getComments =() =>{
        axios.get("/api/comment" + this.props.match.params.id).then(res=>{
            this.setState({
                comments:res.data
            })
        })
    }

    handleSubmit(event){

    }
}
export default Comments;
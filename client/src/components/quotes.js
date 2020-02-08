


import React, { Component } from 'react';
import axios from 'axios';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state={
            quote:null,
            color:''
        }
        this.getQuote = this.getQuote.bind(this);
    }

    changeBg(){
        var colors=['#cddc39','#d4e157', '#cddc39','#d4e157'];
        var x = Math.floor((Math.random() * 4) + 0);
        var color=colors[x];
        this.setState({color:color});
    }    

   

getQuote(){
    axios({
        "method":"GET",
        "url":"https://joke3.p.rapidapi.com/v1/joke",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"joke3.p.rapidapi.com",
        "x-rapidapi-key":"2c2dfb1252msh21ed59ba5485e27p1292dejsn10ebb02ca241"
        }
        })
        
        .then((response)=>{
        
          console.log('i am still executing'+response.data.content)
          this.setState({quote:response.data.content},this.changeBg());
        console.table( this.state.quote);

        })
        .catch((error)=>{
          console.log(error)
        })
    
}

    componentDidMount(){
        this.getQuote();
    }

    render() {
        
        return (
            <div class="alert " role="alert" style={{background:this.state.color, textAlign:"center"}} >
                {this.state.quote !==null && <p>{this.state.quote} 
                <button className="btn btn-secondary active" style={{marginLeft: "20px"}} onClick={this.getQuote} >Stress Buster</button></p> }
            </div>
        );
    }
}

export default Quote;


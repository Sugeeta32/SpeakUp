import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
class Emotion extends Component{
    state = {
        articles: []
}
componentDidMount(){
    this.getEmotion()
}
getEmotion = ()=>{
    axios.get("/emotion").then(res=>{
this.setState({ articles: res.data})

    })

}
render(){
    const loggedIn = this.props.loggedIn;
    return(
        <Fragment>
            <div className = "genres">
            <ul>
                        <li><Link to="/forum">All</Link></li>
                        <li><Link to="/forum/funny">Family</Link></li>
                        <li><Link to="/forum/horror">Social</Link></li>
                        <li><Link to="/forum/romance">Health</Link></li>
                        <li><Link to="/forum/mystery">Psychological</Link></li>
                        <li><Link to="/forum/drama">Emotional</Link></li>
                        <li><Link to="/forum/fantasy">Financial</Link></li>
                    </ul>

            </div>
            
        </Fragment>
    )
}
}
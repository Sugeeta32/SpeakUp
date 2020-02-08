import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Results from '../Result'
import { Link } from 'react-router-dom'
//import "../../components/style.css"


class Health extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.getHealth()
    }

    getHealth = () => {
        axios.get("/health").then(res => {
            this.setState({ articles: res.data })
        })
        console.log(this.state.articles)
    }

    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <Fragment>
                <div className="genres">
                    <ul>
                    <li><Link to="/forum">All</Link></li>
                        <li><Link to="/forum/Family">Family</Link></li>
                        <li><Link to="/forum/social">Social</Link></li>
                        <li><Link to="/forum/health">Health</Link></li>
                        <li><Link to="/forum/psych">Psychological</Link></li>
                        <li><Link to="/forum/emotion">Emotional</Link></li>
                        <li><Link to="/forum/finance">Financial</Link></li>
                    </ul>
                </div>
                <div className="jumbotron jumbotron-fluid" id="mysterytron">
                    <div className="container">
                        <h1 className="display-4 text-center">Health Stories</h1>
                        <p className="lead text-center">...</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="createNew float-right">
                            {loggedIn ? (
                                <Link to="/newstory" className="btn  float-right" role="button">Create New Story</Link>
                            ) : (
                                    <Link to="/login" className="btn  float-right" role="button">Create New Story</Link>
                                )}
                        </div>
                        <div className="posts col-md-12">
                            <ul>
                                {this.state.articles.map(article => (

                                    <Results
                                        key={article._id}
                                        id={article._id}
                                        title={article.title}
                                        author={article.author}
                                        description={article.description}
                                    />

                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Health;
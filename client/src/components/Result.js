import React from 'react'
import { Link } from 'react-router-dom'

const Results = props => (
    <li className="card border-success mb-3">
        <div className="shadow">
        <div className="card-header" style ={{ background:"#689F38", color:"white" }}>{props.title}</div>
        <div className="card-body">
            <p className="card-text">{props.description}</p>
            <p className="card-text">Author: <strong>{props.author}</strong></p>
            <Link to={"/story/" + props.id}  className="btn btn-light" role="button">Add to this story</Link>
        </div>
        </div>
    </li>
)

export default Results
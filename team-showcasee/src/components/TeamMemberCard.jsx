import React from 'react';
import './TeamMemberCard.css';

function Card({membername,job}){
    return(
        <div className="card">
            <h2>{membername}</h2>
            <p>{job}</p>
        </div>
    )
}

export default Card;
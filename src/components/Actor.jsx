import React from 'react';
import './css/Actor.css'
import img from './img/actor.jfif'

const Actor = ({ ActorName }) => {
    return (
        <>
       
        <div className="Act" >
            <img src={img} alt="" />
            <p>{ActorName}</p>
        </div>
        

        </>

    )
}

export default Actor
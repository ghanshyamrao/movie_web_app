import React from "react";
import './css/btn.css'
import {Grid}  from '../components'

const LoadMorebtn=()=>{
    const btn = ()=>{
        console.log('working')
        return(
                <Grid moviename='movie'/>
        )
    }


    return(
        <>
        <div className="more">
        <button onClick={btn}>LoadMore-</button></div>
        </> 
    )
}

export default LoadMorebtn
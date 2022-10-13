import React from 'react'
import './css/popup.css'
import img from './img/capt.jpg'

const PopUP=()=>{
    return (
        <React.Fragment>
            <div className='popup'>
                                <div className='pop_img'>
                <img src={img} alt="" />
                </div>
                </div>
        </React.Fragment>
    )
}

export default PopUP
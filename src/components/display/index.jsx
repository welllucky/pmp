import '../../assets/css/text.css'
import './style.css'

import React from 'react'

export default function display({title, data}){
    return(
        <div className={title + '-display'}>
            <h4 className='title'>{title}</h4>
            <p className='data-info'>{data}</p>
        </div>
    )
}
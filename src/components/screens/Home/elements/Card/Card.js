import React, { Component } from 'react'
import Cardimg from './Group 241.png'
import './CardStyle.css'
export class Card extends Component {
  render() {
    return (
      <div className='card'>
        <div className=''>
          <img className='image-card' src={Cardimg} alt='card' />            
         </div>
      </div>
    )
  }
}

export default Card

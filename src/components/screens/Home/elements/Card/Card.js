import React, { Component } from 'react';
import './CardStyle.css'
import { plants }  from './data/plants.data.js'

function Card(props) {
    return (
      <div className='card'>
        {plants.map((plant) => (
          <div key={plant.id} className='card__item'>
            <div className='card__item__image'>
              <img src={plant.image} alt={plant.name} />
            </div>
            <div className='card__item__header'>
              <h3>{plant.name}</h3>
              <h3>${plant.price}</h3>
            </div>  
            <div className='card__pit'>
              <div className='card__pit__leftside'>
                <p style={{paddingBottom:'15px'}}>Pot color:</p>
                 {/* dot color import { connect } from 'react-redux' */}
                <span class="dot" style={{backgroundColor:'#39362E'}}></span>
                <span class="dot" style={{backgroundColor:'#F3A195'}}></span>
                <span class="dot" style={{backgroundColor:'#EFEAE6'}}></span>
                <span class="dot" style={{backgroundColor:'#C38364'}}></span>
              </div>
              <div className='card__pit__rightside'>
                <div className='card__pit__rightside__button'>
                  <button className='card__pit__rightside__button__buy'>Buy</button>
                </div>
              </div>
            </div> 

          </div>
        ))}
      </div>
    )
}
  
export default Card

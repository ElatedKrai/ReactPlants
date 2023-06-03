import React, { Component } from 'react'
import './SectionTwoStyle.css'
import Card from '../Card/Card'
export class SectionTwo extends Component {
  render() {
    return (
       <div className='section-two'>
          <div className='container'>
             <header className='header-section-two'>
                <h2 className="title-features">Features</h2>
                <a className='ViewAll' href=''> View All</a>
          </header>
        </div>
        <div className='container'>
          <div className='cards'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
      </div>
    )
  }
}

export default SectionTwo

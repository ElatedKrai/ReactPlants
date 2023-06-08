import React, { Component } from 'react'
import './SectionTwoStyle.css'
import Card from '../Card/Card'
import { plants } from '../Card/data/plants.data'
import Search from '../SearchPanel/SearchPanel';

export class SectionTwo extends Component {
  render() {
    return (
       <div className='section-two'>
          <div className='container'>
             <header className='header-section-two'>
            <h2 className="title-features">Features</h2>
            <Search />
                <a className='ViewAll' href=''> View All</a>
            </header>
        </div>
        <div className='container'>
          <div className='cards'>
            {/* check information, massive about plants */}
            {plants.length ? (
              <Card key={plants[0].id} plant={plants[0]} />)
              // else, if there is no plants, show this message
              : (
                <div className='none-plants'>
                  <h2>No plants in the shop :(</h2>
               </div>)}
          </div>
       </div>
      </div>
    )
  }
}

export default SectionTwo

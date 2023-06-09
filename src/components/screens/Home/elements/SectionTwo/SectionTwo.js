import './SectionTwoStyle.css'
import Card from '../Card/Card'
import { plants } from '../../../../data/plants.data.js';
import Search from '../SearchPanel/SearchPanel';

function SectionTwo(){
    return (
       <div className='section-two'>
          <div className='container'>
             <header className='section__header'>
            <h2>Features</h2>
            <Search />
                <a className='ViewAll' href='home'> View All</a>
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

export default SectionTwo

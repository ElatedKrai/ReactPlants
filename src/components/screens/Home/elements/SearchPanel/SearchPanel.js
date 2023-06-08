import './SearchPanelStyle.css'
import Search from '../Navbar/SearchButton.svg'
function SecondThirdStyle() {
   return (
       <div className='searchpanel'>
            <input className="searchpanel__search" type="text" id="name" placeholder='Search flowers...' />
            <div className='search_button'>
               <img className='image__search__button' src={Search} alt='SearchButton'/>
               <button className='search_button' />
            </div>
       </div>
      
   )
}

export default SecondThirdStyle;
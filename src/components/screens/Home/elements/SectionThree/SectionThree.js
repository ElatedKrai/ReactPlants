import React from 'react'
import './SectionThreeStyle.css'
// import Article from '../Article/Article'


function SectionThree() {
   return (
      
      <div className='sectionthree'>
         <div className='container'>
            <div className='section__header'>
               <h2>New Article</h2>
            </div>
         </div>
         <div className='container'>
               <div className='articles'>
                  
                  
               <a className='article article2' href='#' >   
                     <div className='article__content'> 
                        <div className='article__title'>
                           <h3>Title</h3>
                        </div>  
                        <div className='article__more__information'>
                           <p> more informati on →</p>
                        </div>
                     </div>
                  </a>

                  <a className='article article3' href='#' >   
                    <div className='article__content'> 
                        <div className='article__title'>
                           <h3>Title</h3>
                        </div>  
                        <div className='article__more__information'>
                           <p> more informati on →</p>
                        </div>
                     </div>
                  </a>

                  <a className='article article4' href='#'>   
                    <div className='article__content'> 
                        <div className='article__title'>
                           <h3>Title</h3>
                        </div>  
                        <div className='article__more__information'>
                           <p> more informati on →</p>
                        </div>
                     </div>
                  </a>
                <a className='article article2' href='#' >   
                    <div className='article__content'> 
                        <div className='article__title'>
                           <h3>Title</h3>
                        </div>  
                        <div className='article__more__information'>
                           <p> more informati on →</p>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      
   )
}

export default SectionThree  
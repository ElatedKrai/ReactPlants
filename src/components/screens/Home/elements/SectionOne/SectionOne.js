import "./SectionOneStyle.css";
import PreSaleCard from "../PreSaleCard/PreSaleCard";
function SectionOne () {
   return (
      <div className="section-one">
         <div className="container">
            <div className="left-side-section-one">
               <div>
                  <h1>Happiness blooms from within</h1>
               </div>
               <div className="description-section-one">
                  <p>Our environment, the world in which we live and <br></br> work, is a mirror of our attitudes and expectations.</p>
               </div>
               <div className="buttons-section-one">
                  <div className="button-shopnow">
                     <button> Shop Now</button>
                  </div>
                  <div className="button-explore-more">
                     <a href="">Explore plants →</a>
                  </div>
               </div>
            </div>
            <div className="right-side-section-one">
               <div className="preSale">
                  <PreSaleCard />
               </div>
            </div>
         </div>
      </div>
   );
}
   
export default SectionOne;
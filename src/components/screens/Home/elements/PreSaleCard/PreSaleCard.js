// import style
import "../PreSaleCard/PreSaleCardStyle.css"

import Flower2 from "../SectionOne/Flower2.webp";

function PreSaleCard() {
  return (
    <div>
      {/* make card with background image */}
      <div className="presalecard">
        <div className="presalecard-content">
          <h2 className="presalecard-title">Anthurium Flower</h2>
          <p>Money Tree Plant features a uniquely braided trunk with clusters of green leaves at top.Exclusive Artisan™ basket in hand woven ...</p>
         <button className="presalecard-button"> <a href="" className="presalecard-button">Read more</a> </button>
      </div>
        </div>
    </div>
  );
}



export default PreSaleCard;
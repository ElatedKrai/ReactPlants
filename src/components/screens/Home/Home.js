
import './HomeStyle.css';
import SectionOne from './elements/SectionOne/SectionOne';
import SectionTwo from './elements/SectionTwo/SectionTwo';
import SectionThree from './elements/SectionThree/SectionThree';
import Navbar from './elements/Navbar/Navbar';



function Home() {
  return (
    <div>
      <Navbar />
      <section>
       <SectionOne />
      </section>
      <section>
        <SectionTwo />
      </section>
      <section>
        <SectionThree/>
      </section>
    </div>
  );
}

export default Home;

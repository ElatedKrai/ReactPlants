
import './HomeStyle.css';
import SectionOne from './elements/SectionOne/SectionOne';
import SectionTwo from './elements/SectionTwo/SectionTwo';
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
    </div>
  );
}

export default Home;

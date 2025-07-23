import './Home.css'
import Foooter from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={Hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p className='caption-text'>
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul
            embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="hero-btns">
            <button className='btn '><img src={play_icon} alt="" className='play-icon' />Play</button>
            <button className='btn dark'><img src={info_icon} alt="" className='play-icon' />More Info</button>
          </div>
          <div className="title-card">
            <TitleCards title="Popular On Netflix" category={'upcoming'} />
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Popular Movies" category={'popular'} />
        <TitleCards title="Top pics for you" category={'top_rated'} />
        <TitleCards title="Only on Netflix" category={'now_playing'} />
        <TitleCards title="Upcoming" category={'upcoming'} />
      </div>
      <Foooter />
    </div>
  )
}

export default Home;
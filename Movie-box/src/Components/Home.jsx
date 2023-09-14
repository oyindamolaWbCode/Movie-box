import React from 'react';
import { Link } from 'react-router-dom';
import poster from '../assets/Poster.png';
import tv from '../assets/tv.png';
import search from "../assets/Search.png";
import menu from "../assets/Menu.png";
import mv from "../assets/MV.png";
import tomatoes from "../assets/PngItem_1381056 1.png";
import youtube from "../assets/Button.png";
import anchor from "../assets/Chevron right.png"
import ExtractedMovies from "./ExtractedMovies"

const Home = () => {
    return(
        <div className="Home-page">
          <div className='upper-part'>
            <img src={poster} alt="" className='poster-img'/>
            <div className='nav-part'>
              <div className='logo'>
                <img src={tv} alt='' />
                <h2 className='mob'>MovieBox</h2>
              </div>
                 <div className='searchBar'>
                <input type="text" placeholder='What did you want to watch'/>
                <img src={search} alt="" className='sear'/>
              </div>
              <div className='sign-Menu'>
                <p>Sign In</p>
                <img src={menu} alt="" />
              </div>
              </div>
              <div className='trendy'>
                <h1 className='title'>John Wick 3 : <br />Parabellum</h1>
                <div className='recommendation'>
                  <div className='mv'>
                    <img src={mv} alt="" className='no-shrink'/>
                    <h6 className='rating'>86.0/100</h6>
                  </div>
                  <div className='reviews'>
                    <img src={tomatoes} alt="" className='no-shrink'/>
                    <h6 className='rating'>97%</h6>
                  </div>
                </div>
                <p className='summary'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                <img src={youtube} alt="" />
              </div>
            </div>
            <div className='movie-category'>
              <div className='featured-arrow'>
                <h4 className='featured'>Featured Movie</h4>
                <div className='more'>
                  <p style={{color: "#BE123C"}}>See More</p>
                  {/* <img src={anchor} alt="" className='anchor' /> */}
                </div>
              </div>
              < ExtractedMovies />
            </div>
          </div>
      );
};

export default Home;
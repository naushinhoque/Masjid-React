import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
      <nav>
          <div className="logo">
            <h3>Masjid Abu-Bakr</h3>
            <i className="place-holder"></i>
          </div>
         
          <div className="links">
          <Link to="/">Home </Link>
            <a href="#top">Home</a>
            <a href="#community">Community</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="top">
        <div className="titles">
          <h1>"As-Salaam-Alaikum"</h1>
          <h2>Fellow Brothers And Sisters  </h2>
        </div>
      </section>

      <section id="community">
        <h2>Community</h2>
        <div className="container">
        <Link to="/zakat">Zakat</Link>
          <div className="box">
            <i className="zakat-charity"></i>
            <h3>Zakat/Charity</h3>
          </div>
          <div className="box">
            <i className="volunteering"></i>
            <h3>Volunteering</h3>
          </div>
          <div className="box">
            <i className="rec-center"></i>
            <h3>Rec-Center</h3>
          </div>
          <div className="box">
            <i className="islamic-studies"></i>
            <h3>Islamic Studies</h3>
          </div>
        </div>
      </section>

      <section className="hero-image">
        
      </section>
      
      <section id="about">
       
        <div className="text">
          <i className="fas fa-paw"></i>
          <h2>Our Story</h2>
          <p>Masjid Abu-Bakr has been in Houston for over a decade. Loved and maintaned by many of the members of our community. We hold Jummah every Friday (2 jammats for convenice). We hold events throuh out the week that will be present and updated on our website and social media. Our privalge and goal is to obey the word of allah and help our community financially and in faith. Come talk to our imams and visit our school! Give zakat to go to your local community and to go overseas to our brother and sister in need!</p>
        </div>
      </section>

      <section className="photos">
        <div className="pictures">
            <h2>The Gallery</h2>
            <img src="https://lh3.googleusercontent.com/p/AF1QipOyFBBcFdzbaec3dfuW84OAV06YERcHglgmOVG_=s1360-w1360-h1020"/>
        </div>
        <div className="ramadan">
            <h2>Ramdan Pictures</h2>
            <img src="https://npr.brightspotcdn.com/dims4/default/0c6ae4f/2147483647/strip/true/crop/5184x3456+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwlrn%2Ffiles%2F201407%2FIMG_0267_0.JPG"/>
        </div>
        <div className="masjid-cats">
            <h2>The Masjid Cats</h2>
            <img src="https://thumbs.dreamstime.com/b/little-cats-20284533.jpg"/>
        </div>
      </section>

      <section id="contact">
        <h2>Come Pray With Us!</h2>
        <div className="left">
          <div className="contact-info">
            <i className="far fa-tractor"></i>
            
            <address>
              <h3>Find Us At:</h3>
              <p>8830 Galveston Rd, Houston, TX 77034</p>
              
              <a href="tel:713-947-0394">713-947-0394</a>
              <a href="abubakrmasjid@gmail.com">abubakrmasjid@gmail.com</a>
            </address>
          </div>
        </div>

        <div className="right">
          <div className="img-container">
            <img src="https://lh3.googleusercontent.com/p/AF1QipOvaAMz1oHzS7h7ucYRgZuH3u4yDl86TXHLcek5=s1360-w1360-h1020"/>
          </div>
        </div>
      </section>
      
      <footer>
        <div>
          <h3>Connect With Us On The Socials</h3>
          <nav class="social">
            
            <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/ABICISGH/" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter-square"></i></a>
          </nav>
        </div>
        
          <nav className="main">
            <a href="#top">Home</a>
            <a href="#community">Community</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
      </footer>
    </div>
  )
}

export default App;

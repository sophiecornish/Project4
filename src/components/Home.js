import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <section>
      <div className="homepageBox has-text-centered">
        <h3 className="homepageText">INTRODUCING SOMA</h3>
        <Link className="homepageTextSubtitle" to="/products">SHOP THE COLLECTION</Link>
      </div>
      <Link to="/products">
        <video id="background-video" loop autoPlay>
          <source src="/assets/low-quality-soma.mp4" type="video/mp4" />
          {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
        Your browser does not support the video tag.
        </video>
      </Link>
    </section>
  );
};



export default Home;

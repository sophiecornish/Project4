import React from 'react';

const Home = () => {

  return (

    <video id="background-video" loop autoPlay>
      <source src="/assets/low-quality-soma.mp4" type="video/mp4" />
      {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
        Your browser does not support the video tag.
    </video>
  );
};



export default Home;

import React from 'react';
import Typed from "react-typed";

export default function Hero() {
  return (
    <div className='parent'>
      <div className="image-blob">
        <img src="https://avatars.githubusercontent.com/u/89240074?v=4" alt="" className="blob-image" />
      </div>
      <div className="animated-typing">
        <Typed
          strings={[
            "Hello, \n I'm Mrinmay Das.",
            "Hello, \n I Love Software Development.",
            "Hello, \n I Like playing with techy gadgets.",
            "Hello, \n I am an IOT developer as well.",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </div>
      <div className="additional-text">
        <p>Adventurous technophile fueled by a mad love for all things technology. I thrive on the thrill of <br/>coding, web development, and diving into the vast world of possibilities. You'll often find me tinkering <br/> with IoT devices, combining my passion for innovation and creativity to craft new and exciting IoT solutions.<br/> Constantly exploring the ever-evolving tech landscape, I embrace the challenges it presents, pushing boundaries <br/> and turning ideas into reality. Join me on this exhilarating journey of transforming concepts into captivating digital<br/>experiences and shaping the future with every line of code.</p>
      </div>
    </div>
  );
}

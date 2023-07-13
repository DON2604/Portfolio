import React from 'react'
import Typed from "react-typed";
export default function Hero() {
    return(
        <>
        <div className='parent'>
        <div class="image-blob">
        <img src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr" alt="" class="blob-image"/>
      </div>
      <div className="animated-typing">
      <Typed
        strings={[
          "Hello, \n I'm Mrinmay Das",
          "Hello, \n I Love Software Development",
          "Hello, \n I Like playing with techy gadgets",
          "Hello, \n I am an IOT developer as well",
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop
      />
</div>
</div>
</>
    )
}
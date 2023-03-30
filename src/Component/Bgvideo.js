import React from 'react'
import video2 from './Vid/video2.mp4'
import './Bgvideo.css'


function Bgvideo() {
  return (
       
     <>
         <video src={video2}autoPlay loop muted ></video>
               <div className='bul'>
                <div className='learn' align="center" >

                  <p>"LEARN DOESN'T JUST "HAPPEN"!</p>
                  
                  <section>IT "REQUIRES CAREFUL PLANING AND IMPLEMENTATION."</section>
                  <br/>
                 
                  <div className='easy'>EASY WITH OUR CSELP </div>  

                </div>
                </div>
          
      </>   
   
  )
}

export default Bgvideo
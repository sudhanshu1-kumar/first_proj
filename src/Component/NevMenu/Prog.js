import React from 'react'

import './Prog.css'
import { useEffect,useState,useRef } from 'react'

function Prog() {

  

    const [data, setData] = useState({
      name: "",
      last: "",
      email: "",
      message: "",
      mobile: "",
    })
  
    const { name, email,  mobile, } = data
  
    const handleChang = (e) => {
      setData({ ...data, [e.target.name]: e.target.value});
    }
  
    const handleSubmi = async e => {
      e.preventDefault();
  
      try{
        const response = await fetch("https://v1.nocodeapi.com/sudhanshu/google_sheets/CdgrJqdJPQODxkhB?tabId=Sheet2",{
          method: 'POST',
          headers: {
            "Content-Type": 'application/json'
  
          },
          body: JSON.stringify([[name, email,  mobile,  ]]),
        })
        
      }catch (err){
        console.log(err)
      }
    }




  let [timerDays, setTimerDays] = useState ('00');
  let [timerHours, setTimerHours] = useState ('00');
  let [timerMinutes, setTimerMinutes] = useState ('00');
  let [timerSeconds, setTimerSeconds] = useState ('00');

  let interval =useRef();
  let startTimer =() => {
    let countdownDate = new Date('April 30 2023 00:00:00').getTime();
    interval =setInterval(() => {
        let now = new Date().getTime();
        let distance = countdownDate -now;
        let days = Math.floor(distance/(1000*60*60*24));
        let hours = Math.floor((distance % (1000*60*60*24)/(1000 * 60 * 60)));
        let minutes = Math.floor((distance % (1000*60*60))/(1000*60));
        let seconds = Math.floor((distance % (1000*60))/(1000));

        if(distance<0){
          clearInterval(interval.current);
        }else{
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }        
    },1000)
  }
  useEffect(() =>{
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  })

  return (
    <>
    <div className='bgmg' >
      <div className='bulr'>
        
      <div className='rest'>
            <h1>Hurry Up Don't Wait For Last Date</h1>
          </div>

      
          <div className='time'>
          
                  <div className='Days' >
                  <h1 className='days'>{timerDays}</h1> 
                      <h1>days</h1>
                  </div>
                  <div className='Hours'>
                      <h1 className='days'>{timerHours}</h1>
                      <h1>hours</h1>
                  </div>
                  <div className='Minutes'>
                      <h1 className='days'>{timerMinutes}</h1>
                      <h1>minutes</h1>
                  </div>
                  <div className='Seconds'>
              <h1 className='days'>{timerSeconds}</h1> 
              <h1>seconds</h1>
              
          </div>
          
          <div className='form'>
            <div className='heading'> <h3>Register and get immeddiate access to online courses</h3>
            
             </div>
             <div className='sub'>

             <form onSubmit={handleSubmi}>
                <div className='form2'>
             <input name="name" type="text" placeholder='Full Name' value={name} onChange={handleChang} />

              <input placeholder='Email' name='email' type="email" value={email} onChange={handleChang} />
              
              <input placeholder='Phone Number' name='mobile' type="number" value={mobile}  onChange={handleChang} />
              </div>
              <div className='btn2'>
              <button>SEND</button>
              </div>

             </form>
             </div>

             
                
                
              </div>
              
          </div>
          
          </div>
      </div>
    
   
    
    </>
  )
}

export default Prog

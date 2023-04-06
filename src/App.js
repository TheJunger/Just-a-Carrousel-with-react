import img1 from './Screenshot_22.png';
import img2 from './Screenshot_23.png';
import img3 from './Screenshot_24.png';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [isBtn1Active, setIsBtn1Active] = useState(false)
  const [isBtn2Active, setIsBtn2Active] = useState(true)
  const [isBtn3Active, setIsBtn3Active] = useState(false)

  useEffect(()=>{
    setInterval(() => {
      if(isBtn1Active == true){
        setIsBtn1Active(false)
        setIsBtn3Active(false)
        setIsBtn2Active(true)
      }
      else if(isBtn2Active == true){
        setIsBtn1Active(false)
        setIsBtn2Active(false)
        setIsBtn3Active(true)
      }
      else if(isBtn3Active == true){
        setIsBtn2Active(false)
        setIsBtn3Active(false)
        setIsBtn1Active(true)
      }
    }, 10000);
  })

  useEffect(()=>{
    if(isBtn1Active == true){
      console.log('reconocido ' + isBtn1Active)
      setIsBtn2Active(false)
      setIsBtn3Active(false)
      const carrousel = document.querySelector('.carrouselContainer')
      const btn1 = document.querySelector('.btn1')
      const btn2 = document.querySelector('.btn2')
      const btn3 = document.querySelector('.btn3')
      carrousel.style.transform = 'translateX(52vw)'
      btn1.style.backgroundColor = 'rgb(0, 255, 255, 1)'
      btn2.style.backgroundColor = 'rgb(0, 255, 255, 0.3)'
      btn3.style.backgroundColor = 'rgb(0, 255, 255, 0.3)'
    }
  },[isBtn1Active])

  useEffect(()=>{
    if(isBtn2Active == true){
      console.log('reconocido ' + isBtn2Active)
      setIsBtn1Active(false)
      setIsBtn3Active(false)
      const carrousel = document.querySelector('.carrouselContainer')
      const btn1 = document.querySelector('.btn1')
      const btn2 = document.querySelector('.btn2')
      const btn3 = document.querySelector('.btn3')
      carrousel.style.transform = 'translateX(0vw)'
      btn1.style.backgroundColor = 'rgb(0, 255, 255, 0.3)'
      btn2.style.backgroundColor = 'rgb(0, 255, 255, 1)'
      btn3.style.backgroundColor = 'rgb(0, 255, 255, 0.3)'
    }
  },[isBtn2Active])

  useEffect(()=>{
    if(isBtn3Active == true){
      console.log('reconocido ' + isBtn2Active)
      setIsBtn2Active(false)
      setIsBtn1Active(false)
      const carrousel = document.querySelector('.carrouselContainer')
      const btn1 = document.querySelector('.btn1')
      const btn2 = document.querySelector('.btn2')
      const btn3 = document.querySelector('.btn3')
      carrousel.style.transform = 'translateX(-52vw)'
      btn1.style.backgroundColor = 'rgb(0, 255, 255, 0.3)'
      btn2.style.backgroundColor = 'rgb(0, 255, 255, 0.3)'
      btn3.style.backgroundColor = 'rgb(0, 255, 255, 1)'
    }
  },[isBtn3Active])

  return (
    <div className='container'>
      <div className='carrouselContainer'>
        <div className='imgCont'>
          <img className='img' src='https://c0.wallpaperflare.com/preview/218/233/171/piano-oldschool-vintage-music.jpg' />
        </div>
        <div className='imgCont'>
          <img className='img' src='https://w0.peakpx.com/wallpaper/444/175/HD-wallpaper-piano-keys-black-and-white-music.jpg' />
        </div>
        <div className='imgCont'>
          <img className='img' src='https://wallpaperaccess.com/full/1163018.jpg' />
        </div>
      </div>
      <div className='btnCont'>
        <input type='button' className='btn btn1' onClick={()=>{setIsBtn1Active(!isBtn1Active)}}/>
        <input type='button' className='btn btn2' onClick={()=>{setIsBtn2Active(!isBtn2Active)}}/>
        <input type='button' className='btn btn3' onClick={()=>{setIsBtn3Active(!isBtn3Active)}}/>
      </div>
    </div>
  );
}

export default App;

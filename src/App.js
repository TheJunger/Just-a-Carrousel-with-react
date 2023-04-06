import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [isBtn1Active, setIsBtn1Active] = useState(false)
  const [isBtn2Active, setIsBtn2Active] = useState(true)
  const [isBtn3Active, setIsBtn3Active] = useState(false)

  let carrouselHandel = (boton)=>{
    const carrousel = document.querySelector('.carrouselContainer')
    const btn1 = document.querySelector('.btn1')
    const btn2 = document.querySelector('.btn2')
    const btn3 = document.querySelector('.btn3')
    btn1.style.backgroundColor = 'rgb(0, 255, 255, 0.3)'
    btn2.style.backgroundColor = 'rgb(0, 255, 255, 0.3)'
    btn3.style.backgroundColor = 'rgb(0, 255, 255, 0.3)'
    if(boton == '1'){
      carrousel.style.transform = 'translateX(52vw)'
      btn1.style.backgroundColor = 'rgb(0, 255, 255, 1)'
    }
    else if(boton == '2'){
      carrousel.style.transform = 'translateX(0vw)'
      btn2.style.backgroundColor = 'rgb(0, 255, 255, 1)'
    }
    else if(boton == '3'){
      carrousel.style.transform = 'translateX(-52vw)'
      btn3.style.backgroundColor = 'rgb(0, 255, 255, 1)'
    }
  }

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
  },)

  useEffect(()=>{
    if(isBtn1Active == true){
      setIsBtn2Active(false)
      setIsBtn3Active(false)
      carrouselHandel('1')
    }
  },[isBtn1Active])

  useEffect(()=>{
    if(isBtn2Active == true){
      setIsBtn1Active(false)
      setIsBtn3Active(false)
      carrouselHandel('2')
    }
  },[isBtn2Active])

  useEffect(()=>{
    if(isBtn3Active == true){
      setIsBtn2Active(false)
      setIsBtn1Active(false)
      carrouselHandel('3')
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

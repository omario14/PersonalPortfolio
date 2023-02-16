
import Nav from './pages/Navigation/Nav';
import Home from './pages/Home';
import Footer from './pages/Footer/Footer';
import './App.css'
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import ReactAudioPlayer from 'react-audio-player';

function App() {
  const [mousePosition,setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant,setCursorVariant] = useState("default");

  useEffect(()=> {
    const mouseMove = e =>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove",mouseMove);

    return () =>{
      window.removeEventListener("mousemove",mouseMove)
    }
  },[]);

  const  variants ={
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5
    },
    text: {
      height:150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor:"white",
      mixBlendMode: "difference"
    }
  }
  const  dotVariants ={
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height:150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor:"white",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")
  return (
    <div className="App ">
   
      <motion.div 
        className="cursorMouse"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div 
        className="dot"
        variants={dotVariants}
        animate={cursorVariant}
      />
      
    <Nav />
    <Home textEnter={textEnter} textLeave={textLeave}/>
    <Footer/>
    <ReactAudioPlayer
  src="../../assets/detective.mp3"
  autoPlay={true}
  loop
/>
    </div>
  )
}

export default App

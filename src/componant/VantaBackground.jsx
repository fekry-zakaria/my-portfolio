import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import { ThemeContext } from "../context/themContext";

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const [{ themeName }] = useContext(ThemeContext);

  useEffect(() => {
    
    if (vantaEffect) vantaEffect.destroy();

    const effect = CLOUDS({
      el: vantaRef.current,
      THREE,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 50.0,
      minWidth: 50.0,
      skyColor: themeName === "dark" ? 0x1d2b34 : 0x64a2b9,
      cloudColor: themeName === "dark" ? 0x3b3e43 : 0xadc1de,
      cloudShadowColor: 0x397cbb,
   
 
      
      speed: 1.2,
   
    });

    setVantaEffect(effect);

    return () => {
      if (effect) effect.destroy();
    };
  }, [themeName]);

  return (
    <div ref={vantaRef} className="fixed top-0 left-0 w-screen min-h-screen -z-10  " />
  );
};

export default VantaBackground;

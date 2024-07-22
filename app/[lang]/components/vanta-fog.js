'use client';

import { useEffect, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function VantaFog({ 
  elementId, 
  baseColor = '#fc0d34', // base.$dark-red
  midtoneColor = '#bb45ff', 
  lowlightColor = '#8726bf', // base.$dark-purple
  highlightColor = '#ef12ff', 
  blurFactor = 0.60, 
  speed = 1.10, 
  zoom = 0.20, 
  minHeight = 200, 
  minWidth = 200 
}) {
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: elementId,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight,
          minWidth,
          highlightColor, // lila claro
          midtoneColor, // lila medio
          lowlightColor, // lila oscuro
          baseColor, // rojo
          blurFactor,
          speed,
          zoom
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [baseColor, blurFactor, elementId, highlightColor, lowlightColor, midtoneColor, minHeight, minWidth, speed, vantaEffect, zoom]);
}
'use client';

import Typewriter from 'typewriter-effect'; 

export default function TypingEffect({ strings }) { 
  return (
    <span>
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          wrapperClassName: "typewriter",
        }}
      />
    </span>
  )
}

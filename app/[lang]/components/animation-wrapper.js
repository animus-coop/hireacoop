'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AnimationWrapper({ children }) {
  const main = useRef(null);

  useGSAP(() => {
    const slideInBottomElements = gsap.utils.toArray('.slide-in-bottom');
    slideInBottomElements.forEach((element) => {
      const noOpacity = element.classList.contains('no-opacity');
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        y: 100,
        opacity: noOpacity ? undefined : 0,
        duration: 1,
      });
    });

    const staggerSlideInBottomElements = gsap.utils.toArray('.staggered-slide-in-bottom');
    staggerSlideInBottomElements.forEach((element) => {
      const noOpacity = element.classList.contains('no-opacity');
      gsap.from(element.children, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        y: 100,
        opacity: noOpacity ? undefined : 0,
        duration: 1,
        stagger: 0.15,
      });
    });

    const scaleDownElements = gsap.utils.toArray('.scale-down');
    scaleDownElements.forEach((element) => {
      gsap.fromTo(element, {
        scale: 1.3,
      }, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        scale: 1,
        duration: .8,
        delay: 0.1,
      });
    });

    const scaleUpElements = gsap.utils.toArray('.scale-up');
    scaleUpElements.forEach((element) => {
      gsap.fromTo(element, {
        scale: 0.7,
        opacity: 0,
      }, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        scale: 1,
        opacity: 1,
        duration: 1,
      });
    });

    const slideInRightElements = gsap.utils.toArray('.slide-in-right');
    slideInRightElements.forEach((element) => {
      const noOpacity = element.classList.contains('no-opacity');
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        x: 100,
        opacity: noOpacity ? undefined : 0,
        duration: 1,
      });
    });

    const staggeredSlideInRightElements = gsap.utils.toArray('.staggered-slide-in-right');
    staggeredSlideInRightElements.forEach((element) => {
      gsap.from(element.children, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        x: 100,
        duration: .5,
        stagger: 0.15,
      });
    });

    const slideInLeftElements = gsap.utils.toArray('.slide-in-left');
    slideInLeftElements.forEach((element) => {
      const noOpacity = element.classList.contains('no-opacity');
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        x: -100,
        opacity: noOpacity ? undefined : 0,
        duration: 1,
      });
    });

    const staggeredSlideInLeftElements = gsap.utils.toArray('.staggered-slide-in-left');
    staggeredSlideInLeftElements.forEach((element) => {
      gsap.from(element.children, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        x: -100,
        duration: .5,
        stagger: 0.15,
      });
    });

    const fadeInElements = gsap.utils.toArray('.fade-in');
    fadeInElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
        opacity: 0,
        duration: 1.5,
      });
    });
  }, { scope: main })

  return <div ref={main}>{children}</div>;
}
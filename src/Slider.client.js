import React, { useEffect, useRef, useState } from "react";

export default function Slider({ slides }) {
  const isScrollRef = useRef()
  const [lastCurrent, setLastCurrent] = useState(0)

  function getSwiper() {
    return document.getElementsByClassName("swiper")[0]
  }

  function getDelta() {
    const width = document.getElementsByClassName("swiper")[0].scrollWidth
    return width / slides.length
  }

  function getNewCurrent(currentTouch){
    const ratio = (currentTouch%getDelta())/getDelta()
    const newCurrent = Math.round(currentTouch/getDelta())
    console.log('ratio : ', ratio)
    console.log('newCurrent : ',newCurrent )

    if(ratio<0.5 && ratio>0.10){
      if(newCurrent>=lastCurrent)
        return newCurrent+1
      return newCurrent-1
    }
    if(ratio<0.90 && ratio>0.5){
      if(newCurrent<=lastCurrent)
        return newCurrent-1
      return newCurrent+1
    }
    setLastCurrent(newCurrent)
    return newCurrent
  }


  function handleScroll(e) {
    clearTimeout(isScrollRef.current);
    isScrollRef.current = setTimeout(function () {
      const currentTouch = e.target.scrollLeft
      console.log('currentTouch : ', currentTouch)
      const newCurrent = getNewCurrent(currentTouch)
      getSwiper().scrollTo({
        left: newCurrent * getDelta(),
        behavior: "smooth",
      })
    }, 66);
  }

  return (
    <div className='slider'>
      <div className='swiper' onScroll={handleScroll}>
        {slides.map((slide, index) =>
          <img key={index} className='sliderImage' src={slide.image} alt="" />)}
      </div>
    </div>
  );
};
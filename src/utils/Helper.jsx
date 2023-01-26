import { useState, useEffect } from 'react'

let i = 0;

export const useResize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isResponsive: false
  })

  const updateSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 768,
      isResponsive: window.innerWidth < 1320
    })
  }

  useEffect(() => {
    if (i === 0) {
      window.addEventListener("resize", updateSize)
      updateSize()
      i += 1
      return () => {
        window.removeEventListener("resize", updateSize)
      }
    }
  }, [])

  return screenSize;
}
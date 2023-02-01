import { useState, useEffect } from 'react'

export const useResize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isResponsive: false,
    isResize: false
  })

  const updateSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 1170,
      isResponsive: window.innerWidth < 1320,
      isResize: true
    })
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => {
      window.removeEventListener("resize", updateSize)
      setScreenSize({ ...screenSize, isResize: false })
    }
  }, [])

  return screenSize;
}
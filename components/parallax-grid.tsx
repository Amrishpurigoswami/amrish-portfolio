'use client'

import { useEffect, useRef } from 'react'

export function ParallaxGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    const stage = grid?.parentElement
    if (!grid || !stage) return
    const gridElement = grid
    const heroStage = stage

    let animationFrame = 0

    function resetGrid() {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        gridElement.style.setProperty('--parallax-x', '0px')
        gridElement.style.setProperty('--parallax-y', '0px')
        gridElement.style.setProperty('--tilt-x', '0deg')
        gridElement.style.setProperty('--tilt-y', '0deg')
      })
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType !== 'mouse') return
      const bounds = heroStage.getBoundingClientRect()
      const insideStage = event.clientX >= bounds.left && event.clientX <= bounds.right
        && event.clientY >= bounds.top && event.clientY <= bounds.bottom

      if (!insideStage) {
        resetGrid()
        return
      }

      const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5
      const vertical = (event.clientY - bounds.top) / bounds.height - 0.5
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        gridElement.style.setProperty('--parallax-x', `${horizontal * 18}px`)
        gridElement.style.setProperty('--parallax-y', `${vertical * 18}px`)
        gridElement.style.setProperty('--tilt-x', `${vertical * -2}deg`)
        gridElement.style.setProperty('--tilt-y', `${horizontal * 2}deg`)
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('blur', resetGrid)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('blur', resetGrid)
    }
  }, [])

  return <div className="hero-grid-background" ref={gridRef} aria-hidden="true" />
}

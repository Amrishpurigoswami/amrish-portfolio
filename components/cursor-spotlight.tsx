'use client'

import { useEffect } from 'react'

export function CursorSpotlight() {
  useEffect(() => {
    let animationFrame = 0
    const root = document.documentElement

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType !== 'mouse') return
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        root.style.setProperty('--cursor-x', `${event.clientX}px`)
        root.style.setProperty('--cursor-y', `${event.clientY}px`)
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return <div className="cursor-spotlight" aria-hidden="true" />
}

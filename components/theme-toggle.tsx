'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    function followSystemTheme() {
      try {
        if (window.localStorage.getItem('amrish-theme')) return
      } catch {
        // Continue following the system preference when storage is unavailable.
      }

      const nextIsDark = mediaQuery.matches
      document.documentElement.classList.toggle('dark', nextIsDark)
      document.body.classList.toggle('dark', nextIsDark)
      document.documentElement.dataset.theme = nextIsDark ? 'dark' : 'light'
      setIsDark(nextIsDark)
    }

    mediaQuery.addEventListener('change', followSystemTheme)
    return () => mediaQuery.removeEventListener('change', followSystemTheme)
  }, [])

  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', nextIsDark)
    document.body.classList.toggle('dark', nextIsDark)
    document.documentElement.dataset.theme = nextIsDark ? 'dark' : 'light'

    try {
      window.localStorage.setItem('amrish-theme', nextIsDark ? 'dark' : 'light')
    } catch {
      // Keep the in-page theme usable when browser storage is disabled.
    }

    setIsDark(nextIsDark)
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Toggle color theme"
      aria-pressed={isDark ?? undefined}
      onClick={toggleTheme}
    >
      <Sun className="theme-icon theme-icon-sun" aria-hidden="true" />
      <Moon className="theme-icon theme-icon-moon" aria-hidden="true" />
    </button>
  )
}

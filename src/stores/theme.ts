import { atom } from 'nanostores'

export type Theme = 'light' | 'dark'
export const $theme = atom<Theme>('light')

export function initTheme() {
  const saved = localStorage.getItem('theme') as Theme | null
  applyTheme(saved || 'light')
}

export function toggleTheme() {
  applyTheme($theme.get() === 'light' ? 'dark' : 'light')
}

function applyTheme(theme: Theme) {
  $theme.set(theme)
  localStorage.setItem('theme', theme)
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.classList.toggle('light', theme === 'light')
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App/App'
import './lang/i18n'
import './index.css'
import heroSky from './assets/images/hero-sky.webp'
import heroCharacter from './assets/images/hero-character.webp'

// The loading screen (in index.html) stays until the fonts and the hero images are ready, at least one
// lap of its animation and at most a few seconds; then the app mounts, so the hero intro plays as it fades.
const MIN_LOADER_MS = 1600
const MAX_LOADER_MS = 6000

const preloadImage = (src) => {
  const image = new Image()
  image.src = src
  return image.decode().catch(() => {})
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const assetsReady = Promise.all([
  document.fonts?.ready,
  preloadImage(heroSky),
  preloadImage(heroCharacter),
  wait(MIN_LOADER_MS),
])

Promise.race([assetsReady, wait(MAX_LOADER_MS)]).then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )

  const loader = document.getElementById('site-loader')
  if (loader) {
    loader.classList.add('is-done')
    loader.addEventListener('transitionend', () => loader.remove(), { once: true })
  }
})

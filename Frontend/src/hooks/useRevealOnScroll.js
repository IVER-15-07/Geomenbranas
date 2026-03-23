import { useEffect } from 'react'

const REVEAL_SELECTOR = '.animate-enter, .animate-enter-left, .animate-enter-right'

export function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(REVEAL_SELECTOR))

    if (!elements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])
}

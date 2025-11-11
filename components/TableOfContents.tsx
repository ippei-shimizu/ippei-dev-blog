'use client'

import { useEffect, useState } from 'react'

interface Heading {
  value: string
  url: string
  depth: number
}

interface TableOfContentsProps {
  toc: Heading[]
}

export default function TableOfContents({ toc }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('')

  // h2とh3のみをフィルタリング
  const headings = toc.filter((heading) => heading.depth === 2 || heading.depth === 3)

  useEffect(() => {
    // スクロール位置に応じてアクティブな見出しを更新
    const handleScroll = () => {
      const headingElements = headings.map((h) => ({
        id: h.url.replace('#', ''),
        element: document.getElementById(h.url.replace('#', '')),
      }))

      const scrollY = window.scrollY + 100

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const heading = headingElements[i]
        if (heading.element) {
          const { offsetTop } = heading.element
          if (scrollY >= offsetTop) {
            setActiveId(heading.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  const scrollToHeading = (url: string) => {
    const id = url.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-700"
        aria-expanded={isOpen}
      >
        <span className="flex items-center">
          <svg
            className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          目次
        </span>
        <svg
          className={`h-5 w-5 text-gray-500 transition-transform dark:text-gray-400 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <nav className="mt-2 rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
          <ul className="space-y-2">
            {headings.map((heading, index) => {
              const headingId = heading.url.replace('#', '')
              return (
                <li
                  key={`${headingId}-${index}`}
                  className={heading.depth === 3 ? 'ml-4' : ''}
                  style={{ paddingLeft: heading.depth === 3 ? '1rem' : '0' }}
                >
                  <button
                    onClick={() => scrollToHeading(heading.url)}
                    className={`hover:text-primary-600 dark:hover:text-primary-400 block w-full text-left text-sm transition-colors ${
                      activeId === headingId
                        ? 'text-primary-600 dark:text-primary-400 font-medium'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {heading.value}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </div>
  )
}

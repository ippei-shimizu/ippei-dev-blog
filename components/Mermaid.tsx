'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import mermaid from 'mermaid'

interface MermaidProps {
  chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { theme, resolvedTheme } = useTheme()
  const [svg, setSvg] = useState<string>('')

  useEffect(() => {
    const renderDiagram = async () => {
      if (!chart) return

      // Determine theme (use resolvedTheme which handles 'system' preference)
      const currentTheme = resolvedTheme || theme || 'light'
      const mermaidTheme = currentTheme === 'dark' ? 'dark' : 'default'

      // Initialize Mermaid with theme-aware configuration
      mermaid.initialize({
        startOnLoad: false,
        theme: mermaidTheme,
        securityLevel: 'loose',
        fontFamily: 'inherit',
      })

      try {
        // Clean up the chart content
        const cleanChart = chart.trim()

        // Generate a unique ID for this diagram
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`

        // Render the diagram
        const { svg: renderedSvg } = await mermaid.render(id, cleanChart)
        setSvg(renderedSvg)
      } catch (error) {
        // Show error message with the original chart
        setSvg(
          `<div class="text-red-600 dark:text-red-400 p-4 border border-red-400 rounded">
            <strong>Mermaid Syntax Error:</strong>
            <pre class="mt-2 text-sm overflow-x-auto">${chart.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
          </div>`
        )
      }
    }

    renderDiagram()
  }, [chart, theme, resolvedTheme])

  return (
    <div
      className="mermaid my-6 flex justify-center overflow-x-auto"
      ref={ref}
      dangerouslySetInnerHTML={{ __html: svg }}
      suppressHydrationWarning
    />
  )
}

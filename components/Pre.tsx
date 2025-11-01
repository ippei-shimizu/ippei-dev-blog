import { ReactNode, ReactElement } from 'react'
import PlinyPre from 'pliny/ui/Pre'
import Mermaid from './Mermaid'

interface PreProps {
  children: ReactNode
  [key: string]: unknown
}

// Recursively extract text content from React elements
function extractTextFromChildren(children: unknown): string {
  if (typeof children === 'string') {
    return children
  }

  if (typeof children === 'number') {
    return String(children)
  }

  if (Array.isArray(children)) {
    return children.map((child) => extractTextFromChildren(child)).join('')
  }

  // Handle React elements
  if (children && typeof children === 'object' && 'props' in children) {
    const element = children as ReactElement

    // Handle <br/> tags - convert to newline
    if (element.type === 'br') {
      return '\n'
    }

    // Recursively process children
    if (element.props && 'children' in element.props) {
      return extractTextFromChildren(element.props.children)
    }
  }

  return ''
}

export default function Pre({ children, ...props }: PreProps) {
  // Check if this is a mermaid code block
  const childrenArray = Array.isArray(children) ? children : [children]
  const firstChild = childrenArray[0]

  // Extract language from code element
  if (
    firstChild &&
    typeof firstChild === 'object' &&
    'props' in firstChild &&
    firstChild.props &&
    typeof firstChild.props === 'object' &&
    'className' in firstChild.props
  ) {
    const className = firstChild.props.className as string
    const isMermaid = /language-mermaid/.test(className)

    if (isMermaid) {
      // Extract the chart content recursively
      let chartContent = ''

      if ('children' in firstChild.props) {
        chartContent = extractTextFromChildren(firstChild.props.children).trim()
      }

      return <Mermaid chart={chartContent} />
    }
  }

  // For all other code blocks, use the default Pliny Pre component
  return <PlinyPre {...props}>{children}</PlinyPre>
}

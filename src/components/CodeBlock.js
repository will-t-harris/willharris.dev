import React from "react"
import PropTypes from "prop-types"
import Highlight, { defaultProps } from "prism-react-renderer"
import tw, { css } from "twin.macro"
import rangeParser from "parse-numeric-range"

const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    return (index) => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

export const CodeBlock = ({ children, className, metastring }) => {
  const language = className.replace(/language-/, "")
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  return (
    <div tw="px-4 w-screen lg:w-900">
      <Highlight {...defaultProps} code={children} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            tw="overflow-x-auto mx-auto mt-2 mb-4 rounded-lg shadow"
            className={className}
            style={{ ...style, padding: "20px" }}
          >
            {tokens.map((line, index) => {
              const lineProps = getLineProps({
                line,
                key: index,
                css: shouldHighlightLine(index)
                  ? css`
                      background-color: rgb(53, 59, 69);
                      display: block;
                      margin-right: -1.2em;
                      margin-left: -1.2em;

                      border-left: 0.3em solid #d53f8c;
                    `
                  : {},
              })

              return (
                <div key={index} {...lineProps}>
                  {line.map((token, key) => {
                    const tokenProps = getTokenProps({ token, key })
                    return <span key={key} {...tokenProps} />
                  })}
                </div>
              )
            })}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

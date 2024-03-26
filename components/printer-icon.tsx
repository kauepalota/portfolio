import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    className="hover:text-bright cursor-pointer"
    viewBox="0 0 32 32"
    {...props}
  >
    <title>Download resume</title>
    <path
      stroke="none"
      d="M9 4v7H7c-1.645 0-3 1.355-3 3v10h5v4h14v-4h5V14c0-1.645-1.355-3-3-3h-2V4Zm2 2h10v5H11Zm-4 7h18c.566 0 1 .434 1 1v8h-3v-4H9v4H6v-8c0-.566.434-1 1-1Zm1 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm3 6h10v6H11Z"
    />
  </svg>
)
export default SvgComponent

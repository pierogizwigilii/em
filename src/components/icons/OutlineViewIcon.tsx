import { token } from '../../../styled-system/tokens'

/** OutlineView Icon without animation. */
const OutlineViewIcon = ({ size = 18, fill = token('colors.fg') }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 23 20' style={{ justifySelf: 'center' }}>
    <circle cx='8' cy='11' r='2' fill={fill}></circle>
    <circle cx='8' cy='18' r='2' fill={fill}></circle>
    <path stroke={fill} strokeLinecap='round' strokeWidth='2' d='M9 4h13M13 11h9M13 18h9'></path>
    <path
      fill={fill}
      d='M4.15 5.875a.75.75 0 0 1-1.3 0l-1.732-3a.75.75 0 0 1 .65-1.125h3.464a.75.75 0 0 1 .65 1.125z'
    ></path>
  </svg>
)

export default OutlineViewIcon

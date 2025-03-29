import { css } from '../../../styled-system/css'
import { token } from '../../../styled-system/tokens'

/**
 * A sort icon.
 */
const SortIcon = ({ size = 30 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 24 24'
    className={css({ cursor: 'pointer', pointerEvents: 'all', justifySelf: 'center' })}
  >
    <g stroke={token('colors.fg')} strokeLinecap='round' strokeLinejoin='round' clipPath='url(#clip0_856_2432)'>
      <path d='M5.51 4.33v15.34M2.27 16.42l3.24 3.24 3.3-3.3M12.08 4.73h3.12M12.08 9.71h5.7M12.08 14.69h7.4M12.08 19.67h9.65'></path>
    </g>
    <defs>
      <clipPath id='clip0_856_2432'>
        <path fill={token('colors.fg')} d='M0 0h24v24H0z'></path>
      </clipPath>
    </defs>
  </svg>
)

export default SortIcon

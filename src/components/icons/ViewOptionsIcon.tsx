import { css } from '../../../styled-system/css'
import { token } from '../../../styled-system/tokens'

/** View options icon. */
const ViewOptionsIcon = () => {
  return (
    <svg width='1em' viewBox='0 0 24 15' className={css({ cursor: 'pointer', pointerEvents: 'all' })}>
      <path
        d='M12 4.687c1.53 0 2.77 1.26 2.77 2.813s-1.24 2.813-2.77 2.813S9.23 9.053 9.23 7.5 10.47 4.687 12 4.687M12 0c6.462 0 12 4.687 12 7.5S18.462 15 12 15 0 10.313 0 7.5 5.538 0 12 0m0 2.344c-2.804 0-5.077 2.308-5.077 5.156S9.196 12.656 12 12.656s5.077-2.308 5.077-5.156S14.804 2.344 12 2.344'
        fill={token('colors.fg')}
      ></path>
    </svg>
  )
}

export default ViewOptionsIcon

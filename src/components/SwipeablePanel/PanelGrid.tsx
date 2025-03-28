import { css } from '../../../styled-system/css'

/**
 * Displays a four column grid within the panel component.
 */
const PanelGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'auto',
        gridAutoFlow: 'row',
        gap: '0.7rem',
        padding: '1.8rem 1.8rem 1rem',
        maxWidth: '100%',
      })}
    >
      {children}
    </div>
  )
}

export default PanelGrid

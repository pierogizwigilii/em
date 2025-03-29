import { css } from '../../../styled-system/css'
import pin from '../../commands/pin'
import pinAll from '../../commands/pinAll'
import proseView from '../../commands/proseView'
import toggleDone from '../../commands/toggleDone'
import toggleTableView from '../../commands/toggleTableView'
import PanelCommand from '../SwipeablePanel/PanelCommand'
import PanelGrid from '../SwipeablePanel/PanelGrid'
import PanelCommandGroup from '../SwipeablePanel/PanelGroup'
import PanelHeader from '../SwipeablePanel/PanelHeader'
import SortIcon from '../icons/SortIcon'

/**
 * A grid of commands for the View Options feature.
 */
const ViewOptionsGrid = () => {
  return (
    <PanelGrid>
      <PanelCommandGroup>
        <PanelCommand command={pin} size='small' />
        <PanelCommand command={pinAll} size='small' />
      </PanelCommandGroup>
      {/* Sort Command Stand-in */}
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          minHeight: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          padding: '0.5rem',
          borderRadius: '22px',
          backgroundColor: 'purple',
          gridColumn: 'span 2',
        })}
      >
        <SortIcon />
        <div
          className={css({
            fontSize: 'md',
            marginTop: '0',
            color: 'fg',
            textAlign: 'left',
          })}
        >
          Sort
          <br />
          <div className={css({ fontWeight: 'normal' })}>Descending</div>
        </div>
      </div>
      <PanelHeader title='View as:' />
      <PanelCommandGroup>
        <PanelCommand command={{ ...toggleDone, label: 'Done' }} size='small' />
        <PanelCommand command={{ ...proseView, label: 'Prose' }} size='small' />
        <PanelCommand command={{ ...toggleTableView, label: 'Table' }} size='small' />
      </PanelCommandGroup>
    </PanelGrid>
  )
}

export default ViewOptionsGrid

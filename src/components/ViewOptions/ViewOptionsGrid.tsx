import pin from '../../commands/pin'
import pinAll from '../../commands/pinAll'
import proseView from '../../commands/proseView'
import subcategorizeOne from '../../commands/subcategorizeOne'
import toggleDone from '../../commands/toggleDone'
import toggleTableView from '../../commands/toggleTableView'
import PanelCommand from '../CommandMenu/PanelCommand'
import PanelCommandGroup from '../CommandMenu/PanelCommandGroup'
import PanelGrid from '../SwipeablePanel/PanelGrid'

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
      <PanelCommand command={subcategorizeOne} size='medium' />
      <PanelCommandGroup>
        <PanelCommand command={toggleDone} size='small' />
        <PanelCommand command={proseView} size='small' />
        <PanelCommand command={toggleTableView} size='small' />
      </PanelCommandGroup>
    </PanelGrid>
  )
}

export default ViewOptionsGrid

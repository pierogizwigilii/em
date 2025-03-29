import deleteCommand from '../../commands/delete'
import favorite from '../../commands/favorite'
import indent from '../../commands/indent'
import note from '../../commands/note'
import outdent from '../../commands/outdent'
import subcategorizeAll from '../../commands/subcategorizeAll'
import subcategorizeOne from '../../commands/subcategorizeOne'
import swapParent from '../../commands/swapParent'
import toggleDone from '../../commands/toggleDone'
import PanelCommand from '../SwipeablePanel/PanelCommand'
import PanelGrid from '../SwipeablePanel/PanelGrid'
import PanelCommandGroup from '../SwipeablePanel/PanelGroup'

/**
 * Displays the grid of commands for the command menu.
 */
const PanelCommandGrid = () => {
  return (
    <PanelGrid>
      <PanelCommandGroup>
        <PanelCommand command={{ ...toggleDone, label: 'Done' }} size='small' />
        <PanelCommand command={note} size='small' />
        <PanelCommand command={{ ...favorite, label: 'Favorite' }} size='small' />
        <PanelCommand command={deleteCommand} size='small' />
      </PanelCommandGroup>
      <PanelCommandGroup>
        <PanelCommand command={{ ...outdent, label: '' }} size='small' />
        <PanelCommand command={{ ...indent, label: '' }} size='small' />
      </PanelCommandGroup>
      <PanelCommand command={swapParent} size='medium' />
      <PanelCommand command={{ ...subcategorizeOne, label: 'Subcategorize One' }} size='medium' />
      <PanelCommand command={subcategorizeAll} size='medium' />
    </PanelGrid>
  )
}

export default PanelCommandGrid

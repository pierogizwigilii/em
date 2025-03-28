import { toggleCommandMenuActionCreator } from '../../actions/toggleCommandMenu'
import PanelCommandGrid from '../CommandMenu/PanelCommandGrid'
import SwipeablePanel from '../SwipeablePanel/SwipeablePanel'

/**
 * A panel that displays the Command Menu.
 */
const CommandMenuPanel = () => {
  return (
    <SwipeablePanel
      showPanelSelector={state => state.showCommandMenu}
      toggleActionCreator={toggleCommandMenuActionCreator}
    >
      <PanelCommandGrid />
    </SwipeablePanel>
  )
}

export default CommandMenuPanel

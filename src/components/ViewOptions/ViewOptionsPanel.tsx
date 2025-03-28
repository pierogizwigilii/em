import { toggleViewOptionsActionCreator } from '../../actions/toggleViewOptions'
import PanelCommandGrid from '../CommandMenu/PanelCommandGrid'
import SwipeablePanel from '../SwipeablePanel/SwipeablePanel'

/**
 * A panel that displays the View Options feature.
 */
const ViewOptionsPanel = () => {
  return (
    <SwipeablePanel
      showPanelSelector={state => state.showViewOptions}
      toggleActionCreator={toggleViewOptionsActionCreator}
    >
      <PanelCommandGrid />
    </SwipeablePanel>
  )
}

export default ViewOptionsPanel

import { toggleViewOptionsActionCreator } from '../../actions/toggleViewOptions'
import SwipeablePanel from '../SwipeablePanel/SwipeablePanel'
import ViewOptionsGrid from './ViewOptionsGrid'

/**
 * A panel that displays the View Options feature.
 */
const ViewOptionsPanel = () => {
  return (
    <SwipeablePanel
      showPanelSelector={state => state.showViewOptions}
      toggleActionCreator={toggleViewOptionsActionCreator}
      id='view-options'
    >
      <ViewOptionsGrid />
    </SwipeablePanel>
  )
}

export default ViewOptionsPanel

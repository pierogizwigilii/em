import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCommandMenuActionCreator } from '../../actions/toggleCommandMenu'
import PanelCommandGrid from '../CommandMenu/PanelCommandGrid'
import SwipeablePanel from '../SwipeablePanel/SwipeablePanel'

/**
 * A panel that displays the Command Menu.
 */
const CommandMenuPanel = () => {
  const dispatch = useDispatch()
  const showCommandMenuPanel = useSelector(state => state.showCommandMenu)
  const cursor = useSelector(state => state.cursor)
  const prevCursorRef = useRef(cursor)

  useEffect(() => {
    // Only close the command menu if cursor becomes inactive but make sure it doesn't close if the cursor is just switching
    if (showCommandMenuPanel && !cursor) {
      const timeoutId = setTimeout(() => {
        // Check if cursor is still inactive after the delay
        if (!cursor) {
          dispatch(toggleCommandMenuActionCreator({ value: false }))
        }
      }, 200) // Small delay to allow for cursor switching

      return () => clearTimeout(timeoutId)
    }

    prevCursorRef.current = cursor
  }, [showCommandMenuPanel, cursor, dispatch])

  return (
    <SwipeablePanel
      showPanelSelector={state => state.showCommandMenu}
      toggleActionCreator={toggleCommandMenuActionCreator}
      id='command-menu'
    >
      <PanelCommandGrid />
    </SwipeablePanel>
  )
}

export default CommandMenuPanel

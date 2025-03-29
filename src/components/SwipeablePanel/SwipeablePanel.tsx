import SwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'
import _ from 'lodash'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { css } from '../../../styled-system/css'
import { token } from '../../../styled-system/tokens'
import { toggleCommandMenuActionCreator } from '../../actions/toggleCommandMenu'
import { toggleViewOptionsActionCreator } from '../../actions/toggleViewOptions'
import { isTouch } from '../../browser'
import isTutorial from '../../selectors/isTutorial'
import CloseIcon from '../icons/CloseIcon'

// Extend SwipeableDrawer with classes prop
const SwipeableDrawerWithClasses = SwipeableDrawer as unknown as React.ComponentType<
  SwipeableDrawerProps & { classes: any; ref: any }
>

interface SwipeablePanelProps {
  showPanelSelector: (state: any) => boolean
  toggleActionCreator: (payload: { value?: boolean }) => any
  children?: React.ReactNode
  id: string
}

/**
 * A reusable swipeable panel component.
 */
const SwipeablePanel: React.FC<SwipeablePanelProps> = ({
  showPanelSelector,
  toggleActionCreator,
  children,
  id,
}: SwipeablePanelProps) => {
  const dispatch = useDispatch()
  const showPanel = useSelector(showPanelSelector)
  const isTutorialOn = useSelector(isTutorial)
  const containerRef = useRef<HTMLInputElement>(null)
  const [isSwiping, setIsSwiping] = useState(false)

  /** Toggle the command menu. */
  const togglePanel = (value: boolean) => {
    if (value) {
      if (id === 'command-menu') {
        dispatch(toggleViewOptionsActionCreator({ value: false }))
      } else if (id === 'view-options') {
        dispatch(toggleCommandMenuActionCreator({ value: false }))
      }
    }
    dispatch(toggleActionCreator({ value }))
  }

  if (isTouch && !isTutorialOn) {
    return (
      <SwipeableDrawerWithClasses
        data-testid='command-menu-panel'
        classes={{
          root: css({
            userSelect: 'none',
            zIndex: 'navbar !important',
          }),
          modal: css({
            '& .MuiDrawer-root': {
              pointerEvents: 'none',
            },
            '& div[role="presentation"]': {
              pointerEvents: 'none',
            },
          }),
          paper: css({
            // Increase specificity by nesting the selector
            '&.MuiDrawer-paper': {
              backgroundColor: 'darkgray',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              overflow: 'hidden',
              maxHeight: '70%',
              pointerEvents: 'auto',
            },
          }),
          backdrop: css({
            display: 'none',
            pointerEvents: 'none',
          }),
        }}
        // Disable swipe to open - this removes the swipe-up-to-open functionality
        disableSwipeToOpen={true}
        ref={containerRef}
        transitionDuration={500}
        // Remove the SwipeAreaProps since we don't want to enable swipe to open
        anchor='bottom'
        // Keep onOpen for programmatic opening
        onOpen={() => togglePanel(true)}
        // Keep onClose for swipe to dismiss
        onClose={() => togglePanel(false)}
        open={showPanel}
        hideBackdrop={true}
        disableScrollLock={true}
        // Use PaperProps to directly target the Paper component
        PaperProps={{
          style: {
            backgroundColor: token('colors.darkgray'),
            // Make sure it overrides any inline styles
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            overflow: 'hidden',
            maxHeight: '70%',
            pointerEvents: 'auto',
          },
        }}
        ModalProps={{
          disableAutoFocus: true,
          disableEnforceFocus: true,
          disableRestoreFocus: true,
          style: { pointerEvents: 'none' },
        }}
      >
        <div
          onTouchMove={_.throttle(
            () => {
              if (isSwiping) return
              const drawer = containerRef.current?.querySelector('.MuiDrawer-paper') as HTMLElement | null
              if (!drawer) return
              const transformValue = drawer.style.transform
              const translateYMatch = transformValue.match(/translateY\(([^)]+)\)/)
              if (translateYMatch && translateYMatch[1]) {
                const translateY = parseInt(translateYMatch[1])
                if (!isNaN(translateY) && translateY !== 0) {
                  setIsSwiping(true)
                }
              }
            },
            10,
            { leading: false },
          )}
          onTouchEnd={() => {
            setIsSwiping(false)
          }}
        >
          {children}
          <div
            className={css({
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '1rem',
              marginRight: '1rem',
            })}
          >
            <button
              onClick={() => dispatch(toggleActionCreator({ value: false }))}
              className={css({
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              })}
            >
              <CloseIcon size={20} fill={token('colors.fg')} />
            </button>
          </div>
        </div>
      </SwipeableDrawerWithClasses>
    )
  }
}

export default SwipeablePanel

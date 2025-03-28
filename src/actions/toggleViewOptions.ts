import _ from 'lodash'
import State from '../@types/State'
import Thunk from '../@types/Thunk'

/** Toggles the View Options panel. */
const toggleViewOptions = (state: State, { value }: { value?: boolean } = {}) => ({
  ...state,
  showViewOptions: value == null ? !state.showViewOptions : value,
})

/** Action-creator for toggleViewOptions. */
export const toggleViewOptionsActionCreator =
  (payload: Parameters<typeof toggleViewOptions>[1] = {}): Thunk =>
  dispatch =>
    dispatch({ type: 'toggleViewOptions', ...payload })

export default _.curryRight(toggleViewOptions)

import Command from '../@types/Command'
import { toggleAttributeActionCreator as toggleAttribute } from '../actions/toggleAttribute'
import OutlineViewIcon from '../components/icons/OutlineViewIcon'
import { HOME_PATH } from '../constants'
import attributeEquals from '../selectors/attributeEquals'
import hasMulticursor from '../selectors/hasMulticursor'
import simplifyPath from '../selectors/simplifyPath'
import head from '../util/head'
import isDocumentEditable from '../util/isDocumentEditable'

const outlineViewCommand: Command = {
  id: 'outlineView',
  label: 'Outline View',
  description: 'Display subthoughts of the current thought as a tree.',
  gesture: 'rdrdl',
  keyboard: { key: 'o', shift: true, alt: true },
  multicursor: true,
  svg: OutlineViewIcon,
  canExecute: state => {
    return isDocumentEditable() && (!!state.cursor || hasMulticursor(state))
  },
  exec: (dispatch, getState) => {
    const state = getState()
    const { cursor } = state
    if (!cursor) return

    const simplePath = simplifyPath(state, cursor)

    dispatch(
      toggleAttribute({
        path: simplePath,
        values: ['=view', ''],
      }),
    )
  },
  isActive: state => {
    const { cursor } = state
    const path = cursor ? simplifyPath(state, cursor) : HOME_PATH
    return (
      !attributeEquals(state, head(path), '=view', 'Prose') && !attributeEquals(state, head(path), '=view', 'Table')
    )
  },
}

export default outlineViewCommand

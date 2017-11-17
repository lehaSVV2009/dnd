import { combineReducers } from 'redux'
import { reducer as toastr } from 'react-redux-toastr'

import hero from './hero'

const reducer = combineReducers({
  hero,
  toastr,
})

export default reducer
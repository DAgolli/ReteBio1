import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import theme from './themeReducers'
import profile from './profileReducer'
import status from './statusReducer'
import homePosts from './postReducer'
import modal from './modalReducer' 

export default combineReducers({
    auth,
    alert,
    theme,
    profile,
    status,
    homePosts,
    modal
})
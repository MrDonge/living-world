
import * as ActionTypes from './actionTypes'

export const showNavbar = showStatus => {
    return { type: ActionTypes.showNavbar, showStatus }
}


export const getUserStatus = status => {
    return { type: ActionTypes.USER_STATUS, status }
}

import { combineReducers } from 'redux'
import * as ActionTypes from './actionTypes'


// 初始数据
const initialState = {
    showStatus: true,
    userinfo: {}
}


// 导航显示状态
function showStatus(showStatus = initialState.showStatus, action) {
    switch (action.type) {
        case ActionTypes.SHOW_NAVBAR:
            return action.showStatus;
        default:
            return showStatus
    }
}

function getUserInfo(userinfo = initialState.userinfo, action) {
    switch (action.type) {
        case ActionTypes.USER_STATUS:
            return action.userinfo;
        default:
            return userinfo
    }
}

const reducer = combineReducers({
    showStatus,
    getUserInfo
})

export default reducer

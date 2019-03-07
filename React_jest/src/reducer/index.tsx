/*
 * @Author: lyricsfan 
 * @Date: 2019-03-06 20:04:17 
 * @Last Modified by:   lyricsfan 
 * @Last Modified time: 2019-03-06 20:04:17 
 */
import { combineReducers } from 'redux'
import { login } from './redux/login.redux'
import {language} from './redux/changeLanguage'
export default combineReducers({ login,language });

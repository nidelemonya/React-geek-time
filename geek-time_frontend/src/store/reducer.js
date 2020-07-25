import { combineReducers } from 'redux';
// redux 模块化
import { reducer as forumReducer} from '../pages/forum/course/store/index';

export default combineReducers({
    forum: forumReducer
})
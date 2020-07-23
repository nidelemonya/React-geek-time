import { combineReducers } from 'redux';
// redux 模块化
import { reducer as forumReducer} from '../pages/forum/Forum';

export default combineReducers({
    forum: forumReducer
})
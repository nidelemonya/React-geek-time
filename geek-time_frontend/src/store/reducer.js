import { combineReducers } from 'redux';
// redux 模块化
import { reducer as forumReducer} from '../pages/forum/course/store/index';
import { reducer as introReducer} from '../pages/forum/course/intro/store/index';

export default combineReducers({
    forum: forumReducer,
    intro: introReducer
})
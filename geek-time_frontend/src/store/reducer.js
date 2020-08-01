// import { combineReducers } from 'redux';

import { combineReducers } from "redux-immutable";
// redux 模块化
import { reducer as forumReducer} from '../pages/forum/course/store/index';
import { reducer as introReducer} from '../pages/forum/course/intro/store/index';
import { reducer as myReducer} from '../pages/my/store/index';

export default combineReducers({
    forum: forumReducer,
    intro: introReducer,
    user: myReducer
})


// fromJS
// 它的功能是将 JS 对象转换为 immutable 对象。

// toJS
// 和 fromJS 功能刚好相反，用来将 immutable 对象转换为 JS 对象。但是值得注意的是，这个方法并没有在 immutable 库中直接导出，而是需要让 immutable 对象调用。

// get/getIn
// 用来获取 immutable 对象属性。

// set
// 用来对 immutable 对象的属性赋值。

// merge
// 新数据与旧数据对比，旧数据中不存在的属性直接添加，旧数据中已存在的属性用新数据中的覆盖。
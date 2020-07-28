// 负责进行数据请求
import * as actionTypes from './constants';
import { getLessonsRequest, getInfoListRequest} from '../../../../api/request'

export const changePathList = (data) => ({
    type: actionTypes.CHANGE_PATH,
    data:data
})

export const changeDirectionList = (data) => ({
    type: actionTypes.CHANGE_Direction,
    data:data
})

export const changeListOffset = (data) => ({
    type: actionTypes.CHANGE_LIST_OFFSET,
    data
  });

// 进场 loading
export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data:data
})

//滑动最底部loading
export const changePullUpLoading = (data) => ({
    type: actionTypes.CHANGE_PULLUP_LOADING,
    data
  });
  
//顶部下拉刷新loading
export const changePullDownLoading = (data) => ({
    type: actionTypes.CHANGE_PULLDOWN_LOADING,
    // es6 新写法 
    data
  });

export const changeInfoList = (data) => ({
    type: actionTypes.CHANGE_INFOS,
    data:data
})


// 获取学习路径数据
export const getPathList = () => {
    // 因为获取数据 是异步操作 所以返回一个函数
    return ( dispatch ) => {
        getLessonsRequest().then(res =>{
            // console.log(res[0].list,'22222222')
            const data = res[0].list;
            dispatch(changePathList(data));
            // 拿到数据  EnterLoading 变成false
            dispatch(changeEnterLoading(false));
        }).catch(()=>{
            // 没有正确得到数据 怎么办
            console.log('课程数据传输错误')
        })
    }
}
// 获取课程方向数据
export const getDirectionList = () => {
    return ( dispatch ) => {
        getLessonsRequest().then(res =>{
            // console.log(res[0].list,'22222222')
            const data = res[1].list;
            dispatch(changeDirectionList(data));
            // 拿到数据  EnterLoading 变成false
            dispatch(changeEnterLoading(false));
        }).catch(()=>{
            // 没有正确得到数据 怎么办
            console.log('课程数据传输错误')
        })
    }
}

export const getInfoList = () => {
    return ( dispatch, getState) => {
        // 获取偏移量
        const offset = getState().forum.listOffset;
        // console.log(offset,'listoffset');
        getInfoListRequest(offset).then(res=> {
            // console.log(res);
            const data = res.infos
            // console.log(data);
            // console.log(data.length);
            dispatch(changeInfoList(data));
            // 拿到数据  EnterLoading 变成false
            dispatch(changeEnterLoading(false));
            dispatch(changePullDownLoading(false));
            dispatch(changeListOffset(data.length));
        })
        // 如果拿到错误的数据
        .catch(() => {
            console.log('训练营数据传输错误')
        })
    }
}

export const refreshMoreInfoList = () => {
    return ( dispatch, getState ) => {
        const offset = getState().forum.listOffset;
        const infos = getState().forum.infoList;
        getInfoListRequest(offset).then(res => {
            // 拿到当前的infos 和新请求的 infos
            // console.log(res.infos);
            const data = [...infos,...res.infos]
            // console.log(data,'sssssss');
            // console.log(data.length);
            dispatch(changeInfoList(data));
            dispatch(changePullUpLoading(false));
            dispatch(changeListOffset(data.length));
        })
        // 如果拿到错误的数据
        .catch(() => {
            console.log('训练营数据传输错误')
        })
    }
}
// 负责进行数据请求
import * as actionTypes from './constants';
import { getLessonsRequest, getTrainingRequest} from '../../../api/request'

export const changeList= (data) => ({
    type: actionTypes.CHANGE_LIST,
    data:data
})
//获取列表
export const changeList = () => {
    // 因为获取数据 是异步操作 所以返回一个函数
    return ( dispatch ) => {
        getListRequest().then((data)=> data.data).then(data =>{
            dispatch(changeList(data));
            console.log(data.data);
            // // 拿到数据  EnterLoading 变成false
            // dispatch(changeEnterLoading(false));
        }).catch(()=>{
            // 没有正确得到数据 怎么办
            console.log('列表数据传输错误')
        })
    }
}

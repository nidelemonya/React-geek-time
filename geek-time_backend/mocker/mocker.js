const infos = require('./data/infos.json');

module.exports = {
    // 学习路径 学习方向数据
    'GET /data/all': require('./data/all.json'),
    // 分页功能数据
    'GET /data/infos': (req, res) => {
        // 获取传进来的 参数offset
        // console.log(req.query);
        const { offset = 0 } = req.query;
        // console.log(offset, req.query, Number(offset) , Number(offset)  + 10)
        const data = infos.slice(Number(offset) , Number(offset)  + 10);
        res.json({
            "infos":data});
    },

    // 简介数据
    'GET /data/intro/:id':  (req, res) => {
        // 获取请求的 参数 id 分类 tab
        const { id } = req.params;
        const { tab = 'intro' } = req.query;
        console.log(id, tab);
        res.json({
            "infos":infos});
        }


    // 'GET /data/intro': (req, res) => {
    //     // 获取传进来的 参数offset
    //     console.log(req.query);
    //     res.json({
    //         "infos":infos});
    //     }
}
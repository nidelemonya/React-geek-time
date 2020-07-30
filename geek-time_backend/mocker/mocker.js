const infos = require('./data/infos.json');
const intro = require('./data/intro.json');
const chapters = require('./data/chapters.json');
const articles = require('./data/articles.json');
const info = require('./data/info.json');
const comments = require('./data/comments.json');
const recommends = require('./data/recommends.json')

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
        let data = [];
        console.log(id, tab);
        console.log(tab === 'comment')
        switch (tab) {
            case 'intro': data = [...intro.filter(m => m.id === Number(id)),...info.filter(m => m.id === Number(id))]
            case 'catalog': data = [...chapters.filter(m => m.id === Number(id)), ...articles.filter(m => m.id === Number(id))]
            case 'recommend': data = recommends.filter(m => m.id === Number(id))
            case 'comment': data = comments.filter(m => m.id === Number(id))
        }
        res.json({
            "data":data});
        }
}
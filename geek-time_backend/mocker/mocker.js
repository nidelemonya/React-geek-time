const infos = require('./data/infos.json');
module.exports = {
    'GET /data/all': require('./data/all.json'),
    'GET /data/infos': (req, res) => {
        // 获取传进来的 参数offset
        const { offset = 0 } = req.query;
        // console.log(offset, req.query, Number(offset) , Number(offset)  + 10)
        const data = infos.slice(Number(offset) , Number(offset)  + 10);
        res.json({
            "infos":data});
    }
}
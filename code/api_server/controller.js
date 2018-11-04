const conn = require('./db.js')

module.exports = {
    // 获取全部数据
    getAllData: (req, res) => {
        let user = 'select * from heros'

        conn.query(user, (err, result) => {
            if (err) return res.status(500).send({
                status: 500,
                meg: '失败',
                data: null
            })
            res.send({
                statu: 200,
                meg: '成功',
                data: result
            })
        })
    },
    // 插入数据 
    addHero: (req, res) => {
        const hero = req.body
        const dt = new Date()
        let y = dt.getFullYear()
        let m = (dt.getMonth() + 1).toString().padStart(2, '0')
        let d = dt.getDate().toString().padStart(2, '0')
        let hs = dt.getHours().toString().padStart(2, '0')
        let mi = dt.getMinutes().toString().padStart(2, '0')
        let s = dt.getSeconds().toString().padStart(2, '0')
        let date = `${y}-${m}-${d}-${hs}-${mi}-${s}`
        hero.ctime = date
        const addSql = 'insert into heros set  ?'
        conn.query(addSql, hero, (err, result) => {
            if (err) res.status(500).send({
                status: '500',
                msg: 'no',
                data: null
            })
            res.send({
                status: '200',
                msg: 'ok',
                data: result
            })
        })

    },

    // / 根据id获取英雄信息
    getHeroById: (req, res) => {
        const id = req.params.id
        const sql = 'select * from heros where id=?'
        conn.query(sql, id, (err, result) => {
            if (err) res.status(500).send({
                status: '500',
                msg: 'no',
                data: null
            })
            res.send({
                status: '200',
                meg: 'ok',
                data: result
            })
        })
    },

    // 根据Id更新英雄数据的API接口
    updateHeroById: (req, res) => {
        const id = req.params.id
        const hero = req.body
        const updateSql = 'update heros set ? where id = ?'
        conn.query(updateSql, [hero, id], (err, result) => {
            if (err) res.status(500).send({
                status: '500',
                mes: 'no',
                data: null
            })
            res.send({
                status: '200',
                mes: 'ok',
                data: result
            })
        })
    },

    // 根据Id删除英雄信息
    delHeroById: (req, res) => {
        const id = req.params.id
        const delSql = 'update heros set isdel=1 where id = ?'
        conn.query(delSql, id, (err, result) => {
            if (err) res.status(500).send({
                status: '500',
                mes: 'no',
                data: null
            })
            res.send({
                status: '200',
                mes: 'ok',
                data: result
            })
        })

    }

}
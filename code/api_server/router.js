const express = require('express')
const router = express.Router()



const ctrl = require('./controller.js')

// 获取全部数据
router.get('/getAllData', ctrl.getAllData)

// 添加数据
router.post('/addHero', ctrl.addHero)

// 根据id获取英雄信息
router.get('/getHeroById/:id', ctrl.getHeroById)

// 对外暴露 根据Id更新英雄数据的API接口
router.post('/updateHeroById/:id',ctrl.updateHeroById )

// 根据Id删除英雄信息
router.get('/delHeroById/:id',ctrl.delHeroById )

module.exports = router
let { collection, ObjectId } = require('../router/db');
let { Router } = require('express');
module.exports = new Router()

    // 广告接口
    .get('/data/ads', (req, res) => {
        collection('ads')
            .then(({ col }) => {
                col.find()
                    .toArray()
                    .then(data => res.json({ error: 0, data }))
            })
            .catch(err => res.json(({ error: 3, data: [] })))
    })

    // 商品列表接口
    .get('/data/list', (req, res) => {
        let type = {};
        if (+req.query.id > 0) {
            type.type = +req.query.id
        }
        collection('product')
            .then(({ col }) => {
                col.find(type)
                    .toArray()
                    .then(data => res.json({ error: 0, data }))
            })
            .catch(err => res.json(({ error: 3, data: [] })))
    })

    // 搜索商品接口
    .get('/data/search', (req, res) => {
        let { type, val } = req.query;
        let search = {};
        if (+type > 0) {
            search.type = +type
        }
        search.title = new RegExp(val, 'i');
        collection('product')
            .then(({ col }) => {
                col.find(search)
                    .sort({ _id: -1 })
                    .limit(10)
                    .toArray()
                    .then(data => res.json({ error: 0, data }))
            })
            .catch(err => res.json(({ error: 3, data: [] })))
    })

    // 商品排序接口
    .get('/data/list/order', (req, res) => {
        let { type, id, mode } = req.query;
        let order = {};
        if (+type > 0) {
            order.type = +type
        }

        if (id == 'discount') {
            return collection('product')
                .then(({ col }) => {
                    col.find(order)
                        .toArray()
                        .then(data => {
                            if (data.length > 0) {
                                data.sort((a, b) => {
                                    return mode * (a.originPrice - a.price) - mode * (b.originPrice - b.price)
                                })
                                data = data.slice(0, 10)
                                res.json(({ error: 0, data }))
                            } else {
                                res.json(({ error: 3, data: [] }))
                            }
                        })
                })
                .catch(err => res.json(({ data })))
        }

        collection('product')
            .then(({ col }) => {
                col.find(order)
                    .sort({ [id]: +mode })
                    .limit(10)
                    .toArray()
                    .then(data => res.json({ error: 0, data }))
                    .catch(err => res.json({ error: 3, data: [] }))
            })
            .catch(err => res.json({ data: [] }))
    })

    // 获取商品数据
    .get('/data/detail', (req, res) => {
        collection('product')
            .then(({ col }) => {
                col.findOne({ _id: ObjectId(req.query.id) })
                    .then(data => res.json({ error: 0, data }))
            })
            .catch(err => res.json({ error: 3, data: {} }))
    })

    // 加入购物车
    .post('/data/detail/addCar', (req, res) => {
        collection('shoppingcar')
            .then(({ col }) => {
                col.findOne({_id: req.body.data._id})
                    .then(data => {
                        if (data) {
                            col.updateOne({ _id: req.body.data._id}, {$set: {num: req.body.data.num}}, )
                            .then(data => res.json({error: 0, msg: '修改数量成功'}))
                            .catch(err => res.json({error: 1, msg: '修改数量失败'}))
                        } else {
                            col.insertOne(req.body.data)
                            .then(data => {
                                if (data.result.n > 0) {
                                    return res.json({error: 0, msg: '加入购物车成功'})
                                }
                                return res.json({error: 1, msg: '加入购物车失败'})
                            })
                            .catch(err => res.json({error: 1, msg: '加入购物车失败'}))
                            
                        }
                    })
            })
    })

    // 判断是否在购物车
    .post('/data/detail/check', (req, res) => {
        collection('shoppingcar')
            .then(({ col }) => {
                col.findOne({_id: req.body.id})
                    .then(data => {
                        if (data) {
                            res.json({ error: 0, num: data.num })
                        } else {
                            res.json({ error: 1, num: 1 })
                        }
                    })
            })
    })

    // 移除购物车
    .post('/data/detail/remove', (req, res) => {
        collection('shoppingcar')
        .then(({col}) => {
            col.remove({_id: req.body.id})
            .then(data => {
                if (data.result.n > 0) {
                    res.json({error: 0, msg: '移除购物车成功'})
                } else {
                    res.json({error: 1, msg: '移除购物车成功'})
                }
            })
        })
    })

    // 获取购物车列表
    // .post('/data/carList', (req, res) => {
    //     collection('shoppingcar')
    //     .then(({col}) => {
    //         col.find()
    //         .toArray()
    //         .then(data => res.json({error: 0, data}))
    //     })
    //     .then( err => res.json({error: 1, data: []}))
    // })

    .post('/data/car/list', (req, res) => {
        collection('shoppingcar')
            .then(({ col }) => {
                col.find()
                    .toArray()
                    .then(data => res.json({ error: 0, data }))
            })
            .catch(err => res.json(({ error: 3, data: [] })))
    })
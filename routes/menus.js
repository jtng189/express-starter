import express from 'express'
import menusDessertsRouter from './menus_desserts.js'

var router = express.Router()

router.get('/', function(req, res, next) {
    res.send('this is the menu')
})

router.use('/desserts', menusDessertsRouter)

export default router
import express from 'express'
import { addUser, singleUser, viewUsers } from '../controllers/User.controller.js'

import  adminAuth  from '../middlewares/Admin.Auth.js'

const router = express.Router()


router.get('/',adminAuth,viewUsers)
router.post('/',addUser)
router.get('/:id',adminAuth,singleUser)

export default router
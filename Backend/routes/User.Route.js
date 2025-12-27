import express from 'express'
import { addUser, verifyEmail, singleUser, viewUsers } from '../controllers/User.controller.js'
import { isAdmin } from '../middlewares/Admin.middleware.js'



const router = express.Router()


router.get('/',isAdmin,viewUsers)
router.post('/',addUser)
router.get('/:id',isAdmin,singleUser)
router.get('/verify-email/:token',verifyEmail)

export default router
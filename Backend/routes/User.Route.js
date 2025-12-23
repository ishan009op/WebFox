import express from 'express'
import { addUser, singleUser, viewUsers } from '../controllers/User.controller.js'



const router = express.Router()


router.get('/',viewUsers)
router.post('/',addUser)
router.get('/:id',singleUser)

export default router
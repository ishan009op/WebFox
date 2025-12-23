import express from 'express'
import { addContact, viewContacts,singleContact } from '../controllers/Contact.Controller.js'
import  adminAuth  from '../middlewares/Admin.Auth.js'

const router = express.Router()

router.get('/',adminAuth,viewContacts)
router.post('/',addContact)
router.get('/:id',adminAuth,singleContact)

export default router
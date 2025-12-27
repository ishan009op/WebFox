import express from 'express'
import { addContact, viewContacts,singleContact } from '../controllers/Contact.Controller.js'
import { isAdmin } from '../middlewares/Admin.middleware.js'


const router = express.Router()

router.get('/',isAdmin,viewContacts)
router.post('/',addContact)
router.get('/:id',isAdmin,singleContact)

export default router
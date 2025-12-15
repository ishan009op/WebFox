import express from 'express'
import { addContact, viewContacts,singleContact } from '../controllers/Contact.Controller.js'

const router = express.Router()

router.get('/',viewContacts)
router.post('/',addContact)
router.get('/:id',singleContact)

export default router
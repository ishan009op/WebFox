import Contact from '../models/Contact.model.js'

export const addContact=async(req,res)=>{
    const {name,email,phone,budget,lookingFor,desc}=req.body
    
    const newContact= await Contact.create({
        name,email,phone,budget,lookingFor,desc
    })
    res.json(newContact)
}

export const viewContacts=async(req,res)=>{
    const contacts= await Contact.find({})
    res.json(contacts)
}

export const singleContact=async(req,res)=>{
    const {id}=req.params

    const contact= await Contact.findOne({_id:id})
    res.json(contact)
}
const express = require('express')
const router = express.Router()
const Contacts = require('../models/contact')

router.get('/', (req, res) => {
    Contacts.find(function (err, Contacts) {
        res.json(Contacts)
    })
})

router.post('/', (req, res) => {
    const newContact = new Contacts({
        name: req.body.name,
        phone: req.body.phone,
        city: req.body.city
    })
    newContact.save((err, Contacts) => {
        if (err) {
            res.json({ err: "Error saving data" })
        }
        else {
            res.json({ msg: "Contact saved successfully" })
        }
    })
})

router.put('/:id', (req, res) => {
    Contacts.updateOne({
        name: req.body.name,
        phone: req.body.phone,
        city: req.body.city
    }, function(err, result){
        if (err) {
            res.json({ err: "Error updating details" })
        }
        else {
            res.json({ msg: "Updated successfully" +result})
        }
    })
})

router.delete('/:id', (req, res) => {
    Contacts.findOneAndDelete(req.params.id, function (err, result) {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
})

module.exports = router
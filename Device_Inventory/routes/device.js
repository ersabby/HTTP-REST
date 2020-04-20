const express = require('express');
const router = express.Router();
const Device = require('../models/device');

router.get('/', (req, res) => {
    Device.getAllDevices((err, devices) => {
        if (err) res.json({
            success: false, msg: err.errmsg
        })
        else res.json({
            success: true, msg: devices
        })
    })
})

router.post('/', (req, res) => {
    console.log(req.body);
    
    Device.addNewDevice(req.body, (err, device) => {
        if (err) res.json({
            success: false, msg: err.errmsg
        })
        else res.json({
            success: true, msg: 'device added'
        })
    })
})

router.put('/', (req, res) => {
    Device.updateDevice(req.body, (err, device) => {
        if (err) res.json({
            success: false, msg: err.errmsg
        })
        else res.json({
            success: true, msg: 'device updated'
        })
    })
})

router.delete('/:id', (req, res) => {
    
    ID = req.params.id;
    devicetodel = {
        _id: ID
    }

    Device.deleteDevice(devicetodel, (err, device) => {
        if (err) res.json({
            success: false, msg: err.errmsg
        })
        else res.json({
            success: true, msg: 'device deleted'
        })
    })
})
module.exports = router;
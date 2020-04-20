const mongoose = require('mongoose');
const schema = mongoose.Schema;

const deviceSchema = new schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    state: { type: Boolean, required: false, default: false }
});

const Device = mongoose.model('Device', deviceSchema);

const getAllDevices = (callback) => {
    Device.find(callback);
}
const getDeviceByID = (id, callback) => {
    Device.findById(id, callback);
}
const addNewDevice = (device, callback) => {
    const newDevice = new Device(device);
    newDevice.save(callback);
}
const updateDevice = (device, callback) => {
    toUpdate = {
        state: device.state
    }
    Device.findByIdAndUpdate(device._id, toUpdate, callback);
}

const deleteDevice = (device, callback) => {
    Device.findByIdAndDelete(device._id, callback);
}

module.exports = {
    Device, getAllDevices, getDeviceByID,
    updateDevice, deleteDevice, addNewDevice
}
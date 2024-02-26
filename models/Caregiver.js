const mongoose = require('mongoose');

const caregiverSchema = new mongoose.Schema({
    name: String,
    age: Number,
    // Add other caregiver properties as needed
});

module.exports = mongoose.model('Caregiver', caregiverSchema);

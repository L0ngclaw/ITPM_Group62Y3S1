import mongoose from 'mongoose'

const {Schema} = mongoose

const AppointmentSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    requestType: {
        type: String,
        enum: ['Agent Support', 'Send Samples'],
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    testType: {
        type: String,
        enum: ['Heavy metal test', 'microbiological test', 'Chemical test', 'Normal Drinking Water test'],
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

export default mongoose.model('Appointments', AppointmentSchema)

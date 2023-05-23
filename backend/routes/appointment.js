import express from 'express'
import {createAppointment, getAppointments, removeAppointment, updateAppointment} from "../controllers/appointment";


const router = express.Router()
router.post('/appointments/create-appointment', createAppointment)
router.get('/appointments/appointments-list/:email', getAppointments)
router.delete('/appointments/remove-appointment/:id', removeAppointment)
router.put('/appointments/update-appointment/:id', updateAppointment)


module.exports = router
import Appointments from '../models/appointment'
import mongoose from 'mongoose'

export const createAppointment = async (req, res) => {
    const { appointmentId, date, address, requestType, contactNo, testType, email } = req.body;

    const newAppointment = new Appointments({
        address,
        requestType,
        contactNo,
        date,
        testType,
        email,
    });

    await Appointments.create(newAppointment)
        .then((createdAppointment) => {
            return res.status(200).json({
                appointment: createdAppointment,
                message: 'Appointment Created Successfully',
            });
        })
        .catch((err) => {
            return res.status(400).json({
                error: err,
                message: 'Appointment creation error',
            });
        });
};

export const getAppointments = async (req, res) => {
    const { email } = req.params;

    await Appointments.find({ email: email })
        .then((appointments) => {
            if(appointments){
                return res.status(200).json({
                    appointments: appointments,
                    message: 'Appointments fetched successfully',
                });
            } else {
                return res.status(404).json({
                    message: 'No appointments found for this email',
                });
            }
        })
        .catch((err) => {
            return res.status(500).json({
                error: err,
                message: 'Error fetching appointments',
            });
        });
};

export const removeAppointment = async (req, res) => {
    const { id } = req.params; // Here we're using id instead of appointmentId

    await Appointments.findByIdAndDelete(id) // findByIdAndDelete method is used here
        .then((removedAppointment) => {
            if(removedAppointment){
                return res.status(200).json({
                    message: 'Appointment deleted successfully',
                });
            } else {
                return res.status(404).json({
                    message: 'No appointment found with this id',
                });
            }
        })
        .catch((err) => {
            return res.status(500).json({
                error: err,
                message: 'Error deleting appointment',
            });
        });
};

export const updateAppointment = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    await Appointments.findByIdAndUpdate(id, updatedData, { new: true }) // findByIdAndUpdate method is used here
        .then((updatedAppointment) => {
            if(updatedAppointment){
                return res.status(200).json({
                    appointment: updatedAppointment,
                    message: 'Appointment updated successfully',
                });
            } else {
                return res.status(404).json({
                    message: 'No appointment found with this id',
                });
            }
        })
        .catch((err) => {
            return res.status(500).json({
                error: err,
                message: 'Error updating appointment',
            });
        });
};












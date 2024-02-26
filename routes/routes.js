const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');
const caregiverController = require('./controllers/caregiverController');
const bookingController = require('./controllers/bookingController');

// Authentication routes
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout);

// Caregiver routes
router.get('/caregivers', caregiverController.getAllCaregivers);
router.get('/caregivers/:id', caregiverController.getCaregiverById);
router.post('/caregivers', caregiverController.createCaregiver);
router.put('/caregivers/:id', caregiverController.updateCaregiver);
router.delete('/caregivers/:id', caregiverController.deleteCaregiver);

// Booking routes
router.get('/bookings', bookingController.getAllBookings);
router.get('/bookings/:id', bookingController.getBookingById);
router.post('/bookings', bookingController.createBooking);
router.put('/bookings/:id', bookingController.updateBooking);
router.delete('/bookings/:id', bookingController.deleteBooking);

module.exports = router;

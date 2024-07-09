// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { generateAppointmentData } = require('./generateArrayFromSetup');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/appointmentDB');

// Схема для слотов приема
const SlotSchema = new mongoose.Schema({
	date: String,
	dayOfWeek: String,
	isWorkingDay: Boolean,
	isHoliday: Boolean,
	holidayName: String,
	slots: [{
		time: String,
		isAvailable: Boolean
	}]
});

const Slot = mongoose.model('Slot', SlotSchema);

app.use(bodyParser.json());

// Generate and save appointments data
app.get('/generate-slots', async (req, res) => {
	try {
		const appointmentData = generateAppointmentData();
		await Slot.deleteMany({}); // Clean existing data
		await Slot.insertMany(appointmentData);
		res.json({ message: 'Slots generated and saved successfully' });
	} catch (error) {
		res.status(500).json({ error: 'Error generating slots' });
	}
});

// Get requested date slots data
app.get('/slots/:date', async (req, res) => {
	try {
		const date = req.params.date;
		const slots = await Slot.findOne({ date });
		res.json(slots);
	} catch (error) {
		res.status(500).json({ error: 'Error fetching slots' });
	}
});

// Book appointment
app.post('/book-appointment', async (req, res) => {
	try {
		const { date, time } = req.body;
		const slot = await Slot.findOne({ date });

		if (!slot) {
			return res.status(404).json({ error: 'Slot not found' });
		}

		const appointmentSlot = slot.slots.find(s => s.time === time);
		if (!appointmentSlot || !appointmentSlot.isAvailable) {
			return res.status(400).json({ error: 'Slot is not available' });
		}

		appointmentSlot.isAvailable = false;
		await slot.save();

		res.json({ message: 'Appointment booked successfully', updatedSlot: slot });
	} catch (error) {
		res.status(500).json({ error: 'Error booking appointment' });
	}
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
const { adminSettings } = require('./setup.js');

// translate your days of week here and then you need to regenerate array callng generate-slots from backend
// if you use "Open Server Panel" go to advanced -> console and run curl http://localhost:3000/generate-slots 
// *** Warning *** all data will be erased and generated again.
const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
];


function generateAppointmentData() {
	let currentDate = new Date();
	// Find the nearest Monday
	currentDate.setDate(currentDate.getDate() - ((currentDate.getDay() + 6) % 7));

	const endDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
	const appointmentData = [];

	while (currentDate < endDate) {
		const dayOfWeek = (currentDate.getDay() + 6) % 7; // set Monday to be the fist day of the week
		const formattedDate = formatDate(currentDate);
		const isWorkingDay = adminSettings.workDays[dayOfWeek].isWorking;
		const holiday = adminSettings.holidays.find(holiday => holiday.date === formattedDate);
		const isHoliday = !!holiday;

		const dayAppointments = generateDayAppointments(formattedDate, getDayName(dayOfWeek), isWorkingDay, isHoliday, holiday?.name);
		appointmentData.push(dayAppointments);

		currentDate.setDate(currentDate.getDate() + 1);
	}

	return appointmentData;
}

function generateDayAppointments(date, dayOfWeek, isWorkingDay, isHoliday, holidayName) {
	const dayAppointments = {
		date: date,
		dayOfWeek: dayOfWeek,
		isWorkingDay: isWorkingDay,
		isHoliday: isHoliday,
		holidayName: holidayName || null,
		slots: []
	};

	let currentTime = new Date(`${date}T${adminSettings.workDayStart}`);
	const endTime = new Date(`${date}T${adminSettings.workDayEnd}`);

	while (currentTime < endTime) {
		dayAppointments.slots.push({
			time: formatTime(currentTime),
			isAvailable: isWorkingDay && !isHoliday
		});

		currentTime.setMinutes(currentTime.getMinutes() + adminSettings.appointmentSlotSize);
	}

	return dayAppointments;
}

function formatDate(date) {
	return date.toISOString().split('T')[0];
}

function formatTime(date) {
	return date.toTimeString().slice(0, 5);
}

function getDayName(dayIndex) {
	return days[dayIndex];
}

module.exports = { generateAppointmentData };
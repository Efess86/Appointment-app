// generateAppointmentData.js
import { adminSettings } from './setup.js';

function generateAppointmentData() {
	let currentDate = new Date();
	// Находим ближайший понедельник (включая текущий день, если это понедельник)
	currentDate.setDate(currentDate.getDate() - (currentDate.getDay() + 6) % 7);

	const endDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
	const appointmentData = [];

	while (currentDate < endDate) {
		const dayOfWeek = currentDate.getDay();
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
	const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	return days[dayIndex];
}

const appointmentData = generateAppointmentData();
console.log(appointmentData);

export { generateAppointmentData };
import { generateAppointmentData } from './generateArrayFromSetup.js';
import { getCurrentDate, changeDate, setDateFromString } from './dateManager.js';

const appRoot = document.getElementById('app');

// ------------ Generate appointment data ---------------
const appointmentData = generateAppointmentData();

// Function to create an element with attributes and content
function createElement(tag, attributes = {}, content = '') {
	const element = document.createElement(tag);
	Object.entries(attributes).forEach(([key, value]) => {
		element.setAttribute(key, value);
	});
	element.innerHTML = content;
	return element;
}

// Function to create the application structure
function createAppStructure() {
	const container = createElement('div', { class: 'appointment_container' });

	const dateContainer = createElement('div', { class: 'appointment_date' });
	const prevButton = createElement('button', { id: 'prevDay', class: 'changeDayBtn' }, '&#8678');
	const dateInput = createElement('input', { type: 'date', id: 'currentDate' });
	const nextButton = createElement('button', { id: 'nextDay', class: 'changeDayBtn' }, '&#x21E8');

	dateContainer.append(prevButton, dateInput, nextButton);

	const appointmentDay = createElement('p', { id: 'appointmentDay', class: 'appointment_day' });
	const slotsContainer = createElement('div', { id: 'appointmentSlots', class: 'appointment_slots' });

	container.append(dateContainer, appointmentDay, slotsContainer);
	appRoot.appendChild(container);
}

// Function to render appointment slots for the selected day
function renderAppointmentSlots(date) {
	const appointmentDay = document.getElementById('appointmentDay');
	const slotsContainer = document.getElementById('appointmentSlots');
	const dayData = appointmentData.find(day => day.date === date);

	if (!dayData) {
		appointmentDay.textContent = '';
		slotsContainer.innerHTML = '<p>Sorry. No data for selected date.</p>';
		return;
	}

	appointmentDay.textContent = dayData.dayOfWeek;
	slotsContainer.innerHTML = '';

	if (!dayData.isWorkingDay || dayData.isHoliday) {
		const message = dayData.isHoliday ? `Holiday: ${dayData.holidayName}` : 'Non-working day';
		slotsContainer.appendChild(createElement('p', {}, message));
	} else {
		dayData.slots.forEach(slot => {
			const slotElement = createElement('div', { class: 'appointment_slots-item' });
			slotElement.append(
				createElement('span', {}, slot.time),
				createElement('span', {}, slot.isAvailable ? '+' : '-')
			);
			slotsContainer.appendChild(slotElement);
		});
	}
}

// Handler for date change
function handleDateChange(newDate) {
	document.getElementById('currentDate').value = newDate;
	renderAppointmentSlots(newDate);
}

// Initialize the application
function initApp() {
	createAppStructure();

	const currentDate = getCurrentDate();
	handleDateChange(currentDate);

	// Add event listeners
	document.getElementById('prevDay').addEventListener('click', () => {
		handleDateChange(changeDate(-1));
	});

	document.getElementById('nextDay').addEventListener('click', () => {
		handleDateChange(changeDate(1));
	});

	document.getElementById('currentDate').addEventListener('change', (e) => {
		handleDateChange(setDateFromString(e.target.value));
	});
}
initApp();
// Function to get slots from server
async function fetchSlots(date) {
	try {
		const response = await fetch(`http://localhost:3000/slots/${date}`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching slots:', error);
		return null;
	}
}

// Function for booking slot
async function bookAppointment(date, time) {
	try {
		const response = await fetch('http://localhost:3000/book-appointment', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ date, time }),
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('Error booking appointment:', error);
		return null;
	}
}

const appRoot = document.getElementById('app');

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
function renderAppointmentSlots(dayData) {
	const appointmentDay = document.getElementById('appointmentDay');
	const slotsContainer = document.getElementById('appointmentSlots');

	appointmentDay.textContent = dayData.dayOfWeek;
	slotsContainer.innerHTML = '';

	if (!dayData.isWorkingDay || dayData.isHoliday) {
		const message = dayData.isHoliday ? `Holiday: ${dayData.holidayName}` : 'Non working day';
		slotsContainer.appendChild(createElement('p', {}, message));
	} else {
		dayData.slots.forEach(slot => {
			const slotElement = createElement('div', {
				class: slot.isAvailable ? 'appointment_slots-item' : 'appointment_slots-item__unavailable',
				'data-time': slot.time
			});
			slotElement.append(
				createElement('span', {}, slot.time),
				createElement('span', {}, slot.isAvailable ? '+' : '')
			);
			slotsContainer.appendChild(slotElement);
		});
	}
}

// Handler for date change
async function handleDateChange(newDate) {
	document.getElementById('currentDate').value = newDate;
	const slotData = await fetchSlots(newDate);
	if (slotData) {
		renderAppointmentSlots(slotData);
	} else {
		document.getElementById('appointmentSlots').innerHTML = "Can't load slots";
	}
}

// Date management functions
let currentDate = new Date();

function formatDate(date) {
	return date.toISOString().split('T')[0];
}

function updateDate(date) {
	currentDate = date;
	return formatDate(currentDate);
}

function changeDate(days) {
	const newDate = new Date(currentDate);
	newDate.setDate(newDate.getDate() + days);
	return updateDate(newDate);
}

function getCurrentDate() {
	return formatDate(currentDate);
}

function setDateFromString(dateString) {
	return updateDate(new Date(dateString));
}

// Initialize the application
async function initApp() {
	createAppStructure();

	const currentDate = getCurrentDate();
	await handleDateChange(currentDate);

	// Add event listeners
	document.getElementById('prevDay').addEventListener('click', async () => {
		await handleDateChange(changeDate(-1));
	});

	document.getElementById('nextDay').addEventListener('click', async () => {
		await handleDateChange(changeDate(1));
	});

	document.getElementById('currentDate').addEventListener('change', async (e) => {
		await handleDateChange(setDateFromString(e.target.value));
	});

	document.getElementById('appointmentSlots').addEventListener('click', async (e) => {
		const slotElement = e.target.closest('.appointment_slots-item');
		if (slotElement) {
			const date = document.getElementById('currentDate').value;
			const time = slotElement.dataset.time;
			const result = await bookAppointment(date, time);
			if (result && result.message === 'Appointment booked successfully') {
				slotElement.classList.remove('appointment_slots-item');
				slotElement.classList.add('appointment_slots-item__unavailable');
				slotElement.querySelector('span:last-child').textContent = '';
			} else {
				alert("Can't book your appointment. Please try again.");
			}
		}
	});
}

initApp();
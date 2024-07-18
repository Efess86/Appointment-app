import { fetchSlots, bookAppointment } from './apiService.js';
import { createElement } from './utils.js';
import { formatDate, updateDate, getCurrentDate, setDateFromString, parseDateForAPI } from './dateManager.js';

const appRoot = document.getElementById('app');

function createAppStructure() {
	const container = createElement('div', { class: 'appointment_container' });

	const dateContainer = createElement('div', { class: 'appointment_date' });
	const prevButton = createElement('button', { id: 'prevDay', class: 'changeDayBtn' }, '&#8678');
	const dateInput = createElement('input', { type: 'text', id: 'currentDate' });
	const nextButton = createElement('button', { id: 'nextDay', class: 'changeDayBtn' }, '&#x21E8');

	dateContainer.append(prevButton, dateInput, nextButton);

	const appointmentDay = createElement('p', { id: 'appointmentDay', class: 'appointment_day' });
	const slotsContainer = createElement('div', { id: 'appointmentSlots', class: 'appointment_slots' });

	container.append(dateContainer, appointmentDay, slotsContainer);
	appRoot.appendChild(container);
}

function renderAppointmentSlots(dayData) {
	const appointmentDay = document.getElementById('appointmentDay');
	const slotsContainer = document.getElementById('appointmentSlots');

	appointmentDay.textContent = dayData.dayOfWeek;
	slotsContainer.innerHTML = '';

	if (!dayData.isWorkingDay || dayData.isHoliday) {
		const message = dayData.isHoliday ? `Праздник: ${dayData.holidayName}` : 'Non-working day';
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

async function handleDateChange(newDate) {
	document.getElementById('currentDate').value = newDate;
	const apiFormattedDate = parseDateForAPI(newDate);
	const slotData = await fetchSlots(apiFormattedDate);
	if (slotData) {
		renderAppointmentSlots(slotData);
	} else {
		document.getElementById('appointmentSlots').innerHTML = "Failed to load slots";
	}
}

function changeDate(days) {
	const [day, month, year] = getCurrentDate().split('/');
	const newDate = new Date(year, month - 1, day);
	newDate.setDate(newDate.getDate() + days);
	return updateDate(newDate);
}

async function initApp() {
	createAppStructure();

	const currentDate = getCurrentDate();
	await handleDateChange(currentDate);

	document.getElementById('prevDay').addEventListener('click', async () => {
		await handleDateChange(changeDate(-1));
	});

	document.getElementById('nextDay').addEventListener('click', async () => {
		await handleDateChange(changeDate(1));
	});

	document.getElementById('currentDate').addEventListener('change', async (e) => {
		if (/^\d{2}\/\d{2}\/\d{4}$/.test(e.target.value)) {
			await handleDateChange(setDateFromString(e.target.value));
		} else {
			alert("Please enter the date in DD/MM/YYYYY format");
			e.target.value = getCurrentDate();
		}
	});

	document.getElementById('appointmentSlots').addEventListener('click', async (e) => {
		const slotElement = e.target.closest('.appointment_slots-item');
		if (slotElement) {
			const date = parseDateForAPI(document.getElementById('currentDate').value);
			const time = slotElement.dataset.time;
			const result = await bookAppointment(date, time);
			if (result && result.message === 'Appointment booked successfully') {
				slotElement.classList.remove('appointment_slots-item');
				slotElement.classList.add('appointment_slots-item__unavailable');
				slotElement.querySelector('span:last-child').textContent = '';
			} else {
				alert("Failed to book an appointment. Please try again.");
			}
		}
	});
}

initApp();
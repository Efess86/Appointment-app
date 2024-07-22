// main.js
import { fetchSlots, bookAppointment } from './apiService.js';
import { createElement } from './utils.js';
import { formatDate, updateDate, getCurrentDate, setDateFromString, parseDateForAPI } from './dateManager.js';
import { createBookingPopup, getCustomerInfo, closeBookingPopup } from './getCustomerInfo.js';

const appRoot = document.getElementById('app');

const nextDayIcon = `<?xml version="1.0" encoding="utf-8"?>
<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"/>
</svg>`

const prevDayIcon = `<?xml version="1.0" encoding="utf-8"?>
<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"/>
</svg>`

function createAppStructure() {
	const container = createElement('div', { class: 'appointment_container' });

	const dateContainer = createElement('div', { class: 'appointment_date' });
	const prevButton = createElement('button', { id: 'prevDay', class: 'changeDayBtn' }, prevDayIcon);
	const dateInput = createElement('input', { type: 'text', id: 'currentDate' });
	const nextButton = createElement('button', { id: 'nextDay', class: 'changeDayBtn' }, nextDayIcon);

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

			createBookingPopup();

			document.getElementById('submitBtn').addEventListener('click', async () => {
				const customerInfo = getCustomerInfo();
				const result = await bookAppointment(date, time, customerInfo);
				if (result && result.message === 'Appointment booked successfully') {
					slotElement.classList.remove('appointment_slots-item');
					slotElement.classList.add('appointment_slots-item__unavailable');
					slotElement.querySelector('span:last-child').textContent = '';
					closeBookingPopup();
				} else {
					alert("Failed to book an appointment. Please try again.");
				}
			});
		}
	});
}

initApp();
import { generateAppointmentData } from './generateArrayFromSetup.js';
import { getCurrentDate, changeDate, setDateFromString } from './dateManager.js';

const dateInput = document.getElementById('currentDate');
const prevButton = document.getElementById('prevDay');
const nextButton = document.getElementById('nextDay');

// Initialize date
dateInput.value = getCurrentDate();

// Event listner and change date for prev btn
prevButton.addEventListener('click', () => {
	dateInput.value = changeDate(-1);
	console.log('Current date:', getCurrentDate());
});

// Event listner and change date for next btn
nextButton.addEventListener('click', () => {
	dateInput.value = changeDate(1);
	console.log('Current date:', getCurrentDate());
});

// Event listner and change date for input
dateInput.addEventListener('change', (e) => {
	setDateFromString(e.target.value);
	console.log('Current date:', getCurrentDate());
});

// Check date
function checkCurrentDate() {
	console.log('Current selected date:', getCurrentDate());
}
checkCurrentDate();

// getCurrentDate() func that return variable with current date :-)
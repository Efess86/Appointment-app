// dateManager.js

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

export { getCurrentDate, changeDate, setDateFromString };
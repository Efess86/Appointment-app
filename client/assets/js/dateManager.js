let currentDate = new Date();

export function formatDate(date) {
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
}

export function updateDate(date) {
	currentDate = date;
	return formatDate(currentDate);
}

export function getCurrentDate() {
	return formatDate(currentDate);
}

export function setDateFromString(dateString) {
	const [day, month, year] = dateString.split('/');
	return updateDate(new Date(year, month - 1, day));
}

export function parseDateForAPI(dateString) {
	const [day, month, year] = dateString.split('/');
	return `${year}-${month}-${day}`;
}
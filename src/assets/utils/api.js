import { APPOINTMENT_DATA } from "./config";
// WARNING "APPOINTMENT_DATA" is for example!!! Change to the currect array later

export const saveAppointmentData = () => {
	try {
		localStorage.setItem('appointmentData', JSON.stringify(APPOINTMENT_DATA));
		console.log('Appointment data successfully saved to local storage');
	}
	catch (error) {
		console.error('Error saving appointment data. Error message: ', error);
	}
}

export const getAppointmentData = () => {
	try {
		const data = localStorage.getItem('appointmentData');
		if (data) {
			return data.JSON.parse(data);
		} else {
			console.error("Can't get data from local storage.");
			return APPOINTMENT_DATA;
		}

	} catch (error) {
		console.error("Can't get data from local storage. Error message: ", error);
		return APPOINTMENT_DATA;
	}
}
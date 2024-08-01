import { CREATE_CALENDAR } from "./translations";

const days = CREATE_CALENDAR.WORKING_DAYS.DAYS;

export const LOGIN = {
	USER_NAME: 'Root',
	PASSWORD: 'root'
}

export const APPOINTMENT_DATA = {
	SLOT_START: '10:00',
	SLOT_END: '18:00',
	SLOT_SIZE: 50,
	BREAK_SIZE: 10,
	WORK_DAYS: [
		{ MONDAY: 'Monday', IS_WEEKEND: true },
		{ TUESDAY: 'Tuesday', IS_WEEKEND: true },
		{ WEDNESDAY: 'Wednesday', IS_WEEKEND: true },
		{ THURSDAY: 'Thursday', IS_WEEKEND: true },
		{ FRIDAY: 'Friday', IS_WEEKEND: true },
		{ SATURDAY: 'Saturday', IS_WEEKEND: false },
		{ SUNDAY: 'Sunday', IS_WEEKEND: false }
	],
	HOLIDAYS: [
		{ DATE: '2024-01-01', NAME: 'New Year', IS_WEEKEND: true },
		{ DATE: '2024-01-07', NAME: 'Chrismas', IS_WEEKEND: true },
		{ DATE: '2024-02-23', NAME: 'Defender day', IS_WEEKEND: true },
		{ DATE: '2024-03-08', NAME: "Woman's day 8 March", IS_WEEKEND: true },
		{ DATE: '2024-05-01', NAME: 'Labor day', IS_WEEKEND: true },
		{ DATE: '2024-05-09', NAME: 'End of 2nd World War', IS_WEEKEND: true },
		{ DATE: '2024-12-03', NAME: 'Holyday', IS_WEEKEND: true },
		{ DATE: '2024-07-09', NAME: 'Birthday', IS_WEEKEND: true },
	]
};
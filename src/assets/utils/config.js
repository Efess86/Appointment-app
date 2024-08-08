import { CREATE_CALENDAR } from "./translations";

const MONDAY = CREATE_CALENDAR.WORKING_DAYS.DAYS.MONDAY;
const TUESDAY = CREATE_CALENDAR.WORKING_DAYS.DAYS.TUESDAY;
const WEDNESDAY = CREATE_CALENDAR.WORKING_DAYS.DAYS.WEDNESDAY;
const THURSDAY = CREATE_CALENDAR.WORKING_DAYS.DAYS.THURSDAY;
const FRIDAY = CREATE_CALENDAR.WORKING_DAYS.DAYS.FRIDAY;
const SATURDAY = CREATE_CALENDAR.WORKING_DAYS.DAYS.SATURDAY;
const SUNDAY = CREATE_CALENDAR.WORKING_DAYS.DAYS.SUNDAY;


export const LOGIN = {
	USER_NAME: 'root',
	PASSWORD: 'root'
}

export const APPOINTMENT_CONFIG = {
	DATE_START: '',
	DATE_END: '',
	SLOT_START: '',
	SLOT_END: '',
	SLOT_SIZE: 50,
	BREAK_SIZE: 10,
	WORK_DAYS: [
		{ MONDAY: MONDAY, IS_WEEKEND: true },
		{ TUESDAY: TUESDAY, IS_WEEKEND: true },
		{ WEDNESDAY: WEDNESDAY, IS_WEEKEND: true },
		{ THURSDAY: THURSDAY, IS_WEEKEND: true },
		{ FRIDAY: FRIDAY, IS_WEEKEND: true },
		{ SATURDAY: SATURDAY, IS_WEEKEND: false },
		{ SUNDAY: SUNDAY, IS_WEEKEND: false }
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

// array that must be generated from admin data
export const APPOINTMENT_DATA = {
	NAME: '10:00 - 16:00 shift',
	DATES: {
		ITEM: {
			DATE: '11/07/24',
			DAY: WEDNESDAY,
			IS_WEEKEND: false, // if not weekend generate slots
			SLOTS: [
				{ TIME: '10:00-11:00', IS_AVALIBLE: true },
				{ TIME: '11:00-12:00', IS_AVALIBLE: true },
				{ TIME: '12:00-13:00', IS_AVALIBLE: false },
				{ TIME: '13:00-14:00', IS_AVALIBLE: true },
				{ TIME: '14:00-15:00', IS_AVALIBLE: false },
				{ TIME: '15:00-16:00', IS_AVALIBLE: true },
			]
		},
		ITEM: {
			DATE: '11/07/24',
			DAY: WEDNESDAY,
			IS_WEEKEND: true, // if weekend don't generate slots
			SLOTS: []
		},

	}
}

export const USER_DATA = {
	NAME: '',
	EMAIL: '',
	TEL: '',
}
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
	WORK_DAYS: {
		'Monday': { NAME: MONDAY, IS_WORKDAY: true },
		'Tuesday': { NAME: TUESDAY, IS_WORKDAY: true },
		'Wednesday': { NAME: WEDNESDAY, IS_WORKDAY: true },
		'Thursday': { NAME: THURSDAY, IS_WORKDAY: true },
		'Friday': { NAME: FRIDAY, IS_WORKDAY: true },
		'Saturday': { NAME: SATURDAY, IS_WORKDAY: false },
		'Sunday': { NAME: SUNDAY, IS_WORKDAY: false }
	},
	HOLIDAYS: {
		'01/01/24': { NAME: 'New Year', IS_WORKDAY: false },
		'01/07/24': { NAME: 'Chrismas', IS_WORKDAY: false },
		'02/23/24': { NAME: 'Defender day', IS_WORKDAY: true },
		'03/08/24': { NAME: "Woman's day 8 March", IS_WORKDAY: true },
		'05/01/24': { NAME: 'Labor day', IS_WORKDAY: false },
		'05/09/24': { NAME: 'End of 2nd World War', IS_WORKDAY: false },
		'07/29/24': { NAME: 'Birthday', IS_WORKDAY: false },
		'12/26/24': { NAME: 'Holyday', IS_WORKDAY: false },
	}
};

// array that must be generated from admin data
export const APPOINTMENT_DATA = {
	NAME: '10:00 - 18:00 shift',
	DATES: {
		'07/11/24': {
			DAY: WEDNESDAY,
			IS_WORKDAY: true,
			SLOTS: {
				'10:00 - 11:00': { IS_AVALIBLE: true, USER_DATA: {} },
				'12:00 - 13:00': { IS_AVALIBLE: false, USER_DATA: { NAME: 'Navrozidis Marios', EMAIL: 'navrozidis-marios@gmail.com', TEL: '+30 699 6548 458' } },
				'13:00 - 14:00': { IS_AVALIBLE: true, USER_DATA: {} },
				'14:00 - 15:00': { IS_AVALIBLE: false, USER_DATA: { NAME: 'Navrozidis Marios', EMAIL: 'navrozidis-marios@gmail.com', TEL: '+30 699 6548 458' } },
				'15:00 - 16:00': { IS_AVALIBLE: true, USER_DATA: {} },
				'16:00 - 17:00': { IS_AVALIBLE: true, USER_DATA: {} },
				'17:00 - 18:00': { IS_AVALIBLE: true, USER_DATA: {} },
			}
		},
		'07/12/24': {
			DAY: WEDNESDAY,
			IS_WORKDAY: false,
			SLOTS: {}
		},

	}
}
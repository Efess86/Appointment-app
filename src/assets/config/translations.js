// ----------- Login page -----------
export const LOGIN_PAGE = {
	USERNAME: 'Username',
	PASSWORD: 'Password',
	BUTTON: 'Login',
}

// ----------- Calendar list window -----------
export const CALENDAR_LIST = {
	ADD_NEW_BUTTON: 'Add new calendar', // name new calendar button
	CARD: {
		DATES: 'Dates',                 // name cards dates. Expl "Dates: 30/05/2024 - 24/12/2024"
		SLOTS: 'Slots',                 // name cards slots. Expl "Slots: 30min (12:00 - 15:00)"
		OPEN_BUTTON: 'Open',            // name cards "Open" button
		DELETE_BUTTON: 'Delete',        // name cards "Delete" button
	}
}

// ----------- Create calendar window -----------
export const CREATE_CALENDAR = {
	NAME: {
		LABEL: 'Calendar name',
		PLACEHOLDER: 'Enter calendar name...'
	},
	DAYS_AND_SLOTS: {
		TITLE: 'Choose start and end days, slot and break durations',
		START_DATE_TITLE: 'Start date:',
		END_DATE_TITLE: 'Start date:',
		SLOT_DURATION: 'Slot duration (in mins):',
		START_SLOT: 'Set start slots time:',
		END_SLOT: 'Set end slots time:',
		BREAK_DURATION: 'Break duration (in min-s):'
	},
	WORKING_DAYS: {
		TITLE: 'Choose working days',
		DAYS: {
			MONDAY: 'Δευτέρα',
			TUESDAY: 'Τρίτη',
			WEDNESDAY: 'Τετάρτη',
			THURSDAY: 'Πέμπτη',
			FRIDAY: 'Παρασκευή',
			SATURDAY: 'Σάββατο',
			SUNDAY: 'Κυριακή'
		}
	},
	HOLIDAYS: {
		TITLE: 'Choose holidays',
		YOUR_OWN_HOLIDAY: {
			TITLE: 'Add your own holiday',
			DATE_LABEL: 'Holiday date:',
			NAME_LABEL: 'Holiday name:',
			NAME_PLACEHOLDER: 'Enter holiday name...',
			BUTTON: 'Add your holiday'
		},
		GROUP_HOLIDAYS: {
			NEW_YEAR: "New Year's (January 1)",
			WOMAN_DAY: "Women's Day (March 8)",
			LABOR_DAY: "Labor Day (May 1)",
			X_MAS: "Christmas (December 25)"
		},
		SAVE_BUTTON: 'Save',
		CANCEL_BUTTON: 'Cancel',
	}
}
// ----------- Admin calendar window -----------

export const ADMIN_CALENDAR = {
	DATE_LABEL: 'Select date',
	SLOTS_LIST: {
		DURATION: 'Duration',
		DURATION_TIME: 'mins',
		BREAK: 'Break',
		BREAK_TIME: 'mins',
		EMPTY_SLOT: 'Empty slot',
		CANCEL_BUTTON: 'Cancel appointment'
	},
	CLOSE_BUTTON: 'Close',
	POP_UP: {
		TITLE: 'Are you sure you want to cancel the appointment ?',
		CHECKBOX_EMAIL: 'Inform about cancellation (email message)',
		CHECKBOX_PHONE: 'Inform about cancellation (phone message)',
		CHECKBOX_CONFIRM: "Yes, I'm sure and I want to cancel the appointment.",
		CANCEL_BUTTON: 'Cancel appointment',
		CLOSE_BUTTON: 'Close',
	}
}

export const CLIENT_BOOKING = {
	DATE_LABEL: 'Select date',
	POP_UP: {
		TITLE: 'Book an appointment ',
		NAME: 'Name',
		NAME_PLACEHOLDER: 'Enter your name...',
		EMAIL: 'Email',
		EMAIL_PLACEHOLDER: 'Enter your email...',
		PHONE: 'Phone',
		PHONE_PLACEHOLDER: 'Enter your phone...',
		CHECKBOX_CONFIRM: "I'm agree the website to use my personal data.",
		BUTTON: 'Book your appointment'
	}
}
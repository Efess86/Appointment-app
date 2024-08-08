// ----------- Login page -----------
export const LOGIN_PAGE = {
	USERNAME: 'Username',
	PASSWORD: 'Password',
	BUTTON: 'Login',
}

// ----------- Calendar list window -----------
export const CALENDAR_LIST = {
	ADD_NEW_BUTTON: 'Add new calendar', // defaul value "Add new calendar"
	CARD: {
		DATES: 'Dates',                 // defaul value "Dates"
		SLOTS: 'Slots',                 // defaul value "Slots"
		OPEN_BUTTON: 'Open',            // defaul value "Open"
		DELETE_BUTTON: 'Delete',        // defaul value "Delete"
	}
}

// ----------- Create calendar window -----------
export const CREATE_CALENDAR = {
	NAME: {
		LABEL: 'Calendar name',											// defaul value "Calendar name"
		PLACEHOLDER: 'Enter calendar name...'							// defaul value "Enter calendar name..."
	},
	DAYS_AND_SLOTS: {
		TITLE: 'Choose start and end days, slot and break durations',	// defaul value "Choose start and end days, slot and break durations"
		START_DATE_TITLE: 'Start date:',								// defaul value "Start date"
		END_DATE_TITLE: 'Start date:',									// defaul value "Start date"
		SLOT_DURATION: 'Slot duration (in mins):',						// defaul value "Slot duration (in mins):"
		START_SLOT: 'Set start slots time:',							// defaul value "Set start slots time:"
		END_SLOT: 'Set end slots time:',								// defaul value "Set end slots time:"
		BREAK_DURATION: 'Break duration (in min-s):'					// defaul value "Break duration (in min-s):"
	},
	WORKING_DAYS: {
		TITLE: 'Choose working days',									// defaul value "Choose working days"
		DAYS: {
			MONDAY: 'Δευτέρα',											// defaul value "Monday"
			TUESDAY: 'Τρίτη',											// defaul value "Tuesday"
			WEDNESDAY: 'Τετάρτη',										// defaul value "Wednesday"
			THURSDAY: 'Πέμπτη',											// defaul value "Thursday"
			FRIDAY: 'Παρασκευή',										// defaul value "Friday"
			SATURDAY: 'Σάββατο',										// defaul value "Suturday"
			SUNDAY: 'Κυριακή'											// defaul value "Sunday"
		}
	},
	HOLIDAYS: {
		TITLE: 'Choose holidays',										// defaul value "Choose holidays"
		YOUR_OWN_HOLIDAY: {
			TITLE: 'Add your own holiday',								// defaul value "Add your own holiday"
			DATE_LABEL: 'Holiday date:',								// defaul value "Holiday date:"
			NAME_LABEL: 'Holiday name:',								// defaul value "Holiday name:"
			NAME_PLACEHOLDER: 'Enter holiday name...',					// defaul value "Enter holiday name..."
			BUTTON: 'Add your holiday'									// defaul value "Add your holiday"
		},
		GROUP_HOLIDAYS: {
			NEW_YEAR: "New Year's (January 1)",							// defaul value "New Year's (January 1)"
			WOMAN_DAY: "Women's Day (March 8)",							// defaul value "Women's Day (March 8)"
			LABOR_DAY: "Labor Day (May 1)",								// defaul value "Labor Day (May 1)"
			X_MAS: "Christmas (December 25)"							// defaul value "Christmas (December 25)"
		},
		SAVE_BUTTON: 'Save',											// defaul value "Save"
		CANCEL_BUTTON: 'Cancel',										// defaul value "Cancel"
	}
}
// ----------- Admin calendar window -----------

export const ADMIN_CALENDAR = {
	DATE_LABEL: 'Select date',											// defaul value "Select date"
	SLOTS_LIST: {
		DURATION: 'Duration',											// defaul value "Duration"
		DURATION_TIME: 'mins',											// defaul value "mins"
		BREAK: 'Break',													// defaul value "Break"
		BREAK_TIME: 'mins',												// defaul value "mins"
		EMPTY_SLOT: 'Empty slot',										// defaul value "Empty slot"
		CANCEL_BUTTON: 'Cancel appointment'								// defaul value "Cancel"
	},
	CLOSE_BUTTON: 'Close',												// defaul value "Close"
	POP_UP: {
		TITLE: 'Are you sure you want to cancel the appointment?',		// defaul value "Are you sure you want to cancel the appointment?"
		CHECKBOX_EMAIL: 'Inform about cancellation (email message)',	// defaul value "Inform about cancellation (email message)"
		CHECKBOX_PHONE: 'Inform about cancellation (phone message)',	// defaul value "Inform about cancellation (phone message)"
		CHECKBOX_CONFIRM: "Yes, I'm sure and I want to cancel the appointment.", // defaul value ""Yes I'm sure and I want to cancel the appointment."
		CANCEL_BUTTON: 'Cancel appointment',							// defaul value "Cancel appointment"
		CLOSE_BUTTON: 'Close',											// defaul value "Close"
	}
}

// ----------- Client select date window -----------
export const CLIENT_BOOKING = {
	DATE_LABEL: 'Select date',											// defaul value "Select date"
	LOGIN_BUTTON: 'Login',												// defaul value "Login"
	POP_UP: {
		TITLE: 'Book an appointment ',									// defaul value "Book an appointment"
		NAME: 'Name',													// defaul value "Name"
		NAME_PLACEHOLDER: 'Enter your name...',							// defaul value "Enter your name..."
		EMAIL: 'Email',													// defaul value "Email your email..."
		EMAIL_PLACEHOLDER: 'Enter your email...',						// defaul value "Enter"
		PHONE: 'Phone',													// defaul value "Phone"
		PHONE_PLACEHOLDER: 'Enter your phone...',						// defaul value "Enter your phone..."
		CHECKBOX_CONFIRM: "I'm agree the website to use my personal data.", // defaul value ""I'm agree the website to use my personal data."
		BUTTON: 'Book your appointment'									// defaul value "Book your appointment"
	}
}
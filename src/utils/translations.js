// ----------- Login page -----------
export const LOGIN_PAGE = {
	USERNAME: 'Username',
	PASSWORD: 'Password',
	BUTTON: 'Login',
}

// ----------- Calendar list window -----------
export const CALENDAR_LIST = {
	ADD_NEW_BUTTON: 'Add new calendar', 								// default value "Add new calendar"
	CARD: {
		DATES: 'Dates',                 								// default value "Dates"
		SLOTS: 'Slots',                 								// default value "Slots"
		OPEN_BUTTON: 'Open',            								// default value "Open"
		DELETE_BUTTON: 'Delete',        								// default value "Delete"
	}
}

// ----------- Create calendar window -----------
export const CREATE_CALENDAR = {
	TITLE: "Δημιουργία ημερολογίου",									// default value "Create calendar"
	NAME: {
		LABEL: 'Όνομα ημερολογίου',										// default value "Calendar name"
		PLACEHOLDER: 'Εισάγετε το όνομα του ημερολογίου...'			    // default value "Enter calendar name..."
	},
	DAYS_AND_SLOTS: {
		TITLE: 'Choose start and end days, slot and break durations',	// default value "Choose start and end days, slot and break durations"
		START_DATE_TITLE: 'Start date:',								// default value "Start date"
		END_DATE_TITLE: 'End date:',									// default value "End date"
		SLOT_DURATION: 'Slot duration (in mins):',						// default value "Slot duration (in mins):"
		START_SLOT: 'Set start slots time:',							// default value "Set start slots time:"
		END_SLOT: 'Set end slots time:',								// default value "Set end slots time:"
		BREAK_DURATION: 'Break duration (in min-s):'					// default value "Break duration (in min-s):"
	},
	WORKING_DAYS: {
		TITLE: 'Choose working days',									// default value "Choose working days"
		DAYS: {
			MONDAY: 'Δευτέρα',											// default value "Monday"
			TUESDAY: 'Τρίτη',											// default value "Tuesday"
			WEDNESDAY: 'Τετάρτη',										// default value "Wednesday"
			THURSDAY: 'Πέμπτη',											// default value "Thursday"
			FRIDAY: 'Παρασκευή',										// default value "Friday"
			SATURDAY: 'Σάββατο',										// default value "Suturday"
			SUNDAY: 'Κυριακή'											// default value "Sunday"
		}
	},
	HOLIDAYS: {
		TITLE: 'Choose holidays',										// default value "Choose holidays"
		YOUR_OWN_HOLIDAY: {
			TITLE: 'Add your own holiday',								// default value "Add your own holiday"
			DATE_LABEL: 'Holiday date:',								// default value "Holiday date:"
			NAME_LABEL: 'Holiday name:',								// default value "Holiday name:"
			NAME_PLACEHOLDER: 'Enter holiday name...',					// default value "Enter holiday name..."
			BUTTON: 'Add your holiday'									// default value "Add your holiday"
		},
		GROUP_HOLIDAYS: {
			NEW_YEAR: "New Year's (January 1)",							// default value "New Year's (January 1)"
			WOMAN_DAY: "Women's Day (March 8)",							// default value "Women's Day (March 8)"
			LABOR_DAY: "Labor Day (May 1)",								// default value "Labor Day (May 1)"
			X_MAS: "Christmas (December 25)"							// default value "Christmas (December 25)"
		},
		SAVE_BUTTON: 'Save',											// default value "Save"
		CANCEL_BUTTON: 'Cancel',										// default value "Cancel"
	}
}
// ----------- Admin calendar window -----------

export const ADMIN_CALENDAR = {
	DATE_LABEL: 'Select date',											// default value "Select date"
	SLOTS_LIST: {
		DURATION: 'Duration',											// default value "Duration"
		DURATION_TIME: 'mins',											// default value "mins"
		BREAK: 'Break',													// default value "Break"
		BREAK_TIME: 'mins',												// default value "mins"
		EMPTY_SLOT: 'Empty slot',										// default value "Empty slot"
		CANCEL_BUTTON: 'Cancel appointment'								// default value "Cancel"
	},
	CLOSE_BUTTON: 'Close',												// default value "Close"
	POP_UP: {
		TITLE: 'Are you sure you want to cancel the appointment?',		// default value "Are you sure you want to cancel the appointment?"
		CHECKBOX_EMAIL: 'Inform about cancellation (email message)',	// default value "Inform about cancellation (email message)"
		CHECKBOX_PHONE: 'Inform about cancellation (phone message)',	// default value "Inform about cancellation (phone message)"
		CHECKBOX_CONFIRM: "Yes, I'm sure and I want to cancel the appointment.", // default value ""Yes I'm sure and I want to cancel the appointment."
		CANCEL_BUTTON: 'Cancel appointment',							// default value "Cancel appointment"
		CLOSE_BUTTON: 'Close',											// default value "Close"
	}
}

// ----------- Client select date window -----------
export const CLIENT_BOOKING = {
	DATE_LABEL: 'Select date',											// default value "Select date"
	LOGIN_BUTTON: 'Login',												// default value "Login"
	POP_UP: {
		TITLE: 'Book an appointment ',									// default value "Book an appointment"
		NAME: 'Name',													// default value "Name"
		NAME_PLACEHOLDER: 'Enter your name...',							// default value "Enter your name..."
		EMAIL: 'Email',													// default value "Email your email..."
		EMAIL_PLACEHOLDER: 'Enter your email...',						// default value "Enter"
		PHONE: 'Phone',													// default value "Phone"
		PHONE_PLACEHOLDER: 'Enter your phone...',						// default value "Enter your phone..."
		CHECKBOX_CONFIRM: "I'm agree the website to use my personal data.", // default value ""I'm agree the website to use my personal data."
		BUTTON: 'Book your appointment'									// default value "Book your appointment"
	}
}
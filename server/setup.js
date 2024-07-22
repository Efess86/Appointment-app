const adminSettings = {
	workDayStart: '09:00',
	workDayEnd: '18:00',
	appointmentSlotSize: 30, // slot duration in minutes
	workDays: [
		{ day: 'Monday', isWorking: true },
		{ day: 'Tuesday', isWorking: true },
		{ day: 'Wednesday', isWorking: true },
		{ day: 'Thursday', isWorking: true },
		{ day: 'Friday', isWorking: true },
		{ day: 'Saturday', isWorking: false },
		{ day: 'Sunday', isWorking: false }
	],
	holidays: [
		{ date: '2024-01-01', name: 'New Year' },
		{ date: '2024-01-07', name: 'Chrismas' },
		{ date: '2024-02-23', name: 'Defender day' },
		{ date: '2024-03-08', name: "Woman's day 8 March" },
		{ date: '2024-05-01', name: 'Labor day' },
		{ date: '2024-05-09', name: 'End of 2nd World War' },
		{ date: '2024-12-03', name: 'Holyday' },
		{ date: '2024-07-09', name: 'Birthday' },
	]
};

module.exports = { adminSettings };

const adminSettings = {
	workDayStart: '10:00',
	workDayEnd: '18:00',
	appointmentSlotSize: 30, // в минутах
	workDays: [
		{ day: 'Понедельник', isWorking: true },
		{ day: 'Вторник', isWorking: true },
		{ day: 'Среда', isWorking: true },
		{ day: 'Четверг', isWorking: true },
		{ day: 'Пятница', isWorking: true },
		{ day: 'Суббота', isWorking: false },
		{ day: 'Воскресенье', isWorking: false }
	],
	holidays: [
		{ date: '2024-01-01', name: 'Новый год' },
		{ date: '2024-01-07', name: 'Рождество' },
		{ date: '2024-02-23', name: 'День защитника Отечества' },
		{ date: '2024-03-08', name: 'Международный женский день' },
		{ date: '2024-05-01', name: 'Праздник Весны и Труда' },
		{ date: '2024-05-09', name: 'День Победы' },
		{ date: '2024-06-12', name: 'День России' },
		{ date: '2024-11-04', name: 'День народного единства' }
	]
};

export { adminSettings };
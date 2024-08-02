import { APPOINTMENT_DATA } from "../assets/config/config";

// find week day by key. Exmpl: getDayData('TUESDAY')
export function getDayData(dayName) {
	const dayData = APPOINTMENT_DATA.WORK_DAYS.find(day => dayName in day);
	return dayData ? dayData[dayName] : 'Not found';
}
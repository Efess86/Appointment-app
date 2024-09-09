import React from 'react';
import style from './SwitchDate.module.scss';
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

function SwitchDate({ date, onDateChange }) {
	const currentDate = date instanceof Date && !isNaN(date) ? date : new Date();

	const handleDateChange = (event) => {
		const newDate = new Date(event.target.value);
		if (!isNaN(newDate) && typeof onDateChange === 'function') {
			onDateChange(newDate);
		}
	};

	const handlePrevDay = () => {
		const newDate = new Date(currentDate);
		newDate.setDate(currentDate.getDate() - 1);
		if (typeof onDateChange === 'function') {
			onDateChange(newDate);
		}
	};

	const handleNextDay = () => {
		const newDate = new Date(currentDate);
		newDate.setDate(currentDate.getDate() + 1);
		if (typeof onDateChange === 'function') {
			onDateChange(newDate);
		}
	};

	const formatDate = (date) => {
		if (date instanceof Date && !isNaN(date)) {
			return date.toISOString().split('T')[0];
		}
		return '';
	};

	return (
		<div className={style.switchDateContainer}>
			<button onClick={handlePrevDay}><GrCaretPrevious /></button>
			<input
				type="date"
				value={formatDate(currentDate)}
				onChange={handleDateChange}
			/>
			<button onClick={handleNextDay}><GrCaretNext /></button>
		</div>
	);
}

export default SwitchDate;
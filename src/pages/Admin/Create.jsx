import React, { useState } from 'react';
import Input from '../../components/input/input';
import styles from './Create.module.scss';
import { CREATE_CALENDAR } from '../../utils/translations'; // import translations file





function Create() {

	const [formData, setFormData] = useState({
		calendarName: '',
		startDate: '',
		endDate: '',
		slotDuration: '0',
		startSlotTime: '0',
		endSlotTime: '0',
		breakDuration: '0',
	});

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData(prevData => ({
			...prevData,
			[id]: value
		}));
	};

	return (
		<div>
			<div className="calendar_title">

				<h1>{CREATE_CALENDAR.CREATE_CALENDAR}</h1>
				<Input
					className={styles.inputs}
					label={CREATE_CALENDAR.NAME.LABEL}
					id="calendarName"
					placeholder={CREATE_CALENDAR.NAME.PLACEHOLDER}
					type='text'
					value={formData.calendarName}
					onChange={handleInputChange}
					required
				/>

			</div>

			<hr className='h-row' />

			<div className="calendar_duration">

				<h2>{CREATE_CALENDAR.DAYS_AND_SLOTS.TITLE}</h2>

				<div className={styles.durationContainer}>
					<Input
						className={styles.inputs}
						label={CREATE_CALENDAR.DAYS_AND_SLOTS.START_DATE_TITLE}
						id="startDate"
						type='date'
						value={formData.startDate}
						onChange={handleInputChange}
						required
					/>
					<Input
						className={styles.inputs}
						label={CREATE_CALENDAR.DAYS_AND_SLOTS.END_DATE_TITLE}
						id="endDate"
						type='date'
						value={formData.endDate}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div className={styles.durationContainer}>
					<Input
						className={styles.inputs}
						label={CREATE_CALENDAR.DAYS_AND_SLOTS.SLOT_DURATION}
						id="slotDuration"
						type='number'
						min="0"
						max="60"
						value={formData.slotDuration}
						onChange={handleInputChange}
						required
					/>

					<Input
						className={styles.inputs}
						label={CREATE_CALENDAR.DAYS_AND_SLOTS.START_SLOT}
						id="startSlotTime"
						type='number'
						min="0"
						max="60"
						value={formData.startSlotTime}
						onChange={handleInputChange}
						required
					/>

					<Input
						className={styles.inputs}
						label={CREATE_CALENDAR.DAYS_AND_SLOTS.END_SLOT}
						id="endSlotTime"
						type='number'
						min="0"
						max="60"
						value={formData.endSlotTime}
						onChange={handleInputChange}
						required
					/>

					<Input
						className={styles.inputs}
						label={CREATE_CALENDAR.DAYS_AND_SLOTS.BREAK_DURATION}
						id="breakDuration"
						type='number'
						min="0"
						max="60"
						value={formData.breakDuration}
						onChange={handleInputChange}
						required
					/>
				</div>

			</div>

			<hr className='h-row' />


		</div>
	);
};

export default Create;
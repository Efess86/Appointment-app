import React, { useState } from 'react';
import Input from '../../components/input/input';
import styles from './Create.module.scss';
import { CREATE_CALENDAR } from '../../utils/translations'; // import translations file
import Button from '../../components/button/button';
import { IoIosSave } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import Checkbox from '../../components/input/checkbox';





function Create() {

	const [formData, setFormData] = useState({
		calendarName: '',
		startDate: '',
		endDate: '',
		slotDuration: '50',
		breakDuration: '10',
		startSlotTime: '00:00',
		endSlotTime: '00:00',
	});

	const [checkedDays, setCheckedDays] = useState({
		monday: true,
		tuesday: true,
		wednesday: true,
		thursday: true,
		friday: true,
		saturday: false,
		sunday: false,
	});


	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData(prevData => ({
			...prevData,
			[id]: value
		}));
	};

	const handleDayChange = (day) => {
		setCheckedDays(prevState => ({
			...prevState,
			[day]: !prevState[day]
		}));
	};

	return (
		<div>
			<div className={styles.calendarTitle}>

				<h1>{CREATE_CALENDAR.TITLE}</h1>
				<Input
					className={styles.inputs}
					style={{ width: '270px' }}
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

			<div className={styles.calendarDuration}>

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
						label={CREATE_CALENDAR.DAYS_AND_SLOTS.BREAK_DURATION}
						id="breakDuration"
						type='number'
						min="0"
						max="60"
						value={formData.breakDuration}
						onChange={handleInputChange}
						required
					/>

					<Input
						className={styles.inputs}
						label={CREATE_CALENDAR.DAYS_AND_SLOTS.START_SLOT}
						id="startSlotTime"
						type='time'
						value={formData.startSlotTime}
						onChange={handleInputChange}
						required
					/>

					<Input
						className={styles.inputs}
						label={CREATE_CALENDAR.DAYS_AND_SLOTS.END_SLOT}
						id="endSlotTime"
						type='time'
						value={formData.endSlotTime}
						onChange={handleInputChange}
						required
					/>

				</div>

			</div>

			<hr className='h-row' />

			<div className={styles.calendarWeeksContainer}>
				<h2>{CREATE_CALENDAR.WORKING_DAYS.TITLE}</h2>
				<div className={styles.calendarWeeks}>
					{Object.entries(CREATE_CALENDAR.WORKING_DAYS.DAYS).map(([day, label]) => (
						<Checkbox
							key={day}
							label={label}
							id={`${day}Checkbox`}
							checked={checkedDays[day]}
							onChange={() => handleDayChange(day)}
						/>
					))}
				</div>
			</div>

			<hr className='h-row' />

			<Button
				id='saveBtnId'
				btn_name='Save'
				icon={<IoIosSave />}
				withBorder={false}
			/>
			<Button
				id='closeBtnId'
				btn_name='Close'
				icon={<MdOutlineCancel />}
				withBorder={false}
			/>

		</div>
	);
};

export default Create;
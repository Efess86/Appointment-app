import React, { useState } from 'react';
import Input from '../../components/input/input';
import styles from './Create.module.scss';
import { CREATE_CALENDAR } from '../../utils/translations'; // import translations file
import Button from '../../components/button/button';
import { IoIosSave } from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
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
		MONDAY: true,
		TUESDAY: true,
		WEDNESDAY: true,
		THURSDAY: true,
		FRIDAY: true,
		SATURDAY: false,
		SUNDAY: false,
	});

	const [checkedHolidays, setCheckedHolidays] = useState({
		NEW_YEAR: true,
		WOMAN_DAY: false,
		LABOR_DAY: true,
		X_MAS: true
	});

	const weeksObj = Object.entries(CREATE_CALENDAR.WORKING_DAYS.DAYS);
	const holidayObj = Object.entries(CREATE_CALENDAR.HOLIDAYS.GROUP_HOLIDAYS);


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

	const handleHolidayChange = (day) => {
		setCheckedHolidays(prevState => ({
			...prevState,
			[day]: !prevState[day]
		}));
	};

	return (
		<div>

			<div className={styles.calendarTitle}> {/* NAME AND INPUT OF CALENDAR */}

				<h1>{CREATE_CALENDAR.TITLE}</h1>
				<Input
					className={styles.inputs}
					style={{ width: '280px' }}
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

			<div className={styles.calendarDuration}> {/* STAR/END DATE, SLOT START/END DURATIONS, SLOT START/END DATES, BREAK */}

				<h2>{CREATE_CALENDAR.DAYS_AND_SLOTS.TITLE}</h2>

				<div className={styles.durationContainer}> {/* STAR DATE AND END DATE INPUTS */}
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

				<div className={styles.durationContainer}> {/* SLOT DURATIONS, SLOT START AND END, BREAK INPUTS  */}
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

			<div className={styles.calendarWeeksContainer}> {/* WEEKS CHECKBOXES */}
				<h2>{CREATE_CALENDAR.WORKING_DAYS.TITLE}</h2>
				<div className={styles.calendarWeeks}>
					{weeksObj.map(([day, label]) => (
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

			<h2 className={styles.calendarHolidays}>{CREATE_CALENDAR.HOLIDAYS.TITLE}</h2>
			<div className={styles.holidaysContainer}> {/* ADD HOLIDAY, HOLIDAY LIST */}
				<div>
					<h3>{CREATE_CALENDAR.HOLIDAYS.YOUR_OWN_HOLIDAY.TITLE}</h3>
					<div className={styles.addYourHolidayContainer}>
						<Input
							className={styles.inputs}
							label={CREATE_CALENDAR.HOLIDAYS.YOUR_OWN_HOLIDAY.DATE_LABEL}
							id="holidayDate"
							type='date'
						/>
						<Input
							className={styles.inputs}
							label={CREATE_CALENDAR.HOLIDAYS.YOUR_OWN_HOLIDAY.NAME_LABEL}
							placeholder={CREATE_CALENDAR.HOLIDAYS.YOUR_OWN_HOLIDAY.NAME_PLACEHOLDER}
							id="holidayName"
							type='text'
						/>
						<Button
							id='addYourHoliday'
							icon={<MdOutlineCalendarToday />}
							btn_name={CREATE_CALENDAR.HOLIDAYS.YOUR_OWN_HOLIDAY.BUTTON}
							withBorder={false}
						/>
					</div>

					<div className={styles.holidaysListContainer}>
						{holidayObj.map(([day, label]) => (
							<Checkbox
								key={day}
								label={label}
								id={`${day}Checkbox`}
								checked={checkedHolidays[day]}
								onChange={() => handleHolidayChange(day)}
							/>
						))}
					</div>


				</div>
			</div>

			<hr className='h-row' />

			<div className={styles.buttonContainer}> {/* SAVE AND CANCEL BTNS */}
				<Button
					id='saveBtnId'
					btn_name={CREATE_CALENDAR.HOLIDAYS.SAVE_BUTTON}
					icon={<IoIosSave />}
					withBorder={false}
				/>
				<Button
					id='closeBtnId'
					btn_name={CREATE_CALENDAR.HOLIDAYS.CANCEL_BUTTON}
					icon={<MdOutlineCancel />}
					withBorder={false}
				/>
			</div>


		</div>
	);
};

export default Create;
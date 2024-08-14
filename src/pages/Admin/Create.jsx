import React, { useState } from 'react';
import Input from '../../components/input/input';
import styles from './Create.module.scss';
import { CREATE_CALENDAR } from '../../utils/translations'; // import translations file

const page_header = CREATE_CALENDAR.CREATE_CALENDAR;
const calendar_name = CREATE_CALENDAR.NAME.LABEL;
const calendar_placeholder = CREATE_CALENDAR.NAME.PLACEHOLDER;


function Create() {
	const [calendarName, setCalendarName] = useState('');
	const handlerCalendarName = (e) => {
		setCalendarName(e.target.value);
	}

	return (
		<div>
			<h1>{page_header}</h1>
			<Input
				className={styles.inputs}
				label={calendar_name}
				id="create_calendar_name"
				placeholder={calendar_placeholder}
				type='text'
				value={calendarName}
				onChange={handlerCalendarName}
				required
			/>

			<hr className='hr' /> {/* NOT VISIBLE NEED FIX */}

		</div>
	);
};

export default Create;
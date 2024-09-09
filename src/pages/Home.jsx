import React, { useState } from "react";
import style from './Home.module.scss';
import Slot from '../components/slot/slot';
import SwitchDate from "../components/switchDate/switchDate";


function Home() {
	const [currentDate, setCurrentDate] = useState(new Date());
	const handleDateChange = (newDate) => {
		setCurrentDate(newDate);
	};
	return (
		<div className={style.container}>
			<div className={style.dateContainer}>
				<SwitchDate date={currentDate} onDateChange={handleDateChange} />
				<p> {currentDate.toDateString()}</p>
			</div>
			<div className={style.slotContainer}>
				<Slot />
				<Slot />
				<Slot />
				<Slot />
				<Slot />
				<Slot />
				<Slot />
				<Slot />
				<Slot />
				<Slot />
				<Slot />
				<Slot />
				<Slot />
			</div>
		</div>
	);
};

export default Home;
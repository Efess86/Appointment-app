import React from "react";
import style from './Slot.module.scss';
import { FaPlus } from "react-icons/fa6";

function Slot() {

	return (
		<div className={`${style.slot} slotCard`}>
			<p>11:30</p>
			<FaPlus />
		</div>
	)
};

export default Slot;
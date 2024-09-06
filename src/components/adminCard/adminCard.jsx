import React from "react";
import style from './AdminCard.module.scss';
import Button from "../button/button";
import { ADMIN_CALENDAR } from '../../utils/translations';
import { ImCancelCircle } from "react-icons/im";

function AdminCard() {
	return (
		<div className={`${style.adminCardContainer} slotAdminCard`}>
			<h3>Papadopoulos Dimitrios</h3>
			<p>11:30</p>
			<a href="tel:+306995464888"> +(30) 699 54 64 888 </a>
			<a href="mailto:papadop-dimit@sample.com">papadop-dimit@sample.com</a>
			<Button
				id='cancelSlotBtn'
				icon={<ImCancelCircle />}
				btn_name={ADMIN_CALENDAR.SLOTS_LIST.CANCEL_BUTTON}
				withBorder={true}
			/>
		</div>
	)
};

export default AdminCard;
import React from "react";
import style from './AdminCard.module.scss';
import Button from "../button/button";
import { ADMIN_CALENDAR } from '../../utils/translations';
import { ImCancelCircle } from "react-icons/im";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";


function AdminCard() {
	return (
		<div className={`${style.adminCardContainer} slotAdminCard`}>
			<h3>11:00 - 11:30</h3>
			<div>
				<div className={style.personInfo}>
					<IoPersonCircleOutline />
					<p>Papadopoulos Dimitrios</p>
				</div>
				<div className={style.personInfo}>
					<BsTelephone />
					<a href="tel:+306995464888"> +(30) 699 54 64 888 </a>
				</div>
				<div className={style.personInfo}>
					<MdOutlineMailOutline />
					<a href="mailto:papadop-dimit@sample.com">papadop-dimit@sample.com</a>
				</div>
			</div>

			<div className={style.duration}>
				<p>{ADMIN_CALENDAR.SLOTS_LIST.DURATION}: 50 {ADMIN_CALENDAR.SLOTS_LIST.DURATION_TIME}</p>
				<p>{ADMIN_CALENDAR.SLOTS_LIST.BREAK}: 10 {ADMIN_CALENDAR.SLOTS_LIST.BREAK_TIME}</p>
			</div>

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
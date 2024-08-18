import React from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, id, checked, onChange }) => {
	return (
		<div className={styles.container}>
			<input
				type="checkbox"
				id={id}
				checked={checked || false}
				onChange={onChange}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	)
}

export default Checkbox;
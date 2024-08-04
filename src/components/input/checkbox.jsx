import React from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, id, required, ...props }) => {
	return (
		<div className={styles.container}>
			<input type="checkbox" id={id} {...props} />
			<label
				htmlFor={id}
				className={`${styles.label} ${required ? styles.required : ''}`}>
				{label}
			</label>
		</div>
	)
}

export default Checkbox;
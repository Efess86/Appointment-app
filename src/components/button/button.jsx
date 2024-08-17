import React from "react";
import styles from './Button.module.scss';

const Button = ({ id, btn_name, icon, withBorder, ...props }) => {
	const borderStyle = {
		...(withBorder && { border: '1px solid black' })
	};

	return (
		<button
			id={id}
			className={styles.button}
			style={borderStyle}
			{...props}
		>
			{icon && <span className={styles.icon}>{icon}</span>}
			{btn_name}
		</button>
	);
}

export default Button;
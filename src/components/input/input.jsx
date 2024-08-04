import React from 'react';
import styles from './Input.module.scss';

const Input = ({ label, id, type = 'text', required, ...props }) => {
	return (
		<div className={styles.inputContainer}>
			<label
				className={`${styles.label} ${required ? styles.required : ''}`}
				htmlFor={id}
			>
				{label}
			</label>
			<input
				className={styles.input}
				id={id}
				type={type}
				required={required}
				{...props}
			/>
		</div>
	);
};

export default Input;
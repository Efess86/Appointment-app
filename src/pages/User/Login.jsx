import React from "react";
import Input from '../../components/input/input';
import Button from "../../components/button/button";
import { LOGIN_PAGE } from "../../utils/translations";
import styles from "./Login.module.scss";

function Login() {


	return (
		<div className={styles.loginContainer}>
			<p>This app working with your browser's local storage.</p>
			<p>For login enter Username: root and Password: root</p>
			<div>
				<Input
					type="text"
					id="loginInput"
					required={true}
					label={LOGIN_PAGE.USERNAME}
					placeholder={LOGIN_PAGE.LABEL_USERNAME}
				/>
				<Input
					type="text"
					id="passInput"
					required={true}
					label={LOGIN_PAGE.PASSWORD}
					placeholder={LOGIN_PAGE.LABEL_PASSWORD}
				/>
				<Button
					id="loginBtn"
					btn_name={LOGIN_PAGE.BUTTON}
				/>
			</div>
		</div>
	)
}

export default Login;
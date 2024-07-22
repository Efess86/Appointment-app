import { createElement } from './utils.js';

export function createBookingPopup() {
	const overlay = createElement('div', { class: 'overlay' });
	const popupContainer = createElement('div', { class: 'appointment_booking_container' });
	const popupContent = createElement('div', { class: 'appointment_booking' });

	// Add close button
	const closeButton = createElement('button', { class: 'appointment_booking__close' }, '×');
	popupContent.appendChild(closeButton);

	const personalDataContainer = createElement('div', { class: 'appointment_booking__personal-data' });

	// Name input
	const nameContainer = createElement('div', { class: 'personal-data__name' });
	const nameLabel = createElement('label', { for: 'nameInput', class: 'required' }, 'Name:');
	const nameInput = createElement('input', { type: 'text', id: 'nameInput', required: '' });
	const nameError = createElement('div', { class: 'error-message', id: 'nameError' }, 'Please enter your name');
	nameContainer.append(nameLabel, nameInput, nameError);

	// Phone input
	const phoneContainer = createElement('div', { class: 'personal-data__phone' });
	const phoneLabel = createElement('label', { for: 'phoneInput', class: 'required' }, 'Phone:');
	const phoneInput = createElement('input', {
		type: 'tel',
		id: 'phoneInput',
		name: 'phone',
		placeholder: '69X XXX XXXX',
		pattern: '(69\\d{1}\\s\\d{3}\\s\\d{4})|(2\\d{3}\\s\\d{6})',
		required: ''
	});
	const phoneError = createElement('div', { class: 'error-message', id: 'phoneError' }, 'Please enter a valid phone number');
	phoneContainer.append(phoneLabel, phoneInput, phoneError);

	// Message input
	const messageContainer = createElement('div', { class: 'message-input' });
	const messageLabel = createElement('label', { for: 'messageInput' }, 'Message (optional):');
	const messageInput = createElement('textarea', {
		id: 'messageInput',
		name: 'message',
		placeholder: 'Type your message here...'
	});
	const charCount = createElement('div', { class: 'char-count' }, '0 / 500');
	messageContainer.append(messageLabel, messageInput, charCount);

	personalDataContainer.append(nameContainer, phoneContainer, messageContainer);

	// Button container
	const buttonContainer = createElement('div', { class: 'appointment_booking__button' });
	const agreeContainer = createElement('div', { class: 'agree_container' });
	const agreeCheckbox = createElement('input', { type: 'checkbox', id: 'agreeTerms', required: '' });
	const agreeLabel = createElement('label', { for: 'agreeTerms' }, 'I have read and agree to the terms and conditions of use');
	const agreeError = createElement('div', { class: 'error-message', id: 'agreeError' }, 'You must agree to the terms');
	const submitButton = createElement('button', { id: 'submitBtn', disabled: '' }, 'Book an appointment');

	agreeContainer.append(agreeCheckbox, agreeLabel)
	buttonContainer.append(agreeContainer, agreeError, submitButton);

	popupContent.append(personalDataContainer, buttonContainer);
	popupContainer.appendChild(popupContent);

	document.body.appendChild(overlay);
	document.body.appendChild(popupContainer);

	setupEventListeners();

	// Add a handler for the close button
	closeButton.addEventListener('click', closeBookingPopup);
	overlay.addEventListener('click', closeBookingPopup);
}

function setupEventListeners() {
	const nameInput = document.getElementById('nameInput');
	const phoneInput = document.getElementById('phoneInput');
	const messageInput = document.getElementById('messageInput');
	const charCount = document.querySelector('.char-count');
	const agreeCheckbox = document.getElementById('agreeTerms');
	const submitButton = document.getElementById('submitBtn');
	const maxLength = 500;

	const nameError = document.getElementById('nameError');
	const phoneError = document.getElementById('phoneError');
	const agreeError = document.getElementById('agreeError');

	function validatePhone(phone) {
		const phonePattern = /^(69\d{1}\s\d{3}\s\d{4})|(2\d{3}\s\d{6})$/;
		return phonePattern.test(phone);
	}

	function checkFormValidity() {
		const isNameValid = nameInput.value.trim() !== '';
		const isPhoneValid = validatePhone(phoneInput.value);
		const isAgreed = agreeCheckbox.checked;

		nameError.style.opacity = isNameValid ? '0' : '1';
		phoneError.style.opacity = isPhoneValid ? '0' : '1';
		agreeError.style.opacity = isAgreed ? '0' : '1';

		submitButton.disabled = !(isNameValid && isPhoneValid && isAgreed);
	}

	messageInput.addEventListener('input', function () {
		const remainingChars = maxLength - this.value.length;
		charCount.textContent = `${this.value.length} / ${maxLength}`;

		if (remainingChars < 0) {
			this.value = this.value.slice(0, maxLength);
			charCount.textContent = `${maxLength} / ${maxLength}`;
		}
	});

	nameInput.addEventListener('input', checkFormValidity);
	phoneInput.addEventListener('input', checkFormValidity);
	agreeCheckbox.addEventListener('change', checkFormValidity);

	phoneInput.addEventListener('input', function (e) {
		let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
		e.target.value = !x[2] ? x[1] : x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '');
		checkFormValidity();
	});

	checkFormValidity();
}

export function getCustomerInfo() {
	const nameInput = document.getElementById('nameInput');
	const phoneInput = document.getElementById('phoneInput');
	const messageInput = document.getElementById('messageInput');

	const customerInfo = {
		name: nameInput.value.trim(),
		phone: phoneInput.value.trim(),
		message: messageInput.value.trim()
	};

	console.log(customerInfo);

	return customerInfo;
}


export function closeBookingPopup() {
	const popupContainer = document.querySelector('.appointment_booking_container');
	const overlay = document.querySelector('.overlay');
	if (popupContainer) {
		document.body.removeChild(popupContainer);
	}
	if (overlay) {
		document.body.removeChild(overlay);
	}
}
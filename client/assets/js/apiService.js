export async function fetchSlots(date) {
	try {
		const response = await fetch(`http://localhost:3000/slots/${date}`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching slots:', error);
		return null;
	}
}

export async function bookAppointment(date, time, customerInfo) {
	try {
		const response = await fetch('http://localhost:3000/book-appointment', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ date, time, customerInfo }),
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('Error booking appointment: ', error);
		return null;
	}
}
export function createElement(tag, attributes = {}, content = '') {
	const element = document.createElement(tag);
	Object.entries(attributes).forEach(([key, value]) => {
		element.setAttribute(key, value);
	});
	element.innerHTML = content;
	return element;
}
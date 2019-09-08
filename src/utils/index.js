/**
 * Find the first found Element with selector
 * @param {string} selector querySelector's selector string
 * @return {Element} DOM Element
 */
export function $(selector) {
	return document.querySelector(selector);
}

/**
 * Find all found Elements with selector
 * @param {string} selector querySelector's selector string
 * @return {Array} Array of matched Elements
 */
export function $$(selector) {
	return Array.from(document.querySelectorAll(selector));
}

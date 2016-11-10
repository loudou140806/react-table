export const FILTER = 'FILTER';
export const DELETE = 'DELETE';
export const ADD = 'ADD';

export function doFilter(text) {
	return { type: FILTER, text };
}
export function deleteLine(id) {
	return { type: DELETE, dIndex: id};
}
export function addLine(data, index) {
	return { type: ADD, data: data, index: index};
}
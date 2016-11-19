function saveDate(key, val) {
	if (!val) {
		localStorage.removeItem(key+'');
	} else {
		localStorage[key] = val;
	}
}
function loadData(key) {
	return localStorage[key];
}

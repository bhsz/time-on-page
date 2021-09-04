import { clearTimerOnPage, getTimeOnPage, startTimerOnPage } from "./src/tracker";

// npm
if (typeof module === "object" && typeof module.exports === "object") {
	module.exports = {
		startTimerOnPage,
		getTimeOnPage,
		clearTimerOnPage,
	};
}

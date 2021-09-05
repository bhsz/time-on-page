# Active Time on Page

Tracks active user time on page (ToP) in seconds.

<img src="./example.gif" style="border: 3px solid black" width="800" height="450" />

Example page can be found at [HERE](https://bhsz.me/AToP-example.html).

<br/>

# Installation

To use as vanilla Javascript, simply download and import `index.js` into your project.

To use with NPM, run `npm install active-time-on-page` from the command line.

<br/>

# API

### startTimerOnPage()

Starts timer on page. Listeners are added to the window's focus and blur events to toggle the timer.

### getTimeOnPage()

Returns active user ToP.

### clearTimerOnPage()

Clears the timer by using clearInterval.

<br/>

# Examples

Vanilla Javascript

```javascript
import { startTimerOnPage, getTimeOnPage } from "./index.js";

startTimerOnPage();

setInterval(() => {
	let ToP = getTimeOnPage();
	// Do something with ToP
}, 1000);
```

React and NPM

```javascript
import { startTimerOnPage, getTimeOnPage, clearTimerOnPage } from "active-time-on-page";

useEffect(() => {
	startTimerOnPage();

	let handler = setInterval(() => {
		let ToP = getTimeOnPage();
		// Do something with ToP
	}, 1000);

	return () => {
		clearTimerOnPage();
		clearInterval(logger);
	};
}, []);
```

<br/>

# Todo

<input type="checkbox" disabled /> Tests

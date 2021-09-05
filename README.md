# Active Time on Page

Tracks active user time on page (ToP) in seconds.

Example can be found at [HERE](https://bhsz.me/AToP-example.html).

<img src="./example.gif" width="800" height="450" />

<br/>
<br/>

# Installation

To use as vanilla Javascript, simply download and import `index.js` into your project.

<br/>

To use with NPM,

```bash
npm install active-time-on-page
```

<br/>

# API

## startTimerOnPage()

Starts timer on page. Listeners are added to the window's focus and blur events to toggle the timer.

<br/>

## getTimeOnPage()

Returns active user ToP.

<br/>

## clearTimerOnPage()

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

<br/>

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

var customSlider1 = document.getElementById('customSlider1')
var thumb1 = document.getElementById('thumb1')
var customSlider2 = document.getElementById('customSlider2')
var thumb2 = document.getElementById('thumb2')

thumb1.style.left = localStorage.getItem("volume") + "vw"
thumb2.style.left = localStorage.getItem("tempo") + "vw"


// Click on the range slider
customSlider1.onmousedown = function(event) {
	let pos = toVW(event.clientX - customSlider1.getBoundingClientRect().left) - .75
	if (pos < 0) {pos = 0}
	if (pos > 10) {pos = 10}
	thumb1.style.left = pos + "vw"
	volume = pos
	localStorage.setItem("volume",volume)
}

customSlider2.onmousedown = function(event) {
	let pos = toVW(event.clientX - customSlider2.getBoundingClientRect().left) - .75
	if (pos < 0) {pos = 0}
	if (pos > 10) {pos = 10}
	thumb2.style.left = pos + "vw"
	tempo = pos * 30
	if (tempo < 50) tempo = 50
	localStorage.setItem("tempo",tempo)
}

// Drag the thumb on the slider
thumb1.onmousedown = function(event) {
	event.preventDefault(); // prevent selection start (browser action)
	let shiftX = event.clientX - thumb1.getBoundingClientRect().left;
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
	
	function onMouseMove(event) {
		let newLeft = toVW(event.clientX - shiftX - customSlider1.getBoundingClientRect().left)
		if (newLeft < 0) {newLeft = 0;}
		let rightEdge = toVW(customSlider1.offsetWidth) - toVW(thumb1.offsetWidth)
		if (newLeft > rightEdge) {newLeft = rightEdge;}
		thumb1.style.left = newLeft + 'vw';
		let volume = newLeft
		if (volume > 10) volume = 10
		localStorage.setItem("volume",volume)
	}

	// Stop dragging the thumb
	function onMouseUp() {
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	}

};

customSlider2 = document.getElementById('customSlider2')
thumb2 = document.getElementById('thumb2')
thumb2.style.left = localStorage.getItem("tempo") / 30 + "vw"
if (localStorage.getItem("tempo") > 10) thumb2.style.left = "10vw"
thumb2.onmousedown = function(event) {
	event.preventDefault(); // prevent selection start (browser action)
	let shiftX = event.clientX - thumb2.getBoundingClientRect().left;
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
	
	function onMouseMove(event) {
		let newLeft = toVW(event.clientX - shiftX - customSlider2.getBoundingClientRect().left)
		if (newLeft < 0) {newLeft = 0;}
		let rightEdge = toVW(customSlider2.offsetWidth) - toVW(thumb2.offsetWidth)
		if (newLeft > rightEdge) {newLeft = rightEdge;}
		thumb2.style.left = newLeft + 'vw';
		let tempo = newLeft * 30
		if (tempo < 50) tempo = 50
		if (tempo > 350) tempo = 350
		localStorage.setItem("tempo",tempo)
	}

	function onMouseUp() {	// Stop dragging the thumb
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	}

};

// Changes font units from pixels (px) to viewport widths (vw)
function toVW(num) {return num / window.innerWidth * 100}

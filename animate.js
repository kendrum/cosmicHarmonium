function animate(source,songFunctionName,noteNumber,noteLength,startTime,index) {
	let key =	document.getElementById(noteNumber+1)
	let note = document.getElementById("note" + index)
	let lookAhead = .25

	setTimeout(function() {
		window.requestAnimationFrame(colorTheNote);
	},(lookAhead) * 1000)	

	setTimeout(function() {
		window.requestAnimationFrame(unColorTheNote);
	},(noteLength + .2) * 1000)	

	function colorTheNote(timestamp) {
		key.style.fill = "lightblue"		// Color the piano key
		note.style.backgroundColor = "lightblue"		// Color the bouncing ball
		note.style.padding = "0vw .3vw .3vw .3vw"
		note.style.border = "1px solid"
		note.style.borderRadius = "10px"
		
		if (note.style.left.slice(0,-2) < 5) {
			display.scrollTo({
				left: 0,
				top: (Number(note.style.top.slice(0,-2)) -10) * window.innerWidth/100, //+ 50, //-4.57,
				behavior: 'smooth'
			})
		}
	}

	function unColorTheNote(timestamp) {
		let sharpNotes = [2,4,7,9,11,14,16,19,21,23,26,28,31,33,35,38,40]	// All the black keys on the keyboard
			key.style.fill = "white"
			for (x of sharpNotes) {
				if (key.id == x) {
					key.style.fill = "black"	// UnColor the black key
				}
			}
		note.style.backgroundColor = "#eef" 	// UnColor the bouncing ball
		note.style.border = 0
	}
}

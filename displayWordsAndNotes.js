function displayTheSong(songData) {
	let j=0;
	let beat
	let note
	let word
	let wordLeft = 1.56
	let noteLeft = 1.56
	let displayTop = 3 //21
	let beatTop = displayTop
	let noteTop = displayTop + 1.57
	let wordTop = displayTop + 3.13
	let wordWidth = 0
	var wordOffset = 3.13
	let noRepeat=true
	let positionVertical = 26.56
	let top = positionVertical
	let majorFontSize = "1.1vw"
	let minorFontSize = ".8vw"

	let songTitle 					= songData[0]
	let beatsPerMinute 			= songData[1]
	let metroBeat			 			= songData[2]
	let trebleClef					= songData[3]
	let timeSignatureBeats	= songData[4]
	let timeSignatureNote		= songData[5]
	let songTime						= songData[6]
	let nameOfKeySignature	= songData[7]
	let keySignature				= songData[8]
	let songBeat						= songData[9]
	let songNote						= songData[10]
	let accidental					= songData[11]
	let octave							= songData[12]
	let songWords						= songData[13]
	
	document.getElementById("songTitle").innerHTML = songTitle	// Display song title, time signature, and other info specific to each song

	const keySig = ["A","Ab","B","Bb","C","D","Db","E","Eb","F","Fs","G","minorA","minorB","minorBb","minorC","minorCs","minorD","minorDs","minorE","minorF","minorFs","minorG","minorGs"]
	let key = keySig.indexOf(trebleClef)
	document.getElementById("trebleClef").src = keySigBuffer[key] //keySignatures(trebleClef)

	document.getElementById("nameOfKeySignature").innerHTML = nameOfKeySignature
	document.getElementById("keySignature").innerHTML = "("+keySignature+")"
	document.getElementById("songTime").innerHTML = songTime

	let display = document.getElementById("display")
	while (display.lastElementChild) { 									//Remove beats, notes and words to previous song
		display.removeChild(display.lastElementChild)
	}

	let beatArray = songBeat.split("")			// Convert the new song beats to an array
	let noteArray = songNote.split("")			// Convert the new song notes to an array
	let wordArray = songWords.split(" ")		// Divide the chant words into individual words


	// *********BEGIN THE LOOP ***********************************************************************************************************
	for (i=0;i<wordArray.length;i++) {			// Select each word of the song
		word = document.createElement("SPAN");								// Create new words
		document.getElementById("display").appendChild(word);
		word.id="word"+i;
		word.innerHTML = wordArray[i]

		// **************** If we reach the end of a line of music ************************
		if (wordArray[i].includes("*")) {			// *
			noteLeft = 1.56
			wordLeft = 1.56
			beatTop += 7.81; noteTop += 7.81; wordTop += 7.81
			continue
		}
		// *********** If the word CONTAINS an em dash or a hyphen********************************
		else if (wordArray[i].includes("&mdash") || wordArray[i].includes ("-")) {
			let numberOfEmDashes = 0
			for (k = 0; k < wordArray[i].length; k ++) {						// Get the number of em dashes
				if (wordArray[i].slice(k,k+7) == ("&mdash;") || wordArray[i].charAt(k) == "-") {
					word.innerHTML = wordArray[i].replace("-"," - ")		// add spaces around hyphens
					numberOfEmDashes ++
				}
			}
			if (word.innerHTML.includes("2")) {numberOfEmDashes ++; word.innerHTML = word.innerHTML.replace("2 -", " &nbsp; - &nbsp; ") }
			let emDashSeparation = word.offsetWidth / document.documentElement.clientWidth * 90 / numberOfEmDashes
			noteLeft = wordLeft
			for (m = 0; m < numberOfEmDashes + 1; m ++) {
				beat = document.createElement("SPAN")
				note = document.createElement("SPAN")
				document.getElementById("display").appendChild(beat)
				document.getElementById("display").appendChild(note)
				beat.id = "beat" + j
				note.id = "note" + j	
				beat.innerHTML = beatArray[j]
				if (beatArray[j] == "a") beat.innerHTML = "1&frac12;"	// 1/2
				if (beatArray[j] == "b") beat.innerHTML = "&frac23;"  //"2/3" //"⅔"
				if (beatArray[j] == "c") beat.innerHTML = "&frac12;"  // 1/2
				if (beatArray[j] == "d") beat.innerHTML = "&frac14;"  // 1/4
				if (beatArray[j] == "e") beat.innerHTML = "&frac34;"  // 3/4
				if (beatArray[j] == "f") beat.innerHTML = "4.09"  		// 4 3/32
				if (beatArray[j] == "g") beat.innerHTML = "&frac13;"  // 1/3
				if (beatArray[j] == "h") beat.innerHTML = "2&frac12;"  			// 2 1/2
				if (beatArray[j] == "i") beat.innerHTML = "1&frac23;"				// 1 2/3
				note.innerHTML = noteArray[j]
				if (accidental[j] == "b") note.innerHTML += "b"
				if (accidental[j] == "s") note.innerHTML += "#"
				
				beat.style.position = "absolute"
				beat.style.left = noteLeft + "vw"
				beat.style.top = beatTop + "vw"
				beat.style.fontSize = majorFontSize
				if (beat.innerHTML == "1.5") {beat.style.fontSize = minorFontSize} //else {beat.style.fontSize = "1.25vw"}
				if (beat.innerHTML == ".5") {beat.style.fontSize = minorFontSize} //else {beat.style.fontSize = "16px"}
				
				note.style.position = "absolute"
				note.style.left = noteLeft +"vw"
				note.style.top = noteTop + "vw"
				note.style.fontSize = majorFontSize
				if (accidental[j] == "s") note.style.fontSize = majorFontSize
				noteLeft += emDashSeparation * 1 + .078 //2 //1.2 //- 1 //.8 + 4.5 //.38 //.65
				j ++
			}
		}
		
		// ************** If the word doens NOT contain an em dash or a hyphen **********************
		else if (!wordArray[i].includes("&mdash") && !wordArray[i].includes ("-")) {
			beat = document.createElement("SPAN")
			note = document.createElement("SPAN")
			document.getElementById("display").appendChild(beat)
			document.getElementById("display").appendChild(note)
			beat.id = "beat" + j
			note.id = "note" + j	
			beat.innerHTML = beatArray[j]
			if (beatArray[j] == "a") beat.innerHTML = "1&frac12;"	// 1 1/2
			if (beatArray[j] == "b") beat.innerHTML = "&frac23;"	//2/3
			if (beatArray[j] == "c") beat.innerHTML = "&frac12;"	//1/2
			if (beatArray[j] == "d") beat.innerHTML = "&frac14;"  // 1/4
			if (beatArray[j] == "e") beat.innerHTML = "&frac34;"  // 3/4
			if (beatArray[j] == "f") beat.innerHTML = "4.09"  		// 4 3/32
			if (beatArray[j] == "g") beat.innerHTML = "&frac13;"  // 1/3
			if (beatArray[j] == "i") beat.innerHTML = "1&frac23;"	// 1 2/3
			note.innerHTML = noteArray[j]
			if (accidental[j] == "b") note.innerHTML += "b"
			if (accidental[j] == "s") note.innerHTML += "&#9839;"
			noteLeft = wordLeft + word.offsetWidth / document.documentElement.clientWidth * 100 / 2 - .39
			
			beat.style.position = "absolute"
			beat.style.left = noteLeft + "vw"
			beat.style.top = beatTop + "vw"
			beat.style.fontSize = majorFontSize
			if (beat.innerHTML == "1.5") {beat.style.fontSize = "1.2vw"} //else {beat.style.fontSize = "1.25vw"}
			if (beat.innerHTML == ".5") {beat.style.fontSize = "1.2vw"} //else {beat.style.fontSize = "16px"}
			
			note.style.position = "absolute"
			note.style.left = noteLeft + "vw"
			note.style.top = noteTop + "vw"
			note.style.fontSize = majorFontSize
			if (note.innerHTML == "&#9839;") note.style.fontSize = majorFontSize
			j ++
		}

		// ***************** Display the word itself **********************************************
		word.style.position = "absolute"
		word.style.left = wordLeft + "vw"
		word.style.top = wordTop + "vw"

		wordLeft += word.offsetWidth / document.documentElement.clientWidth * 100 + 1.56
		// Distance from the margin to the left side of each word
	}
	
	// Leave a couple of blank lines at the end of the display
	word = document.createElement("SPAN");								
	document.getElementById("display").appendChild(word);
 	word.style.position = "absolute"
	word.style.left = "0vw"
	word.style.top = wordTop + "vw"
	word.innerHTML = "<br><br>."
}
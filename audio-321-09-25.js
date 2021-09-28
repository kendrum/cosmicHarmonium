function audioStart() {
	window.AudioContext = window.AudioContext || window.webkitAudioContext
	context = new AudioContext()
	//test3.innerHTML = "3. Audio started"
}

function fetchAudioFiles() {
	// Fetch and decode the audio files asynchronously
	//test4.innerHTML = "4. Fetching audio files"
	fetch('notes/000.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[0]  = data))
	fetch('notes/001.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[1]  = data))
	fetch('notes/002.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[2]  = data))
	fetch('notes/003.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[3]  = data))
	fetch('notes/004.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[4]  = data))
	fetch('notes/005.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[5]  = data))
	fetch('notes/006.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[6]  = data))
	fetch('notes/007.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[7]  = data))
	fetch('notes/008.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[8]  = data))
	fetch('notes/009.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[9]  = data))
	fetch('notes/010.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[10] = data))
	fetch('notes/011.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[11] = data))
	fetch('notes/012.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[12] = data))
	fetch('notes/013.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[13] = data))
	fetch('notes/014.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[14] = data))
	fetch('notes/015.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[15] = data))
	fetch('notes/016.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[16] = data))
	fetch('notes/017.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[17] = data))
	fetch('notes/018.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[18] = data))
	fetch('notes/019.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[19] = data))
	fetch('notes/020.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[20] = data))
	fetch('notes/021.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[21] = data))
	fetch('notes/022.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[22] = data))
	fetch('notes/023.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[23] = data))
	fetch('notes/024.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[24] = data))
	fetch('notes/025.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[25] = data))
	fetch('notes/026.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[26] = data))
	fetch('notes/027.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[27] = data))
	fetch('notes/028.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[28] = data))
	fetch('notes/029.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[29] = data))
	fetch('notes/030.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[30] = data))
	fetch('notes/031.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[31] = data))
	fetch('notes/032.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[32] = data))
	fetch('notes/033.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[33] = data))
	fetch('notes/034.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[34] = data))
	fetch('notes/035.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[35] = data))
	fetch('notes/036.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[36] = data))
	fetch('notes/037.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[37] = data))
	fetch('notes/038.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[38] = data))
	fetch('notes/039.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[39] = data))
	fetch('notes/040.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[40] = data))
	fetch('notes/041.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[41] = data))
	fetch('notes/042.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[42] = data))
	fetch('notes/043.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[43] = data))
	fetch('notes/044.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[44] = data))
	fetch('notes/045.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[45] = data))
	fetch('notes/046.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[46] = data))
	fetch('notes/047.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[47] = data))
	fetch('notes/048.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[48] = data))
	fetch('notes/049.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[49] = data))
	fetch('notes/050.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[50] = data))
	fetch('notes/051.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[51] = data))
	fetch('notes/052.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[52] = data))
	fetch('notes/053.m4a') .then(response=>response.arrayBuffer()) .then(data=>context.decodeAudioData(data,data=>buffer[53] = data))
	//return buffer
}

function playChant(songNumber) {
	songNum = songNumber
	playing = true
	clearInterval(chantInterval)
	clearInterval(metronomeInterval)
	chantInterval = null
	if (medleyPlaying || repeatPlaying) medleyPlay()
	callAndPlayTheChant("song" + songNum)
}

function medleyPlay() {
	if (source) source.stop()
	let medleyTime = 0
	songLength = 0
	clearInterval(chantInterval)
	chantInterval = setInterval(function() {
console.log("Here at medley loop")
		if (medleyTime > songLength) {
			clearInterval(metronomeInterval);	mentronomeInterval = null
			if (medleyPlaying && songLength) getSongNumDown()
			medleyTime = 0
			// songLength = callAndPlayTheChant("song"+songNum)
			callAndPlayTheChant("song"+songNum)
		}
		medleyTime += .1
	},100)
}

function callAndPlayTheChant(songFunctionName) {
	if (started === false) {started = true; initiate(); return}
	if (source) source.stop()
	playingSongNum = songNum
	document.getElementById("chant" + oldSongNum).style.backgroundColor = "#fff"
	document.getElementById("chant" + oldPlayingSongNum).style.backgroundColor = "#fff"
	document.getElementById("chant" + playingSongNum).style.backgroundColor = "#ffd700"
	oldPlayingSongNum = songNum
	document.getElementById("chantList").scrollTo({left: 0, top: (songNum * 1 - 20) * window.innerWidth/100, behavior: 'smooth'})
	scrollInChant = 0
	// let songLength = 0
	songLength = 0
	let songData = window[songFunctionName]()	// Call the chant function from chantsAndSongs...js
	getKeyName()
	let metroBeatsPerMinute = 0
	if (songData != 0) displayTheSong(songData)
	if (songData) {
		var startTime = context.currentTime
		var beatsPerMinute 	= songData[1]
		var metroBeat			 	= songData[2]
		let songBeat 				= songData[9]
		let songNote 				= songData[10]
		let accidental 			= songData[11]
		let octave 					= songData[12]
		let keyName					= songData[14]
		
		var beatLength = 60 / beatsPerMinute
		localStorage.setItem("tempo",beatsPerMinute)
		thumb2.style.left = beatsPerMinute / 30 + "vw"
		for (let i = 0; i < songBeat.length; i ++) {
			var noteLength = beatLength * songBeat.charAt(i)
			if 			(songBeat[i]=="a") noteLength=beatLength * 1.5			// a is used as a single-character stand-in for 1.5 of the beat
			else if (songBeat[i]=="b") noteLength=beatLength * 2/3			// b is used as a single-character stand-in for 2/3 of the beat
			else if (songBeat[i]=="c") noteLength=beatLength * 0.5			// c is used as a single-character stand-in for half of the beat
			else if (songBeat[i]=="d") noteLength=beatLength * 1/4			// d is used as a single-character stand-in for 1/4 of the beat
			else if (songBeat[i]=="e") noteLength=beatLength * 3/4			// e is used as a single-character stand-in for 3/4 of the beat
			else if (songBeat[i]=="f") noteLength=beatLength * 131/32	// f is used as a single-character stand-in for 4 3/32 of the beat
			else if (songBeat[i]=="g") noteLength=beatLength * 1/3			// g is used as a single-character stand-in for 1/3 of the beat
			else if (songBeat[i]=="h") noteLength=beatLength * 2.5			// h is used as a single-character stand-in for 2 1/2 of the beat
			else if (songBeat[i]=="i") noteLength=beatLength * 5/3			// i is used as a single-character stand-in for 1 2/3 of the beat
			else if (songBeat[i]=="j") noteLength=beatLength * 8/3			// j is used as a single-character stand-in for 2 2/3 of the beat
		songLength += noteLength			
		}
		clearInterval(mainLoop); mainLoop = null
		let lookAheadTime = .1							// Allow 100ms to process graphics
		let i = 0
		var metronomeTrip = 0
		mainLoop = setInterval(function(){	// Check every 25 ms
	// console.log("Here at start of main loop")
			if (context.currentTime + lookAheadTime >= startTime) {		// If previous note is done playing
				beatsPerMinute = localStorage.getItem("tempo")
				if (beatsPerMinute != metroBeatsPerMinute) {metroBeatsPerMinute = beatsPerMinute; playMetronome(metroBeatsPerMinute,metroBeat)}
				if (songFunctionName == "song59" && beatsPerMinute < 100) beatsPerMinute = 100	//When Thy Song Flow Through Me
				if (songFunctionName == "song17" && beatsPerMinute < 70) beatsPerMinute = 70		//Hymn To Brahma - Sanskrit
				var beatLength = 60 / beatsPerMinute
				var noteLength = beatLength * songBeat.charAt(i)
				
				if 			(songBeat[i]=="a") noteLength=beatLength * 1.5			// a is used as a single-character stand-in for 1.5 of the beat
				else if (songBeat[i]=="b") noteLength=beatLength * 2/3			// b is used as a single-character stand-in for 2/3 of the beat
				else if (songBeat[i]=="c") noteLength=beatLength * 0.5			// c is used as a single-character stand-in for half of the beat
				else if (songBeat[i]=="d") noteLength=beatLength * 1/4			// d is used as a single-character stand-in for 1/4 of the beat
				else if (songBeat[i]=="e") noteLength=beatLength * 3/4			// e is used as a single-character stand-in for 3/4 of the beat
				else if (songBeat[i]=="f") noteLength=beatLength * 131/32	// f is used as a single-character stand-in for 4 3/32 of the beat
				else if (songBeat[i]=="g") noteLength=beatLength * 1/3			// g is used as a single-character stand-in for 1/3 of the beat
				else if (songBeat[i]=="h") noteLength=beatLength * 2.5			// h is used as a single-character stand-in for 2 1/2 of the beat
				else if (songBeat[i]=="i") noteLength=beatLength * 5/3			// i is used as a single-character stand-in for 1 2/3 of the beat
				else if (songBeat[i]=="j") noteLength=beatLength * 8/3			// j is used as a single-character stand-in for 2 2/3 of the beat
				
				// Scale Changer
				noteNumber = notes.indexOf(songNote.charAt(i)) + keyNum
				noteName = nameOfKeySignature
				
				if (accidental[i]=="s") noteNumber++	// Sharp note
				if (accidental[i]=="b") noteNumber--	// Flat note

				noteNumber += (octave.charAt(i)-3) * 12	// Converts to correct octave. The first octave on harmonium is octave 3 (as per piano notation)
				
				source = context.createBufferSource()
				source.buffer = buffer[noteNumber]
				let gainNode = context.createGain()
				volume = localStorage.getItem("volume") / 10
				if (volume === null) volume = .2
				if (volume < .02) volume = .02
				
				if (songNum == 57) gainNode.gain.value = volume		// No attack envelope on "What Lightning Flash" due to trills
				else {
					gainNode.gain.setValueAtTime(0, startTime)
					gainNode.gain.linearRampToValueAtTime(volume, startTime + .25)		// Attack envelope of .25 seconds on all other chants
				}
				source.connect(gainNode)
				gainNode.connect(context.destination)

				animate(source,songFunctionName,noteNumber,noteLength,startTime,i)

				source.start(startTime)									// Play the note

				startTime += noteLength
				
				source.stop(startTime)									// Stop the note

				if (scrollInChant) {
					i += scrollInChant
					if (i < 0) i = 0
					if (i > songNote.length - 1) i = songNote.length - 1
				}
				else if (i < songNote.length - 1) i ++
				else {
					scrollInChant = 0
					clearInterval(mainLoop); mainLoop = null
					clearInterval(medleyInterval); medleyInterval = null
					clearInterval(repeatInterval); repeatInterval = null
					clearInterval(metronomeInterval); metronomeInterval = null
					metronome = 0; playing = false
					//return songLength
				}
			}
		},25)
	}
	//return songLength
}

function playMetronome(metroBeatsPerMinute,metroBeat) {
	clearInterval(metronomeInterval)
	metronomeInterval = setInterval(function() {
		if (metronome == 1) {metronome = 0; document.getElementById("metronomeLeft").style.fill = "lightblue";
			document.getElementById("metronomeRight").style.fill = "#eee"
		}
		else {metronome = 1; document.getElementById("metronomeRight").style.fill = "lightblue"
			document.getElementById("metronomeLeft").style.fill = "#eee"
		}
	}, 60000 / metroBeatsPerMinute / metroBeat) // / metroBeat)
}
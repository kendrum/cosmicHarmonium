
function medleySlider() {				// Medley Slider
	//console.log("Here at medleySlider function")
	playButtonPressed = false
  if (document.getElementById("medleySlider").checked == true) {
		playing = true
		//console.log("Here at medleySlider function if medlySlider checked")
		medleyPlaying = true
		repeatPlaying = false
		document.getElementById("repeatSlider").checked = false
		medleyPlay()
  } else {
		//console.log("Here at medleySlider function if medlySlider NOT checked")
		medleyPlaying = false
		stopChant()
  }
}

function repeatSlider() {				// Repeat Slider
	playButtonPressed = false
  if (document.getElementById("repeatSlider").checked == true){
		playing = true
		repeatPlaying = true
		medleyPlaying = false
		document.getElementById("medleySlider").checked = false
		medleyPlay()
  } else {
		repeatPlaying = false
		stopChant()
  }
}

function playPreviousChant() {	// Up arrow on screen
	getSongNumUp()
	playButtonPressed = false
	playChant(songNum)
}

function playNextChant() {			// Down arrow on screen
	getSongNumDown()
	playButtonPressed = false
	playChant(songNum)
}

function getSongNumUp() {
	if (chantListType == 1) {
		switch (songNum) {
			case 63: songNum = 52; break
			case 51: songNum = 38; break
			case 38: songNum = 36; break
			case 36: songNum = 25; break
			case 25: songNum = 19; break
			case 1:  songNum = 63; break
			case 0:  songNum = 63; break
			default:	songNum --
		}		
	}
	else if (chantListType == 2) {
		switch (songNum) {
			case 66: songNum = 64; break			
			case 64: songNum = 62; break			
			case 60: songNum = 58; break			
			case 57: songNum = 47; break			
			case 47: songNum = 44; break			
			case 43: songNum = 37; break			
			case 37: songNum = 34; break			
			case 33: songNum = 28; break			
			case 27: songNum = 22; break			
			case 22: songNum = 19; break			
			case 18: songNum = 12; break			
			case 10:  songNum = 7;  break			
			case 1:  songNum = 66; break			
			default: songNum --
		}			
	}
	return songNum
}

function getSongNumDown() {
	if (chantListType == 1) {
		switch (songNum) {
			case 29: songNum = 25; break
			case 25: songNum = 36; break
			case 36: songNum = 38; break
			case 38: songNum = 51; break
			case 52: songNum = 63; break
			case 63: songNum = 1;  break
			default:	songNum ++
		}		
	}
	else if (chantListType == 2) {
		switch (songNum) {
			case 7: songNum = 10; break
			case 12: songNum = 18; break
			case 19: songNum = 22; break
			case 22: songNum = 27; break
			case 28: songNum = 33; break
			case 34: songNum = 37; break
			case 37: songNum = 43; break
			case 44: songNum = 47; break
			case 47: songNum = 57; break
			case 58: songNum = 60; break
			case 62: songNum = 64; break
			case 64: songNum = 66; break
			case 66: songNum = 1; break
			//case 25: songNum = 1; break
			default:	songNum ++
		}		
	}
	return songNum
}

function keyPressed(event) {
	
	// spacebar pressed
  if (event.keyCode == 32) {	
		event.preventDefault()
		if (playing) {
			playing = false
			document.querySelectorAll('polygon').forEach(item => {
				let color = item.getAttribute("class")
				if (color == "white") {item.setAttribute('style', 'fill: white')}
				else {item.setAttribute('style', 'fill: black')}
			})
			chantList.focus()
			stopChant()
		} else {	// if not playing
			//playing = true
			//chantList.focus()
			playChant(songNum)
		}
  }	
	
	// Enter key pressed
	else if (event.keyCode == 13) playChant(songNum)
		
	// PgUp Key pressed
	else if (event.keyCode == 33) {
		songNum = 1
		document.getElementById("chant" + oldSongNum).style.backgroundColor = "#fff"
		document.getElementById("chant" + songNum).style.backgroundColor = "#edf"
		oldSongNum = songNum
		//chantList.scrollTo({left: 0, top: (1 * 1.718 - 9.4) * window.innerWidth/100, behavior: 'smooth'})
	}
	
	// pgDn Key pressed
	else if (event.keyCode == 34) {		// pgDn
	// else if (event.keyCode == 34) playNextChant()
		songNum = 63
		document.getElementById("chant" + oldSongNum).style.backgroundColor = "#fff"
		document.getElementById("chant" + songNum).style.backgroundColor = "#edf"
		oldSongNum = songNum
		chantList.scrollTo({left: 0, top: (63 * 1.718 - 9.4) * window.innerWidth/100, behavior: 'smooth'})
	}
	else if (event.keyCode == 37) if (scrollInChant <= 0) scrollInChant += -1; else scrollInChant = 0 // Left arrow
	else if (event.keyCode == 39) if (scrollInChant >= 0) scrollInChant +=  1; else scrollInChant = 0	// Right arrow
	
	// Up arrow on keyboard
	else if (event.keyCode == 38) {
		getSongNumUp()
		if (oldSongNum != playingSongNum) document.getElementById("chant" + oldSongNum).style.backgroundColor = "#fff"
		if (songNum != playingSongNum) {document.getElementById("chant" + songNum).style.backgroundColor = "#edf"; oldSongNum = songNum}
		document.getElementById("chantList").scrollTo({left: 0, top: (songNum * 1 - 25) * window.innerWidth/100, behavior: 'smooth'})
		// document.getElementById("chantList").scrollBy({left: 0, top: -8, behavior: 'smooth'})
		oldSongNum = songNum
	}

	// Down arrow on keyboard
	else if (event.keyCode == 40) {
		getSongNumDown()
		if (oldSongNum != playingSongNum) document.getElementById("chant" + oldSongNum).style.backgroundColor = "#fff"
		if (songNum != playingSongNum) {document.getElementById("chant" + songNum).style.backgroundColor = "#edf"; oldSongNum = songNum}
		document.getElementById("chantList").scrollTo({left: 0, top: (songNum * 1 - 25) * window.innerWidth/100, behavior: 'smooth'})
		// document.getElementById("chantList").scrollBy({left: 0, top: (1.718 - 9.4) * window.innerWidth/100, behavior: 'smooth'})
		// document.getElementById("chantList").scrollBy({left: 0, top: 8, behavior: 'smooth'})
		//setTimeout(function() {chantList.scrollTo({left: 0, top: (songNum * 1.718 - 9.4) * window.innerWidth/100, behavior: 'smooth'}) },1)
		oldSongNum = songNum
	}
	
	// Home key on keyboard pressed
	else if (event.keyCode == 36) {
		songNum = 1
		if (oldSongNum != playingSongNum) document.getElementById("chant" + oldSongNum).style.backgroundColor = "#fff"
		if (songNum != playingSongNum) {document.getElementById("chant" + songNum).style.backgroundColor = "#edf"; oldSongNum = songNum}
		document.getElementById("chantList").scrollTo({left: 0, top: (songNum * 1 - 25) * window.innerWidth/100, behavior: 'smooth'})
	}
	
	// End Key on keyboard pressed
	else if (event.keyCode == 35) {
		songNum = 65
		if (oldSongNum != playingSongNum) document.getElementById("chant" + oldSongNum).style.backgroundColor = "#fff"
		if (songNum != playingSongNum) {document.getElementById("chant" + songNum).style.backgroundColor = "#edf"; oldSongNum = songNum}
		document.getElementById("chantList").scrollTo({left: 0, top: (songNum * 1 - 25) * window.innerWidth/100, behavior: 'smooth'})
	}
}

function stopChant() {
console.log("Here at stop")
	keyNum = 0
	playing = false
	medleyPlaying = false
	repeatPlaying = false
	playButtonPressed = false
	document.getElementById("medleySlider").checked = false
	document.getElementById("repeatSlider").checked = false
	if (source) source.stop()
	clearInterval(mainLoop); mainLoop = null
	clearInterval(chantInterval); chantInterval = null
	clearInterval(medleyInterval); medleyInterval = null
	clearInterval(repeatInterval); repeatInterval = null
	clearInterval(metronomeInterval); metronomeInterval = null
	while (animateTimeout1--) {window.clearTimeout(animateTimeout1); animateTimeout1 = null}
	while (animateTimeout2--) {window.clearTimeout(animateTimeout2); animateTimeout2 = null} 
	document.getElementById("chant" + oldPlayingSongNum).style.backgroundColor = "#fff"
	//document.getElementById("chant" + songNum).style.backgroundColor = "#edf"
	playingSongNum = 1
	//oldPlayingSongNum = 1
}

function playButton() {
	keyNum = 0
	playButtonPressed = true
	medleyPlaying = false
	repeatPlaying = false
	document.getElementById("medleySlider").checked = false
	document.getElementById("repeatSlider").checked = false
	playChant(songNum)
}

function showTooltipMedley(event) {
	// console.log("ahoy")
  let tooltiptext = document.getElementById("tooltipMedley")
  tooltiptext.style.display = "block"
	tooltiptext.style.position = "fixed"
  tooltiptext.style.left = toVW(event.pageX) - 4 + 'vw'
  tooltiptext.style.top = 7.3  + 'vw'
}

function showTooltipRepeat(event) {
	// console.log("ahoy")
  let tooltiptext = document.getElementById("tooltipRepeat")
  tooltiptext.style.display = "block"
	tooltiptext.style.position = "fixed"
  tooltiptext.style.left = toVW(event.pageX) - 4 + 'vw'
  tooltiptext.style.top = 7.3  + 'vw'
}

function showTooltipUpArrow(event) {
	// console.log("ahoy")
  let tooltiptext = document.getElementById("tooltipUpArrow")
  tooltiptext.style.display = "block"
	tooltiptext.style.position = "fixed"
  tooltiptext.style.left = toVW(event.pageX) + 1.5 + 'vw'
  tooltiptext.style.top = toVW(event.pageY) - 1.8 + 'vw'
}

function showTooltipDownArrow(event) {
  let tooltiptext = document.getElementById("tooltipDownArrow")
  tooltiptext.style.display = "block"
	tooltiptext.style.position = "fixed"
  tooltiptext.style.left = toVW(event.pageX) + 1.5 + 'vw'
  tooltiptext.style.top = toVW(event.pageY) - 1.8 + 'vw'
}

function showTooltipMoreInfo(event) {
  let tooltiptext = document.getElementById("tooltipMoreInfo")
  tooltiptext.style.display = "block"
	tooltiptext.style.position = "fixed"
  tooltiptext.style.left = toVW(event.pageX) - 6.2 + 'vw'
  tooltiptext.style.top = 13  + 'vw'
}

function hideTooltip() {
  document.getElementById("tooltipUpArrow").style.display = "none"
  document.getElementById("tooltipDownArrow").style.display = "none"
  document.getElementById("tooltipRepeat").style.display = "none"
  document.getElementById("tooltipMedley").style.display = "none"
  document.getElementById("tooltipMoreInfo").style.display = "none"
}

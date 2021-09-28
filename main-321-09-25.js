// window.chantInterval = null
// window.metronomeInterval = null
var chantInterval = null
var medleyInterval = null
var repeatInterval = null
var metronomeInterval = null
var started = false
var buffer = []
var songLength = 0
var songNum = 1
var oldSongNum = 1
var playingSongNum = 0
var oldPlayingSongNum = 1
var playing = false
var medleyPlaying = false
var repeatPlaying = false
var keyA, keyAb, keyB, keyBb, keyC, keyD, keyDb, keyE, keyEb, keyF, keyFs, keyG
var keyMinorA, keyMinorB, keyMinorBb, keyMinorC, keyMinorCs, keyMinorD
var keyMinorDs, keyMinorE, keyMinorF, keyMinorFs, keyMinorG, keyMinorGs
var keyC
var keyD
var mainLoop
var animateTimeout1
var animateTimeout2
var metronome = 0
var playButtonPressed = false
var keyNum = 0
var noteNumber = 0
var nameOfKeySignature = "C major"
var noteName = "C major"
var scrollInChant = 0
var context
var source
var chantListType = 2
var volume
var keySignatureImages = ["keySignatures/A.jpg", "keySignatures/Ab.jpg", "keySignatures/B.jpg", "keySignatures/Bb.jpg", "keySignatures/C.jpg", "keySignatures/D.jpg", "keySignatures/Db.jpg", "keySignatures/E.jpg", "keySignatures/Eb.jpg", "keySignatures/F.jpg", "keySignatures/Fs.jpg", "keySignatures/G.jpg", "keySignatures/minorA.jpg", "keySignatures/minorB.jpg", "keySignatures/minorBb.jpg", "keySignatures/minorC.jpg", "keySignatures/minorCs.jpg", "keySignatures/minorD.jpg", "keySignatures/minorDs.jpg", "keySignatures/minorE.jpg", "keySignatures/minorF.jpg", "keySignatures/minorFs.jpg", "keySignatures/minorG.jpg", "keySignatures/minorGs.jpg"]
//var keyName
//window.gainVolume = 0

// preloadImages(keySignatureImages)
var keySigBuffer = []
fetch('keySignatures/A.jpg')			.then(response => response.blob()).then(blob =>	 keySigBuffer[0]  = URL.createObjectURL(blob))
fetch('keySignatures/Ab.jpg')			.then(response => response.blob()).then(blob =>  keySigBuffer[1]  = URL.createObjectURL(blob))
fetch('keySignatures/B.jpg')			.then(response => response.blob()).then(blob =>  keySigBuffer[2]  = URL.createObjectURL(blob))
fetch('keySignatures/Bb.jpg')			.then(response => response.blob()).then(blob =>  keySigBuffer[3]  = URL.createObjectURL(blob))
fetch('keySignatures/C.jpg')			.then(response => response.blob()).then(blob =>  keySigBuffer[4]  = URL.createObjectURL(blob))
fetch('keySignatures/D.jpg')			.then(response => response.blob()).then(blob =>  keySigBuffer[5]  = URL.createObjectURL(blob))
fetch('keySignatures/Db.jpg')			.then(response => response.blob()).then(blob =>  keySigBuffer[6]  = URL.createObjectURL(blob))
fetch('keySignatures/E.jpg')			.then(response => response.blob()).then(blob =>  keySigBuffer[7]  = URL.createObjectURL(blob))
fetch('keySignatures/Eb.jpg')			.then(response => response.blob()).then(blob =>  keySigBuffer[8]  = URL.createObjectURL(blob))
fetch('keySignatures/F.jpg')			.then(response => response.blob()).then(blob =>  keySigBuffer[9]  = URL.createObjectURL(blob))
fetch('keySignatures/Fs.jpg')			.then(response => response.blob()).then(blob =>  keySigBuffer[10] = URL.createObjectURL(blob))
fetch('keySignatures/G.jpg')			.then(response => response.blob()).then(blob =>  keySigBuffer[11] = URL.createObjectURL(blob))
fetch('keySignatures/minorA.jpg')	.then(response => response.blob()).then(blob =>  keySigBuffer[12] = URL.createObjectURL(blob))
fetch('keySignatures/minorB.jpg')	.then(response => response.blob()).then(blob =>  keySigBuffer[13] = URL.createObjectURL(blob))
fetch('keySignatures/minorBb.jpg').then(response => response.blob()).then(blob =>  keySigBuffer[14] = URL.createObjectURL(blob))
fetch('keySignatures/minorC.jpg')	.then(response => response.blob()).then(blob =>  keySigBuffer[15] = URL.createObjectURL(blob))
fetch('keySignatures/minorCs.jpg').then(response => response.blob()).then(blob =>  keySigBuffer[16] = URL.createObjectURL(blob))
fetch('keySignatures/minorD.jpg')	.then(response => response.blob()).then(blob =>  keySigBuffer[17] = URL.createObjectURL(blob))
fetch('keySignatures/minorDs.jpg').then(response => response.blob()).then(blob =>  keySigBuffer[18] = URL.createObjectURL(blob))
fetch('keySignatures/minorE.jpg')	.then(response => response.blob()).then(blob =>  keySigBuffer[19] = URL.createObjectURL(blob))
fetch('keySignatures/minorF.jpg')	.then(response => response.blob()).then(blob =>  keySigBuffer[20] = URL.createObjectURL(blob))
fetch('keySignatures/minorFs.jpg').then(response => response.blob()).then(blob =>  keySigBuffer[21] = URL.createObjectURL(blob))
fetch('keySignatures/minorG.jpg')	.then(response => response.blob()).then(blob =>  keySigBuffer[22] = URL.createObjectURL(blob))
fetch('keySignatures/minorGs.jpg').then(response => response.blob()).then(blob =>	 keySigBuffer[23] = URL.createObjectURL(blob))

mapBlackAndWhiteKeyboard()

<!-- orderAsInCC() -->
orderAlphabetical()

getKeyName()

// Initiate
function initiate() {
	audioStart()
	fetchAudioFiles()
	setTimeout( ()=> {
		playing = true; callAndPlayTheChant("song" + songNum)
	},600)
}	

// Get Key Name	
function getKeyName() {
	var majorKey = ["C major","Db major","D major","Eb major","E major","F major","F# major","G major","Ab major","A major","Bb major","B major"]
	var minorKey = ["C minor","C# minor","D minor","D# minor","E minor","F minor","F# minor","G minor","G# minor","A minor","Bb minor","B minor"]	
	
	noteName = nameOfKeySignature

	if (noteName.slice(-5) == "major") {
		noteNumber = majorKey.indexOf(noteName)
		noteNumber += keyNum
		if (noteNumber < 0) noteNumber = noteNumber + 12
		if (noteNumber > 11) noteNumber = noteNumber - 12
		if (noteNumber > 23) noteNumber = noteNumber - 24
		if (noteNumber > 35) noteNumber = noteNumber - 36
		document.getElementById("keyName").innerHTML = majorKey[noteNumber] 
	} else {
		noteNumber = minorKey.indexOf(noteName)
		noteNumber += keyNum
		if (noteNumber < 0) noteNumber = noteNumber + 12
		if (noteNumber > 11) noteNumber = noteNumber - 12
		document.getElementById("keyName").innerHTML = minorKey[noteNumber] 
	}
		
}	

// Change Chant List order to alphabetical
function orderAlphabetical() {
	fetch("listOfChantsAlphabetical.txt").then(x => x.text()).then(y=> {chantListType=2; document.getElementById("chantList").innerHTML=y;	document.getElementById("chant1").style.backgroundColor = "#edf"
	})
}

// Change Chant List Order as in Cosmic Chants
function orderAsInCC() {
	fetch("listOfChantsAsInCC.txt") .then(x => x.text()) .then(y => {chantListType = 1; document.getElementById("chantList").innerHTML = y})
}

// Scale Changer -  to Lower key
function keyNumDown() {if (keyNum > - 5) keyNum --;	getKeyName()}

// Scale Changer - to Higher key
function keyNumUp() 	{if (keyNum < 13)  keyNum ++; getKeyName()}


const notes = ['C','Cs','D','Ds','E','F','Fs','G','Gs','A','As','B',
							 'C','Cs','D','Ds','E','F','Fs','G','Gs','A','As','B',
							 'C','Cs','D','Ds','E','F','Fs','G','Gs','A','As','B',
							 'C','Cs','D','Ds','E','F','Fs','G','Gs','A','As','B',
							 'C','Cs','D','Ds','E']

function chantsAndSongs() {
	console.log("words and notes")
}

function song1() {
	let songTitle = "At Thy Feet"
	let beatsPerMinute = 144
	let metroBeat = 1
	let trebleClef = "G"
	let timeSignatureBeats = "4"
	let timeSignatureNote = "4"
	let songTime = "144 bpm on 1/4 note"
	nameOfKeySignature = "G major"
	let keySignature = "G A B C D E F# G"
	let songBeat		=	"1111221111112"+"1111221111112"+"21111211111111"+"11211111111112"+"11211111111112"
	let songNote		=	"ABDDEEDEFEDEB"+"ABDDEEDEFEDEB"+"GGGFFEDEFEDEBB"+"GGGFFEEDEFEDEB"+"GGGFFEEDEFEDEB"
	let accidental	=	"nnnnnnnnsnnnn"+"nnnnnnnnsnnnn"+"nnnssnnnsnnnnn"+"nnnssnnnnsnnnn"+"nnnssnnnnsnnnn"
	let octave			= "3344444444443"+"3344444444443"+"44444444444433"+"44444444444443"+"44444444444443"
	let songWords ="Lis-ten to my soul song, lis-ten to my heart&mdash; song! * \
									Lis-ten to my soul song, lis-ten to my heart&mdash; song! * \
									In se-cret in my soul, I will gath-er blos-soms for Thee, * \
									Dip-ping them in de-vo-tion, I will lay them at Thy feet. * \
									Dip-ping them in de-vo-tion, I will lay them at Thy feet."
	clicked = true; loop = 1
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}


function song2() {
	let songTitle = "Blue Lotus Feet"
	let beatsPerMinute = 152 		// 60/304 (15/76 or 0.197368421053) of a second, on the eighth note
	let metroBeat = 1
	//let trebleClef = '<img src="keySignatures/G.jpg" id = "trebleClef">'
	let trebleClef = 'G'
	let timeSignatureBeats = "4"
	let timeSignatureNote = "4"
	let songTime = "152 bpm on 1/4 note"
	nameOfKeySignature = "G major"
	let keySignature 	 = "G A B C D E F# G"
	//let songBeat	=	"24314224222222222424"+"24314224222222222424"+"242222424242222424"+"242222424242222424"
	let songBeat	=	"12ac2112111111111212"+"12ac2112111111111212"+"121111212121111212"+"121111212121111212"
	let songNote	=	"BBGGGFFEDDDEEFEDDEEB"+"BBGGGFFEDDDEEFEDDEEB"+"BGGGFFGFEDEFEEDEEB"+"BGGGFFGFEDEFEEDEEB"
	let accidental=	"nnnnnssnnnnnnsnnnnnn"+"nnnnnssnnnnnnsnnnnnn"+"nnnnssnsnnnsnnnnnn"+"nnnnssnsnnnsnnnnnn"
	let octave		=	"33444444444444444443"+"33444444444444444443"+"344444444444444443"+"344444444444444443"
	let songWords =	"En-grossed is the bee of my mind * \
							on the blue lo-tus feet of my Di-vine Moth-er. * \
							En-grossed is the bee of my mind * \
							on the blue lo-tus feet of my Di-vine Moth-er. * \
							Di-vine Moth-er, my Di-vine Moth-er! * \
							Di-vine Moth-er, my Di-vine Moth-er! * \
							Di-vine Moth-er, my Di-vine Moth-er! * \
							Di-vine Moth-er, my Di-vine Moth-er!"
	clicked = true; loop = 2
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song3() {
	let songTitle = "Cloud-Colored Christ - 1"
	let beatsPerMinute = 192 		// 60/304 (15/76 or 0.197368421053) of a second, on the eighth note
	let metroBeat = .5
	// let nameOfKeySignature = "A&#9837; major"
	nameOfKeySignature = "Eb major"
	let trebleClef = 'Eb'
	let keySignature = "Eb F G Ab Bb C D Eb"
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songTime = "192 bpm on 8th note"
	let songBeat	=	"11111122"+"1111111124"+"112112"+"112112"+"22224"
	let songNote	=	"CECBGAFC"+"CCCECBGAFC"+"FFFGGG"+"CFFGGG"+"GCFGC"
	let accidental=	"nbnbnbnn"+"nnnbnbnbnn"+"nnnnnn"+"nnnnnn"+"nnnnn"
	let octave		=	"44433344"+"4444433344"+"444444"+"444444"+"45444"
	let songWords =	"Cloud&mdash; col-ored Christ,&mdash;&mdash; come! * \
							O my cloud&mdash; col-ored Christ,&mdash;&mdash; come! * \
							O my Christ, O my Christ, * \
							O my Christ, O my Christ, * \
							Je-sus Christ,&mdash; come!"
	clicked = true; loop = 3
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song4() {
	let songTitle = "Cloud-Colored Christ - 2"
	let beatsPerMinute = 192 		// 60/304 (15/76 or 0.197368421053) of a second, on the eighth note
	let metroBeat = .5
	// let nameOfKeySignature = "A&#9837; major"
	nameOfKeySignature = "Eb major"
	let trebleClef = 'Eb'
	let keySignature = "Eb F G Ab Bb C D Eb"
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songTime = "192 bpm on 8th note"
	let songBeat	=	"11111122"+"1111111124"+"112112"+"112112"+"211224"
	let songNote	=	"CECBGAFC"+"CCCECBGAFC"+"FFFGGG"+"CFFGGG"+"GCGFGC"
	let accidental=	"nbnbnbnn"+"nnnbnbnbnn"+"nnnnnn"+"nnnnnn"+"nnnnnn"
	let octave		=	"44433344"+"4444433344"+"444444"+"444444"+"454444"
	let songWords =	"Cloud&mdash; col-ored Christ,&mdash;&mdash; come! * \
							O my cloud&mdash; col-ored Christ,&mdash;&mdash; come! * \
							O my Christ, O my Christ, * \
							O my Christ, O my Christ, * \
							Je-sus&mdash; Christ,&mdash; come!"
	clicked = true; loop = 4
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song5() {
	let songTitle = "Come, Listen To My Soul Song"
	let beatsPerMinute = 138 		// 60/276 (5/23 or 0.217391304348) of a second, on the eighth note
	let metroBeat = 1
	let trebleClef = 'minorC'
	let timeSignatureBeats = "3"
	let timeSignatureNote = "4"
	let songTime = "Free (138 bpm on 1/4 note)"
	nameOfKeySignature = "C minor"
	let keySignature 	 = "C D Eb F G Ab Bb C"
	//let songBeat	=	"622241146"+"1161161161146"+"12141214121412141216"+"622241146"+"1161161161146"+"22222242222224"+"22222242222224"+"226222241146"+"226222241146"+"1161161161146"+"12141214121412141216"+"622241146"+"1161161161146"+"22222242222224"+"22222242222224"+"226222241146"+"226222241146"+"1161161161146"
	let songBeat	=	"31112cc23"+"cc3cc3cc3cc23"+"c1c2c1c2c1c2c1c2c1c3"+"31112cc23"+"cc3cc3cc3cc23"+"11111121111112"+"11111121111112"+"11211112cc23"+"11211112cc23"+"cc3cc3cc3cc23"+"c1c2c1c2c1c2c1c2c1c3"+"31112cc23"+"cc3cc3cc3cc23"+"11111121111112"+"11111121111112"+"11211112cc23"+"11211112cc23"+"cc3cc3cc3cc23"
	let songNote	=	"AEFCBGFGC"+"BABEDEBABGFGC"+"CFFFFGGGCFFFFGGGGCCC"+"AEFCBGFGC"+"BABEDEBABGFGC"+"CFFFGGGFGBBCCC"+"CFFFGGGFGBBCCC"+"FGAAEFCBGFGC"+"FGAAEFCBGFGC"+"BABEDEBABGFGC"+"CFFFFGGGCFFFFGGGGCCC"+"AEFCBGFGC"+"BABEDEBABGFGC"+"CFFFGGGFGBBCCC"+"CFFFGGGFGBBCCC"+"FGAAEFCBGFGC"+"FGAAEFCBGFGC"+"BABEDEBABGFGC"
	let accidental=	"bbnnbnnnn"+"bnbbnbbnbnnnn"+"nnnnnnnnnnnnnnnnnnnn"+"bbnnbnnnn"+"bnbbnbbnbnnnn"+"nnnnnnnnnbbnnn"+"nnnnnnnnnbbnnn"+"nnbbbnnbnnnn"+"nnbbbnnbnnnn"+"bnbbnbbnbnnnn"+"nnnnnnnnnnnnnnnnnnnn"+"bbnnbnnnn"+"bnbbnbbnbnnnn"+"nnnnnnnnnbbnnn"+"nnnnnnnnnbbnnn"+"nnbbbnnbnnnn"+"nnbbbnnbnnnn"+"bnbbnbbnbnnnn"
	let octave		=	"444433334"+"3334444443334"+"44444444444444444555"+"444433334"+"3334444443334"+"44444444444555"+"44444444444555"+"444444433334"+"444444433334"+"3334444443334"+"44444444444444444555"+"444433334"+"3334444443334"+"44444444444555"+"44444444444555"+"444444433334"+"444444433334"+"3334444443334"
	let songWords =	"Come, lis-ten to my soul&mdash;&mdash; song, * \
							Soul,&mdash;&mdash; soul,&mdash;&mdash; soul,&mdash;&mdash; soul&mdash;&mdash; song. * \
							Burst&mdash; the heart, burst&mdash; the blue, * \
							Burst&mdash; the heart, burst&mdash; the blue, burst&mdash; the soul! * \
							Come, lis-ten to my soul&mdash;&mdash; song, * \
							Soul,&mdash;&mdash; soul,&mdash;&mdash; soul,&mdash;&mdash; soul&mdash;&mdash; song. * \
							Hov-er-ing o-ver the clouds, lin-ger-ing o-ver the lea, * \
							Hov-er-ing o-ver the clouds, lin-ger-ing o-ver the lea, * \
							Thou has come to lis-ten to my soul&mdash;&mdash; song * \
							Thou has come to lis-ten to my soul&mdash;&mdash; song * \
							Soul,&mdash;&mdash; soul,&mdash;&mdash; soul,&mdash;&mdash; soul&mdash;&mdash; song. * \
							Burst&mdash; the heart, burst&mdash; the blue, * \
							Burst&mdash; the heart, burst&mdash; the blue, burst&mdash; the soul! * \
							Come, lis-ten to my soul&mdash;&mdash; song, * \
							Soul,&mdash;&mdash; soul,&mdash;&mdash; soul,&mdash;&mdash; soul&mdash;&mdash; song. * \
							Hov-er-ing o-ver the clouds, lin-ger-ing o-ver the lea, * \
							Hov-er-ing o-ver the clouds, lin-ger-ing o-ver the lea, * \
							Thou hast come to lis-ten to my soul&mdash;&mdash; song * \
							Thou hast come to lis-ten to my soul&mdash;&mdash; song * \
							Soul,&mdash;&mdash; soul,&mdash;&mdash; soul,&mdash;&mdash; soul&mdash;&mdash; song."						
	clicked = true; loop = 5
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song6() {
	let songTitle = "Dawn Chant"
	let beatsPerMinute = 240
	let metroBeat = .5
	let trebleClef = "minorE"
	let timeSignatureBeats = "x"
	let timeSignatureNote = "x"
	let songTime = "240 bpm on 8th note"
	nameOfKeySignature = "E minor"
	let keySignature = "E F# G A B C D E"
	let songBeat		=	"224224"+"31224"+"31224"+"111111221122"+"111111221122"+"111113224"+"111113224"
	let songNote		=	"EDCBBB"+"EEDBE"+"EEDBE"+"EEEEFFFGGGFE"+"EEEEFFFGGGFE"+"EEEEDDBDE"+"EEEEDDBDE"
	let accidental	=	"nsnnnn"+"nnsnn"+"nnsnn"+"nnnnsssnnnsn"+"nnnnsssnnnsn"+"nnnnssnsn"+"nnnnssnsn"
	let octave			= "444333"+"44434"+"44434"+"444444444444"+"444444444444"+"444444344"+"444444344"
	let songWords = "Night has flown, dawn has come. * \
	Wake My chil-dren wake! * \
	Wake My chil-dren wake! * \
	Sit-ting in the a-sa-na of med-i-ta-tion, * \
	Sit-ting in the a-sa-na of med-i-ta-tion, * \
	think ye of thy Gu-ru's lo-tus feet. * \
	think ye of thy Gu-ru's lo-tus feet."
	clicked = true; loop = 6
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song7() {
	let songTitle = "Deliver Us From Delusion"
	let beatsPerMinute = 200 //240
	let metroBeat = .5
	let trebleClef = "Ab"
	let timeSignatureBeats = "x"
	let timeSignatureNote = "x"
	let songTime = "200 bpm on 8th note"
	nameOfKeySignature = "Ab major"
	let keySignature = "Ab Bb C Db Eb F G Ab"
	let songBeat		=	"2411211314"+"112111111314"+"2411211314"+"112111111314"+"11213112221124"+"11213112221124"+"bbb2bbbbbj"+"bbb2bbbbbi"+"12acbbj"+"11bbb121cc1ac22"+"11bbb121cc1ac24"
	let songNote		=	"AAGFGFEECC"+"BCECBAFABCBA"+"AAGFGFEECC"+"BCECBAFABCBA"+"AAAFFABCECBCBA"+"AAAFFABCECBCBA"+"CEFAAAAAAA"+"CEFAAAAAAA"+"AFAABBB"+"ABCCCCCBBBBAFFE"+"ABCCCCCBBBBAFFE"
	let accidental	=	"bbnnnnbbnn"+"bnbnbbnbbnbb"+"bbnnnnbbnn"+"bnbnbbnbbnbb"+"bbbnnbbnbnbnbb"+"bbbnnbbnbnbnbb"+"nnbbbbbbbb"+"nnbbbbbbbb"+"bnbbbbb"+"bbnnnnnbbbbbnnb"+"bbnnnnnbbbbbnnb"
	let octave			= "4444444444"+"344433333433"+"4444444444"+"344433333433"+"33333334443433"+"33333334443433"+"4444444444"+"4444444444"+"4444444"+"445555544444444"+"445555544444444"
	let songWords = "Think ye&mdash;&mdash;&mdash;&mdash;&mdash; in thy heart, * \
	lo-tus feet of thy&mdash;&mdash;&mdash;&mdash;&mdash; Gu-ru, * \
	Think ye&mdash;&mdash;&mdash;&mdash;&mdash; in thy heart, * \
	lo-tus feet of thy&mdash;&mdash;&mdash;&mdash;&mdash; Gu-ru, * \
	If you want to cross the&mdash; o-cean of de&mdash; lu-sion, * \
	If you want to cross the&mdash; o-cean of de&mdash; lu-sion, * \
	Sham-ing the white lo-tus in pur-i-ty, * \
	Sham-ing the white lo-tus in pur-i-ty, * \
	be-yond all du-al-i-ty, * \
	Gu-ru im-age of Brahm-a, de-liv-er us from de-lu-sion! * \
	Gu-ru im-age of Brahm-a, de-liv-er us from de-lu-sion!"
	clicked = true; loop = 7
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song10() {
	let songTitle = "Divine Mother's Song to the Devotee"
	let beatsPerMinute = 120
	let metroBeat = 1
	let trebleClef = 'minorFs'
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songTime = "120 bpm on 1/4 note"
	nameOfKeySignature = "F# minor"
	let keySignature = "F# G# A B C# D E F#"
	let songBeat		=	"11121111112"+"111111112"+"11111121111112"+"111112111111112"+"1112111112"+"111112111112"
	let songNote		=	"AAEEEEFFFGG"+"GGBAGGAGF"+"AAEEFFFGFGAAGF"+"AEEEFFFGBAGGAGF"+"AAEEEEEFFF"+"GFGAGFEEFEEF"
	let accidental	=	"nnnnnnsssss"+"ssnnssnss"+"nnnnssssssnnss"+"nnnnssssnnssnss"+"nnnnnnnsss"+"sssnssnnsnns"
	let octave			= "33444444444"+"444444444"+"33444444444444"+"344444444444444"+"3344444444"+"444444443444"
	let songWords = "O dev-o-tee, I can give thee sal-va-tion * \
									But not My love and de-vo&mdash;-tion; * \
									For when I give those a-way I give My-self a-way.&mdash; * \
									Ask of Me sal-va-tion, but not My love and de-vo&mdash;-tion; * \
									For in-deed, then, when I give those a-way, * \
									I be-come poor,&mdash;&mdash; En-closed in your heart's way."
	clicked = true; loop = 10
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song11() {
	let songTitle = "Do Not Dry The Ocean Of My Love"
	let beatsPerMinute = 126 		// on the quarter note
	let metroBeat = 1
	nameOfKeySignature = "C minor"
	let trebleClef = 'minorC'
	//let trebleClef = 'minorC.jpg'
	let keySignature = "C D Eb F G Ab Bb C"
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songTime = "126 bpm on 1/4 note"
	let songBeat	=	"112111111112"+"11211112"+"112111112"+"1111211112"+"11112111112"+"111212111cc1111"+"111212111cc1111"+"1112111112"+"11121111112"
	let songNote	=	"CDEEDEDEFEDC"+"CDCBGBCC"+"CDCBGBCCC"+"DEFGGGAGFG"+"GABAGFFGGGG"+"CDDDDEEDEDEFEDC"+"CDDDDEEDEDEFEDC"+"CDCCBGGBCC"+"CDCCBGGBCCC"
	let accidental=	"nnbbnbnbnbnn"+"nnnnnnnn"+"nnnnnnnnn"+"nbsnnnbnsn"+"nbnbnssnnnn"+"nnnnnbbnbnbnbnn"+"nnnnnbbnbnbnbnn"+"nnnnnnnnnn"+"nnnnnnnnnnn"
	let octave		=	"444444444444"+"44433344"+"444333444"+"4444444444"+"44444444444"+"444444444444444"+"444444444444444"+"4444333344"+"44443333444"
	let songWords =	"Do not dry the o-cean of my&mdash;&mdash;&mdash; love * \
							With the fires of my&mdash; de-sires, * \
							With the fires of my&mdash; rest-less-ness. * \
							For Thee&mdash; I pine, for Thee&mdash; I weep. * \
							I'll cry&mdash; no more, Thou mine&mdash; ev-er more! * \
							Thee&mdash; I find be-hind the fringe of my&mdash;&mdash; mind.&mdash;&mdash; * \
							Thee&mdash; I find be-hind the fringe of my&mdash;&mdash; mind.&mdash;&mdash; * \
							Hide&mdash; no more, Lord,&mdash; Hide&mdash; no more! * \
							Leave&mdash; me not, Lord,&mdash; Leave&mdash; me no more!"
	clicked = true; loop = 11
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song12() {
	let songTitle = "Door Of My Heart"
	let beatsPerMinute = 132 		// 60/132 (5/11, or 0.4545...) of a second, on the quarter-note
	let metroBeat = 1
	let trebleClef = 'D'
	let timeSignatureBeats = "4"
	let timeSignatureNote = "4"
	let songTime = "132 bpm on 1/4 note"
	nameOfKeySignature = "D major"
	//keySignature = "B C# 			 D E F# 			G A B"
	let keySignature 	= "B C# D E F# G A B"
	let songBeat		= "112221111112"+"112221111112"+"1121121111112"+"1121121111112"+"1121121111112"+"1121121111112"+"1121121111112"+"1121121111112"
	let songNote		=	"ABDEEGGFEDEB"+"ABDEEGGFEDEB"+"GGGFFEDEFEDEB"+"GGGFFEDEFEDEB"+"ABDEEEDEFEDEB"+"ABDEEEDEFEDEB"+"GGGFFEDEFEDEB"+"GGGFFEDEFEDEB"
	let octave			= "334444444443"+"334444444443"+"4444444444443"+"4444444444443"+"3344444444443"+"3344444444443"+"4444444444443"+"4444444444443"
	let accidental 	=	"nnnnnnnsnnnn"+"nnnnnnnsnnnn"+"nnnssnnnsnnnn"+"nnnssnnnsnnnn"+"nnnnnnnnsnnnn"+"nnnnnnnnsnnnn"+"nnnssnnnsnnnn"+"nnnssnnnsnnnn"
	let songWords = "Door&mdash; of my heart, o-pen wide I keep for Thee. * \
								Door&mdash; of my heart, o-pen wide I keep for Thee. * \
								Wilt Thou come, wilt Thou come? Just for once,&mdash; come to me? * \
								Wilt Thou come, wilt Thou come? Just for once,&mdash; come to me? * \
								Will my days fly a-way with-out see-ing Thee, my Lord? * \
								Will my days fly a-way with-out see-ing Thee, my Lord? * \
								Night and day night and day, I look for Thee night and day. * \
								Night and day night and day, I look for Thee night and day."
	clicked = true; loop = 12
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}		


function song18() {
	let songTitle = "Hymn To Brahma - Sanskrit &#119056;"
	let beatsPerMinute = 120 		// 60/304 (15/76 or 0.197368421053) of a second, on the eighth note
	let metroBeat = 1
	let trebleClef = 'Eb'
	let timeSignatureBeats = "6"
	let timeSignatureNote = "4"
	let songTime = "Free (120 bpm on 1/4 note)"
	nameOfKeySignature = "Eb major"
	let keySignature 	 = "Eb F G Ab Bb C D Eb"
	// let songBeat	=	"4446222224"+"23162316"+"2444222226"+"3144246"+"4446222224"+"23162316"+"2444222226"+"3144246"
	let songBeat	=	"2223111112"+"1ac31ac3"+"1222111113"+"ac22123"+"2223111112"+"1ac31ac3"+"1222111113"+"ac22123"
	let songNote	=	"GGFEBEEBEE"+"EFFFFGFG"+"EFFFFGAAAG"+"EFGGGFE"+"GGFEBEEBEE"+"EFFFFGFG"+"EFFFFGAAAG"+"EFGGGFE"
	let accidental=	"nnnbbbbbbb"+"bnnnnnnn"+"bnnnnnbbbn"+"bnnnnnb"+"nnnbbbbbbb"+"bnnnnnnn"+"bnnnnnbbbn"+"bnnnnnb"
	let octave		=	"4444344344"+"44444444"+"4444444444"+"4444444"+"4444344344"+"44444444"+"4444444444"+"4444444"
	let songWords =	"Brahm-&amacr;-nan-dam pa-ra-ma su-kha-dam, * \
							ke&mdash; va-lam gy&amacr;n-a m&#363;r-tim; * \
							Dwan-dw&amacr; ti-tam, ga-ga-na sa-dri-sham, * \
							Tat-twa ma-sy&amacr;-di lak-shyam. * \
							E-kam ni-tyam vi-ma-lam a-cha-lam, * \
							sar&mdash; va-dh&#299; s&amacr;-ksh&#299; bh&#363;-tam; * \
							Bh&amacr;-v&amacr; t&#299;-tam tri-gu-na ra-hi-tam, * \
							Sad-gu-rum-tam na-m&amacr;-mi."
	clicked = true; loop = 18
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song19() {
	let songTitle = "I Am the Bubble, Make Me the Sea"
	let beatsPerMinute = 180 		//  60/180 (1/3, or 0.333...) of a second, on the eighth-note
	let metroBeat = 1/3
	let trebleClef = 'C'
	let timeSignatureBeats = "6"
	let timeSignatureNote = "8"
	let songTime = "180 bpm on 8th note"
	nameOfKeySignature = "C major"
	let keySignature = "C D E F G A B C"
	let songBeat		=	"21212132121213"+"21311132131113"+"111211113111211113"+"111211113111211113"+"111211113111211113"+"1112111121111211113"
	let songNote		=	"EDCDEEEEDCDEEE"+"GGGFFFFGGGFFFF"+"DFFFFGFFFDFFFFGFFF"+"EEDCDEEEEEEDCDEEEE"+"GGGGGFFFFGGGGGFFFF"+"EEDCDEEEEEEEDCDEEEE"
	let accidental	=	"nnnnnnnnnnnnnn"+"nnnnnnnnnnnnnn"+"nnnnnnnnnnnnnnnnnn"+"nnnnnnnnnnnnnnnnnn"+"nnnnnnnnnnnnnnnnnn"+"nnnnnnnnnnnnnnnnnnn"
	let octave			= "44444444444444"+"44444444444444"+"444444444444444444"+"444444444444444444"+"444444444444444444"+"4444444444444444444"
	let songWords = "So&mdash; do&mdash; Thou my Lord; So&mdash; do&mdash; Thou my Lord; * \
								Thou and I, nev-er a-part; Thou and I, nev-er a-part. * \
								Wave of the sea, dis-solve in the sea! * \
								Wave of the sea, dis-solve in the sea! * \
								I am the bub-ble, make me the sea, * \
								I am the bub-ble, make me the sea. * \
								Make me the sea, oh, make me the sea! * \
								Make me the sea, oh, make me the sea! * \
								I am the bub-ble, make me the sea, oh, * \
								I am the bub-ble, make me the sea."
	clicked = true; loop = 19
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song22() {
	let songTitle = "I Am the Sky"
	let beatsPerMinute = 160
	let metroBeat = 1
	let trebleClef = "Db"
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songTime = "160 bpm on 1/4 note"
	nameOfKeySignature = "Db major"
	let keySignature = "Db Eb F Gb Ab Bb C Db"
	let songBeat		=	"1111111113"+"1111111113"+"111211113"+"111ch1113"+"333333"
	let songNote		=	"ABDDDDBEEE"+"ABDDDDBEEE"+"AABBBABBA"+"AABBBABBA"+"EBEABA"
	let accidental	=	"bbbbbbbbbb"+"bbbbbbbbbb"+"bbbbbbbbb"+"bbbbbbbbb"+"bbbbbb"
	let octave			= "3344443444"+"3344443444"+"444444444"+"444444444"+"434444"
	let songWords = "I am the sky, Moth-er, I am the sky, * \
									I am the sky, Moth-er, I am the sky, * \
									I am the vast blue o-cean of sky. * \
									I am a lit-tle drop of the sky; * \
									fro-zen sky&mdash;&mdash;&mdash;"
	clicked = true; loop = 22
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song27() {
	let songTitle = "In the Valley of Sorrow"
	let beatsPerMinute = 180 		//  60/180 (1/3, or 0.333...) of a second, on the eighth-note
	let metroBeat = 1/2
	let trebleClef = "minorA"
	let timeSignatureBeats = "6"
	let timeSignatureNote = "8"
	let songTime = "Free (180 bpm on 8th note)"
	//nameOfKeySignature = "A minor"
	nameOfKeySignature = "A minor"
	let keySignature = "A B C D E F G A"
	let songBeat		=	"11bbb12111111112"+"11bbb12111111112"+"1111bbb44cc144"+"21111bbb44cc144"+"24242424"+"24242424"+"1144cc144"+"2111111144cc144"
	let songNote		=	"EAAAAAAAGGGFFEEE"+"EAAAAAAAGGGFFEEE"+"EEEEEDEFECECBA"+"EEEEEEDEFECECBA"+"EAAAAGFE"+"EAAAAGFE"+"DEFECECBA"+"EEEEEEDEFECECBA"
	let accidental	=	"nnnnnnnnsssnnnnn"+"nnnnnnnnsssnnnnn"+"nnnnnsnnnsnsbn"+"nnnnnnsnnnsnsbn"+"nnnnnsnn"+"nnnnnsnn"+"snnnsnsbn"+"nnnnnnsnnnsnsbn"
	let octave			= "4444444444444444"+"4444444444444444"+"44444444444433"+"444444444444433"+"44444444"+"44444444"+"444444433"+"444444444444433"
	let songWords = "In the val-ley of sor-row, a thou-sand years or till to-mor-row, * \
									In the val-ley of sor-row, a thou-sand years or till to-mor-row, * \
									But I'll wait to see&mdash;&mdash; You, You, You&mdash;&mdash; just You. * \
									My Lord, I want to see on-ly You, You, You&mdash;&mdash; just You. * \
									My heart's a-flame, my soul's a-fire, * \
									My heart's a-flame, my soul's a-fire * \
									Just for You, You, You,&mdash;&mdash; just You. * \
									My Lord, I want to see on-ly You, You, You&mdash;&mdash; just You."
	clicked = true; loop = 27
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song28() {
	let songTitle = "Invocation To The Gurus"
	let beatsPerMinute = 176 		// 60/304 (15/76 or 0.197368421053) of a second, on the eighth note
	let metroBeat = .5
	let trebleClef = "D"
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songTime = "176 bpm on 8th note"
	nameOfKeySignature = "D major"
	let keySignature 	= "D E F# G A B C# D" // "F&#9839; G&#9839; A B C&#9839; D E F&#9839;"
	let songBeat	=	"112222222"+"112222222"+"1111211211211"+"1111211211211"+"11bbb2bbb2bbb2bbb"+"11bbb2bbb2bbb2bbb"+"111111211112111121111"+"111111211112111121111"+"111111211112111121111"+"111111211112111121111"+"1111211211211"+"1111211211211"+"1132323"+"1132323"
	let songNote	=	"ADDEEFFEE"+"ADDEEFFEE"+"ADDDEEEFFFEEE"+"ADDDEEEFFFEEE"+"ADDDDEEEEFFFFEEEE"+"ADDDDEEEEFFFFEEEE"+"ADDDDDEEEEEFFFFFEEEEE"+"ADDDDDEEEEEFFFFFEEEEE"+"ADDDDDEEEEEFFFFFEEEEE"+"ADDDDDEEEEEFFFFFEEEEE"+"ADDDEEEFFFEEE"+"ADDDEEEFFFEEE"+"DEFDEAD"+"DEFDEAD"
	let accidental=	"nnnnnssnn"+"nnnnnssnn"+"nnnnnnnsssnnn"+"nnnnnnnsssnnn"+"nnnnnnnnnssssnnnn"+"nnnnnnnnnssssnnnn"+"nnnnnnnnnnnsssssnnnnn"+"nnnnnnnnnnnsssssnnnnn"+"nnnnnnnnnnnsssssnnnnn"+"nnnnnnnnnnnsssssnnnnn"+"nnnnnnnsssnnn"+"nnnnnnnsssnnn"+"nnsnnnn"+"nnsnnnn"
	let octave		=	"344444444"+"344444444"+"3444444444444"+"3444444444444"+"34444444444444444"+"34444444444444444"+"344444444444444444444"+"344444444444444444444"+"344444444444444444444"+"344444444444444444444"+"3444444444444"+"3444444444444"+"4444434"+"4444434"
	let songWords =	"Om&mdash; Christ, Om Christ, Om Christ, Om Christ. * \
							Om&mdash; Christ, Om Christ, Om Christ, Om Christ. * \
							Om&mdash; Krish-na, Om Krish-na, Om Krish-na, Om Krish-na. * \
							Om&mdash; Krish-na, Om Krish-na, Om Krish-na, Om Krish-na. * \
							Om&mdash; Ba-ba-ji, Om Ba-ba-ji, Om Ba-ba-ji, Om Ba-ba-ji. * \
							Om&mdash; Ba-ba-ji, Om Ba-ba-ji, Om Ba-ba-ji, Om Ba-ba-ji. * \
							Om&mdash; La-hiri Maha-saya, Om La-hiri Maha-saya, * \
							Om La-hiri Maha-saya, Om La-hiri Maha-saya. * \
							Om&mdash; La-hiri Maha-saya, Om La-hiri Maha-saya, * \
							Om La-hiri Maha-saya, Om La-hiri Maha-saya. * \
							Om&mdash; Sri Yuk-tes-war, Om Sri Yuk-tes-war, * \
							Om Sri Yuk-tes-war, Om Sri Yuk-tes-war. * \
							Om&mdash; Sri Yuk-tes-war, Om Sri Yuk-tes-war, * \
							Om Sri Yuk-tes-war, Om Sri Yuk-tes-war. * \
							Om&mdash; Gu-ru, Om Gu-ru, Om Gu-ru, Om Gu-ru. * \
							Om&mdash; Gu-ru, Om Gu-ru, Om Gu-ru, Om Gu-ru. * \
							Om&mdash;&mdash; Om,&mdash; Om.&mdash; * \
							Om&mdash;&mdash; Om,&mdash; Om.&mdash;"
	clicked = true; loop = 28
	//return [beatsPerMinute,songBeat,songNote,accidental,octave]
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song33() {
	let songTitle = "Light the Lamp of Thy Love"
	let songTime = "100 bpm on 1/4 note"
	let beatsPerMinute = 100	// on the eighth note
	let metroBeat = 1
	nameOfKeySignature = "G major"
	let trebleClef = "G"
	let keySignature = "G A B C D E F# G"
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	//let songBeat	=	"22221111211"+"1121111224"+"22221111211"+"1121111224"+"211223122"+"211223122"+"222112114"+
							//"22222222"+"2222224"+"222211114"+"22222222"+"22222222"+"222211114"+"22211224"+"2222224"+"22222222"+"22222222"+"22211224"
	let songBeat	=	"1111cccc1cc"+"cc1cccc112"+"1111cccc1cc"+"cc1cccc112"+"1cc11ac11"+"1cc11ac11"+"111cc1cc2"+
							"11111111"+"1111112"+"1111cccc2"+"11111111"+"11111111"+"1111cccc2"+"111cc112"+"1111112"+"11111111"+"11111111"+"111cc112"							
	let songNote	=	"GADGGAGFEFE"+"DEDCBAGADG"+"GADGGAGFEFE"+"DEDCBAGADG"+"ACBAACCBA"+"ACBAACCBA"+"CCBAGADCD"+
							"FFFFGGGG"+"FFFFGGG"+"FEDCBACBA"+"FFFFGGGG"+"FFFFGGGG"+"FEDCBACBA"+"FFFFFGGG"+"AABAGFG"+"GGAGFEED"+"GGAGFEED"+"CCBAGADG"
	let accidental=	"nnnnnnnnnnn"+"nnnnnnnnnn"+"nnnnnnnnnnn"+"nnnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnn"+
							"ssssnnnn"+"ssssnnn"+"nnnnnnnnn"+"ssssnnnn"+"ssssnnnn"+"nnnnnnnnn"+"sssssnnn"+"nnbnnsn"+"nnnnnnnn"+"nnnnnnnn"+"nnnnnnnn"
	let octave		=	"33444444444"+"4444333344"+"33444444444"+"4444333344"+"343334433"+"343334433"+"443333444"+
							"44444444"+"4444444"+"444433433"+"44444444"+"44444444"+"444433433"+"444444444"+"4444444"+"44444444"+"44444444"+"43333444"
	let songWords =	"In my house,&mdash; with&mdash; Thine&mdash; own hands,&mdash; * \
							light&mdash; the lamp,&mdash; of&mdash; Thy&mdash; love! * \
							In my house,&mdash; with&mdash; Thine&mdash; own hands,&mdash; * \
							light&mdash; the lamp,&mdash; of&mdash; Thy&mdash; love! * \
							Thy trans&mdash;-mut-ing lamp en-tranc-ing, * \
							Thy trans&mdash;-mut-ing lamp en-tranc-ing, * \
							won-drous are its&mdash; rays.&mdash;&mdash;&mdash; * \
							Change my dark-ness to Thy light, Lord! * \
							Change my dark-ness to Thy light, * \
							and my e-vil in&mdash;-to&mdash; good. * \
							Touch me but once and I will change, * \
							Touch me but once and I will change * \
							all my clay in-to&mdash; Thy&mdash; gold. * \
							All the sense-lamps that I did light * \
							soot-ed in-to wor&mdash;-ries. * \
							Sit-ting at the door of my soul. * \
							Sit-ting at the door of my soul. * \
							light Thy res-ur&mdash;-rect-ing lamp!"
	clicked = true; loop = 33
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song34() {
	let songTitle = "Listen, Listen, Listen"
	let beatsPerMinute = 216 		// 60/216 (5/18 or 0.277...) of a second, on the eighth note
	let metroBeat = .5
	let trebleClef = "D"
	let timeSignatureBeats = "2"
	let timeSignatureNote = "4"
	let songTime = "216 bpm on 8th note"
	nameOfKeySignature = "D major"
	//keySignature = "B C# 			 D E F# 			G A B"
	let keySignature 	 = "D E F# G A B C# D"
	let songBeat	=	"11111111224"+"1111111122211"+"11112111111211"+"111121111114"+"11111111224"+"1111111122211"+"11112111111211"+"111121111114"
	let songNote	= "GFGFGFEDEEB"+"GFGFGFEDEEBAB"+"DDDDDEEFEDEBAB"+"DDDDDEEFEDEB"+"GFGFGFEDEEB"+"GFGFGFEDEEBAB"+"DDDDDEEFEDEBAB"+"DDDDDEEFEDEB"
	let accidental=	"nsnsnsnnnnn"+"nsnsnsnnnnnnn"+"nnnnnnnsnnnnnn"+"nnnnnnnsnnnn"+"nsnsnsnnnnn"+"nsnsnsnnnnnnn"+"nnnnnnnsnnnnnn"+"nnnnnnnsnnnn"
	let octave		=	"44444444443"+"4444444444333"+"44444444444333"+"444444444443"+"44444444443"+"4444444444333"+"44444444444333"+"444444444443"
	let songWords =	"Lis-ten, lis-ten, lis2-ten to my heart's song, * \
								Lis-ten, lis-ten, lis2-ten to my heart's song: * \
								I will nev-er for-get Thee; I will nev-er for-sake Thee; * \
								I will nev-er for-get Thee; I will nev-er for-sake Thee. * \
								Lis-ten, lis-ten, lis2-ten to my heart's song, * \
								Lis-ten, lis-ten, lis2-ten to my heart's song: * \
								I will nev-er for-get Thee; I will nev-er for-sake Thee; * \
								I will nev-er for-get Thee; I will nev-er for-sake Thee."
	clicked = true; loop = 34
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song37() {
	let songTitle = "O God Beautiful"
	let songTime = "108 bpm on 1/4 note"
	let beatsPerMinute = 108 		// 60/304 (15/76 or 0.197368421053) of a second, on the eighth note
	let metroBeat = 1
	nameOfKeySignature = "Db major"
	let trebleClef = "minorBb"
	let keySignature = "Db Eb F Gb Ab Bb C Db"
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songBeat = "11cc111cc1"+"11cc111cc1"+"1111ac2"+"1111ac2"+"11cc111cc1"+"11cc111cc1"+
							"1111112"+"1111112"+"1111112"+"1111112"+"11111111"+"11111111"+"1111cc12"+"1111cc12"+
							"11cc111cc1"+"11cc111cc1"+"1111ac2"+"1111ac2"+"11cc111cc1"+"11cc111cc1"+
							"11cc11111"+"11cc11111"+"1111112"+"1111112"+"11cc111cc1"+"11cc111cc1"+"1111cc12"+"1111cc12"+
							"11cc111cc1"+"11cc111cc1"+"1111ac2"+"1111ac2"+"11cc111cc1"+"11cc111cc1"
	let songNote = "FFFFFEEAAA"+"FFFFFEEAAA"+"AAGGFFB"+"AAGGFFB"+"FFFFFEEAAA"+"FFFFFEEAAA"+
							"CCCCDDA"+"CCCCDDA"+"AAAAEEF"+"AAAAEEF"+"CCCCBBAA"+"CCCCBBAA"+"DDDDBCDE"+"DDDDBCDE"+
							"FFFFFEEAAA"+"FFFFFEEAAA"+"AAGGFFB"+"AAGGFFB"+"FFFFFEEAAA"+"FFFFFEEAAA"+
							"CCCCCDDEE"+"CCCCCDDEE"+"AAABEEF"+"AAABEEF"+"CCCCCBBAAA"+"CCCCCBBAAA"+"DDDDBCDE"+"DDDDBCDE"+
							"FFFFFEEAAA"+"FFFFFEEAAA"+"AAGGFFB"+"AAGGFFB"+"FFFFFEEAAA"+"FFFFFEEAAA"
	let accidental = "nnnnnbbbbb"+"nnnnnbbbbb"+"bbbbnnb"+"bbbbnnb"+"nnnnnbbbbb"+"nnnnnbbbbb"+
							"nnnnbbb"+"nnnnbbb"+"bbbbbbn"+"bbbbbbn"+"nnnnbbbb"+"nnnnbbbb"+"bbbbbnbb"+"bbbbbnbb"+
							"nnnnnbbbbb"+"nnnnnbbbbb"+"bbbbnnb"+"bbbbnnb"+"nnnnnbbbbb"+"nnnnnbbbbb"+
							"nnnnnnnbb"+"nnnnnnnbb"+"bbbbbbn"+"bbbbbbn"+"nnnnnbbbbb"+"nnnnnbbbbb"+"bbbbbnbb"+"bbbbbnbb"+
							"nnnnnbbbbb"+"nnnnnbbbbb"+"bbbbnnb"+"bbbbnnb"+"nnnnnbbbbb"+"nnnnnbbbbb"
	let octave = "4444444333"+"4444444333"+"4444443"+"4444443"+"4444444333"+"4444444333"+
							"4444443"+"4444443"+"4444444"+"4444444"+"55554444"+"55554444"+"44443444"+"44443444"+
							"4444444333"+"4444444333"+"4444443"+"4444443"+"4444444333"+"4444444333"+
							"444444444"+"444444444"+"4444444"+"4444444"+"5555544444"+"5555544444"+"44443444"+"44443444"+
							"4444444333"+"4444444333"+"4444443"+"4444443"+"4444444333"+"4444444333"
	let songWords = "O God beau-ti-ful, O God beau-ti-ful, * \
							O God beau-ti-ful, O God beau-ti-ful, * \
							At Thy feet, O I do bow! * \
							At Thy feet, O I do bow! * \
							O God beau-ti-ful, O God beau-ti-ful, * \
							O God beau-ti-ful, O God beau-ti-ful, * \
							In the for-est Thou art green; * \
							In the for-est Thou art green; * \
							In the moun-tain Thou art high; * \
							In the moun-tain Thou art high; * \
							In the riv-er Thou art rest-less; * \
							In the riv-er Thou art rest-less; * \
							In the o-cean Thou&mdash; art grave. * \
							In the o-cean Thou&mdash; art grave. * \
							O God beau-ti-ful, O God beau-ti-ful, * \
							O God beau-ti-ful, O God beau-ti-ful, * \
							At Thy feet, O I do bow! * \
							At Thy feet, O I do bow! * \
							O God beau-ti-ful, O God beau-ti-ful, * \
							O God beau-ti-ful, O God beau-ti-ful, * \
							To the ser-vice-ful Thou art serv-ice; * \
							To the ser-vice-ful Thou art serv-ice; * \
							To the lov-er Thou art love; * \
							To the lov-er Thou art love; * \
							To the sor-row-ful Thou art sym-pa-thy; * \
							To the sor-row-ful Thou art sym-pa-thy; * \
							To the yo-gi Thou&mdash; art bliss. * \
							To the yo-gi Thou&mdash; art bliss. * \
							O God beau-ti-ful, O God beau-ti-ful, * \
							O God beau-ti-ful, O God beau-ti-ful, * \
							At Thy feet, O I do bow! * \
							At Thy feet, O I do bow! * \
							O God beau-ti-ful, O God beau-ti-ful. * \
							O God beau-ti-ful, O God beau-ti-ful."
	clicked = true; loop = 37
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song43() {
	let songTitle = "O Thou King of the Infinite"
	let songTime = "200 bpm on 1/4 note" //"170 beats per minute"	// eighth note
	//songTime = "&#9833; = "	// quarter note
	let beatsPerMinute = 200 //200 //170 
	let metroBeat = .5
	nameOfKeySignature = "Bb major"
	let trebleClef = "Bb"
	let keySignature = "Bb C D Eb F G A Bb"
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songBeat	=	"acbbbac2acacacac"+"acbbbac2acacacac"+"22bbb2acacac2"+"acbbbac2acacacac"+"acbbbac2acacacac"+"22bbb2acacac2"
	let songNote	=	"DDFFFGGGAABBAAGG"+"DDFFFGGGAABBAAGG"+"EFEEEDCDEDCCA"+"DDFFFGGGAABBAAGG"+"DDFFFGGGAABBAAGG"+"EFEEEDCDEDCCA"
	let accidental=	"nnsssnnnnnbbnnnn"+"nnsssnnnnnbbnnnn"+"nnnnnnnnnnnnn"+"nnsssnnnnnbbnnnn"+"nnsssnnnnnbbnnnn"+"nnnnnnnnnnnnn"
	let octave		=	"4444444444444444"+"4444444444444444"+"4444444444443"+"4444444444444444"+"4444444444444444"+"4444444444443"
	let songWords =	"O Thou King of the In-fin-ite! I be-hold Thee in sa-ma-dhi. * \
							O Thou King of the In-fin-ite! I be-hold Thee in sa-ma-dhi. * \
							in joy, and in more joy, in Thy light of mel-low joy. * \
							O Thou King of the In-fin-ite! I be-hold Thee in sa-ma-dhi. * \
							O Thou King of the In-fin-ite! I be-hold Thee in sa-ma-dhi. * \
							in joy, and in more joy, in Thy light of mel-low joy."
	clicked = true; loop = 43
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song44() {
	let songTitle = "Polestar Of My Life"
	let beatsPerMinute = 92 		// on the quarter note
	let metroBeat = 1
	nameOfKeySignature = "C major"
	let trebleClef = "C"
	let keySignature = "C D E F G A B C"
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songTime = "92 bpm on 1/4 note"
	let songBeat	=	"111111cc1"+"111111cc1"+"11cc1cc1cc1"+"11cc1cc1cc1"+"11cc11111"+"11cc11111"
	let songNote	=	"EFEDACAAG"+"EFEDACAAG"+"DGAAAGACAAG"+"DGAAAGACAAG"+"DFDDCACAG"+"DFDDCACAG"
	let accidental=	"nnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnnnn"+"nnnnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnn"
	let octave		=	"444434333"+"444434333"+"44444445444"+"44444445444"+"444443433"+"444443433"
	let songWords =	"I have made Thee Pole-star of my life. * \
							I have made Thee Pole-star of my life. * \
							Though my sea is dark and&mdash; my stars are gone, * \
							Though my sea is dark and&mdash; my stars are gone, * \
							still I see the path through Thy mer-cy. * \
							still I see the path through Thy mer-cy."
	clicked = true; loop = 44
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song47() {
	let songTitle = "Search Him Out in Secret"
	let beatsPerMinute = 144
	let metroBeat = 1
	let trebleClef = "C"
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songTime = "Free (144 bpm on 1/4 note)"
	nameOfKeySignature = "C major"
	let keySignature = "C D E F G A B C"
	let songBeat		=	"11111121111112"+"11111121111112"+"2211222112"+"11111121111112"+"cc111111cccccc2"+"gggcccc2cc1112"+"cc111111cccccc2"+"gggcccc2cc1112"+"111111211222"+"111111211222"+"211112211112"+"1111111111111111"+"1111112"
	let songNote		=	"EGEDCBAGACACDE"+"EGEDCBAGACACDE"+"GGBGEGGBGE"+"EFEDCDEEFEDCDE"+"EEEEDCCDEAAAAAA"+"CCCCCCBAABAGAE"+"EEEEDCCDEAAAAAA"+"CCCCCCBAABAGAE"+"EEGGEEEDEGGG"+"EEGGEEEDEGGG"+"FFFEFEDCACDE"+"EGGGGBGEEGGGGBGE"+"EFEDCDE"
	let accidental	=	"nnnnnnnnnnnnnn"+"nnnnnnnnnnnnnn"+"nnnnnnnnnn"+"nnnnnnnnnnnnnn"+"nnnnnnnnnnnnnnn"+"nnnnnnnnnnnnnn"+"nnnnnnnnnnnnnnn"+"nnnnnnnnnnnnnn"+"nnnnnnnnnnnn"+"nnnnnnnnnnnn"+"nnnnnnnnnnnn"+"nnnnnnnnnnnnnnnn"+"nnnnnnn"
	let octave			= "44444333343444"+"44444333343444"+"4444444444"+"44444444444444"+"444444444444444"+"55555544444444"+"444444444444444"+"55555544444444"+"444444444444"+"444444444444"+"444444443444"+"4444444444444444"+"4444444"
	let songWords = "With-out med-i-ta-tion, mind, hith-er, thith-er wand-d'rest thou. * \
									With-out med-i-ta-tion, mind, hith-er, thith-er wand-d'rest thou. * \
									A-dor-a-ble Him! A-dor-a-ble Him! * \
									Search Him out in se-cret now. Search Him out in se-cret now. * \
									Float-ing on the breeze of bliss&mdash; in the char-i-ot of sky, * \
									Peer-ing in-to His eyes&mdash;&mdash; with&mdash; thy div-ing eye, * \
									Float-ing on the breeze of bliss&mdash; in the char-i-ot of sky, * \
									Peer-ing in-to His eyes&mdash;&mdash; with&mdash; thy div-ing eye, * \
									Thou-sand pet-als' nec-tar drink! Drink&mdash; and drink, drink! * \
									Thou-sand pet-als' nec-tar drink! Drink&mdash; and drink, drink! * \
									With cos-mic might-y Om, deep-er&mdash; do thou sink; * \
									With&mdash; cos-mic might-y Om&mdash; With&mdash; cos-mic might-y Om&mdash; * \
									Deep&mdash; er&mdash; do thou sink."
	clicked = true; loop = 47
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song57() {
	let songTitle = "What Lightning Flash"
	let beatsPerMinute = 180 //180 		//  60/180 (1/3, or 0.333...) of a second, on the eighth-note
	let metroBeat = 1
	let trebleClef = 'A' // or 'minorFs'
	let timeSignatureBeats = "4"
	let timeSignatureNote = "8"
	let songTime = "180 bpm on 8th note"
	nameOfKeySignature = "A major" // or 'Fs minor'
	let keySignature = "A B C# D E F# G# A"
	let songBeat		= "1111112112"+"111111cc11112"+"1111111112111111"+"1112111111112"+"111111112"+"2111cc1111111ddddde"+
	"111111112"+"111111112"+"111dddddf"+"cc3ccccddddd1"+"ccc11ddddd111"+"1111cdd1"+"111111112"+"111111112"+
	"1111211111cc"+"1111211112"+"1111111cc1"+"1111cc11cc2"+"1111211111cc"+"1111211112"+"1111111cc1"+"1111cc11cc2"
	let songNote		= "AEDCBBBBBB"+"ABDDDCBABEEEE"+"EFFFFFFAGFFAAAGF"+"FGFEEFEDCDBEE"+"EFEDCDBEE"+"EEEFAGFFFEFFFGFGFGF"+
	"EFEDCDBEE"+"EFEDCDBEE"+"EEFGAGAGF"+"EFAGFGAGAGAGF"+"EEEEFGAGAGFFF"+"EFFFGFGF"+"EFEDCDBEE"+"EFEDCDBEE"+
	"EFFFFEFAAAAA"+"EFFFFEFAAA"+"FGFEDCBDCB"+"BEDCBABBDCB"+"EFFFFEFAAAAA"+"EFFFFEFAAA"+"FGFEDCBDCB"+"BEDCBABBDCB"
	let accidental	= "nnnsnnnnnn"+"nnnnnsnnnnnnn"+"nssssssnsssnnnss"+"snsnnsnnsnnnn"+"nsnnsnnnn"+"nnnsnssssnsssnsnsns"+
	"nsnnsnnnn"+"nsnnsnnnn"+"nnssnsnss"+"nsnsssnsnsnss"+"nnnnssnsnssss"+"nsssssss"+"nsnnsnnnn"+"nsnnsnnnn"+
	"nssssnsnnnnn"+"nssssnsnnn"+"snsnnsnnsn"+"nnnsnnnnnsn"+"nssssnsnnnnn"+"nssssnsnnn"+"snsnnsnnsn"+"nnnsnnnnnsn"
	let octave			= "3444333333"+"3344443334444"+"4444444444444444"+"4444444444344"+"444444344"+"4444444444444444444"+
	"444444344"+"444444344"+"444444444"+"4444444444444"+"4444444444444"+"44444444"+"444444344"+"444444344"+
	"444444444444"+"4444444444"+"4444443443"+"34443333443"+"444444444444"+"4444444444"+"4444443443"+"34443333443"
	let songWords = "My&mdash; life is for the Lord, for the Lord, * \
			who&mdash; is un-touched by de&mdash; sires&mdash; of His worlds; * \
			He&mdash; whose en-chant-ing im&mdash; age is be-yond com-pare&mdash;&mdash; * \
			And who&mdash;&mdash; is&mdash; Joy&mdash; per&mdash; son-i-fied, * \
			who is Joy&mdash; per&mdash; son-i-fied. * \
			Won-der-ful Light of our un-i-verse and the un-i-verse&mdash;&mdash;&mdash;&mdash;&mdash; * \
			be&mdash; yond&mdash; phe&mdash; nom-e-na, be&mdash; yond&mdash; phe&mdash; nom-e-na, * \
			The Life of my&mdash;&mdash;&mdash; life&mdash; * \
			is&mdash; You&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; * \
			Won-der-ful Light of this&mdash;&mdash;&mdash;&mdash; un-i-verse * \
			and&mdash; Life be-yond&mdash;&mdash;&mdash; * \
			The Life&mdash; of my&mdash; life is You. * \
			The Life&mdash; of my&mdash; life is You. * \
			What&mdash; light-ning flash glim-mers in Thy face, Moth-er! * \
			What&mdash; light-ning flash glim-mers in Thy face! * \
			See-ing Thee I am thrilled through and&mdash; through. * \
			See-ing Thee I am&mdash; thrilled through and&mdash; through. * \
			What&mdash; light-ning flash glim-mers in Thy face, Moth-er! * \
			What&mdash; light-ning flash glim-mers in Thy face! * \
			See-ing Thee I am thrilled through and&mdash; through. * \
			See-ing Thee I am&mdash; thrilled through and&mdash; through."
	clicked = true; loop = 57
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song58() {
	let songTitle = "When My Dream's Dream Is Done"
	let beatsPerMinute = 300
	let metroBeat = 1/3
	let trebleClef = 'minorFs'
	let timeSignatureBeats = ""
	let timeSignatureNote =  ""
	let songTime = "Free (300 bpm on 24th note)"
	nameOfKeySignature = "F# minor"
	//keySignature = "F# 			 G# 			A B C# 			 D E F#"
	let keySignature 	 = "F# G# A B C# D E F#"
	let songBeat	= "22266"+"331111111119"+"33331111116"+"22266"+"331111111119"+"33331111116"+"33336"+"1111111119"+"633aaaa"+"aaaaaaaaaa9"+"3333331111116"+"33331111116"+"3333331111116"+"33331111116"
	let songNote	= "AACEE"+"DEFGFEFEDEDC"+"CEFECECBCBA"+"AACEE"+"DEFGFEFEDEDC"+"CEFECECBCBA"+"CCEFA"+"GFEFGABCBA"+"FFFEDEF"+"ABCBABAFEDC"+"BCEEGFEFEDEDC"+"CEFECECBCBA"+"BCEEGFEFEDEDC"+"CEFECECBCBA"
	let accidental= "nssnn"+"snsssnsnsnss"+"snnnsnsbsbn"+"nssnn"+"snsssnsnsnss"+"snnnsnsbsbn"+"ssnsn"+"ssnssnnsnn"+"sssnsns"+"nnsnnnnsnss"+"nsnnssnsnsnss"+"snnnsnsbsbn"+"nsnnssnsnsnss"+"snnnsnsbsbn"
	let octave		= "33444"+"444444444444"+"44444443433"+"33444"+"444444444444"+"44444443433"+"44444"+"4444444544"+"4444444"+"44544444444"+"3444444444444"+"44444443433"+"3444444444444"+"44444443433"
	let songWords	="Whence&mdash;&mdash; do they come&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; here? * \
							Whith-er do they flit&mdash;&mdash; a&mdash;&mdash; way? * \
							Whence&mdash;&mdash; do they come&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; here? * \
							Whith-er do they flit&mdash;&mdash; a&mdash;&mdash; way? * \
							In all fol-lies' dark&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; sway, * \
							keep float-ing on&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; hope's&mdash;&mdash;&mdash; way.&mdash;&mdash; * \
							Take the dust of each&mdash;&mdash;&mdash;&mdash; one's&mdash;&mdash; feet, * \
							serv-ing Moth-er where&mdash;&mdash; She&mdash;&mdash; sleeps. * \
							When my dream's dream is&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; done * \
							She will lift me on&mdash;&mdash; Her&mdash;&mdash; lap."
	clicked = true; loop = 58
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song60() {
	let songTitle = "When Thy Song Flows Through Me - 1"
	let beatsPerMinute = 230 		// 60/304 (15/76 or 0.197368421053) of a second, on the eighth note
	let metroBeat = .5
	//trebleClef = '<img src="keySignatures/Bb.jpg" width="100">'
	nameOfKeySignature = "Bb major"
	//let trebleClef = '<img src="keySignatures/Bb.jpg" id = "trebleClef">'
	let trebleClef = 'Bb'
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songTime = "Free (230 bpm on 8th note)"
	let keySignature = "Bb C D Eb F G A Bb"
	let songBeat	=	"222422112112"+"22242211211211114"+"2114224"+"11221142114"+"222422112112"+"22242211211211114"+"2114224"+"11221142114"+"222422112112"+"22242211211211114"+"2114224"+"11221142114"+"222422112112"+"22242211211211114"+"2114224"+"11221142114"
	let songNote	=	"FFGGGGGABAGF"+"FFGGGGGABAGFEDEDC"+"BBCCDED"+"CBBBBCCDEDC"+"FFGGGGGABAGF"+"FFGGGGGABAGFEDEDC"+"BBCCDED"+"CBBBBCCDEDC"+"FFGGGGGABAGF"+"FFGGGGGABAGFEDEDC"+"BBCCDED"+"CBBBBCCDEDC"+"FFGGGGGABAGF"+"FFGGGGGABAGFEDEDC"+"BBCCDED"+"CBBBBCCDEDC"
	let accidental=	"nnnnnnnnbnnn"+"nnnnnnnnbnnnbnbnn"+"bbnnnbn"+"nbbbbnnnbnn"+"nnnnnnnnbnnn"+"nnnnnnnnbnnnbnbnn"+"bbnnnbn"+"nbbbbnnnbnn"+"nnnnnnnnbnnn"+"nnnnnnnnbnnnbnbnn"+"bbnnnbn"+"nbbbbnnnbnn"+"nnnnnnnnbnnn"+"nnnnnnnnbnnnbnbnn"+"bbnnnbn"+"nbbbbnnnbnn"
	let octave		=	"444444444444"+"44444444444444444"+"3344444"+"43333444444"+"444444444444"+"44444444444444444"+"3344444"+"43333444444"+"444444444444"+"44444444444444444"+"3344444"+"43333444444"+"444444444444"+"44444444444444444"+"3344444"+"43333444444"
	let songWords =	"O life is sweet and death a&mdash; dream,&mdash;&mdash;&mdash; * \
							O life is sweet and death a&mdash; dream&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; * \
							when Thy&mdash; song flows through me, * \
							My&mdash; Lord, when Thy&mdash; song flows through&mdash; me. * \
							Then joy is sweet, sor-row a&mdash; dream,&mdash;&mdash;&mdash; * \
							Then joy is sweet, sor-row a&mdash; dream,&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; * \
							when Thy&mdash; song flows through me, * \
							My&mdash; Lord, when Thy&mdash; song flows through&mdash; me. * \
							Then health is sweet, sick-ness a&mdash; dream,&mdash;&mdash;&mdash; * \
							Then health is sweet, sick-ness a&mdash; dream,&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; * \
							when Thy&mdash; song flows through me, * \
							My&mdash; Lord, when Thy&mdash; song flows through&mdash; me. * \
							Then praise is sweet, and blame a&mdash; dream,&mdash;&mdash;&mdash; * \
							Then praise is sweet, and blame a&mdash; dream,&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; * \
							when Thy&mdash; song flows through me, * \
							My&mdash; Lord, when Thy&mdash; song flows through&mdash; me."
	clicked = true; loop = 60
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song61() {
	let songTitle = "When Thy Song Flows Through Me - 2"
	let beatsPerMinute = 130 		// 60/304 (15/76 or 0.197368421053) of a second, on the eighth note
	let metroBeat = 1
	//trebleClef = '<img src="keySignatures/Bb.jpg" width="100">'
	nameOfKeySignature = "C major"
	//let trebleClef = '<img src="keySignatures/C.jpg" id = "trebleClef">'
	let trebleClef = 'C'
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songTime = "Free (130 bpm on 8th note)"
	let keySignature = "C D E F G A B C"
	let songBeat	=	"111311cc12"+"111311113"+"1cccac1c2"+"1cccac1c3"+"111311cc12"+"111311113"+"1cccac1c2"+"1cccac1c3"+"111311cc12"+"111311113"+"1cccac1c2"+"1cccac1c3"+"111311cc12"+"111311113"+"1cccac1c2"+"1cccac1c3"
	let songNote	=	"DDEEEEEFED"+"DDEEEEFED"+"DDEDCCDDD"+"DDEDCCDDD"+"DDEEEEEFED"+"DDEEEEFED"+"DDEDCCDDD"+"DDEDCCDDD"+"DDEEEEEFED"+"DDEEEEFED"+"DDEDCCDDD"+"DDEDCCDDD"+"DDEEEEEFED"+"DDEEEEFED"+"DDEDCCDDD"+"DDEDCCDDD"
	let accidental=	"nnnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnn"+"nnnnnnnnn"
	let octave		=	"4444444444"+"444444444"+"444444444"+"444444444"+"4444444444"+"444444444"+"444444444"+"444444444"+"4444444444"+"444444444"+"444444444"+"444444444"+"4444444444"+"444444444"+"444444444"+"444444444"
	let songWords =	"O life is sweet, and death a&mdash; dream,&mdash; * \
							O life is sweet and death a dream,&mdash; * \
							when Thy&mdash; song&mdash; flows&mdash; through me, * \
							when Thy&mdash; song&mdash; flows&mdash; through me. * \
							Then joy is sweet, sor-row a&mdash; dream,&mdash; * \
							Then joy is sweet, sor-row a dream,&mdash; * \
							when Thy&mdash; song&mdash; flows&mdash; through me, * \
							when Thy&mdash; song&mdash; flows&mdash; through me. * \
							Then health is sweet, sick-ness a&mdash; dream,&mdash; * \
							Then health is sweet, sick-ness a dream,&mdash; * \
							when Thy&mdash; song&mdash; flows&mdash; through me, * \
							when Thy&mdash; song&mdash; flows&mdash; through me. * \
							Then praise is sweet and blame a&mdash; dream,&mdash; * \
							Then praise is sweet and blame a dream,&mdash; * \
							when Thy&mdash; song&mdash; flows&mdash; through me, * \
							when Thy&mdash; song&mdash; flows&mdash; through me."						
	clicked = true; loop = 61
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song62() {
	let songTitle = "Where Is There Love?"
	let beatsPerMinute = 160 		// 60/160 (3/8, or 0.375) of a second, on the eighth-note
	let metroBeat = .5
	let trebleClef = 'minorC'
	let timeSignatureBeats = "2"
	let timeSignatureNote = "4"
	let songTime = "160 bpm on 8th note"
	nameOfKeySignature = "C minor"
	//keySignature = "C D Eb 			 F G Ab 			Bb 			 C"
	let keySignature 	 = "C D Eb F G Ab Bb C"
	let songBeat				= "1121111112"+"11221121122"+"1121111112"+"11221121122"+"22211112"+"22211112"+"111121212"+"111121212"+"22211112"+"22211112"+"111121212"+"111121212"
	let songNote		= "CCCCDEFGFF"+"EEEEEFFEEDC"+"CCCCDEFGFF"+"EEEEEFFEEDC"+"CGGGAGGF"+"CGGGGAGF"+"EFGFFEFFC"+"EFGFFEFFC"+"CGGGAGGF"+"CGGGGAGF"+"EFGFFEFFC"+"EFGFFEFFC"
	let accidental	= "nnnnnbnnnn"+"bbbbbnnbbbn"+"nnnnnbnnnn"+"bbbbbnnbbbn"+"nnnnbnnn"+"nnnnnbnn"+"bnnnnbnnn"+"bnnnnbnnn"+"nnnnbnnn"+"nnnnnbnn"+"bnnnnbnnn"+"bnnnnbnnn"
	let octave			= "4444444444"+"44444444444"+"4444444444"+"44444444444"+"44444444"+"44444444"+"444444444"+"444444444"+"44444444"+"44444444"+"444444444"+"444444444"
	let songWords =	"In this world, Moth-er, no one can love me. * \
								In this world they do not know how to love me. * \
								In this world, Moth-er, no one can love me. * \
								In this world they do not know how to love me. * \
								Where is there pure&mdash; lov-ing love? * \
								Where is there tru-ly lov-ing me? * \
								There&mdash; my&mdash; soul longs&mdash; to be, * \
								There&mdash; my&mdash; soul longs&mdash; to be. * \
								Where is there pure&mdash; lov-ing love? * \
								Where is there tru-ly lov-ing me? * \
								There&mdash; my&mdash; soul longs&mdash; to be, * \
								There&mdash; my&mdash; soul longs&mdash; to be."
	clicked = true; loop = 62
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}		

function song64() {
	let songTitle = "Why, O Mind, Wanderest Thou?"
	let beatsPerMinute = 152
	let metroBeat = 1
	let trebleClef = "G"
	let timeSignatureBeats = "x"
	let timeSignatureNote = "x"
	let songTime = "152 bpm on 1/4 note"
	nameOfKeySignature = "G major"
	let keySignature = "G A B C D E F# G"
	let songBeat		=	"1121112"+"1211ca2"+"1121112"+"1211ca2"+"11212112cc1"+"11212112cc1"+"11cc1111111"+"2111212"+"11cc1111111"+"2111212"+"11111211ca2"+"111111111111"+"11111211ca2"+"111111111111"+"111111111111"+"2111212"+"111111111111"+"2111212"
	let songNote		=	"FEDCCBA"+"BDEEFFG"+"FEDCCBA"+"BDEEFFG"+"FFDDEFFFFFF"+"FFDDEFFFFFF"+"DGGGGDGGGAG"+"FFEDEFG"+"DGGGGDGGGAG"+"FFEDEFG"+"FFEDDEFFFFF"+"DGGGAGFFFFFF"+"FFEDDEFFFFF"+"DGGGAGFFFFFF"+"DGGGGGDGGGAG"+"FFEDEFG"+"DGGGGGDGGGAG"+"FFEDEFG"
	let accidental	=	"snnnnnn"+"nnnnssn"+"snnnnnn"+"nnnnssn"+"ssnnnssssss"+"ssnnnssssss"+"nnnnnnnnnnn"+"ssnnnsn"+"nnnnnnnnnnn"+"ssnnnsn"+"ssnnnnsssss"+"nnnnnnssssss"+"ssnnnnsssss"+"nnnnnnssssss"+"nnnnnnnnnnnn"+"ssnnnsn"+"nnnnnnnnnnnn"+"ssnnnsn"
	let octave			= "4444433"+"3444444"+"4444433"+"3444444"+"444444444444"+"4444444444"+"44444444444"+"4444444"+"44444444444"+"4444444"+"44444444444"+"444444444444"+"44444444444"+"444444444444"+"444444444444"+"4444444"+"444444444444"+"4444444"
	let songWords = "Why, O mind, wan-der-est thou? * \
									Go&mdash; in thine in-ner home! * \
									Why, O mind, wan-der-est thou? * \
									Go&mdash; in thine in-ner home! * \
									On the left, I-da; on the right, Pin-ga-la; * \
									On the left, I-da; on the right, Pin-ga-la; * \
									In the mid-dle, the taint&mdash; less Su-shum-na. * \
									Seize, seize Her with all thy might! * \
									In the mid-dle, the taint&mdash; less Su-shum-na. * \
									Seize, seize Her with all thy might! * \
									Kun-da-li-ni pow-er in the sub-tle form * \
									liv&mdash; eth un-con-scious in the coc-cyx re-gion. * \
									Kun-da-li-ni pow-er in the sub-tle form * \
									liv&mdash; eth un-con-scious in the coc-cyx re-gion. * \
									Gu-ru giv-en pow-er, by&mdash; pra-na-ya-ma wake, * \
									Wake Her with all thy might! * \
									Gu-ru giv-en pow-er, by&mdash; pra-na-ya-ma wake, * \
									Wake Her with all thy might!"
	clicked = true; loop = 64
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

function song66() {
	let songTitle = "Wink Has Not Touched My Eyes"
	let beatsPerMinute = 200
	let metroBeat = .5
	nameOfKeySignature = "Bb major"
	let trebleClef = 'Bb'
	let keySignature = "Bb C D Eb F G A Bb"
	let timeSignatureBeats = ""
	let timeSignatureNote = ""
	let songTime = "200 bpm on 8th note"
	let songBeat	=	"211112111122"+"211112111122"+
							"ca21111cc111112"+"ca21111cc111112"+
							"211112111122"+"211112111122"+
							"1121111211cc12"+"1121111211cc12"+
							"11111121cccc1112"+"11111121cccc1112"
	let songNote	=	"FEEDDBABDDEF"+"FEEDDBABDDEF"+
							"FFFEFEFGABAGFED"+"FFFEFEFGABAGFED"+
							"FEEDDBABDDEF"+"FEEDDBABDDEF"+
							"FFABBBBABAGAGF"+"FFABBBBABAGAGF"+
							"BABAGGFEFGFGFDED"+"BABAGGFEFGFGFDED"
	let accidental=	"nbbnnbnbnnbn"+"nbbnnbnbnnbn"+
							"nnnnnnnnnbnnnbn"+"nnnnnnnnnbnnnbn"+
							"nbbnnbnbnnbn"+"nbbnnbnbnnbn"+
							"nnnbbbbnbnnnnn"+"nnnbbbbnbnnnnn"+
							"bnbnnnnnnnnnnnbn"+"bnbnnnnnnnnnnnbn"
	let octave		=	"444443334444"+"444443334444"+
							"444444444444444"+"444444444444444"+
							"444443334444"+"444443334444"+
							"44444444444444"+"44444444444444"+
							"4444444444444444"+"4444444444444444"
	let songWords =	"Wink has not touched my eyes ev-er since I saw Thee. * \
							Wink has not touched my eyes ev-er since I saw Thee. * \
							With-out Thee, my&mdash; breath&mdash; does&mdash;&mdash; not&mdash; want to flow, * \
							With-out Thee, my&mdash; breath&mdash; does&mdash;&mdash; not&mdash; want to flow, * \
							Wink has not touched my eyes ev-er since I saw Thee. * \
							Wink has not touched my eyes ev-er since I saw Thee. * \
							Thou didst say Thou wouldst come, but Thou hast&mdash; not&mdash;&mdash; come. * \
							Thou didst say Thou wouldst come, but Thou hast&mdash; not&mdash;&mdash; come. * \
							Rest&mdash; less&mdash; is my soul, day&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; and night. * \
							Rest&mdash; less&mdash; is my soul, day&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; and night."
	clicked = true; loop = 66
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}

/*function songxx() {
	let songTitle = ""
	let beatsPerMinute = xxx
	let metroBeat = 1
	let trebleClef = "minorXx"
	let timeSignatureBeats = "x"
	let timeSignatureNote = "x"
	let songTime = "Free (xxx bpm)"
	nameOfKeySignature = "C# minor"
	let keySignature = "C# D# E F G# A# B C"
	let songBeat		=	"
	let songNote		=	"
	let accidental	=	"
	let octave			= "
	let songWords = " * \
	clicked = true; loop = xx
	return [songTitle,beatsPerMinute,metroBeat,trebleClef,timeSignatureBeats,timeSignatureNote,songTime,nameOfKeySignature,keySignature,songBeat,songNote,accidental,octave,songWords]
}*/

function song8() {return 0} //thouArtMyLife1() {}
function song9() {return 0} //thouArtMyLife1() {}
function song13() {return 0} //thouArtMyLife1() {}
function song14() {return 0} //thouArtMyLife1() {}
function song15() {return 0} //thouArtMyLife1() {}
function song16() {return 0} //thouArtMyLife1() {}
function song17() {return 0} //thouArtMyLife1() {}
function song20() {return 0} //thouArtMyLife1() {}
function song21() {return 0} //thouArtMyLife1() {}
function song23() {return 0} //thouArtMyLife1() {}
function song24() {return 0} //thouArtMyLife1() {}
function song25() {return 0} //thouArtMyLife1() {}
function song26() {return 0} //thouArtMyLife1() {}
function song29() {return 0} //thouArtMyLife1() {}
function song30() {return 0} //thouArtMyLife1() {}
function song31() {return 0} //thouArtMyLife1() {}
function song32() {return 0} //thouArtMyLife1() {}
function song35() {return 0} //thouArtMyLife1() {}
function song36() {return 0} //thouArtMyLife1() {}
function song38() {return 0} //thouArtMyLife1() {}
function song40() {return 0} //thouArtMyLife1() {}
function song41() {return 0} //thouArtMyLife1() {}
function song42() {return 0} //thouArtMyLife1() {}
function song45() {return 0} //thouArtMyLife1() {}
function song46() {return 0} //thouArtMyLife1() {}
function song48() {return 0} //thouArtMyLife1() {}
function song49() {return 0} //thouArtMyLife1() {}
function song50() {return 0} //thouArtMyLife1() {}
function song51() {return 0} //thouArtMyLife1() {}
function song52() {return 0} //thouArtMyLife1() {}
function song53() {return 0} //thouArtMyLife1() {}
function song54() {return 0} //thouArtMyLife1() {}
function song55() {return 0} //thouArtMyLife1() {}
function song56() {return 0} //thouArtMyLife1() {}
function song59() {return 0} //thouArtMyLife1() {}
function song63() {return 0} //thouArtMyLife1() {}
function song65() {return 0} //thouArtMyLife1() {}

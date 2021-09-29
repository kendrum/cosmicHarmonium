readme.md

VERSION 321-07-21
-Slowly adding the graphics back in. Converting display of notes, words, and timing to VW (Viewport Width).
-Using word.offsetWidth / document.documentElement.clientWidth * 100 + 1.56 (word width / viewport width * 100)

VERSION 321-07-22:
Conveted the "displayTheSong()" function from px to vw units

VERSION 321-07-23:
Cleaning up the display. Trying to initiate audioContext without a "Continue" button.
Entering the key signatures that Marie figured out.
Cleaning up the layout. Using fixed and absolute positioning
Need to bring in the trebleclef images asynchronously since they don't have enough time in medly mode
I ended up using svg to make my own keysignatures since I couldn't get keysignature files to load reliably
I adjusted the timing on a few of the chants, putting the beat on the quarter note with a few
A couple of notes were cutting off at the end of "O God Beautiful." I removed the exclamation point which seems to have solved the problem.

VERSION 321-07-01: I added animation back. The timing is still rough and "O God Beautiful" is out of synch for some reason. I will need to add look-ahead and requestAnimationFrame. Otherwise it is not too bad.
I had some trouble getting the spacebar to work right; it kept scrolling the chant list, and other issues.

VERSION 321-07-03:
I added look-ahead (especially for O God Beautiful) and requestFrameAnimation. Maybe it can be better but maybe okay for now.
Unicode entities seem to display differently on the Mac. So I made my own arrows and (temporarily at least) replaced a lot of the sharp and flat entities with "#" and "b".
I reworked the key signatures, using VW (viewport width) since they weren't sizing properly. That took a lot of time.
I built my own flat note using SVG, but to save time I decided to just use "#" and "b" as mentioned above.

VERSION 321-08-06:
Lots of work on a lot of parts, mostly graphics and animation: metronome, etc.
I had to put the main loop in audio.js and call animation from there, in order to add the Volume and Tempo sliders.
Did I mention that I built my own sliders for Volume and Tempo; 
this was necessary in order to use vw (viewport width) units so that the sliders will scale.
I feel that the code is roughly completed now. I will send it out to Dan for testing and see what he comes up with;
I'm guessing that Safari will have trouble with the spacing on sharps and flats. They are quite crowded together in "Dreams Dream is Done."

VERSION 321-08-15:
Dan sent a font-family, I think called TimesMusicalRoman. I couldn't figure out how to play the sharps and flats in that font. I ended up using pound signs (#) and the letter "b" for the sharps and flats. I also adjusted the font sizes so the notes with sharps are not so crowded. Not too bad for now.
I did a lot of work on range sliders for volume and tempo. I got carried away trying to make sliders for other people to use. I finally gave it up astoo much of a diversion. I ended up using an earlier version of the range sliders, but still my own design.
Some other miscellaneous stuff. I had made a utility so the keyboard could be played manually. That caused me some problems with the audio, so I have set that project aside for now. It is not critical to the main goal of the program.
Everything looks pretty good now from this end, so I'm sending it out to Dan for testing on Safari. I think he may find problems with the alignment of the notes on the staff, and hopefully not too much out. This stage 2 is almost ready to go out the door.
I fixed the volume and tempo sliders by using var instead of let. Let was a problem due to a duplicate ID name and Safari has a problem with that.
I fixed Medley and Repeat by using a regular variable for time rather than context.currentTime.
Now I'm tackling the music staff. The notes are out of alignment in Safari, also the treble clef is too small and too high.
- I found some code to bring the music staff photos into the buffer. I was not able to figure it out before but now it seems to be working great. There had been a problem with the music staffs not loading sometimes during medley play -- they didn't have time, I guess.
- So, I seem to be caught up and will send it off to Dan again for testing.
- I guess I should download the Firefox browser to test on that.
Aug 27: Marie wants to have eight notes on the list of key signature notes, so I added one more note to each chant.
- Marie has a different printing of 'Cosmic Chants' and there is a different key for Invocation to the Gurus. My book is a later printing, so will stick with that.
- I fixed the Volume and Tempo sliders to not jump to odd values at certain places along the slides.
- I downloaded Firefox and tested it. It is good except there is a delay between chants in Medley Play.
Aug 28: I fixed the metronome so it changes value with the tempo slider.
- Marie caught a few scale and timing issues.
- I started on the "More Info" page.
- Also made an experimental scale changer.

VERSION 321-08-30:
- Aug 30: Continuing with scale changer.
- Sep 1:	The scale changer works pretty well but doesn't change the display (only the piano keyboard). I think it confuses the casual user.
- I added "O What Lightning Flash" to the chants as per Dan's request. It requires 32nd notes and 3/32 notes. The trills are way too fast to play. I would like to find or develop an alternate version that is easier to play. Bro. Vratananda demonstrated an easy version for me years ago.
Sept 5:
- Several days ago I sent copies to David Todd and also to Mitch. They were not able to run it on their Macs.
- I hooked up to a MIDI keyboard and got everything working but there is too much latency.
- I also tried reading notes of a harmonium playing through a microphone. It is not very accurate, seems slow, and would not likely be consistent on different machines. So, the path forward would be to build an integrated electronic harmonium, hopefully with no latency. Meanwhile, we have the current program that shows people how to play the chants accurately.

VERSION 321-09-05:
- I added some more chants - "In the Valley of Sorrow" and "Divine Mother's Song to the Devotee."
- I am developing tests to run on David Todd's Mac. Now he is able to play a single oscillator note and a single harmonium note, so that is a start.
- I sent the program to Bro. Devananda, Bro. Brahmananda and Br. Jay.
Sept 7: 
- I sent the program to Bro. Anilananda
- I added "Search Him Out in Secret."
- I sent a couple more simple tests to David.
Sept 8: Bro. Anilananda responded favorably.

VERSION 321-09-05-SafariTest
Sept 9:
- A nice call from Br. Jay with lots of info about the new Cosmic Chant book. He gave me the first four chants which they have altered slightly.
- He will but me in touch with a sound mixer guy who can help to make better sounding notes.
Sept 10:
- I added "I Am The Sky" and "Why, O Mind Wanderest Thou?"
- Trying to track a few problems.
Sept 11:
- I added highlighting and scrolling on the list of chants. Not perfect but pretty good.
- I made an alphabetized version of the list with buttons to switch between it and the order of chants in Cosmic Chants.

VERSION harmonium.html in new directory
Sept 15:
- I worked on various things to do with scrolling the list of chants. I finally converted the list to alphabetical and dropped the "orderAsInCC" for now.
-I got a call from Jan Fairchild. He works on sound and referred by Br. Jay. Jan suggested a piano option for the sound.
Sept 18:
- I added a new (better) asynchronous loader for the time signatures. They had been balking during Medley mode.
Sept 27:
- I'm putting the current files on Git
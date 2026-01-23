function HandleMIDI(event)
{
	console.log(Object.keys(event))
	event.send();
	event.trace();
	
	if (event instanceof NoteOn) {
		var fifth = new NoteOn(event);
		fifth.pitch += 7;
		fifth.send();
		fifth.trace();
	}
	else if (event instanceof NoteOff) {
		
		var fifthOff = new NoteOff(event);
		fifthOff.pitch += 7;
		fifthOff.send();
		fifthOff.trace();
	}
}
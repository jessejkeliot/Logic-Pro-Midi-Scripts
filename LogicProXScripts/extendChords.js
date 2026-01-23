/*
Midi Chord Extender:
Requirements:
Takes input of the 8 buttons on the drumpad and follows the spec of section 6.5
// https://help.telepathicinstruments.com/en-US/user-manual-%E2%80%93-complete-1348749

drumpad is like 
[[dim, min, Maj, Sus],
 [6,   m7,  M7,   9 ]
]
*/

var drumpad_mapping = [0, 1, 2, 3, 4, 5, 6, 7];
var active_notes = [];
function handleMIDI(event) {
  if(event instanceof NoteOn){
    
  }
}

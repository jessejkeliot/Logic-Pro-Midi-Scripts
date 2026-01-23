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
const drumpad_channel = 2;
const drumpad_names = ["dim", "min", "Maj", "Sus", "6", "m7", "M7", "9"];
var drumpad_mapping = [];
//drumpad_mapping init
for (let index = 0; index < 8; index++) {
  const element = {
    pitch: i,
    channel: drumpad_channel,
    name: drumpad_names[i],
    active: false
  }
  drumpad_mapping.push();
}
var active_notes = [];
function handleMIDI(event) {
  var notes_to_send = []
  //we get the original note, then do a switch statement on the top buttons
  // dim, min, Maj, Sus. to see initially which notes should be added to the
  // final chord.
  if (event.channel == drumpad_channel) {
    if (event instanceof NoteOn) {
      drumpad_mapping.find((x)=> x.pitch == event.pitch).active = true;
    }
    else if ( event instanceof NoteOff){
      drumpad_mapping.find((x)=> x.pitch == event.pitch).active = false;
    }
  }
  else {
    if(event instanceof NoteOn){
      var originalNote = new NoteOn(event)
      
    }

  }
}

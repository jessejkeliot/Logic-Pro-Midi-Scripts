/*
Midi Chord Extender:
Requirements:
Takes input of the 8 buttons on the drumpad and follows the spec of section 6.5
// https://help.telepathicinstruments.com/en-US/user-manual-%E2%80%93-complete-1348749
//file:///Users/jesseeliot/Desktop/Personal/Piano%20Sheet%20Music/557%20Jazz%20Standards.pdf?page=2

drumpad is like 
[[dim, min, Maj, Sus],
 [6,   m7,  M7,   9 ]
]
*/
const drumpad_channel = 2;
const drumpad_names = ["dim", "min", "Maj", "Sus", "6", "m7", "M7", "9"];
var drumpad_mapping = [[3, 6], [3], [4], [5], [9], [10], [11], [14]];
//drumpad_mapping init
for (let index = 0; index < 8; index++) {
    const element = {
        pitch: i,
        channel: drumpad_channel,
        name: drumpad_names[i],
        active: false,
        noteFunction: (p) => {
            return drumpad_mapping[i].map((x) => p + x);
        },
    };
    drumpad_mapping.push();
}
var active_notes = [];
function handleMIDI(event) {
    var notes_to_send = [];
    //we get the original note, then do a switch statement on the top buttons
    // dim, min, Maj, Sus. to see initially which notes should be added to the
    // final chord.
    if (event.channel == drumpad_channel) {
        if (event instanceof NoteOn) {
            drumpad_mapping.find((x) => x.pitch == event.pitch).active = true;
        } else if (event instanceof NoteOff) {
            drumpad_mapping.find((x) => x.pitch == event.pitch).active = false;
        }
    } else {
        if (event instanceof NoteOn) {
            var originalNote = new NoteOn(event);
            notes_to_send.push(originalNote);
            //add the normal fifth
            var fifth = new NoteOn(originalNote);
            fifth.pitch += 5;
            //filter to only active pads
            active_pads = drumpad_mapping.filter((x) => x.active);
            if ("dim" in active_pads.map((x) => x.name)) {
                //flatten fifth
                fifth.pitch -= 1;
            }
            active_pads.forEach((element) => {
                element.noteFunction(originalNote.pitch).forEach((n) => {
                    //for every number that was returned by that button's function,
                    // we make a new note and set the pitch = number.
                    var addedNote = new NoteOn(originalNote);
                    addedNote.pitch = n;
                    notes_to_send.push(addedNote);
                });
            });
            //push fifth
            notes_to_send.push(fifth);

            notes_to_send.forEach((x)=> x.send())
        }
    }
}

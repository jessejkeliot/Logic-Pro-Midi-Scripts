# Logic Pro MIDI Chord Scripts

A set of Logic Pro X MIDI Scripter scripts for chord harmonisation, built around the chord button layout of the [Orchid ORC-1](https://help.telepathicinstruments.com/en-US/user-manual-%E2%80%93-complete-1348749).

## Requirements

- **Logic Pro X** (or later) with the [MIDI Scripter](https://support.apple.com/guide/logicpro/midi-scripter-overview-lgce728c68/mac) plugin available
- A MIDI controller with at least two channels — one for melody/root note input, one for the drumpad buttons
- Basic familiarity with Logic Pro's MIDI FX chain

## Scripts

### `extendChords.js`

This script listens on two MIDI channels simultaneously. One channel receives the root note from your main keyboard or controller. The other receives button presses from an 8-pad drumpad, which selects the chord voicing to apply.

The pad layout mirrors the chord buttons on the [Orchid ORC-1](https://help.telepathicinstruments.com/en-US/user-manual-%E2%80%93-complete-1348749) (see section 6.5 of the user manual):

```
[ dim | min | Maj | Sus ]
[  6  |  m7 |  M7 |  9  ]
```

Each button maps to a set of intervals added above the root note. When a root note comes in, the script checks which pads are currently held, collects the intervals from each active pad, builds the chord, and sends all the notes out together. A fifth is always included and is flattened automatically if the dim pad is active.

### `addFifth.js`

A simpler utility script that adds a perfect fifth (7 semitones) to every incoming note. Useful as a standalone harmony layer or for testing the MIDI chain before using the full chord extender.

## References

- [Orchid ORC-1 User Manual](https://help.telepathicinstruments.com/en-US/user-manual-%E2%80%93-complete-1348749) — section 6.5 covers the chord button layout this script is modelled on
- [Logic Pro MIDI Scripter documentation](https://support.apple.com/guide/logicpro/midi-scripter-overview-lgce728c68/mac)

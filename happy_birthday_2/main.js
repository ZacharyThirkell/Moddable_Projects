/*
 * 010926
 * This module sets up audio output and can play 'Happy Birthday' in any key.
 * I used a modified version of happy_birthday_1/main.js to create this module
 * and its accompanying manifest.json. The key is set by setting the 'tonic'
 * key in lines 19 and 20 (letter denoting note and number denoting position).
 * Only test with reasonable mid-range keys!
 */

// 010926
// This is modified from happy_birthday_1
// Function added that calculates desired frequencies from a given key

import AudioOut from "pins/audioout";

const SAMPLE_RATE = 22050;
const audio = new AudioOut({ sampleRate: SAMPLE_RATE, bitsPerSample: 16, numChannels: 1, streams: 1 });

// Set key here
const keyLetter = "Fs";
const keyNumber = 5;

trace("Key chosen = " + keyLetter + keyNumber + "\n");

let shift = 12 * (keyNumber - 4);
if (keyLetter === "Bb") {
    shift = shift - 11;
} else if (keyLetter === "B") {
    shift = shift - 10;
} else if (keyLetter === "C") {
    shift = shift - 9;
} else if (keyLetter === "Db") {
    shift = shift - 8;
} else if (keyLetter === "D") {
    shift = shift - 7;
} else if (keyLetter === "Eb") {
    shift = shift - 6;
} else if (keyLetter === "E") {
    shift = shift - 5;
} else if (keyLetter === "F") {
    shift = shift - 4;
} else if (keyLetter === "Fs") {
    shift = shift - 3;
} else if (keyLetter === "G") {
    shift = shift - 2;
} else if (keyLetter === "Gs") {
    shift = shift - 1;
}

const frequencies = new Float64Array([329.6, 370.0, 415.3, 440.0, 493.9, 554.4, 587.3, 659.3]);

for (let i = 0; i < 8; i++) {

    frequencies[i] = frequencies[i] * (2 ** (shift / 12));
}

audio.enqueue(0, AudioOut.Tone, frequencies[0], 0.375 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[0], 0.125 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[1], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[0], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[3], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[2], 1.000 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[0], 0.375 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[0], 0.125 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[1], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[0], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[4], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[3], 1.000 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[0], 0.375 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[0], 0.125 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[7], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[5], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[3], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[2], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[1], 1.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[6], 0.375 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[6], 0.125 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[5], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[3], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[4], 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, frequencies[3], 1.000 * SAMPLE_RATE);
audio.start();

trace("Success\n");
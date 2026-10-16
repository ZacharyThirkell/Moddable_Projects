/*
 * 060926
 * This module sets up audio output for the Moddable six and plays an A4 sine
 * tone for five seconds, similar to the square tone from first_audio_test.js.
 * I used Claude to generate this module and its accompanying manifest.json
 * file so I could learn basic JavaScript and the functionality available.
 */

import AudioOut from "pins/audioout";

const SAMPLE_RATE = 11025;
const audio = new AudioOut({ sampleRate: SAMPLE_RATE, bitsPerSample: 16, numChannels: 1, streams: 1 });

const A4_HZ = 440;
const durationSeconds = 5;
const sampleCount = SAMPLE_RATE * durationSeconds;

const buffer = new SharedArrayBuffer(sampleCount * 2); // 16-bit samples
const view = new Int16Array(buffer);
for (let i = 0; i < sampleCount; i++) {
	view[i] = Math.round(32000 * Math.sin(2 * Math.PI * A4_HZ * i / SAMPLE_RATE));
}

audio.enqueue(0, AudioOut.RawSamples, buffer);
audio.start();

trace("Playing A4 for 5 seconds\n");
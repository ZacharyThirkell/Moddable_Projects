/*
 * 310826
 * This module sets up audio output for the Moddable six and plays an A4 square
 * tone for five seconds. I used Claude to generate this module and its
 * accompanying manifest.json file so I could learn basic JavaScript and the
 * functionality available.
 */

import AudioOut from "pins/audioout";

const SAMPLE_RATE = 11025;
const audio = new AudioOut({ sampleRate: SAMPLE_RATE, bitsPerSample: 16, numChannels: 1, streams: 1 });

const A4_HZ = 440;
const durationSeconds = 5;
const sampleCount = SAMPLE_RATE * durationSeconds;

audio.enqueue(0, AudioOut.Tone, A4_HZ, sampleCount);
audio.start();

trace("Playing A4 for 5 seconds\n");
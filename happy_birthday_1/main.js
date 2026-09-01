/*
 * 010926
 * This module sets up audio output and plays 'Happy Birthday' in F5 major.
 * I used a modified version of first_audio_test/main.js to create this module
 * and its accompanying manifest.json. The sample rate is doubled and the queue
 * size is expanded to 48.
 */

import AudioOut from "pins/audioout";

const SAMPLE_RATE = 22050;
const audio = new AudioOut({ sampleRate: SAMPLE_RATE, bitsPerSample: 16, numChannels: 1, streams: 1 });

const C5_HZ = 523.3;
const D5_HZ = 587.3;
const E5_HZ = 659.3;
const F5_HZ = 698.5;
const G5_HZ = 784.0;
const A5_HZ = 880.0;
const Bb6_HZ = 932.3;
const C6_HZ = 1046.5;

audio.enqueue(0, AudioOut.Tone, C5_HZ, 0.375 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, C5_HZ, 0.125 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, D5_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, C5_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, F5_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, E5_HZ, 1.000 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, C5_HZ, 0.375 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, C5_HZ, 0.125 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, D5_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, C5_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, G5_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, F5_HZ, 1.000 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, C5_HZ, 0.375 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, C5_HZ, 0.125 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, C6_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, A5_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, F5_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, E5_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, D5_HZ, 1.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, Bb6_HZ, 0.375 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, Bb6_HZ, 0.125 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, A5_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, F5_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, G5_HZ, 0.500 * SAMPLE_RATE);
audio.enqueue(0, AudioOut.Tone, F5_HZ, 1.000 * SAMPLE_RATE);
audio.start();

trace("Success\n");
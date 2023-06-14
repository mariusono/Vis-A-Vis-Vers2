//---------------------------------------------------------------------------------------------------------------
// TONE.JS PART
let flag_audio_on_off = false;


class synthLoopSonification{
    constructor(type,notePattern,initVolume){
        this.notePattern = notePattern;
        this.type = type;
        this.initVolume = initVolume;

        this.synth = new Tone.Synth({
            oscillator: {
                type: this.type,
                volume: this.initVolume,
            }
        });

        this.loop = new Tone.Pattern((time, note) => {
            this.synth.triggerAttackRelease(note, "8n", time);
        }, this.notePattern, "upDown");
        this.loop.interval = '8n';
    }

    connectSynthToNode(node){
        this.synth.connect(node);
    }


    setPlaybackRate(rate){
        this.loop.setPlaybackRate(rate);
    }

}



// create an array of sawtooth oscillators with Tone.js
const oscillators = [];
const numOscillators = 5;
const bassFreq = 55;

let volumesArray = [...Array(numOscillators).keys()].map(i => 1 / (i + 1));
volumesArray = volumesArray.map(n => mag2db(n)); // db values to mag

console.log(volumesArray);

baseFreqFact = 1;
// document.getElementById('BaseFreqFact').innerText = parseFloat(baseFreqFact).toFixed(4);

// Create oscillators for Drone sounds - for Walls.. TO DO ! 
for (let i = 0; i < numOscillators; i++) {
    oscillators.push(new Tone.Oscillator({
        frequency: bassFreq * baseFreqFact * i,
        type: "triangle",
        volume: -Infinity,
        // detune: Math.random() * 30 - 15,
    }));
}

// Synth for object
const synth = new Tone.Synth({
    oscillator: {
        type: "sawtooth",
        volume: 0,
    }
});


// create a panner3D
const panner = new Tone.Panner3D();
panner.panningModel = 'HRTF';
// panner.panningModel = 'equalpower';

// initialize panner
panner.setPosition(0, 0, 0);


// // connect oscillators to panner
// oscillators.forEach(o => {
//     o.connect(panner);
// });

synth.connect(panner);

// create a freeverb node
const freeverb = new Tone.Freeverb(0.7,5000);

// connect panner to freeverb¨
panner.connect(freeverb);
// document.getElementById('Dampening').innerText = parseFloat(5000.0).toFixed(4);
document.getElementById('RoomSize').innerText = parseFloat(0.70).toFixed(4);

// create a gain node
const gainNode = new Tone.Gain(0.0);
document.getElementById('Gain').innerText = parseFloat(0.0).toFixed(4);


//connect freeverb to gain
freeverb.connect(gainNode); // synth goes to gain !

// send gain to audio destination (audio out)
gainNode.toDestination();

let gainVal = 0.0;
gainNode.gain.value = gainVal;
// Initialize slider values -- make sure they are the same as in the function
document.getElementById('Gain').innerText = parseFloat(-30.0).toFixed(4);


// Loop for synth 
let bassNoteFreq = 110; // A2
let notePattern = [bassNoteFreq, bassNoteFreq * 5 / 4, bassNoteFreq * 3 / 2, bassNoteFreq * 2 / 1] // major third, perfect fifth, octave

const loop = new Tone.Pattern((time, note) => {
    synth.triggerAttackRelease(note, "8n", time);
}, notePattern, "upDown");
loop.interval = '8n';

// var t = Tone.Time("4n");
// console.log(t);

let valHarmonicity = 1.0;
let valHarmonicityPrev = 1.0;

// function setHarmonicity(v,mapInterval) {

//     if (v < mapInterval[0]) v = mapInterval[0];
//     if (v > mapInterval[1]) v = mapInterval[1];

//     let rangeSize = mapInterval[1] - mapInterval[0];
//     let perc_interval = 5;

//     v = Math.floor(v / (perc_interval * rangeSize / 100)) * (perc_interval * rangeSize / 100);
//     if (v < mapInterval[0]) v = mapInterval[0];
//     if (v > mapInterval[1]) v = mapInterval[1];

//     valHarmonicity = linearMapping(0.5, 4.0, mapInterval[1], mapInterval[0], v);
//     // valPlayback = exponentialMapping(0.0, 4.0, 0, 1000, 3., v);

//     //   console.log(prevTimeBetweenBeats);

//     // Changing time at the next beep of the prev loop so as to not cause out of phase rhythms

//     if (valHarmonicity !== valHarmonicityPrev) {
//         // console.log(valHarmonicity);
//         // console.log(valHarmonicityPrev);
//         // console.log('triggered!');

//         // Change base freqs of oscillators
//         oscillators.forEach((osc, i) => {
//             osc.frequency.rampTo(bassFreq * i * valHarmonicity, 0.2);
//         });
//     }

//     valHarmonicityPrev = valHarmonicity;

// }

function setGain(v) {
    gainVal = linearMapping(-30.0, 10.0, 0, 10000, v); // db linear Scale
    let gainVal_amp = 10 ** (gainVal / 20);
    if (gainVal_amp < 0.0316 + 0.0001) { // equivalent of -30 dB + 0.0001
        gainVal_amp = 0;
    }
    document.getElementById('Gain').innerText = parseFloat(gainVal).toFixed(4);
    // gainNode.gain.value = gainVal;
    gainNode.gain.rampTo(gainVal_amp, 0.1);
}

function setRoomSize(v) {
    let roomSizeVal = linearMapping(0.0, 1.0, 0, 10000, v); // db linear Scale
    freeverb.roomSize.value = roomSizeVal;
    document.getElementById('RoomSize').innerText = parseFloat(roomSizeVal).toFixed(4);
    // console.log(freeverb.roomSize.value );
}

function setDampening(v) {
    let dampSize = linearMapping(0.0, 10000.0, 0, 10000, v); // db linear Scale
    freeverb.dampening = dampSize;  // weird that it doesn't have .value ... 
    document.getElementById('Dampening').innerText = parseFloat(dampSize).toFixed(4);
    // console.log(freeverb.dampening);
}

function updatePannerPos(panner,x_val, y_val, z_val) {
    panner.setPosition(x_val, y_val, z_val);
};

//attach a click listener to a play button
const button_1 = document.getElementById("button_1");
const button_2 = document.getElementById("button_2");

button_1.addEventListener("click", async () => {
    await Tone.start();
    console.log("audio is ready");

    // start the transport (i.e. the "clock" that drives the loop)
    Tone.Transport.start();

    // SET THE GLOBAL BPM VAL !  
    // Tone.Transport.bpm.value = 240; // working with '4n', i.e. quarter notes afterwards.. so equivalent to '8n' eigth notes at 120 bpm
    // Tone.Transport.bpm.value = 480; // working with '4n', i.e. quarter notes afterwards.. so equivalent to '8n' eigth notes at 120 bpm
    // Tone.Transport.bpm.value = 120; 

    // oscillators.forEach((o, index) => { // this can be added in the class.. 
    //     o.start();
    //     o.volume.rampTo(volumesArray[index], 1);
    // });

    synth.volume.rampTo(-Infinity, 0.1);

    flag_audio_on_off = true;
});

button_2.addEventListener("click", async () => {
    console.log("stopping Oscillators!");

    oscillators.forEach(o => {
        o.stop("+1.2");
        o.volume.rampTo(-Infinity, 1);
    });

    // synth.disconnect(panner); // alternative ! 

    loop.stop();
    // synth.volume.rampTo(0, 0.1);

    flag_audio_on_off = false;
});


// Clear console after load.. 
console.clear();
//---------------------------------------------------------------------------------------------------------------

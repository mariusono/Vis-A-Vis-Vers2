
let pathJsons = ['1_corridoioAltair_smoothMap2d/jsons/human_workspace_jsons/15_1681734468.565695808.json',
                 '1_corridoioAltair_smoothMap2d/jsons/human_workspace_jsons/16_1681734468.757297074.json',
                 '1_corridoioAltair_smoothMap2d/jsons/human_workspace_jsons/15_1681734468.565695808.json',
                 '1_corridoioAltair_smoothMap2d/jsons/human_workspace_jsons/16_1681734468.757297074.json',
                 '1_corridoioAltair_smoothMap2d/jsons/human_workspace_jsons/15_1681734468.565695808.json'];


let JsonString_read = [];
noFiles = 5;

for (var i = 0; i<noFiles; i++){

    let txtFile = new XMLHttpRequest();
    console.log(txtFile)
    let allText = "file not found";
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
            allText = txtFile.responseText;
            console.log('done')
            JsonString_read.push(JSON.parse(allText));
        }
    }
    txtFile.open("GET", pathJsons[i], true);
    txtFile.send(null);
}

console.log(JsonString_read);

// var txtFile = new XMLHttpRequest();
// var allText = "file not found";
// txtFile.onreadystatechange = function () {
//     if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
//         allText = txtFile.responseText;
//         JsonString_read_now = JSON.parse(allText);
//     }
// }

// let pathJson_1 = '1_corridoioAltair_smoothMap2d/jsons/human_workspace_jsons/15_1681734468.565695808.json'

// txtFile.open("GET", pathJson_1, true);
// txtFile.send(null);

// console.log(JsonString_read_now)


// const objectRead = await parseJsonFile(file);
// console.log(objectRead);


var last_ts = 0;
var timest_msec_offset = -1;

let doOnce = true;

let maxNo_sonified_objects = 10;

let unique_ids_playing = [];
 
// let unique_id_prev = new Array(maxNo_sonified_objects).fill('init')


function WebSocketTest() {
    //start video
    var videoPlayer_rgb = document.getElementById('videoPlayer_rgb');
    var videoPlayer_map2d = document.getElementById('videoPlayer_map2d');
    videoPlayer_rgb.play();
    videoPlayer_map2d.play();


    const jsonsInDir = fs.readdir(DatasetPath).filter(file => path.extname(file) === '.json');
    jsonsInDir.sort((a,b)=>Number(a.split('_')[0]) - Number(b.split('_')[0]));
    
    for (let file of jsonsInDir) {
        const fileData = fs.readFile(path.join(DatasetPath, file));
        const JsonString_read = JSON.parse(fileData.toString());


        received_msg = JSON.stringify(JsonString_read);


        var JsonString = JSON.parse(received_msg);

        console.log(JsonString);

        let JsonString_keys = Object.keys(JsonString);

        // console.log(JsonString_keys);
        // console.log(JsonString_keys.length);
        // // alert("on message!")
        // console.log(JsonString);
        // console.log(JsonString['0']['distance']);

        let unique_ids_current = new Array(JsonString_keys.length).fill('init');
        for (var iKeys = 0; iKeys < JsonString_keys.length; iKeys++) {
            unique_ids_current[iKeys] = JsonString[JsonString_keys[iKeys]]['unique_id'];
        }

        let diff = unique_ids_playing.filter(x => !unique_ids_current.includes(x));


        console.log('unique_ids_current = ' + unique_ids_current);
        console.log('unique_ids_playing = ' + unique_ids_playing);
        // console.log(sonifiedObjects);

        console.log('diff is ' + diff);

        // Stop sonified objects that are playing but are not in current frame
        for (var iDiff = 0; iDiff < diff.length; iDiff++) {
            let index = unique_ids_playing.indexOf(diff[iDiff]);

            if (sonifiedObjects[unique_ids_playing[index]] instanceof synthLoopSonification) {
                sonifiedObjects[unique_ids_playing[index]].synth.volume.rampTo(-Infinity, 0.1);
                sonifiedObjects[unique_ids_playing[index]].loop.stop();
                sonifiedObjects[unique_ids_playing[index]].panner.disconnect(freeverb);
            }
            if (sonifiedObjects[unique_ids_playing[index]] instanceof droneSonification) {
                sonifiedObjects[unique_ids_playing[index]].oscillators.forEach((o, index) => { // this can be added in the class.. 
                    o.volume.rampTo(-Infinity, 1);
                    o.stop();
                });
                sonifiedObjects[unique_ids_playing[index]].panner.disconnect(freeverb);
            }

            console.log(unique_ids_playing[index]);
            console.log(sonifiedObjects[unique_ids_playing[index]]);
            console.log('Removed..!');

            delete sonifiedObjects[unique_ids_playing[index]]; // maybe I shouldn't do this.. I lose track of indexes.. ? 

            // remove "playing" unique ids that are not in current frame
            unique_ids_playing.splice(index, 1);

        }

        // console.log(sonifiedObjects);

        // loop over objects detected in current json frame
        for (var iKeys = 0; iKeys < JsonString_keys.length; iKeys++) {
            let unique_id = JsonString[JsonString_keys[iKeys]]['unique_id'];
            let type_obj = JsonString[JsonString_keys[iKeys]]['type'];

            if (!unique_ids_playing.includes(unique_id)) {
                if (type_obj.includes('wall')) {
                    let randomNoteIdx_drone = Math.floor(0 + Math.random() * (baseNotePossibilities_drone.length + 1 - 0));
                    let baseNoteFreq = baseNotePossibilities_drone[randomNoteIdx_drone];
                    sonifiedObjects[unique_id] = new droneSonification(7, baseNoteFreq, "triangle", 1); // needs to be initialized with zero db volume for some reason.. 

                    // let baseNoteFreq_drone = Math.floor(30 + Math.random() * (61 - 30));
                    // sonifiedObjects[unique_id] = new droneSonification(10, Math.floor(30 + Math.random() * (61 - 30)), "triangle", 1); // needs to be initialized with zero db volume for some reason.. 

                    sonifiedObjects[unique_id].panner.connect(freeverb);
                    sonifiedObjects[unique_id].oscillators.forEach((o, index) => { // this can be added in the class.. 
                        o.volume.rampTo(sonifiedObjects[unique_id].volumesArray[index], 2);
                    });
                }
                else if (type_obj.includes('obstacle')) {
                    let randomNoteIdx = Math.floor(0 + Math.random() * (baseNotePossibilities.length + 1 - 0));
                    let baseNote = baseNotePossibilities[randomNoteIdx];
                    let notePattern = [baseNote]; // major third, perfect fifth, octave

                    console.log('NOTE IS + ', notePattern);

                    sonifiedObjects[unique_id] = new synthLoopSonification("sawtooth", notePattern, 0); // needs to be initialized with zero db volume for some reason.. 
                    sonifiedObjects[unique_id].panner.connect(freeverb);
                    // sonifiedObjects[unique_id].synth.volume.rampTo(-Infinity, 0.1); // NOT NEEDED I THINK
                }
                unique_ids_playing.push(unique_id);
            }

            let T_map_cam_mat = JSON.parse(JsonString[JsonString_keys[iKeys]]['T_map_cam']);
            let center_3d_sel = JSON.parse(JsonString[JsonString_keys[iKeys]]['center_3d']);
            center_3d_sel.push(1); // in the Python script, I forgot to add the 1 at the end .. 
            let center_3d_new = [0, 0, 0];

            center_3d_new[0] = T_map_cam_mat[0][0] * center_3d_sel[0] + T_map_cam_mat[0][1] * center_3d_sel[1] + T_map_cam_mat[0][2] * center_3d_sel[2] + T_map_cam_mat[0][3] * center_3d_sel[3];
            center_3d_new[1] = T_map_cam_mat[1][0] * center_3d_sel[0] + T_map_cam_mat[1][1] * center_3d_sel[1] + T_map_cam_mat[1][2] * center_3d_sel[2] + T_map_cam_mat[1][3] * center_3d_sel[3];
            center_3d_new[2] = T_map_cam_mat[2][0] * center_3d_sel[0] + T_map_cam_mat[2][1] * center_3d_sel[1] + T_map_cam_mat[2][2] * center_3d_sel[2] + T_map_cam_mat[2][3] * center_3d_sel[3];

            // console.log(center_3d_new);

            let distance_comp = Math.sqrt(center_3d_new[0] * center_3d_new[0] + center_3d_new[1] * center_3d_new[1] + center_3d_new[2] * center_3d_new[2]);

            if (flag_audio_on_off) { // Do sound only if global flag for aduio on/off is on
                if (sonifiedObjects[unique_id] instanceof synthLoopSonification) {
                    if (distance_comp < 250) { // just some very large value here but this can be a failsafe thing about the radius of the human workspace.. 
                        sonifiedObjects[unique_id].loop.start(0);
                        sonifiedObjects[unique_id].synth.volume.rampTo(0, 0.1);
                        sonifiedObjects[unique_id].setPlaybackRate(distance_comp, [0.5, 3])
                        console.log(sonifiedObjects[unique_id].loop.playbackRate);
                    }
                    else {
                        sonifiedObjects[unique_id].synth.volume.rampTo(-Infinity, 0.1);
                        sonifiedObjects[unique_id].loop.stop(0);
                        console.log('SHOULD NEVER BE HERE!')
                    }
                    sonifiedObjects[unique_id].panner.setPosition(center_3d_new[0], center_3d_new[1], center_3d_new[2]);
                }
                else if (sonifiedObjects[unique_id] instanceof droneSonification) {
                    if (distance_comp < 250) { // just some very large value here but this can be a failsafe thing about the radius of the human workspace.. 
                        sonifiedObjects[unique_id].oscillators.forEach((o, index) => { // this can be added in the class.. 
                            o.start();
                            o.volume.rampTo(sonifiedObjects[unique_id].volumesArray[index], 2);
                        });
                        sonifiedObjects[unique_id].setHarmonicity(distance_comp, [0.5, 3.0]);
                    }
                    else {
                        sonifiedObjects[unique_id].oscillators.forEach((o, index) => { // this can be added in the class.. 
                            o.stop();
                            o.volume.rampTo(-Infinity, 1);
                        });
                    }
                    sonifiedObjects[unique_id].panner.setPosition(center_3d_new[0], center_3d_new[1], center_3d_new[2]);
                }
            }

        }

        //get timing info
        const ts = parseFloat(JsonString[JsonString_keys[0]].ros_timestamp);
        var ts_msec = parseInt(ts * 1000); //time stamp is given in seconds


        const date = new Date(ts_msec);
        const datevalues = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ];

        if (timest_msec_offset == -1) {
            timest_msec_offset = ts_msec;
        }

        var elapsed_msec = ts_msec - timest_msec_offset;

        console.log(elapsed_msec); // TOTAL AMOUNT OF TIME THAT PASSED

        if(event_cnt>0){ // only start waiting after receiving the second file..
            sleep(Math.round(elapsed_msec));
        }

        event_cnt+=1;

        // console.log(datevalues);

        // if (elapsed_msec<0){
        //     console.log('ELAPSED T TOO SMALL!')
        // } 
    }
}

// Hardcode all the paths.. can't get the filesystem thing to work.

let pathJsons = ['0_1681734465.89374178.json',
'1_1681734465.926043821.json',
'2_1681734466.42261069.json',
'3_1681734466.637876678.json',
'4_1681734466.748666206.json',
'5_1681734466.859547784.json',
'6_1681734466.970593699.json',
'7_1681734467.91456304.json',
'8_1681734467.212688508.json',
'9_1681734467.313399860.json',
'10_1681734467.525045801.json',
'11_1681734467.746867554.json',
'12_1681734467.938764319.json',
'13_1681734468.150316393.json',
'14_1681734468.351881853.json',
'15_1681734468.565695808.json',
'16_1681734468.757297074.json',
'17_1681734468.959201195.json',
'18_1681734469.170975294.json',
'19_1681734469.392727975.json',
'20_1681734469.665222484.json',
'21_1681734469.836580587.json',
'22_1681734469.997834673.json',
'23_1681734470.966084842.json',
'24_1681734471.147865578.json',
'25_1681734471.320542635.json',
'26_1681734471.501875268.json',
'27_1681734471.683403946.json',
'28_1681734471.865280644.json',
'29_1681734472.117283634.json',
'30_1681734472.308651490.json',
'31_1681734472.491331503.json',
'32_1681734472.743553306.json',
'33_1681734473.55987145.json',
'34_1681734473.776501141.json',
'35_1681734474.48731999.json',
'36_1681734474.515520159.json',
'37_1681734474.738137754.json',
'38_1681734474.959887571.json',
'39_1681734475.192220097.json',
'40_1681734475.424299239.json',
'41_1681734475.656465962.json',
'42_1681734475.888916171.json',
'43_1681734476.231804116.json',
'44_1681734476.473802544.json',
'45_1681734476.778141283.json',
'46_1681734477.70553425.json',
'47_1681734477.837020858.json',
'48_1681734478.68760431.json',
'49_1681734478.805271236.json',
'50_1681734479.67534828.json',
'51_1681734480.15157217.json',
'52_1681734480.287183650.json',
'53_1681734480.569439465.json',
'54_1681734480.892476476.json',
'55_1681734481.185736003.json',
'56_1681734481.467965138.json',
'57_1681734481.761211396.json',
'58_1681734482.43504226.json',
'59_1681734482.628193018.json',
'60_1681734482.910435284.json',
'61_1681734483.182425678.json',
'62_1681734483.862760650.json',
'63_1681734484.175746444.json',
'64_1681734484.457907903.json',
'65_1681734484.710142208.json',
'66_1681734485.43327585.json',
'67_1681734485.698584417.json',
'68_1681734486.61292427.json',
'69_1681734486.666386344.json',
'70_1681734486.989174930.json',
'71_1681734487.332265206.json',
'72_1681734487.614576055.json',
'73_1681734487.910328430.json',
'74_1681734488.235976180.json',
'75_1681734488.558725096.json',
'76_1681734488.861331839.json',
'77_1681734489.175267266.json',
'78_1681734489.467631357.json',
'79_1681734489.790433073.json',
'80_1681734490.194833290.json',
'81_1681734490.477028901.json',
'82_1681734490.810255764.json',
'83_1681734491.144019288.json',
'84_1681734491.467048128.json',
'85_1681734491.779540633.json',
'86_1681734492.82388678.json',
'87_1681734493.60444641.json',
'88_1681734493.672971144.json',
'89_1681734493.985349738.json',
'90_1681734494.308024622.json',
'91_1681734494.600201399.json',
'92_1681734494.923032518.json',
'93_1681734495.265762342.json',
'94_1681734495.569007226.json',
'95_1681734495.861796581.json',
'96_1681734496.174337975.json',
'97_1681734496.506910564.json',
'98_1681734496.840269008.json',
'99_1681734497.132642388.json',
'100_1681734497.434833366.json',
'101_1681734497.777405279.json',
'102_1681734498.99814417.json',
'103_1681734498.412441297.json',
'104_1681734498.766775819.json',
'105_1681734499.39603262.json',
'106_1681734499.563986083.json',
'107_1681734499.826204836.json',
'108_1681734500.88533589.json',
'109_1681734501.219057458.json',
'110_1681734501.501271089.json',
'111_1681734501.803850175.json',
'112_1681734502.106753673.json',
'113_1681734502.409411470.json',
'114_1681734502.693265953.json',
'115_1681734502.965939396.json',
'116_1681734503.248938113.json',
'117_1681734503.531506537.json',
'118_1681734503.834173065.json',
'119_1681734504.147118002.json',
'120_1681734504.429624966.json',
'121_1681734504.701755113.json',
'122_1681734505.85600116.json',
'123_1681734505.903301061.json',
'124_1681734506.175390420.json',
'125_1681734506.428206434.json',
'126_1681734506.710313905.json',
'127_1681734506.982440142.json',
'128_1681734507.285392110.json',
'129_1681734507.618040547.json',
'130_1681734507.885989782.json',
'131_1681734508.148259659.json',
'132_1681734508.420681673.json',
'133_1681734508.683736218.json',
'134_1681734508.946194108.json',
'135_1681734509.208264518.json',
'136_1681734509.481713060.json',
'137_1681734509.753818972.json',
'138_1681734510.16298792.json',
'139_1681734510.429840752.json',
'140_1681734510.692728305.json',
'141_1681734510.955059014.json',
'142_1681734511.227780648.json',
'143_1681734511.479923460.json',
'144_1681734511.752029233.json',
'145_1681734512.4116522.json',
'146_1681734512.266389262.json',
'147_1681734512.568601472.json',
'148_1681734512.840868229.json',
'149_1681734513.112946484.json',
'150_1681734513.415654986.json',
'151_1681734513.677901815.json',
'152_1681734513.949961911.json',
'153_1681734514.243263343.json',
'154_1681734514.516092113.json',
'155_1681734515.4715888.json',
'156_1681734515.296818913.json',
'157_1681734515.619587384.json',
'158_1681734515.922071276.json',
'159_1681734516.256165359.json',
'160_1681734516.679568846.json',
'161_1681734517.12617892.json',
'162_1681734517.345718063.json',
'163_1681734517.698463555.json',
'164_1681734518.52053009.json',
'165_1681734518.842556828.json',
'166_1681734519.716594033.json',
'167_1681734520.98351128.json',
'168_1681734520.462168987.json',
'169_1681734520.875759347.json',
'170_1681734521.289137389.json',
'171_1681734521.713622089.json',
'172_1681734522.132416886.json',
'173_1681734522.517748461.json',
'174_1681734522.895562594.json',
'175_1681734523.316124866.json',
'176_1681734523.687707894.json',
'177_1681734524.78218135.json',
'178_1681734524.855304106.json',
'179_1681734525.152573643.json',
'180_1681734525.585213019.json',
'181_1681734525.914822799.json',
'182_1681734526.278898232.json',
'183_1681734526.612716860.json',
'184_1681734526.952557419.json',
'185_1681734527.287559788.json',
'186_1681734527.649201111.json',
'187_1681734528.50561624.json',
'188_1681734528.761333171.json',
'189_1681734529.91918774.json',
'190_1681734529.827413668.json',
'191_1681734530.201662470.json',
'192_1681734530.545600131.json',
'193_1681734530.919003365.json',
'194_1681734531.311239664.json',
'195_1681734531.666968429.json',
'196_1681734532.168856122.json',
'197_1681734532.511790303.json',
'198_1681734532.834969930.json',
'199_1681734533.166258556.json',
'200_1681734533.510044242.json',
'201_1681734533.843261955.json',
'202_1681734534.246339028.json',
'203_1681734534.584196442.json',
'204_1681734534.933301803.json',
'205_1681734535.254545149.json',
'206_1681734535.597499723.json',
'207_1681734535.929170241.json',
'208_1681734536.251685049.json',
'209_1681734536.616353086.json',
'210_1681734536.953851934.json',
'211_1681734537.269207655.json',
'212_1681734537.569222097.json']                 


for (var i = 0; i<pathJsons.length;i++)
{
    pathJsons[i] = '1_corridoioAltair_smoothMap2d/jsons/human_workspace_jsons/' + pathJsons[i]
}


// var JsonString_read = new Array(pathJsons.length).fill(0);


let JsonString_read = [];
for (var i = 0; i<pathJsons.length; i++){

    console.log(i);

    let txtFile = new XMLHttpRequest();
    // console.log(txtFile);
    let allText = "file not found";
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
            allText = txtFile.responseText;
            // console.log('done')          
            JsonString_read.push(JSON.parse(allText));
            console.log(i);
            // console.log(JsonString_read[i]);
        }
    }
    txtFile.open("GET", pathJsons[i], false); // FALSE HERE IS RLY IMPORTANT ! WAITS FOR EACH XMLHTTPREQUEST TO FINISH BEFORE MOVING ON TO THE NEXT
    txtFile.send(null);
}

console.log(JsonString_read);



// WEBSOCKET PART
var last_ts = 0;
var event_cnt = 0;

var timest_msec_offset = -1;

let doOnce = true;

let maxNo_sonified_objects = 10;

let unique_ids_playing = [];

// let unique_id_prev = new Array(maxNo_sonified_objects).fill('init')

async function WebSocketTest() {
    //start video
    var videoPlayer_rgb = document.getElementById('videoPlayer_rgb');
    var videoPlayer_map2d = document.getElementById('videoPlayer_map2d');
    videoPlayer_rgb.play();
    videoPlayer_map2d.play();

    for (var iJson = 0; iJson<JsonString_read.length; iJson++)
    {
        let JsonString = JsonString_read[iJson];

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
        for (var iDiff = 0; iDiff < diff.length; iDiff++){
            let index = unique_ids_playing.indexOf(diff[iDiff]);

            if (sonifiedObjects[unique_ids_playing[index]] instanceof synthLoopSonification){
                sonifiedObjects[unique_ids_playing[index]].synth.volume.rampTo(-Infinity, 0.1);
                sonifiedObjects[unique_ids_playing[index]].loop.stop();
                sonifiedObjects[unique_ids_playing[index]].panner.disconnect(freeverb);
            }
            if (sonifiedObjects[unique_ids_playing[index]] instanceof droneSonification){
                sonifiedObjects[unique_ids_playing[index]].oscillators.forEach((o, index) => { // this can be added in the class.. 
                    o.volume.rampTo(-Infinity, 1);
                    o.stop();
                });
                sonifiedObjects[unique_ids_playing[index]].panner.disconnect(freeverb);
            }              

            console.log(unique_ids_playing[index]);
            console.log(sonifiedObjects[unique_ids_playing[index]]);
            console.log('Removed..!');

            // delete sonifiedObjects[unique_ids_playing[index]]; // maybe I shouldn't do this.. I lose track of indexes.. ? 

            // remove "playing" unique ids that are not in current frame
            unique_ids_playing.splice(index,1);

        }

        // console.log(sonifiedObjects);
        
        // loop over objects detected in current json frame
        for (var iKeys = 0; iKeys < JsonString_keys.length; iKeys++) {
            let unique_id = JsonString[JsonString_keys[iKeys]]['unique_id'];
            let type_obj = JsonString[JsonString_keys[iKeys]]['type'];

            if (!unique_ids_playing.includes(unique_id)) {
                if (type_obj.includes('wall')){
                    if (!sonifiedObjects.hasOwnProperty(unique_id)){ // only create a new sonification if it hasn't already been created
                        let randomNoteIdx_drone = Math.floor(0 + Math.random() * (baseNotePossibilities_drone.length - 0));
                        let baseNoteFreq = baseNotePossibilities_drone[randomNoteIdx_drone];                        
                        sonifiedObjects[unique_id] = new droneSonification(7, baseNoteFreq, "triangle", 1); // needs to be initialized with zero db volume for some reason.. 
                    }
                    // let baseNoteFreq_drone = Math.floor(30 + Math.random() * (61 - 30));
                    // sonifiedObjects[unique_id] = new droneSonification(10, Math.floor(30 + Math.random() * (61 - 30)), "triangle", 1); // needs to be initialized with zero db volume for some reason.. 

                    sonifiedObjects[unique_id].panner.connect(freeverb);
                    // sonifiedObjects[unique_id].oscillators.forEach((o, index) => { // this can be added in the class.. 
                    //     o.volume.rampTo(sonifiedObjects[unique_id].volumesArray[index], 2);
                    // });                    
                }
                else if (type_obj.includes('obstacle')){

                    if (!sonifiedObjects.hasOwnProperty(unique_id)){ // only create a new sonification if it hasn't already been created
                        let randomNoteIdx = Math.floor(0 + Math.random() * (baseNotePossibilities.length - 0));
                        console.log('RANDOM NOTE INDEX IS + ',randomNoteIdx);
                        let baseNote = baseNotePossibilities[randomNoteIdx];
                        console.log(baseNotePossibilities);
                        let notePattern = [baseNote]; // major third, perfect fifth, octave
    
                        console.log('NOTE IS + ',notePattern);

                        sonifiedObjects[unique_id] = new synthLoopSonification("sawtooth",notePattern,0); // needs to be initialized with zero db volume for some reason.. 
                    }

                    sonifiedObjects[unique_id].panner.connect(freeverb);
                    // sonifiedObjects[unique_id].synth.volume.rampTo(-Infinity, 0.1); // NOT NEEDED I THINK
                }
                unique_ids_playing.push(unique_id);
            }
            
            let T_map_cam_mat = JSON.parse(JsonString[JsonString_keys[iKeys]]['T_map_cam']);
            let center_3d_sel = [0,0,0];
            if (sonifiedObjects[unique_id] instanceof synthLoopSonification)
            {
                center_3d_sel = JSON.parse(JsonString[JsonString_keys[iKeys]]['center_3d']);
            }
            else if (sonifiedObjects[unique_id] instanceof droneSonification)
            {
                center_3d_sel = JSON.parse(JsonString[JsonString_keys[iKeys]]['nearest_3d']);
            }

            center_3d_sel.push(1); // in the Python script, I forgot to add the 1 at the end .. 
            let center_3d_new = [0, 0, 0];

            center_3d_new[0] = T_map_cam_mat[0][0] * center_3d_sel[0] + T_map_cam_mat[0][1] * center_3d_sel[1] + T_map_cam_mat[0][2] * center_3d_sel[2] + T_map_cam_mat[0][3] * center_3d_sel[3];
            center_3d_new[1] = T_map_cam_mat[1][0] * center_3d_sel[0] + T_map_cam_mat[1][1] * center_3d_sel[1] + T_map_cam_mat[1][2] * center_3d_sel[2] + T_map_cam_mat[1][3] * center_3d_sel[3];
            center_3d_new[2] = T_map_cam_mat[2][0] * center_3d_sel[0] + T_map_cam_mat[2][1] * center_3d_sel[1] + T_map_cam_mat[2][2] * center_3d_sel[2] + T_map_cam_mat[2][3] * center_3d_sel[3];

            // console.log(center_3d_new);

            let distance_comp = Math.sqrt(center_3d_new[0] * center_3d_new[0] + center_3d_new[1] * center_3d_new[1] + center_3d_new[2] * center_3d_new[2]);

            console.log(distance_comp);

            if (flag_audio_on_off) { // Do sound only if global flag for aduio on/off is on
                if (sonifiedObjects[unique_id] instanceof synthLoopSonification)
                {
                    if (distance_comp < 4) { // just some very large value here but this can be a failsafe thing about the radius of the human workspace.. 
                        sonifiedObjects[unique_id].loop.start(0);
                        sonifiedObjects[unique_id].synth.volume.rampTo(0, 0.1);
                        sonifiedObjects[unique_id].setPlaybackRate(distance_comp, [0.5, 4])
                        console.log(sonifiedObjects[unique_id].loop.playbackRate);
                    }
                    else {
                        sonifiedObjects[unique_id].synth.volume.rampTo(-Infinity, 0.1);
                        sonifiedObjects[unique_id].loop.stop(0);
                        console.log('SHOULD NEVER BE HERE!')
                    }
                    sonifiedObjects[unique_id].panner.setPosition(center_3d_new[0], center_3d_new[1], center_3d_new[2]);
                }
                else if (sonifiedObjects[unique_id] instanceof droneSonification)
                {
                    if (distance_comp < 1.5) { // just some very large value here but this can be a failsafe thing about the radius of the human workspace.. 
                        sonifiedObjects[unique_id].oscillators.forEach((o, index) => { // this can be added in the class.. 
                            o.start();
                            o.volume.rampTo(sonifiedObjects[unique_id].volumesArray[index], 0.5);
                        });
                        sonifiedObjects[unique_id].setHarmonicity(distance_comp, [0.5, 1.5]);
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
        let ts = parseFloat(JsonString[JsonString_keys[0]].ros_timestamp);
        let ts_msec = parseInt(ts * 1000); //time stamp is given in seconds


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

        // if (timest_msec_offset == -1) {
        //     timest_msec_offset = ts_msec;
        // }

        let elapsed_msec = (ts_msec-last_ts) //(ts-last_ts)*0.000001;
        
        last_ts = ts_msec;

        console.log(ts_msec)
        console.log(elapsed_msec)
        console.log(event_cnt);

        if(event_cnt>0){ // only start waiting after receiving the second file..
            await sleep(Math.round(elapsed_msec));
        }

        console.log('I AM HEREEEEEEE');
        console.log(elapsed_msec); // time passed between sleeps.. 

        event_cnt = event_cnt + 1;
        console.log(event_cnt);

        // if (elapsed_msec<0){
        //     console.log('ELAPSED T TOO SMALL!')
        // } 

    }
}

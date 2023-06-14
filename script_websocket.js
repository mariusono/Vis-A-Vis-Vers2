// either run via websocket with nodeJS or with ROS 
let doNodeJS = true;
let doROS = !doNodeJS;

// document objects
const boxVideos = document.getElementById('videos');
const video_rgb = document.createElement('video');
const video_map2d = document.createElement('video');

const span_human = document.createElement('span');
const span_walls = document.createElement('span');

const img_rgb = document.createElement('img');
const img_map2d = document.createElement('img');
const img_walls = document.createElement('img');


if (doNodeJS) {
    video_rgb.src = './1_corridoioAltair_smoothMap2d/videos/rgb.mp4#t=7';
    // video_rgb.src = './bagchair2_outputs/rgb.mp4'
    video_rgb.id = 'videoPlayer_rgb';
    video_rgb.controls = true;
    video_rgb.muted = false;
    video_rgb.height = 400; // in px
    // video_rgb.width = 640; // in px

    video_map2d.src = './1_corridoioAltair_smoothMap2d/videos/map2d.mp4#t=7';
    // video_map2d.src = './bagchair2_outputs/map2d.mp4'
    video_map2d.id = 'videoPlayer_map2d';
    video_map2d.controls = true;
    video_map2d.muted = false;
    video_map2d.height = 400; // in px
    // video_map2d.width = 640; // in px

    boxVideos.appendChild(video_rgb);
    boxVideos.appendChild(video_map2d);
}
else {

    img_rgb.id = 'img_rgb';
    img_rgb.style = 'height:400px; object-fit:contain';
    img_rgb.src = "";

    img_map2d.id = 'img_map2d';
    img_map2d.style = 'height:400px; object-fit:contain';
    img_map2d.src = "";

    img_walls.id = 'img_walls';
    img_walls.style = 'height:400px; object-fit:contain';
    img_walls.src = "";

    boxVideos.appendChild(img_rgb);
    boxVideos.appendChild(img_rgb);
    boxVideos.appendChild(img_walls);
}


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
    pathJsons[i] = './1_corridoioAltair_smoothMap2d/jsons/human_workspace_jsons/' + pathJsons[i]
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



// Prep doSonification 
var last_ts = 0;
var event_cnt = 0;

var timest_msec_offset = -1;
let unique_ids_playing = [];

function doSonification(received_msg) {

    // var JsonString = JSON.parse(received_msg);
    var JsonString = received_msg;
    // let JsonString = JsonString_read[iJson];


    let JsonString_keys = Object.keys(JsonString);

    let unique_ids_current = new Array(JsonString_keys.length).fill('init');
    for (var iKeys = 0; iKeys < JsonString_keys.length; iKeys++) {
        unique_ids_current[iKeys] = JsonString[JsonString_keys[iKeys]]['unique_id'];
    }

    let diff = unique_ids_playing.filter(x => !unique_ids_current.includes(x));


    // console.log('unique_ids_current = ' + unique_ids_current);
    // console.log('unique_ids_playing = ' + unique_ids_playing);
    // // console.log(sonifiedObjects);

    // console.log('diff is ' + diff);

    // Stop sonified objects that are playing but are not in current frame
    for (var iDiff = 0; iDiff < diff.length; iDiff++) {
        let index = unique_ids_playing.indexOf(diff[iDiff]);

        // Just set the playing flag to false
        sonifiedObjects[unique_ids_playing[index]].playingFlag = false;

        // remove "playing" unique ids that are not in current frame
        unique_ids_playing.splice(index, 1);
    }

    // loop over objects detected in current json frame
    for (var iKeys = 0; iKeys < JsonString_keys.length; iKeys++) {
        let unique_id = JsonString[JsonString_keys[iKeys]]['unique_id'];
        let type_obj = JsonString[JsonString_keys[iKeys]]['type'];

        if (!unique_ids_playing.includes(unique_id)) { // if current unique Id is not in already playing unique ids 

            unique_ids_playing.push(unique_id); // adding it..

            if (type_obj.includes('wall')) {
                let randomNoteIdx_drone = Math.floor(0 + Math.random() * (baseNotePossibilities_drone.length - 0));
                let baseNoteFreq = baseNotePossibilities_drone[randomNoteIdx_drone];

                if (!sonifiedObjects.hasOwnProperty(unique_id)) { // only create a new sonification if it hasn't already been created
                    sonifiedObjects[unique_id] = new droneSonification(7, baseNoteFreq, "triangle", 1); // needs to be initialized with zero db volume for some reason.. 
                }
                sonifiedObjects[unique_id].panner.connect(freeverb);
            }
            else if (type_obj.includes('obstacle')) {
                let randomNoteIdx = Math.floor(0 + Math.random() * (baseNotePossibilities.length - 0));
                let baseNote = baseNotePossibilities[randomNoteIdx];
                let notePattern = [baseNote]; 

                // console.log('NOTE IS + ', notePattern);

                if (!sonifiedObjects.hasOwnProperty(unique_id)) { // only create a new sonification if it hasn't already been created
                    sonifiedObjects[unique_id] = new synthLoopSonification("sawtooth", notePattern, 0); // needs to be initialized with zero db volume for some reason.. 
                }
                sonifiedObjects[unique_id].panner.connect(freeverb);
            }
        }

        // setting the playing flag to true for this unique id.. 
        sonifiedObjects[unique_id].playingFlag = true;

        // UPDATE PANNERS 
        let T_map_cam_mat = JSON.parse(JsonString[JsonString_keys[iKeys]]['T_map_cam']);
        let center_3d_sel = [0, 0, 0];
        if (sonifiedObjects[unique_id] instanceof synthLoopSonification) {
            // center_3d_sel = JSON.parse(JsonString[JsonString_keys[iKeys]]['center_3d']);
            center_3d_sel = JSON.parse(JsonString[JsonString_keys[iKeys]]['nearest_3d']);
        }
        else if (sonifiedObjects[unique_id] instanceof droneSonification) {
            center_3d_sel = JSON.parse(JsonString[JsonString_keys[iKeys]]['nearest_3d']);
        }

        center_3d_sel.push(1); // in the Python script, I forgot to add the 1 at the end .. 
        let center_3d_new = [0, 0, 0];

        center_3d_new[0] = T_map_cam_mat[0][0] * center_3d_sel[0] + T_map_cam_mat[0][1] * center_3d_sel[1] + T_map_cam_mat[0][2] * center_3d_sel[2] + T_map_cam_mat[0][3] * center_3d_sel[3];
        center_3d_new[1] = T_map_cam_mat[1][0] * center_3d_sel[0] + T_map_cam_mat[1][1] * center_3d_sel[1] + T_map_cam_mat[1][2] * center_3d_sel[2] + T_map_cam_mat[1][3] * center_3d_sel[3];
        center_3d_new[2] = T_map_cam_mat[2][0] * center_3d_sel[0] + T_map_cam_mat[2][1] * center_3d_sel[1] + T_map_cam_mat[2][2] * center_3d_sel[2] + T_map_cam_mat[2][3] * center_3d_sel[3];

        let distance_comp = Math.sqrt(center_3d_new[0] * center_3d_new[0] + center_3d_new[1] * center_3d_new[1] + center_3d_new[2] * center_3d_new[2]);
        sonifiedObjects[unique_id].distance = distance_comp;
        
        if (sonifiedObjects[unique_id] instanceof synthLoopSonification) {
            console.log(distance_comp);
        }

        // do tha actual update
        sonifiedObjects[unique_id].panner.setPosition(center_3d_new[0], center_3d_new[1], center_3d_new[2]);

        if (sonifiedObjects[unique_id] instanceof synthLoopSonification) {
            // update playback rate!
            sonifiedObjects[unique_id].setPlaybackRate(distance_comp, [1.2, 1.6]);

            if (distance_comp > 4) { // just some very large value here but this can be a failsafe thing about the radius of the human workspace.. 
            // if (distance_comp > 400) { // just some very large value here but this can be a failsafe thing about the radius of the human workspace.. 
                    sonifiedObjects[unique_id].playingFlag = false; // this is not reupdating.. 
            }
            // IDEA ! ADD DISTANCE TO OBJECT ALSO AS A VARIABLE INSIDE THE CLASSES !!

        }
        else if (sonifiedObjects[unique_id] instanceof droneSonification) {
            // update harmonicity.. 
            sonifiedObjects[unique_id].setHarmonicity(distance_comp, [0.5, 1.5]);

            if (distance_comp > 1.5) { // just some very large value here but this can be a failsafe thing about the radius of the human workspace.. 
            // if (distance_comp > 400) { // just some very large value here but this can be a failsafe thing about the radius of the human workspace.. 
                    sonifiedObjects[unique_id].playingFlag = false;
            }
        }

        // console.log(sonifiedObjects);


        // // // I don't really care about this in the sonification.. 
        // //get timing info
        // const ts = parseFloat(JsonString[JsonString_keys[0]].ros_timestamp);
        // var ts_msec = parseInt(ts * 1000); //time stamp is given in seconds

        // if (timest_msec_offset == -1) {
        //     timest_msec_offset = ts_msec;
        // }

        // var elapsed_msec = ts_msec - timest_msec_offset;

        // console.log(elapsed_msec); // TOTAL AMOUNT OF TIME THAT PASSED
    }

    // I prepared my sonified objects.. Need to add the loop here




}


async function WebSocketTest() {

    if (doNodeJS) {
        video_rgb.play();
        video_map2d.play();
        console.log('HERE')
        for (var iJson = 0; iJson<JsonString_read.length; iJson++)
        {

            let received_msg = JsonString_read[iJson];
            console.log(received_msg);
            doSonification(received_msg);

            // var JsonString = JSON.parse(received_msg);
            var JsonString = received_msg;
            let JsonString_keys = Object.keys(JsonString);

            span_human_html = "<h2><i>Human workspace info:</i></h2>"; // init html string
            for (var iKeys = 0; iKeys < JsonString_keys.length; iKeys++) {
                span_human_html+="<b>unique_id: </b>"+JsonString[JsonString_keys[iKeys]]['unique_id']
                                //+"</br> <b>Timestamp: </b>"+JsonString[JsonString_keys[iKeys]]['timestamp']
                                +"</br> <b>center_3d: </b>"+JsonString[JsonString_keys[iKeys]]['center_3d']
                                +"</br> <b>type: </b>"+JsonString[JsonString_keys[iKeys]]['type']+"</br></br>";
            }       
            document.getElementById("span_human").innerHTML = span_human_html; // print on html


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

        }

    }
    else if (doROS) {
        var ros = new ROSLIB.Ros({ url: 'ws://localhost:9090' });

        ros.on('connection', function () {
            console.log('Connected to websocket server.');
        });

        ros.on('error', function (error) {
            console.log('Error connecting to websocket server: ', error);
        });

        ros.on('close', function () {
            console.log('Connection to websocket server closed.');
        });

        // Subscribing to json ROS Topics
        var json_human_workspace_sub = new ROSLIB.Topic({ ros: ros, name: '/out/json_human_workspace', messageType: 'std_msgs/String' });

        json_human_workspace_sub.subscribe(
            function (message) {
                console.log('Received humanws message:' + message.data);
                json_human_workspace_sub.subscribe(function (message) { 
                    doSonification(message.data); 

                    let JsonString = JSON.parse(message.data);
                    let JsonString_keys = Object.keys(JsonString);
                    span_human_html = "<h2><i>Human workspace info:</i></h2>"; // init html string
                    for (var iKeys = 0; iKeys < JsonString_keys.length; iKeys++) {
                        span_human_html+="<b>unique_id: </b>"+JsonString[JsonString_keys[iKeys]]['unique_id']
                                        //+"</br> <b>Timestamp: </b>"+JsonString[JsonString_keys[iKeys]]['timestamp']
                                        +"</br> <b>center_3d: </b>"+JsonString[JsonString_keys[iKeys]]['center_3d']
                                        +"</br> <b>type: </b>"+JsonString[JsonString_keys[iKeys]]['type']+"</br></br>";
                    }       
                    document.getElementById("span_human").innerHTML = span_human_html; // print on html
            
                })
            }
        );

        var json_walls_equations_sub = new ROSLIB.Topic({ ros: ros, name: '/out/json_walls_equations', messageType: 'std_msgs/String' });
        json_walls_equations_sub.subscribe(function (message) {
            console.log(message.data)
            var JsonString = JSON.parse(message.data);
            let JsonString_keys = Object.keys(JsonString);

            span_walls_html = "<h2><i>Wall detection info:</i></h2>"; // init html string
            for (var iKeys = 0; iKeys < JsonString_keys.length; iKeys++) {
                span_walls_html += "<b>wall_type: </b>" + JsonString[JsonString_keys[iKeys]]['wall_type']
                    + "</br> <b>equation: </b>" + JsonString[JsonString_keys[iKeys]]['a'] + "x + " + JsonString[JsonString_keys[iKeys]]['b'] + "y + " + JsonString[JsonString_keys[iKeys]]['c'] + "z + " + JsonString[JsonString_keys[iKeys]]['d'] + " = 0"
                    + "</br> <b>shortest_distance: </b>" + JsonString[JsonString_keys[iKeys]]['shortest_distance']
                    + "</br> <b>num_points: </b>" + JsonString[JsonString_keys[iKeys]]['num_points']
                    + "</br> <b>plane_center_x: </b>" + JsonString[JsonString_keys[iKeys]]['plane_center_x']
                    + "</br> <b>plane_center_y: </b>" + JsonString[JsonString_keys[iKeys]]['plane_center_y']
                    + "</br> <b>plane_center_z: </b>" + JsonString[JsonString_keys[iKeys]]['plane_center_z'] + "</br></br>";
            }
            document.getElementById("span_walls").innerHTML = span_walls_html; // print on html
        });

        // Reference: https://roboticsknowledgebase.com/wiki/tools/roslibjs/
        // rosrun image_transport republish raw in:=camera/rgb/image_rect_color out:=camera/rgb
        var img_rgb_sub = new ROSLIB.Topic({ ros: ros, name: '/camera/rgb/compressed', messageType: 'sensor_msgs/CompressedImage' });
        img_rgb_sub.subscribe(function (message) {
            document.getElementById('img_rgb').src = "data:image/jpg;base64," + message.data;
        });

        // rosrun image_transport republish raw in:=out/map2d_img1 out:=out/map2d
        var img_map2d_sub = new ROSLIB.Topic({ ros: ros, name: '/out/map2d/compressed', messageType: 'sensor_msgs/CompressedImage' });
        img_map2d_sub.subscribe(function (message) {
            document.getElementById('img_map2d').src = "data:image/jpg;base64," + message.data;
        });

        // rosrun image_transport republish raw in:=out/walls_img out:=out/walls
        var img_map2d_sub = new ROSLIB.Topic({ ros: ros, name: '/out/walls/compressed', messageType: 'sensor_msgs/CompressedImage' });
        img_map2d_sub.subscribe(function (message) {
            document.getElementById('img_walls').src = "data:image/jpg;base64," + message.data;
        });
    }
}


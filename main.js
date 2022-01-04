function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(980, 150);

    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(300, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    background("#BCBBFF");
}

function modelLoaded() {
    console.log("Posenet is initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}
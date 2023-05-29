var text_1 = "This is developed by The developer VIDIT KESHARI";
var text_2 = "This is developed by The developer VIDIT KESHARI and this app name is FONT MANIPULATOR, you can have fun in controlling text";

leftWristX = 0;
rightWristX = 0;
difference = 0;

function developer() {
    window.alert(text_1);
}

function app() {
    window.alert(text_2);
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(520, 400);
    canvas.position(560, 130);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background(0, 7, 30);
    textSize(difference);
    fill('#000066');
    text('Vidit', 150, 200)
    document.getElementById("size").innerHTML = "size of the text is " + difference +"px";
}

function modalLoaded() {
    console.log("poseNet modal is initialized succesfully");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX) - 30;

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}
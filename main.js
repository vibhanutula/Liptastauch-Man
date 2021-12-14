NoseX = 0;
NoseY = 0;

NoseyXX = 0;
NoseyYY = 0;

function preload() {
    LipImg = loadImage("https://i.postimg.cc/sfNNf6pP/Lipppppy.png");
    MouseImg = loadImage("https://i.postimg.cc/qMW9JkPx/mousetach.png")
    //https://i.postimg.cc/sfNNf6pP/Lipppppy.png

    //https://i.postimg.cc/qMW9JkPx/mousetach.png
}

function take_snapshot(){
    save("MyLiptastauchPic.png");
}

function setup() {
    canvas = createCanvas(500, 350);
    canvas.position(500, 230);
    video = createCapture(VIDEO);
    video.size(500, 350);
    video.hide();

    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initalized!');
}

function gotPoses(results) {
    if (results.length > 0){  
        console.log(results);
        NoseX = results[0].pose.nose.x-40;
        NoseY = results[0].pose.nose.y+25;
        console.log("nose X = " + NoseX);
        console.log("nose y = " + NoseY);

        console.log(results);
        NoseyXX = results[0].pose.nose.x-40;
        NoseyYY = results[0].pose.nose.y+5;
        console.log("nose X = " + NoseX);
        console.log("nose y = " + NoseY);
    }
}

function draw() {
    image(video, 0, 0, 500, 350);
    //fill(0, 255, 0);
    //stroke(0, 0, 255);
    //circle(NoseX, NoseY, 30);
    
    image(LipImg, NoseX, NoseY, 90, 30);
    image(MouseImg, NoseyXX, NoseyYY, 90, 30);
}

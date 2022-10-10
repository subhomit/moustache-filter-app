moustacheX=0
moustacheY=0
function preload(){
      moustache = loadImage("https://i.postimg.cc/JhVS0X1V/moustache-PNG18.png")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses)

}
function draw(){
    image(video, 0,0,300,300);
    image(moustache, moustache+13, moustacheY+13, 60, 30)

}
function take_snapshot(){
    save('FilterImg.png');
}
function modelLoaded(){
    console.log("Model is Initialised");
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        console.log("Moustache X =" + result[0].pose.nose.x);
        console.log("Moustache Y =" + result[0].pose.nose.y);
        moustacheX=result[0].pose.nose.x;
        moustacheY=result[0].pose.nose.y;
    }
}
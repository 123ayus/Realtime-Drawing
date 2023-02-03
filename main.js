function setup(){
    canvas = createCanvas(550,550);
canvas.position(560,150);
  video=createCapture(VIDEO);
  video.size(550,500);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes);
}
function modelLoaded(){
    console.log('model is initialised');
}  
function draw(){
    background("white");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }
}


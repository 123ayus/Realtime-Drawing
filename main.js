noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
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
fill('#FAFFAA');
stroke('blue');
square(noseX ,noseY, difference);
document.getElementById("square_side").innerHTML="width and height oof the square will be " + difference + "px";
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log('noseX = '+noseX + 'noseY = '+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log('leftWristX = '+ leftWristX + 'rightWristX = '+ rightWristX);
   difference=floor(leftWristX-rightWristX);
   
    }
}


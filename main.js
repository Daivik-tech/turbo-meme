noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
function setup()
{
video=createCapture(VIDEO);
video.size(550,550);
canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);  
poseNet.on('pose',gotposes);  
}
function draw()
{
document.getElementById('square_side').innerHTML='Width and Height of square will be ='+difference+"px";    
background('#40e0d0');
fill('#F90093');
stroke('#F90093');
square(noseX,noseY,difference); 
}
function modelLoaded()
{
console.log('PoseNet Is Initialized');    
}
function gotposes(results)
{
if(results.length>0)
{
console.log(results);
noseX=results[0].pose.nose.X;
noseY=results[0].pose.nose.Y;
console.log("noseX="+noseX+"noseY="+noseY); 
leftWristX=results[0].pose.leftWrist.X; 
rightWristX=results[0].pose.rightWrist.X;
diference=floor(leftWristX-rightWristX);
console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference); 
}    
}
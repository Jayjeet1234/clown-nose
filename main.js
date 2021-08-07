nosex=0;
nosey=0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
x=ml5.poseNet(video,modelloaded);
x.on('pose',gotposes);
}
function modelloaded(){
console.log("posenetisinitialised");
}
function gotposes(result){
if(result.length>0){
console.log(result);
nosex=result[0].pose.nose.x-15;
nosey=result[0].pose.nose.y-15;
}
}
function snapshot(){
save('play.png');
}
function draw(){
image(video,0,0,300,300)
image(clown_nose,nosex,nosey,30,30);
}
moosic=""
moosic2=""
leftWristX=""
leftWristY=""
rightWristX=""
rightWristY=""
Scoreleft=""
function setup(){
    canvas=createCanvas(400,300)
    canvas.center();
    video=createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}
function preload(){
    moosic=loadSound("Darkside.mp3")
    moosic2=loadSound("Elektronomia.mp3")
}
if(leftWristX != "0"){
song.play(moosic2,moosic)
}
function draw(){
    image(video,0,0,400,300)
    fill("red")
    stroke("red")
    circle(leftWristX,leftWristY,5)
    circle(leftWristX,leftWristY,20)
    number_left_wristy=Number(leftWristY);
    removedecimals=floor(number_left_wristy)
    volumevalue=removedecimals/500
    document.getElementById("volume").innerHTML="volume="+volumevalue;
      song.setVolume(volumevalue)
    fill("red")
    stroke("red")
    circle(rightWristX,rightWristY,20)
    

    
}
function modelLoaded(){
    console.log("model are is loaded")
}
function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  leftWristX = results[0].pose.keypoints[9].score;
	  leftWristY = results[0].pose.keypoints[9].score;
	  console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

	  rightWristX = results[0].pose.keypoints[9].score;
	  rightWristY = results[0].pose.keypoints[9].score;
	  console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	}
  } 
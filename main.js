img="";
 status="";
    objects=[];
function preload(){
   img=loadImage("a-busy-street-scene-in-manhattan-new-york-city-usa-looking-south-along-E9TYMX.jpg");
   
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    detector=ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}
function ModelLoaded(){
    console.log("Model Loaded!!");
    status=true;
    detector.detect(img,GotResult);
}
function GotResult(error,result){
    if (error){
        console.log(error);
    }
    else {
        console.log(result);
        objects=result;
    }
}



function draw(){
   image(img,0,0,640,420);
  
    if (status!=""){
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Status: Objects detected";
    fill("#ff0000");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
      noFill();
        stroke("#ff0000");
        rect(objects[i].x,objects[i].y-150,objects[i].width,objects[i].height);
    }    
    }
}
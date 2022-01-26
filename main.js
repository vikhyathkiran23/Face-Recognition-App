Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("Webcam_Live_View")
Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function (photo){
        document.getElementById("Webcam_Captured-Photo").innerHTML="<img src='" + photo +"' id='Captured_Image'>"        
    })
}

function Check(){
    img= document.getElementById("Captured_Image");
    classifier.classify(img, gotResults);  
}
console.log(ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nlr5LyLAL/model.json', modelLoaded);
function modelLoaded (){
    console.log("modelLoaded")
}

function Check(){    
    Img=document.getElementById("Captured_Image");
    classifier.classify(Img, gotResults);
    console.log("check");
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }    
    else {
        console.log(results)
        document.getElementById("Result_Member").innerHTML=results[0].label;
        document.getElementById("Result_Accuracy").innerHTML=results[0].confidence;

    }
}
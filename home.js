let classifier;
let video;
function setup(){
    createCanvas(480,480)
    video = createCapture(VIDEO)
    video.hide()
    background(0)
    classifier = ml5.imageClassifier('MobileNet',video,ReadyModel)}
    
function ReadyModel(){      
      
      classifier.predict((error,result)=>{
        if(error){
              console.log(error)
              }
              else{
                write = document.getElementById('output')
                write.innerHTML = 'MODEL PREDICTS <b>'+ result[0].label.toUpperCase() + '</b> WITH CONFIDENCE OF <b>' + result[0].confidence + '</b>'
                ReadyModel()
              }
          })}     
  
function draw(){
image(video,0,0)

}
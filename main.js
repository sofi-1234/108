https://teachablemachine.withgoogle.com/models/3IUUnufqL/
function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3IUUnufqL/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error) {
        console.error(error);
    }  else{
        console.log(results);
        random_number_r = math.floor(Math.random() * 225) + 1;
        random_number_g = math.floor(Math.random() * 225) + 1;
        random_number_b = math.floor(Math.random() * 225) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
         document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %"; 
         document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
         document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
         
        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img3 = document.getElementById('alien3');
        img4 = document.getElementById('alien4');
        
        if(results[0].label == "Clap") (
            img.src = 'aleins-01.gif';
            img.src = 'aleins-02.png';
            img.src = 'aleins-03.png';
            img.src = 'aleins-04.png';
        )
        
        if(results[0].label == "Bell") (
            img.src = 'aleins-01.png';
            img.src = 'aleins-02.gif';
            img.src = 'aleins-03.png';
            img.src = 'aleins-04.png';
        )

        if(results[0].label == "Snapping") (
            img.src = 'aleins-01.png';
            img.src = 'aleins-02.png';
            img.src = 'aleins-03.gif';
            img.src = 'aleins-04.png';
        )
         
    }
}
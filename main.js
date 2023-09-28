function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WVN0JOUxy/', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}
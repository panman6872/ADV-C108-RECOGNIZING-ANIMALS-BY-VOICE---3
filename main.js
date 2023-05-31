function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ISKPCiyXB/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResultes);
}

function gotResultes(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].cofidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + random_number_g + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + random_number_g + random_number_b + ")";
    
    img = document.getElementById('cat');
    img2 = document.getElementById('dog');
    img3 = document.getElementById('cow');
    img4 = document.getElementById('lion');
    img5 = document.getElementById('back')
    
if (results[0].label == "meowing"){
    img.src = 'cat.gif';
    img2.src = 'dog.png';
    img3.src = 'cow.png';
    img4.src = 'lion.png';
    img5.scr = 'background.png'
}
else if (results[0].label == "barking"){
    img.src = 'cat.png';
    img2.src = 'dog (2).gif';
    img3.src = 'cow.png';
    img4.src = 'lion.png';
    img5.scr = 'background.png'
}
else if (results[0].label == "mooing"){
    img.src = 'cat.png';
    img2.src = 'dog.png';
    img3.src = 'cow.gif';
    img4.src = 'lion.png';
    img5.scr = 'background.png'
}
else if (results[0].label == "roar"){
    img.src = 'cat.png';
    img2.src = 'dog.png';
    img3.src = 'cow.png';
    img4.src = 'lion.gif';
    img5.scr = 'background.png'
}

else if (results[0].label == "Background Noise"){
    img.src = 'cat.png';
    img2.src = 'dog.png';
    img3.src = 'cow.png';
    img4.src = 'lion.png';
    img5.scr = 'background.gif'
}

}
}

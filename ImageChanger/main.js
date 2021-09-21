let myImage = document.querySelector('img');
myImage.style.height = '50%';
myImage.style.width = '50%';
myImage.style.cursor = 'pointer';

    myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'tech.png') {
        myImage.setAttribute('src', 'comfort.png');
    }
    else {
        myImage.setAttribute('src', 'tech.png');
    }
}
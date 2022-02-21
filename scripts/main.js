let myImg = document.querySelector('img');

myImg.onclick = function () {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === './img/asuna.png') {
        myImg.setAttribute('src', './img/yae.png');
    }
    else {
        myImg.setAttribute('src', './img/asuna.png');
    }
    
}

// web storage分为sessionStorage和localStorage
//大小均有限，前者在该网页关闭时消失，后者不会消失
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    sessionStorage.setItem('name', myName);
    myHeading.textContent = 'Hello，' + myName+'!';
}
if(!sessionStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = sessionStorage.getItem('name');
    myHeading.textContent = 'Hello，' + storedName +'!';
}
myButton.onclick = function() {
    setUserName();
}
 
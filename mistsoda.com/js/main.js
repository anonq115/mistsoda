
const myButton = document.querySelectorAll('.clipboard-icon');
myButton.forEach(ree =>
    ree.addEventListener('click', copyElementText));

function copyElementText(event) {
    var text = event.currentTarget.querySelector('.snippetcode').innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
   

    console.log('clicked');


}





/*----------------------------*/ 
const mainLinks = document.querySelector(".outernavlinks");
x = document.getElementsByClassName('menu-icon');
x[0].addEventListener('click', function () {

	toggleList(); // triggers menu list
	toggleX(); //triggers burger animation
});


function toggleList() {

	mainLinks.classList.toggle('active');
	console.log("testtetet");
}

function toggleX() {
	x[0].classList.toggle('hover');
}


//

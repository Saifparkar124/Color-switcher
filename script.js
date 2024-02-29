const body = document.querySelector('body');
document.querySelectorAll('.button').forEach(function (button) {
    button.addEventListener('click', function (e) {
        body.style.backgroundColor = e.target.id;
        if (e.target.id == "black" || e.target.id == "blue") {
            body.style.color = "white";
        } else {
            body.style.color = "black";
        }
    })   
})
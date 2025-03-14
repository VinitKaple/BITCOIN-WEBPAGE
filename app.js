let ul= document.getElementsByTagName("ul")[0];
let btn = document.getElementsByClassName('fa-solid')[0];
btn.addEventListener("click", function() {
    ul.classList.toggle('active');
})
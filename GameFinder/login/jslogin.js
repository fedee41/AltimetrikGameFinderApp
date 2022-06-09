const slider = document.querySelector("#slides");
let sliderSelection = document.querySelectorAll(".slide");
let sliderSelectionLast = sliderSelection[sliderSelection.length -1];
const btnLeft = document.querySelector("#btn-le");
const btnRight = document.querySelector("#btn-ri");

slider.insertAdjacentElement('afterbegin', sliderSelectionLast);

function Nextbtn(){
    let sliderSelectionFirst = document.querySelectorAll(".slide")[0];
    slider.getElementsByClassName.marginLeft = "-200%";
    slider.getElementsByClassName.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend' , sliderSelectionFirst);
        slider.style.marginLeft = "-100%";
    },500);
}

btnRight.addEventListener('click', function(){
    Nextbtn();
});
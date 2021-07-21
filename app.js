// card1 = document.querySelector(".card-type-1");
// card2 = document.querySelector(".card-type-2");
// card3 = document.querySelector(".card-type-3");
// card4 = document.querySelector(".card-type-4");
// container_element = document.querySelector(".container");
// card1.addEventListener('mouseover', function(){ console.log("reached"); container_element.style.backgroundImage = 'url("playlistcpver.jpg")';});
// // card2.addEventListener('mouseover', function(){ alert("works!")});
// // card3.addEventListener('mouseover', function(){ alert("works!")});
// // card4.addEventListener('mouseover', function(){ alert("works!")});

original_gradient = 'linear-gradient(180deg, #200a60, #121212)';
lg1 = 'linear-gradient(180deg, #200a60, #121212)'
lg2 = 'linear-gradient(180deg, #05b0ce, #121212)'
lg3 = 'linear-gradient(180deg, #b12e5c, #121212)'
lg4 = 'linear-gradient(180deg, #723e46, #121212)'

$(document).ready(()=>{
    $('.card-type-1').on('mouseenter', ()=>{
        console.log("hit");
        $('.container').css('background', lg1);
    });
    $('.card-type-1').on('mouseleave', ()=>{
        console.log("hit");
        $('.container').css('background', original_gradient);
    });
    $('.card-type-2').on('mouseenter', ()=>{
        console.log("hit");
        $('.container').css('background', lg2);
    });
    $('.card-type-2').on('mouseleave', ()=>{
        console.log("hit");
        $('.container').css('background', original_gradient);
    });
    $('.card-type-3').on('mouseenter', ()=>{
        console.log("hit");
        $('.container').css('background', lg3);
    });
    $('.card-type-3').on('mouseleave', ()=>{
        console.log("hit");
        $('.container').css('background', original_gradient);
    });
    $('.card-type-4').on('mouseenter', ()=>{
        console.log("hit");
        $('.container').css('background', lg4);
    });
    $('.card-type-4').on('mouseleave', ()=>{
        console.log("hit");
        $('.container').css('background', original_gradient);
    });
});
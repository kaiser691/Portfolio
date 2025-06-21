let wheel = 0;
function gcash(){
  const container = document.querySelector(".qrContainer");
  container.style.display = "block";
}
function closeGcash(){
  const container = document.querySelector(".qrContainer");
  container.style.display = "none"; 
}
function ferrisWheel(){
  wheel++;
  const fer = document.querySelector(".wheel");
  const cab = document.querySelector(".cabin");
  const cab2 = document.querySelector(".cabin:nth-of-type(2)");
  const cab3 = document.querySelector(".cabin:nth-of-type(3)");
  if(wheel % 2 === 0){
    fer.style.animation = "none";
    cab.style.animation = "none";
    cab2.style.animation = "none";
    cab3.style.animation = "none";
    wheel = 0;
  }else{
    fer.style.animation = "ferris-wheel 5s infinite linear";
    cab.style.animation = "cabin-rotate 5s infinite linear";
    cab2.style.animation = "cabin-rotate 5s infinite linear";
    cab3.style.animation = "cabin-rotate 5s infinite linear";
  }
}
function paypal(){
   window.open('https://www.paypal.com/paypalme/KaiserAcosta', '_blank');
}
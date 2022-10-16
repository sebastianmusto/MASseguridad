
// MENU DESPLEGABLE
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});


//CARROUSEL
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  } 
 
// automatic carousel 
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 5000); // Change image every 5 seconds
// } 
function validarEnviar(){
  if(document.fvalida.nombre.value.length ==0){
    alert("Por favor escriba su nombre")
    document.fvalida.nombre.focus()
    return 0;
  }
  if(document.fvalida.apellido.value.length ==0){
    alert("Por favor escriba su apellido")
    document.fvalida.apellido.focus()
    return 0;
  }
  if(document.fvalida.email.value.length ==0){
    alert("Por favor escriba su correo")
    document.fvalida.email.focus()
    return 0;
  }
  if(document.fvalida.telefono.value.length ==0){
    alert("Por favor escriba un telefono")
    document.fvalida.telefono.focus()
    return 0;
  }
  if(document.fvalida.nombre.value.length ==0){
    alert("Por favor escriba un nombre")
    document.fvalida.nombre.focus()
    return 0;
  }
  if(document.fvalida.mensaje.value.length ==0){
    alert("Por favor dejanos tu mensaje")
    document.fvalida.mensaje.focus()
    return 0;
  }
  alert("Muchas gracias por contactarte con nosotros.Te responderemos a la brevedad")
  document.fvalida.submit()
}
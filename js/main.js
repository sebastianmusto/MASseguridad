//HEADER

document.getElementById("idheader").innerHTML = `
<nav class="navegacion-principal">
<div class="logo">
    <a href="index.html"><p><i class="fa-solid fa-unlock-keyhole"></i> <span>MÁS</span> seguridad</p></a>
</div>

<ul class="enlaces-menu">
    <li><a href="preguntasFrecuentes.html">Preguntas Frecuentes</a></li>
    <li><a href="consejos.html">Consejos</a></li>
    <li><a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
    <li><a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a></li>
    <li><a href="https://www.youtube.com" target="_blank"><i class="fab fa-youtube"></i></a></li>
    <li><a href="/Contacto.html" class="boton-principal">Contactanos!</a></li>
</ul>

<button class="ham" type="button">   
    <span class="br-1"></span>
    <span class="br-2"></span>
    <span class="br-3"></span>
</button>                       
</nav>
`

//FOOTER  > idfooter

document.getElementById("idfooter").innerHTML = `
<div class="pie-pagina">
    <div class="grupo-1">
        <div class="box">
            <div class="logo">
            <a href="index.html"><p><i class="fa-solid fa-unlock-keyhole"></i> <span>MÁS</span> seguridad</p></a>
            </div>
        </div>
        <div class="box">
            <h2>Sobre nosotros</h2>
            <p>Somos un grupo de estudiantes del programa codo a codo, que desarrollaron esta pagina para concientizar sobre ciberseguridad.</p>
            
        </div>
        <div class="box">
            <h2>Seguinos</h2>
            <div class="red-social">
                <a href="https://www.facebook.com" class="fa fa-facebook" aria-hidden="true"></a>
                <a href="https://www.instagram.com" class="fa fa-instagram" aria-hidden="true"></a>
                <a href="https://www.twitter.com" class="fa fa-twitter" aria-hidden="true"></a>
                <a href="https://www.youtube.com" class="fa fa-youtube" aria-hidden="true"></a>
            </div>
        </div>
    </div>
    <div class="grupo-2">
        <small>© 2022 <b>Mas seguridad </b>Todos los Derechos Reservados.</small>
    </div>
</div>

`

// MENU DESPLEGABLE
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
  enlaces.classList.toggle('activado');
  barras.forEach(child => { child.classList.toggle('animado') });
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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Validación de Formulario

function validarEnviar() {
  if (document.fvalida.nombre.value.length == 0) {
    alert("Por favor escriba su nombre")
    document.fvalida.nombre.focus()
    return 0;
  }
  if (document.fvalida.apellido.value.length == 0) {
    alert("Por favor escriba su apellido")
    document.fvalida.apellido.focus()
    return 0;
  }
  if (document.fvalida.email.value.length == 0) {
    alert("Por favor escriba su correo")
    document.fvalida.email.focus()
    return 0;
  }
  if (document.fvalida.telefono.value.length == 0) {
    alert("Por favor escriba un telefono")
    document.fvalida.telefono.focus()
    return 0;
  }
  if (document.fvalida.nombre.value.length == 0) {
    alert("Por favor escriba un nombre")
    document.fvalida.nombre.focus()
    return 0;
  }
  if (document.fvalida.mensaje.value.length == 0) {
    alert("Por favor dejanos tu mensaje")
    document.fvalida.mensaje.focus()
    return 0;
  }
  alert("Muchas gracias por contactarte con nosotros.Te responderemos a la brevedad")
  document.fvalida.submit()
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
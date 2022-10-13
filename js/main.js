//HEADER

document.getElementById("idheader").innerHTML = `
<nav class="navegacion-principal">
<div class="logo">
    <a href="index.html"><p><i class="fa-solid fa-unlock-keyhole"></i> <span>MÁS</span> seguridad</p></a>
</div>

<ul class="enlaces-menu">
    <li><a href="./index.html">Home</a></li>
    <li><a href="./QueHacer.html">Preguntas Frecuentes</a></li>
    <li><a href="./consejos.html">Consejos</a></li>
    <li><a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
    <li><a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a></li>
    <li><a href="https://www.youtube.com" target="_blank"><i class="fab fa-youtube"></i></a></li>
    <li><a class="boton-principal href="./FormularioCAC.html">Contactanos!</a></li>
</ul>

<button class="ham" type="button">   
    <span class="br-1"></span>
    <span class="br-2"></span>
    <span class="br-3"></span>
</button>                       
</nav>
`
//FOOTER 1 > idfooter

document.getElementById("idfooter").innerHTML = `
<div class="contenidofooter">
<div class="footer-informacion">
    <h3>Sobre <span>MÁS</span>seguridad</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, illum.</p>
</div>

<div class="menu">
    <h3>Redes <br> <span>Sociales</span></h3>
    <nav class="redes-sociales">
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
    </nav>
</div>
<!-- menu -->
</div>
<p class="copyright"><span>MÁS</span>seguridad2022 | by <a href="">CaC2022</a></p>
`

//FOOTER 2 > idfooter2

document.getElementById("idfooter2").innerHTML = `
<div class="grupo-1">
<div class="box">
    <figure>
        <a href="#">
            <img src="logo.JPG" alt="Logo AntiHacking">
        </a>
    </figure>
</div>
<div class="box">
    <h2>Sobre nosotros</h2>
    <p>Somos un grupo de estudiantes del programa codo a codo, que desarrollaron esta pagina para
        concientizar sobre cyberseguridad.</p>

</div>
<div class="box">
    <h2>Seguinos</h2>
    <div class="red-social">
        <a href="#" class="fa fa-facebook" aria-hidden="true"></a>
        <a href="#" class="fa fa-instagram" aria-hidden="true"></a>
        <a href="#" class="fa fa-twitter" aria-hidden="true"></a>
        <a href="#" class="fa fa-youtube" aria-hidden="true"></a>
    </div>
</div>
</div>
<div class="grupo-2">
<small>© 2022 <b>Mas seguridad </b>Todos los Derechos Reservados.</small>
</div>
`

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
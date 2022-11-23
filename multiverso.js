new fullpage('#fullpage',  {
    fitToSection: true,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    css3: true,
    easingcss3: 'ease-out',

    //Barra de Navegación 
    menu: '#menu',
    navigationTooltips: ['inicio', 'sobre', 'ejemplos', 'guia', 'servicios'],
    showActiveTooltip: false,
    anchors: ['inicio', 'sobre', 'ejemplos', 'guia', 'servicios'],

    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelectorAll('div h1');
        const indicador = document.getElementById('indicador');
        const text = section.querySelectorAll('div h3');
        const portada = document.getElementById('portada')
        const prompt = document.querySelector('.prompt');
        

        const imagenesEinstein = document.getElementById('imgEinstein');

          
        const tl = new TimelineMax({delay: 0.2});
        const t2 = new TimelineMax({delay: 0.5});
        const t3 = new TimelineMax({delay: 0.5});
        const t4 = new TimelineMax({delay: 0.5});
        const t5 = new TimelineMax({delay: 0.5});

        t4.fromTo(title, 0.5, { y: "100", opacity: 0}, { y: 0, opacity: 1});
        t2.fromTo(text, 0.5, { y: "50", opacity: 0}, { y: 0, opacity: 1});

        

        if(destination.index === 0) {
          t5.fromTo(portada, 2, { opacity: 0}, {opacity: 1});


          
        }
        
        if(destination.index === 1) {
            t5.fromTo(prompt, 0.5, {x: "-100", opacity: 0}, {x: 0, opacity: 1});
            t5.fromTo(imagenesEinstein, 0.5, {x: "100", opacity: 0}, {x: 0, opacity: 1});
            const arrow1 = document.querySelector('.arrow');
            const arrow2 = document.querySelector('.arrow2');

            t5.fromTo(arrow1, 0.5, {y: "-100", opacity: 0}, {y: 0, opacity: 1})
            t5.fromTo(arrow2, 0.5, {x: "-100", opacity: 0}, {x: 0, opacity: 1})
        }

        if(destination.index === 2) {
          const a1 = document.getElementById('a1');
          const a2 = document.getElementById('a2');
          const a3 = document.getElementById('a3');
          const a4 = document.getElementById('a4');
          const a5 = document.getElementById('a5');
          const a6 = document.getElementById('a6');
          const a7 = document.getElementById('a7');
          const a8 = document.getElementById('a8');
          const a9 = document.getElementById('a9');
          const a10 = document.getElementById('a10');
          const a11 = document.getElementById('a11');
          const a12 = document.getElementById('a12');
          

          

          t3.fromTo(a1, 0.1, { y: "-50", opacity: 0}, {y: 0, opacity: 1});

          t3.fromTo(a2, 0.1, { y: "-50", opacity: 0}, {y: 0, opacity: 1});

          t3.fromTo(a3, 0.1, { y: "-50", opacity: 0}, {y: 0, opacity: 1});

          t3.fromTo(a4, 0.1, { y: "-50", opacity: 0}, {y: 0, opacity: 1});

          t3.fromTo(a5, 0.1, { y: "-50", opacity: 0}, {y: 0, opacity: 1});

          t3.fromTo(a6, 0.1, { y: "-50", opacity: 0}, {y: 0, opacity: 1});

          t3.fromTo(a12, 0.1, { y: "50", opacity: 0}, {y: 0, opacity: 1});

          t3.fromTo(a11, 0.1, { y: "50", opacity: 0}, {y: 0, opacity: 1});

          t3.fromTo(a10, 0.1, { y: "50", opacity: 0}, {y: 0, opacity: 1});

          t3.fromTo(a9, 0.1, { y: "50", opacity: 0}, {y: 0, opacity: 1});

          t3.fromTo(a8, 0.1, { y: "50", opacity: 0}, {y: 0, opacity: 1});

          t3.fromTo(a7, 0.1, { y: "50", opacity: 0}, {y: 0, opacity: 1});

          };
    }
   
});




/* Movimiento imagenes con el mouse */



document.addEventListener('mousemove', move);
function move(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 350;
    const y = (window.innerHeight - e.pageY * speed) / 300;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    layer.style.transition = '0';
    
  })

  
};


/* btn navegador */

const btn = document.querySelector('.nav2');

let menuOpen = false;
btn.addEventListener('click', () => {
if(!menuOpen) {
    
  btn.classList.add('open');
  menuOpen = true;


    
  const menu = document.querySelector('.menu');
  menu.classList.add('active');

  const nav = document.querySelector('.nav');
  nav.classList.add('navActive');



} else {
  btn.classList.remove('open');
  menuOpen = false;

  const menu = document.querySelector('.menu');
  menu.classList.remove('active');

  const nav = document.querySelector('.nav');
  nav.classList.remove('navActive');

}
});

/* Desactivar movimiento imagenes */

/* addEventListener('resize', () => {
  if (innerWidth > 450) {
    const portada = document.getElementById('portada')
    portada.classList.toggle('move');
  } else {
    
  }
}) */ // el problema de este metodo es que tiene que haber un resize o no carga.

const resize = () => {
  if (innerWidth < 450) {
    const portada = document.getElementById('portada');
    portada.classList.remove('move');

    const img1 = document.querySelector('.i1');
    img1.classList.remove('move');

    const img2 = document.querySelector('.i2');
    img2.classList.remove('move');

    const img3 = document.querySelector('.i3');
    img3.classList.remove('move');

    const img4 = document.querySelector('.i4');
    img4.classList.remove('move');

    const img5 = document.querySelector('.i5');
    img5.classList.remove('move');

    const img6 = document.querySelector('.ejemplos');
    img6.classList.remove('move');


  } else {
    const portada = document.getElementById('portada');
    portada.classList.add('move');


    const img1 = document.querySelector('.i1');
    img1.classList.add('move');

    const img2 = document.querySelector('.i2');
    img2.classList.add('move');

    const img3 = document.querySelector('.i3');
    img3.classList.add('move');

    const img4 = document.querySelector('.i4');
    img4.classList.add('move');

    const img5 = document.querySelector('.i5');
    img5.classList.add('move');

    const img6 = document.querySelector('.ejemplos');
    img6.classList.add('move');

    
  }
}


addEventListener('resize', resize);

addEventListener('DOMContentLoaded', resize);